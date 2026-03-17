'use client';

import { useEffect, useState } from 'react';

type Stock = {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
};

const DEFAULT_STOCKS: Stock[] = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 175.34, change: 2.35, changePercent: 1.36 },
  { symbol: 'MSFT', name: 'Microsoft', price: 325.12, change: -1.23, changePercent: -0.38 },
  { symbol: 'GOOGL', name: 'Alphabet', price: 142.56, change: 0.89, changePercent: 0.63 },
  { symbol: 'AMZN', name: 'Amazon', price: 178.75, change: 3.45, changePercent: 1.97 },
  { symbol: 'META', name: 'Meta', price: 310.98, change: -2.10, changePercent: -0.67 },
];

const LOCAL_STORAGE_KEY = 'solon:ticker-cache-v1';
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export default function StockTicker() {
  const [stocks, setStocks] = useState<Stock[]>(DEFAULT_STOCKS);

  useEffect(() => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem(LOCAL_STORAGE_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw) as { timestamp: number; data: Stock[] };
        if (parsed && Array.isArray(parsed.data) && Date.now() - parsed.timestamp < ONE_DAY_MS) {
          setStocks(parsed.data);
          return;
        }
      }
    } catch { /* ignore */ }

    const fetchQuotes = async () => {
      try {
        const res = await fetch('/api/tickers');
        if (!res.ok) throw new Error('bad');
        const json = await res.json();
        const data = (json?.data ?? []) as Stock[];
        if (Array.isArray(data) && data.length > 0) {
          setStocks(data);
          try { localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ timestamp: Date.now(), data })); } catch { /* ignore */ }
        }
      } catch { /* ignore */ }
    };
    fetchQuotes();
  }, []);

  const Item = ({ s }: { s: Stock }) => {
    const up = s.change >= 0;
    return (
      <span className="inline-flex items-center gap-1.5 mx-4 font-mono text-[11px] tracking-wide">
        <span className="font-bold text-foreground">{s.symbol}</span>
        <span className="text-muted-foreground">{s.price.toFixed(2)}</span>
        <span className={up ? 'text-emerald-400' : 'text-red-400'}>
          {up ? '+' : ''}{s.changePercent.toFixed(2)}%
        </span>
      </span>
    );
  };

  return (
    <div className="w-full overflow-hidden border-b border-border bg-muted/50 py-1.5">
      <div className="animate-ticker">
        {[...stocks, ...stocks].map((s, i) => (
          <Item key={`${s.symbol}-${i}`} s={s} />
        ))}
      </div>
    </div>
  );
}
