"use client";

import { createElement } from "react";
import Script from "next/script";

// Official embed: https://www.tradingview.com/widget-docs/widgets/charts/mini-chart/
// Leave the widget's attribution, data status, and outbound links intact.
export default function MarketSnapshot() {
  return (
    <section aria-labelledby="market-heading" className="grid gap-5 border-y-2 py-5 rule lg:grid-cols-[230px_1fr] lg:items-center lg:gap-8">
      <div>
        <h2 id="market-heading" className="text-lg font-bold">Market snapshot</h2>
        <p className="mt-1 text-sm text-muted-foreground">SPY · S&amp;P 500 ETF</p>
      </div>
      <div className="market-widget min-w-0">
        {createElement(
          "tv-mini-chart",
          { symbol: "AMEX:SPY", style: { display: "block", width: "100%", height: "220px" } },
          <div className="flex h-full items-center justify-center">
            <a href="https://www.tradingview.com/symbols/AMEX-SPY/" target="_blank" rel="noopener noreferrer" className="editorial-link">
              View SPY on TradingView
            </a>
          </div>,
        )}
      </div>
      <Script src="https://widgets.tradingview-widget.com/w/en/tv-mini-chart.js" type="module" strategy="lazyOnload" />
    </section>
  );
}
