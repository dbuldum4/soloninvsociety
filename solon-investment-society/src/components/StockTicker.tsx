'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const stocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 175.34, change: 2.35, changePercent: 1.36 },
  { symbol: 'MSFT', name: 'Microsoft', price: 325.12, change: -1.23, changePercent: -0.38 },
  { symbol: 'GOOGL', name: 'Alphabet', price: 142.56, change: 0.89, changePercent: 0.63 },
  { symbol: 'AMZN', name: 'Amazon', price: 178.75, change: 3.45, changePercent: 1.97 },
  { symbol: 'META', name: 'Meta', price: 310.98, change: -2.10, changePercent: -0.67 },
];

export default function StockTicker() {
  return (
    <div className="w-full overflow-hidden bg-muted py-2 border-b border-border">
      <div className="animate-ticker whitespace-nowrap">
        {[...stocks, ...stocks].map((stock, index) => (
          <div key={`${stock.symbol}-${index}`} className="inline-flex items-center mx-6 text-sm">
            <span className="font-semibold mr-2 text-foreground/80">{stock.symbol}</span>
            <span className="mr-4 text-foreground/70">${stock.price.toFixed(2)}</span>
            <span className={stock.change >= 0 ? 'text-green-500' : 'text-red-500'}>
              {stock.change >= 0 ? '↑' : '↓'} ${Math.abs(stock.change)} ({stock.changePercent}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
