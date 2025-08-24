type Event = {
  date: string;
  title: string;
  description: string;
  location: string;
};

const events: Event[] = [
  {
    date: "Sep 10",
    title: "Kickoff + Intro to Markets",
    description: "Overview of the club, goals, and basics of how markets work.",
    location: "Room 210",
  },
  {
    date: "Sep 17",
    title: "Building an Investment Thesis",
    description: "How to research companies and structure a stock pitch.",
    location: "Room 210",
  },
  {
    date: "Sep 24",
    title: "Portfolio Simulation Setup",
    description: "Create teams and launch the portfolio challenge.",
    location: "Room 210",
  },
];

export default function SchedulePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Schedule</h1>
      <p className="mt-4 text-muted-foreground">
        We meet weekly after school on Tuesdays from 3:10–4:00 PM unless otherwise noted. Location: Room 210.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {events.map((e) => (
          <article key={e.title} className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">{e.title}</h2>
              <span className="inline-flex items-center rounded bg-accent/10 px-2 py-1 text-xs font-medium text-accent border border-accent/20">
                {e.date}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{e.description}</p>
            <p className="mt-4 text-xs text-muted-foreground">Location: {e.location}</p>
          </article>
        ))}
      </div>
    </div>
  );
}