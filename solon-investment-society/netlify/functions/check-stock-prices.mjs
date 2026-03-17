const DEFAULT_SYMBOLS = ["AAPL", "MSFT", "GOOGL", "AMZN", "META"];
const DEFAULT_MAX_DRIFT_PERCENT = 2;
const DEFAULT_MAX_AGE_HOURS = 12;
const REQUEST_TIMEOUT_MS = 10000;

const REQUEST_HEADERS = {
  accept: "application/json, text/plain, */*",
  "accept-language": "en-US,en;q=0.9",
  origin: "https://www.nasdaq.com",
  referer: "https://www.nasdaq.com/",
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
};

function parseNumericValue(value) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : null;
  }

  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.replace(/,/g, "").trim();
  const match = normalized.match(/[+-]?\d*\.?\d+/);

  return match ? Number(match[0]) : null;
}

function round(value, digits = 4) {
  return Number(value.toFixed(digits));
}

function getNumberEnv(name, fallback) {
  const raw = process.env[name];

  if (!raw) {
    return fallback;
  }

  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function getSymbols() {
  const raw = process.env.STOCK_CHECK_SYMBOLS;

  if (!raw) {
    return DEFAULT_SYMBOLS;
  }

  const symbols = raw
    .split(",")
    .map((symbol) => symbol.trim().toUpperCase())
    .filter(Boolean);

  return symbols.length > 0 ? symbols : DEFAULT_SYMBOLS;
}

function getSiteUrl() {
  const raw =
    process.env.STOCK_CHECK_SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_URL ||
    process.env.DEPLOY_PRIME_URL;

  return raw ? raw.replace(/\/$/, "") : null;
}

async function fetchJson(url, init = {}) {
  const response = await fetch(url, {
    ...init,
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${url}`);
  }

  return response.json();
}

async function fetchSiteTicker(siteUrl) {
  const payload = await fetchJson(`${siteUrl}/api/tickers`, {
    headers: {
      accept: "application/json",
    },
  });

  if (!Array.isArray(payload?.data)) {
    throw new Error("Ticker endpoint returned an unexpected payload");
  }

  return payload;
}

async function fetchReferenceQuote(symbol) {
  const payload = await fetchJson(
    `https://api.nasdaq.com/api/quote/${symbol}/info?assetclass=stocks`,
    {
      headers: REQUEST_HEADERS,
    },
  );

  const quote = payload?.data ?? payload?.body;
  const primaryData = quote?.primaryData;
  const price = parseNumericValue(primaryData?.lastSalePrice);
  const changePercent = parseNumericValue(primaryData?.percentageChange);

  if (price === null || changePercent === null) {
    throw new Error(`Reference quote for ${symbol} was incomplete`);
  }

  return {
    symbol,
    name: quote?.companyName ?? symbol,
    price,
    changePercent,
    lastTradeTimestamp: primaryData?.lastTradeTimestamp ?? null,
  };
}

function compareQuote(siteQuote, referenceQuote, maxDriftPercent) {
  if (!siteQuote) {
    return {
      symbol: referenceQuote.symbol,
      status: "missing",
      reason: "Missing from /api/tickers response",
      sitePrice: null,
      referencePrice: round(referenceQuote.price, 2),
      priceDriftPercent: null,
    };
  }

  const priceDriftPercent =
    referenceQuote.price === 0
      ? null
      : (Math.abs(siteQuote.price - referenceQuote.price) /
          referenceQuote.price) *
        100;

  const changePercentDrift = Math.abs(
    siteQuote.changePercent - referenceQuote.changePercent,
  );

  const driftExceeded =
    priceDriftPercent !== null && priceDriftPercent > maxDriftPercent;

  return {
    symbol: referenceQuote.symbol,
    status: driftExceeded ? "drift" : "ok",
    sitePrice: round(siteQuote.price, 2),
    referencePrice: round(referenceQuote.price, 2),
    siteChangePercent: round(siteQuote.changePercent, 2),
    referenceChangePercent: round(referenceQuote.changePercent, 2),
    priceDriftPercent:
      priceDriftPercent === null ? null : round(priceDriftPercent, 3),
    changePercentDrift: round(changePercentDrift, 3),
    referenceTimestamp: referenceQuote.lastTradeTimestamp,
  };
}

async function sendWebhook(summary) {
  const webhookUrl = process.env.STOCK_CHECK_WEBHOOK_URL;

  if (!webhookUrl) {
    return;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(summary),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Webhook request failed (${response.status})`);
  }
}

export default async (req) => {
  let nextRun = null;

  try {
    const body = await req.json();
    nextRun = body?.next_run ?? null;
  } catch {
    // URL-based local invocations may not have a JSON body.
  }

  const checkedAt = new Date().toISOString();
  const siteUrl = getSiteUrl();
  const symbols = getSymbols();
  const maxDriftPercent = getNumberEnv(
    "STOCK_CHECK_MAX_DRIFT_PCT",
    DEFAULT_MAX_DRIFT_PERCENT,
  );
  const maxAgeHours = getNumberEnv(
    "STOCK_CHECK_MAX_AGE_HOURS",
    DEFAULT_MAX_AGE_HOURS,
  );

  if (!siteUrl) {
    const summary = {
      status: "error",
      checkedAt,
      nextRun,
      message:
        "Missing site URL. Set STOCK_CHECK_SITE_URL or rely on Netlify URL env vars.",
    };

    console.error(JSON.stringify(summary, null, 2));
    return new Response(null, { status: 500 });
  }

  try {
    const siteTicker = await fetchSiteTicker(siteUrl);
    const siteQuotes = new Map(
      siteTicker.data.map((quote) => [quote.symbol, quote]),
    );

    const referenceQuotes = await Promise.all(
      symbols.map((symbol) => fetchReferenceQuote(symbol)),
    );

    const results = referenceQuotes.map((referenceQuote) =>
      compareQuote(
        siteQuotes.get(referenceQuote.symbol),
        referenceQuote,
        maxDriftPercent,
      ),
    );

    const failures = results.filter((result) => result.status !== "ok");
    const asOfMs = siteTicker.asOf ? Date.parse(siteTicker.asOf) : NaN;
    const asOfAgeHours = Number.isFinite(asOfMs)
      ? round((Date.now() - asOfMs) / (1000 * 60 * 60), 3)
      : null;
    const isStale = asOfAgeHours !== null && asOfAgeHours > maxAgeHours;

    const summary = {
      status: failures.length > 0 || isStale ? "warn" : "ok",
      checkedAt,
      nextRun,
      siteUrl,
      thresholdPercent: maxDriftPercent,
      maxAgeHours,
      tickerAsOf: siteTicker.asOf ?? null,
      tickerAgeHours: asOfAgeHours,
      stale: isStale,
      results,
    };

    if (summary.status === "ok") {
      console.log(JSON.stringify(summary, null, 2));
      return new Response(null, { status: 200 });
    }

    console.error(JSON.stringify(summary, null, 2));
    await sendWebhook(summary);
    return new Response(null, { status: 500 });
  } catch (error) {
    const summary = {
      status: "error",
      checkedAt,
      nextRun,
      siteUrl,
      message: error instanceof Error ? error.message : "Unknown error",
    };

    console.error(JSON.stringify(summary, null, 2));

    try {
      await sendWebhook(summary);
    } catch (webhookError) {
      console.error(
        JSON.stringify(
          {
            status: "error",
            checkedAt,
            siteUrl,
            message:
              webhookError instanceof Error
                ? webhookError.message
                : "Webhook delivery failed",
          },
          null,
          2,
        ),
      );
    }

    return new Response(null, { status: 500 });
  }
};

export const config = {
  schedule: "@daily",
};
