'use client';

import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const LOCATION = 'Room 227 (Mr. Gielink), Solon High School';
const toGCalStamp = (isoUtc: string) =>
  isoUtc.replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
const googleCalendarUrl = (
  title: string,
  startUtcISO: string,
  endUtcISO: string,
  details?: string,
) => {
  const dates = `${toGCalStamp(startUtcISO)}/${toGCalStamp(endUtcISO)}`;
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates,
    location: LOCATION,
    details: details || '',
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

const meetings = [
  {
    week: 'Initial Meeting',
    title: 'Club Info & Wharton Registration',
    badge: 'Registration',
    bullets: [
      'Introductions and club overview',
      'Register for the Wharton High School Investment Game',
    ],
    highlight: true,
    date: 'Mon, September 8, 2025 — 3:00–4:00 PM',
    startUtc: '2025-09-08T19:00:00Z',
    endUtc: '2025-09-08T20:00:00Z',
  },
  {
    week: 'Week 1',
    title: 'Guest Speaker — Elizabeth Khaykin (EY)',
    badge: 'Guest Speaker',
    bullets: [
      'Career path as a Financial Analyst at EY',
      'How to read Balance Sheets, Income Statements, and Cash Flow',
    ],
    highlight: true,
    date: 'Mon, September 15, 2025 — 3:00–4:00 PM',
    startUtc: '2025-09-15T19:00:00Z',
    endUtc: '2025-09-15T20:00:00Z',
  },
  {
    week: 'Weeks 2–3',
    title: 'How to Effectively Research Stocks',
    bullets: [
      'Lecture: Growth vs. Value, Diversification, Stocks vs. ETFs, basic company valuations',
      'Responsible investing: objectivity over emotion; avoid panic selling',
      'Activity: Continue building virtual portfolios using learned principles',
      'Sign up for the Wharton High School Investment Game',
    ],
    dates: [
      'Mon, September 22, 2025 — 3:00–4:00 PM',
      'Mon, September 29, 2025 — 3:00–4:00 PM',
    ],
    startsUtc: ['2025-09-22T19:00:00Z', '2025-09-29T19:00:00Z'],
    endsUtc: ['2025-09-22T20:00:00Z', '2025-09-29T20:00:00Z'],
  },
  {
    week: 'Week 4',
    title: 'Company Valuation — Part 2',
    bullets: [
      'Introduction to financial statements (Income Statements + Balance Sheets)',
      'Key metrics: P/E, Debt/Equity, Profit Margins, EPS, Liquidity',
    ],
    date: 'Mon, October 6, 2025 — 3:00–4:00 PM',
    startUtc: '2025-10-06T19:00:00Z',
    endUtc: '2025-10-06T20:00:00Z',
  },
  {
    week: 'Week 5',
    title: 'Case Studies & Real-World Events',
    bullets: [
      'Begin stock debates (e.g., AMD vs. Intel)',
      'Begin stock pitches (members propose ideas with potential growth; promote value investing)',
      'Use the CWRU Weatherhead Fund template',
    ],
    date: 'Mon, October 13, 2025 — 3:00–4:00 PM',
    startUtc: '2025-10-13T19:00:00Z',
    endUtc: '2025-10-13T20:00:00Z',
  },
  {
    week: 'Week 6',
    title: 'Guest Speaker / Project Lab',
    badge: 'Guest Speaker',
    bullets: [
      'Guest: CWRU Journal of Economics member on investing and stock picking OR',
      'Guest: Local CFA/financial advisor on career paths',
      'Tyler Dalton — Senior Associate at Kaulig Capital',
    ],
    highlight: true,
    date: 'Mon, October 20, 2025 — 3:00–4:00 PM',
    startUtc: '2025-10-20T19:00:00Z',
    endUtc: '2025-10-20T20:00:00Z',
  },
  {
    week: 'Weeks 7–8',
    title: 'Real-World Applications',
    bullets: [
      'What moves stocks? Earnings reports, news',
      "Explore broader impacts (e.g., administration policies, notable investors' activity)",
      'Continue the Wharton competition, stock debates, and stock pitches',
    ],
    dates: [
      'Mon, October 27, 2025 — 3:00–4:00 PM',
      'Mon, November 3, 2025 — 3:00–4:00 PM',
    ],
    startsUtc: ['2025-10-27T19:00:00Z', '2025-11-03T20:00:00Z'],
    endsUtc: ['2025-10-27T20:00:00Z', '2025-11-03T21:00:00Z'],
  },
  {
    week: 'Week 9+',
    title: 'Continuations + Advanced Trading',
    bullets: [
      'Continue researching & investing responsibly',
      'Continue stock pitches and debates',
      'Leveraging money RESPONSIBLY — many risks',
      'Shorts',
      'Options trading / scalping',
    ],
    date: 'Mon, November 10, 2025 — 3:00–4:00 PM',
    startUtc: '2025-11-10T20:00:00Z',
    endUtc: '2025-11-10T21:00:00Z',
  },
];

export default function SchedulePage() {
  return (
    <div className="container py-16 sm:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Schedule
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tighter sm:text-5xl">
          Meeting Schedule
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5 text-primary" /> Mondays
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary" /> 3:00 – 4:00 PM
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary" /> Room 227 (Mr. Gielink)
          </span>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative mt-14 max-w-3xl">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

        <div className="space-y-4">
          {meetings.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.35 }}
              className="relative pl-10"
            >
              {/* Dot */}
              <div
                className={`absolute left-1.5 top-5 h-3 w-3 rounded-full border-2 ${
                  m.highlight
                    ? 'border-primary bg-primary'
                    : 'border-border bg-muted'
                }`}
              />

              <div
                className={`rounded-xl border p-5 transition-colors ${
                  m.highlight
                    ? 'border-primary/25 bg-primary/[0.04]'
                    : 'border-border bg-card'
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                    {m.week}
                  </span>
                  {m.badge && (
                    <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[11px] font-semibold text-primary">
                      {m.badge}
                    </span>
                  )}
                </div>

                <h2 className="mt-2 text-base font-bold sm:text-lg">{m.title}</h2>

                {(m.date || m.dates) && (
                  <div className="mt-1 text-xs text-muted-foreground">
                    {m.date && <span>{m.date}</span>}
                    {m.dates &&
                      m.dates.map((d: string, i: number) => (
                        <span key={i} className="block">
                          {d}
                        </span>
                      ))}
                  </div>
                )}

                {m.bullets && (
                  <ul className="mt-3 space-y-1.5">
                    {m.bullets.map((b: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary/60" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-3 flex flex-wrap gap-2">
                  {m.startUtc && m.endUtc && (
                    <a
                      href={googleCalendarUrl(m.title, m.startUtc, m.endUtc, 'Solon Investment Society meeting')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary transition-colors hover:bg-primary/20"
                    >
                      <CalendarDays className="h-3 w-3" />
                      Add to Calendar
                    </a>
                  )}
                  {m.startsUtc &&
                    m.endsUtc &&
                    m.startsUtc.map((s: string, i: number) => (
                      <a
                        key={i}
                        href={googleCalendarUrl(
                          `${m.title} (${m.week} — Part ${i + 1})`,
                          s,
                          m.endsUtc[i],
                          'Solon Investment Society meeting',
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary transition-colors hover:bg-primary/20"
                      >
                        <CalendarDays className="h-3 w-3" />
                        Add #{i + 1}
                      </a>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
