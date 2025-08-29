export default function AboutPage() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-[450px] bg-gradient-to-b from-accent/15 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <p className="mt-4 text-muted-foreground">
          Solon Investment Society is a student-led club at Solon High School focused on building financial literacy and practical investing skills. We host weekly meetings that combine foundational lessons with hands-on activities.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-semibold">What we do</h2>
            <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Intro to markets, equities, ETFs, and portfolio theory</li>
              <li>Company research and stock pitch workshops</li>
              <li>Portfolio simulations and challenges</li>
              <li>Guest speakers from finance and alumni network</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="font-semibold">Who should join</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Anyone curious about investing, finance, or business — no prior experience required. We welcome beginners and experienced students alike.
            </p>
          </div>
        </div>
        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <h2 className="font-semibold">Mission</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Empower students with the knowledge and confidence to make informed financial decisions, communicate investment ideas, and learn by doing.
          </p>
        </div>
      </div>
    </section>
  );
}