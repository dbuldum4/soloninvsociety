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
    } catch {
      // Ignore cache parse errors
    }

    const fetchQuotes = async () => {
      try {
        const res = await fetch('/api/tickers');
        if (!res.ok) throw new Error('Failed to fetch tickers');
        const json = await res.json();
        const data = (json?.data ?? []) as Stock[];
        if (Array.isArray(data) && data.length > 0) {
          setStocks(data);
          try {
            localStorage.setItem(
              LOCAL_STORAGE_KEY,
              JSON.stringify({ timestamp: Date.now(), data })
            );
          } catch {
            // Ignore storage write errors
          }
        }
      } catch {
        // Leave defaults on error
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-muted py-2 border-b border-border">
      <div className="animate-ticker whitespace-nowrap">
        {[...stocks, ...stocks].map((stock, index) => (
          <div key={`${stock.symbol}-${index}`} className="inline-flex items-center mx-6 text-sm">
            <span className="font-semibold mr-2 text-foreground/80">{stock.symbol}</span>
            <span className="mr-4 text-foreground/70">${stock.price.toFixed(2)}</span>
            <span className={stock.change >= 0 ? 'text-green-500' : 'text-red-500'}>
              {stock.change >= 0 ? '↑' : '↓'} ${Math.abs(stock.change).toFixed(2)} ({stock.changePercent.toFixed(2)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
