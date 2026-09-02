# Solon Investment Society

The Solon Investment Society website, built with Next.js.

## Getting Started

Install dependencies and run the development server from this repository root:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open [http://localhost:3000](http://localhost:3000). The main page is at `src/app/page.tsx`.

## Netlify Stock Check

This site includes a scheduled Netlify function at `netlify/functions/check-stock-prices.mjs`.

It runs once per day with the `@daily` schedule and compares the live `/api/tickers` output against fresh Nasdaq quotes for the configured symbols. After deployment, open the Netlify `Functions` page, select `check-stock-prices`, and use `Run now` to test it or inspect logs.

Optional environment variables:

- `STOCK_CHECK_SITE_URL`
- `STOCK_CHECK_SYMBOLS`
- `STOCK_CHECK_MAX_DRIFT_PCT`
- `STOCK_CHECK_MAX_AGE_HOURS`
- `STOCK_CHECK_WEBHOOK_URL`
