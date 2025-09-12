import { NextResponse } from "next/server";

// Revalidate this route every 24 hours
export const revalidate = 60 * 60 * 24; // 24h in seconds

// For now, use a static list. Replace with a real data source if desired.
const symbols = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "MSFT", name: "Microsoft" },
  { symbol: "GOOGL", name: "Alphabet" },
  { symbol: "AMZN", name: "Amazon" },
  { symbol: "META", name: "Meta" },
];

// Mock a simple daily quote that changes once per day based on date seed
function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateDailyQuotes() {
  const today = new Date();
  const daySeed = Number(
    `${today.getUTCFullYear()}${String(today.getUTCMonth() + 1).padStart(2, "0")}${String(today.getUTCDate()).padStart(2, "0")}`
  );

  return symbols.map((s, idx) => {
    const base = 100 + idx * 50;
    const pr = base + Math.round(pseudoRandom(daySeed + idx) * 2000) / 10; // e.g., 100.0-300.0
    const ch = Math.round((pseudoRandom(daySeed * (idx + 2)) - 0.5) * 400) / 10; // -20.0..+20.0
    const chPct = Math.round((ch / pr) * 1000) / 10;
    return {
      symbol: s.symbol,
      name: s.name,
      price: Number(pr.toFixed(2)),
      change: Number(ch.toFixed(2)),
      changePercent: Number(chPct.toFixed(2)),
    };
  });
}

export async function GET() {
  // In a real integration, fetch from a data provider here and rely on Next's route caching
  const data = generateDailyQuotes();
  return NextResponse.json({ data, asOf: new Date().toISOString() });
}


