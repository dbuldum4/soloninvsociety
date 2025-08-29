type Officer = {
  name: string;
  role: string;
  bio?: string;
  initials: string;
};

const officers: Officer[] = [
  { name: "Avery Andrews", role: "Club President", initials: "AA", bio: "Chairs meetings, sets club direction, and keeps things moving." },
  { name: "Sanat Mudundi", role: "Club Vice President", initials: "SM", bio: "Coordinates initiatives, supports projects, and steps in wherever needed." },
  { name: "Deniz Buldum", role: "Technical Director, PR", initials: "DB", bio: "Oversees the website, runs challenges, and keeps our socials current." },
  { name: "Akshat Sawner", role: "Secretary", initials: "AS", bio: "Tracks minutes, shares updates, and keeps everyone on the same page." },
  { name: "Jonathan Parran", role: "Head Consultant, Treasurer", initials: "JP", bio: "Your go-to for practical stock questions and personalized investing guidance." },
];

export default function OfficersPage() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-[450px] bg-gradient-to-b from-accent/15 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Officers</h1>
        <p className="mt-4 text-muted-foreground">
          Meet the student leaders who help run Solon Investment Society.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {officers.map((o) => (
            <div key={o.name} className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-accent text-accent-foreground grid place-items-center font-semibold">
                  {o.initials}
                </div>
                <div>
                  <h3 className="font-semibold leading-tight">{o.name}</h3>
                  <p className="text-sm text-muted-foreground">{o.role}</p>
                </div>
              </div>
              {Boolean(o.bio) && (
                <p className="mt-4 text-sm text-muted-foreground">{o.bio}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}