"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Stock = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
};

const DEFAULT_STOCKS: Stock[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 175.34,
    change: 2.35,
    changePercent: 1.36,
  },
  {
    symbol: "MSFT",
    name: "Microsoft",
    price: 325.12,
    change: -1.23,
    changePercent: -0.38,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet",
    price: 142.56,
    change: 0.89,
    changePercent: 0.63,
  },
  {
    symbol: "AMZN",
    name: "Amazon",
    price: 178.75,
    change: 3.45,
    changePercent: 1.97,
  },
  {
    symbol: "META",
    name: "Meta",
    price: 310.98,
    change: -2.1,
    changePercent: -0.67,
  },
];

const LOCAL_STORAGE_KEY = "solon:ticker-cache-v1";
const MAX_CACHE_AGE_MS = 24 * 60 * 60 * 1000;
const REFRESH_INTERVAL_MS = 5 * 60 * 1000;

export default function StockTicker() {
  const [stocks, setStocks] = useState<Stock[]>(DEFAULT_STOCKS);
  const [loopCount, setLoopCount] = useState(4);
  const [tickerShift, setTickerShift] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;

    try {
      const raw =
        typeof window !== "undefined"
          ? localStorage.getItem(LOCAL_STORAGE_KEY)
          : null;
      if (raw) {
        const parsed = JSON.parse(raw) as { timestamp: number; data: Stock[] };
        if (
          parsed &&
          Array.isArray(parsed.data) &&
          Date.now() - parsed.timestamp < MAX_CACHE_AGE_MS
        ) {
          setStocks(parsed.data);
        }
      }
    } catch {
      /* ignore */
    }

    const fetchQuotes = async () => {
      try {
        const res = await fetch("/api/tickers", { cache: "no-store" });
        if (!res.ok) throw new Error("bad");
        const json = await res.json();
        const data = (json?.data ?? []) as Stock[];
        if (active && Array.isArray(data) && data.length > 0) {
          setStocks(data);
          try {
            localStorage.setItem(
              LOCAL_STORAGE_KEY,
              JSON.stringify({ timestamp: Date.now(), data }),
            );
          } catch {
            /* ignore */
          }
        }
      } catch {
        /* ignore */
      }
    };

    void fetchQuotes();
    const intervalId = window.setInterval(() => {
      void fetchQuotes();
    }, REFRESH_INTERVAL_MS);

    return () => {
      active = false;
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const group = groupRef.current;

    if (!container || !group) {
      return;
    }

    const measure = () => {
      const containerWidth = container.offsetWidth;
      const groupWidth = group.scrollWidth;

      if (!groupWidth) {
        return;
      }

      const nextLoopCount = Math.max(
        2,
        Math.ceil(containerWidth / groupWidth) + 2,
      );

      setTickerShift((current) =>
        current === groupWidth ? current : groupWidth,
      );
      setLoopCount((current) =>
        current === nextLoopCount ? current : nextLoopCount,
      );
    };

    measure();

    const observer = new ResizeObserver(() => {
      measure();
    });

    observer.observe(container);
    observer.observe(group);

    return () => {
      observer.disconnect();
    };
  }, [stocks]);

  const tickerStyle = {
    "--ticker-shift": `${tickerShift}px`,
  } as CSSProperties;

  const Item = ({ s }: { s: Stock }) => {
    const up = s.change >= 0;
    return (
      <span className="inline-flex items-center gap-1.5 mx-4 font-mono text-[11px] tracking-wide">
        <span className="font-bold text-foreground">{s.symbol}</span>
        <span className="text-muted-foreground">{s.price.toFixed(2)}</span>
        <span className={up ? "text-emerald-400" : "text-red-400"}>
          {up ? "+" : ""}
          {s.changePercent.toFixed(2)}%
        </span>
      </span>
    );
  };

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden border-b border-border bg-muted/50 py-1.5"
    >
      <div className="animate-ticker" style={tickerStyle}>
        {Array.from({ length: loopCount }).map((_, groupIndex) => (
          <div
            key={`group-${groupIndex}`}
            ref={groupIndex === 0 ? groupRef : undefined}
            className="ticker-group"
            aria-hidden={groupIndex > 0}
          >
            {stocks.map((s) => (
              <Item key={`${groupIndex}-${s.symbol}`} s={s} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
