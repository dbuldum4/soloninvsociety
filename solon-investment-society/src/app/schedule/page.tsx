'use client';

import { CalendarDays, ArrowUpRight } from 'lucide-react';
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
    <div className="container">
      <header className="grid gap-10 border-b-2 py-14 rule lg:grid-cols-[1fr_.75fr] lg:items-end lg:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="eyebrow">Schedule</p>
          <h1 className="page-title mt-6">Monday is market day.</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }} className="grid grid-cols-2 border-y py-5 rule">
          <div><span className="eyebrow">Time</span><strong className="mt-2 block text-xl">3:00–4:00 PM</strong></div>
          <div className="border-l pl-6 hairline"><span className="eyebrow">Location</span><strong className="mt-2 block text-xl">Room 227</strong></div>
        </motion.div>
      </header>

      <section className="py-12 sm:py-16">
        <div className="flex items-end justify-between border-b-2 pb-4 rule"><div><p className="eyebrow">Program</p><h2 className="mt-2 text-3xl font-bold tracking-[-0.045em]">Meeting agenda</h2></div><span className="hidden font-mono text-[10px] uppercase text-muted-foreground sm:block">Fall 2025</span></div>
        <div>
          {meetings.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.35 }}
              className="editorial-row grid gap-4 border-b py-7 hairline lg:grid-cols-[9rem_1fr_1.35fr_auto] lg:items-start"
            >
              <div><span className="font-mono text-[10px] text-primary">{String(idx + 1).padStart(2, '0')}</span><span className="ml-3 text-xs font-bold uppercase">{m.week}</span>{m.badge && <span className="mt-2 block text-[10px] font-semibold uppercase text-primary">{m.badge}</span>}</div>
              <div>
                <h3 className="text-xl font-bold leading-tight tracking-[-0.03em]">{m.title}</h3>
                {(m.date || m.dates) && (
                  <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {m.date && <span>{m.date}</span>}
                    {m.dates && m.dates.map((d: string, i: number) => <span key={i} className="block">{d}</span>)}
                  </div>
                )}
              </div>
              <ol className="space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                {m.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
              </ol>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                  {m.startUtc && m.endUtc && (
                    <a
                      href={googleCalendarUrl(m.title, m.startUtc, m.endUtc, 'Solon Investment Society meeting')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[11px] font-bold uppercase text-primary hover:underline"
                    >
                      <CalendarDays className="h-3.5 w-3.5" /> Add
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
                        className="inline-flex items-center gap-1 text-[11px] font-bold uppercase text-primary hover:underline"
                      >
                        <CalendarDays className="h-3.5 w-3.5" /> Add #{i + 1}
                      </a>
                    ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-5 border-y-2 py-9 rule sm:flex-row sm:items-center sm:justify-between"><div><p className="eyebrow">Questions?</p><h2 className="mt-2 text-3xl font-bold tracking-[-0.045em]">Come to the next meeting.</h2></div><a href="mailto:soloninvestmentsociety@gmail.com" className="editorial-link">Email the club <ArrowUpRight className="h-4 w-4" /></a></section>
    </div>
  );
}
