'use client';

import { CalendarDays } from 'lucide-react';
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
  { title: 'Club info & Wharton registration', start: '2026-09-08T19:00:00Z', end: '2026-09-08T20:00:00Z' },
  { title: 'Researching stocks', start: '2026-10-05T19:00:00Z', end: '2026-10-05T20:00:00Z' },
  { title: 'Researching stocks', start: '2026-10-19T19:00:00Z', end: '2026-10-19T20:00:00Z' },
  { title: 'Company valuation — part 2', start: '2026-11-02T20:00:00Z', end: '2026-11-02T21:00:00Z' },
  { title: 'Case studies & market events', start: '2026-11-16T20:00:00Z', end: '2026-11-16T21:00:00Z' },
  { title: 'Real-world applications', start: '2026-11-30T20:00:00Z', end: '2026-11-30T21:00:00Z' },
  { title: 'Real-world applications', start: '2026-12-14T20:00:00Z', end: '2026-12-14T21:00:00Z' },
  { title: 'Advanced trading', start: '2026-12-28T20:00:00Z', end: '2026-12-28T21:00:00Z' },
];

const dateFormat = new Intl.DateTimeFormat('en-US', {
  weekday: 'short', month: 'short', day: 'numeric', timeZone: 'America/New_York',
});

export default function SchedulePage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Schedule</h1>
        <p className="mt-4 text-base text-muted-foreground">Fall 2026 · 3–4 PM · Room 227</p>
      </header>
      <section aria-label="Fall 2026 meetings">
        {meetings.map((meeting) => (
          <motion.article key={meeting.start} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid gap-2 border-b py-5 hairline sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-6">
            <time dateTime={meeting.start} className="text-base text-muted-foreground">{dateFormat.format(new Date(meeting.start))}</time>
            <h2 className="text-xl font-bold leading-snug tracking-[-0.025em]">{meeting.title}</h2>
            <a href={googleCalendarUrl(meeting.title, meeting.start, meeting.end, 'Solon Investment Society meeting')}
              target="_blank" rel="noopener noreferrer" aria-label={`Add ${meeting.title} on ${dateFormat.format(new Date(meeting.start))} to calendar`}
              className="inline-flex min-h-11 items-center gap-2 justify-self-start text-sm font-semibold text-primary hover:underline">
              <CalendarDays className="h-4 w-4" /> Add to calendar
            </a>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
