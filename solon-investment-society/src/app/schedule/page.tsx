'use client';

import { motion } from 'framer-motion';

// Calendar helpers
const LOCATION = "Room 227 (Mr. Gielink), Solon High School";
const toGCalStamp = (isoUtc: string) => isoUtc.replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
const googleCalendarUrl = (
  title: string,
  startUtcISO: string,
  endUtcISO: string,
  details?: string
) => {
  const dates = `${toGCalStamp(startUtcISO)}/${toGCalStamp(endUtcISO)}`;
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates,
    location: LOCATION,
    details: details || ''
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
    title: 'Guest Speaker — Elizabeth Kahykin (EY)',
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
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Meeting Schedule</h1>
        <p className="text-xl text-muted-foreground">
          Mondays • 3:00 PM - 4:00 PM • Room 227 (Mr. Gielink)
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {meetings.map((meeting, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className={`relative rounded-lg border p-6 ${meeting.highlight ? 'border-blue-500/60 bg-blue-50' : 'border-border bg-card'}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                    {meeting.week}
                  </span>
                  {meeting.badge && (
                    <span className="inline-flex items-center rounded-full bg-blue-600/90 text-white px-2 py-0.5 text-xs font-semibold">
                      {meeting.badge}
                    </span>
                  )}
                </div>
                <h2 className="text-lg sm:text-xl font-semibold leading-snug">{meeting.title}</h2>
                {(meeting.date || meeting.dates) && (
                  <div className="mt-1 text-sm text-muted-foreground">
                    {meeting.date && <div>{meeting.date}</div>}
                    {meeting.dates && (
                      <ul className="list-disc list-inside space-y-0.5">
                        {meeting.dates.map((d: string, i: number) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
                {meeting.bullets && (
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground list-disc list-inside">
                    {meeting.bullets.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {/* Add to Calendar links */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {meeting.startUtc && meeting.endUtc && (
                    <a
                      href={googleCalendarUrl(meeting.title, meeting.startUtc, meeting.endUtc, 'Solon Investment Society meeting')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
                    >
                      Add to Calendar
                    </a>
                  )}
                  {meeting.startsUtc && meeting.endsUtc && meeting.startsUtc.map((s: string, i: number) => (
                    <a
                      key={i}
                      href={googleCalendarUrl(`${meeting.title} (${meeting.week} — Part ${i + 1})`, s, meeting.endsUtc[i], 'Solon Investment Society meeting')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
                    >
                      Add to Calendar (#{i + 1})
                    </a>
                  ))}
                </div>
              </div>
              <a
                href="#"
                className="text-blue-600 hover:underline whitespace-nowrap flex-shrink-0"
              >
                Learn more →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}