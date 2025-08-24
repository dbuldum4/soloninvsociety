import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-[450px] bg-gradient-to-b from-accent/15 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Solon Investment Society
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Solon High School&apos;s student-led investment and finance club. Learn markets, build portfolios, and compete in stock pitches.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/schedule" className="inline-flex items-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow hover:opacity-90">
              View schedule
            </Link>
            <Link href="/about" className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium hover:border-accent/50 hover:text-accent">
              About the club
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Weekly Meetings", desc: "Hands-on sessions covering markets, investing, and analysis." },
            { title: "Stock Pitches", desc: "Develop research, build theses, and present to peers." },
            { title: "Portfolio Challenge", desc: "Simulated investing with friendly competition." },
            { title: "Guest Speakers", desc: "Hear from finance professionals and alumni." },
          ].map((card) => (
            <div key={card.title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
