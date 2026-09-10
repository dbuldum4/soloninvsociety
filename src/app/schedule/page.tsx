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
  allDay = false,
) => {
  const dates = `${toGCalStamp(startUtcISO)}/${toGCalStamp(endUtcISO)}`;
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates,
    location: allDay ? '' : LOCATION,
    details: details || '',
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

const meetings: { title: string; start: string; end: string; allDay?: boolean }[] = [
  { title: 'Club info & Wharton registration', start: '2026-09-08T19:00:00Z', end: '2026-09-08T20:00:00Z' },
  { title: 'Wharton deadline', start: '2026-09-11', end: '2026-09-12', allDay: true },
  { title: 'Meeting — begin stock pitches/debates', start: '2026-09-14T19:00:00Z', end: '2026-09-14T20:00:00Z' },
  { title: 'Guest speaker', start: '2026-09-28T19:00:00Z', end: '2026-09-28T20:00:00Z' },
  { title: 'Research/club stock pitch competition', start: '2026-10-12T19:00:00Z', end: '2026-10-12T20:00:00Z' },
  { title: 'Guest speaker', start: '2026-10-26T19:00:00Z', end: '2026-10-26T20:00:00Z' },
  { title: 'Research/club stock pitch competition', start: '2026-11-09T20:00:00Z', end: '2026-11-09T21:00:00Z' },
  { title: 'Real-world applications', start: '2026-11-23T20:00:00Z', end: '2026-11-23T21:00:00Z' },
  { title: 'Real-world applications', start: '2026-12-07T20:00:00Z', end: '2026-12-07T21:00:00Z' },
  { title: 'Advanced trading', start: '2026-12-21T20:00:00Z', end: '2026-12-21T21:00:00Z' },
];

const dateFormat = new Intl.DateTimeFormat('en-US', {
  weekday: 'short', month: 'short', day: 'numeric', timeZone: 'America/New_York',
});

const formatEventDate = (start: string) =>
  dateFormat.format(new Date(start.length === 10 ? `${start}T12:00:00Z` : start));

export default function SchedulePage() {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">Schedule</h1>
        <p className="mt-4 text-base text-muted-foreground">Fall 2026 · Meetings: 3–4 PM · Room 227</p>
      </header>
      <section aria-label="Fall 2026 events">
        {meetings.map((meeting) => (
          <motion.article key={meeting.start} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid gap-2 border-b py-5 hairline sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-6">
            <time dateTime={meeting.start} className="text-base text-muted-foreground">{formatEventDate(meeting.start)}</time>
            <h2 className="text-xl font-bold leading-snug tracking-[-0.025em]">{meeting.title}{meeting.allDay && <span className="ml-2 text-sm font-normal text-muted-foreground">All day</span>}</h2>
            <a href={googleCalendarUrl(meeting.title, meeting.start, meeting.end, meeting.allDay ? 'Solon Investment Society deadline' : 'Solon Investment Society meeting', meeting.allDay)}
              target="_blank" rel="noopener noreferrer" aria-label={`Add ${meeting.title} on ${formatEventDate(meeting.start)} to calendar`}
              className="inline-flex min-h-11 items-center gap-2 justify-self-start text-sm font-semibold text-primary hover:underline">
              <CalendarDays className="h-4 w-4" /> Add to calendar
            </a>
          </motion.article>
        ))}
      </section>
    </div>
  );
}
