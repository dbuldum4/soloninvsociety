type Officer = {
  name: string;
  role: string;
  bio?: string;
  initials: string;
};

const officers: Officer[] = [
  {
    name: "Avery Andrews",
    role: "President",
    initials: "AA",
    bio:
      "3 years of investing experience with 30%+ return over the course of less than a year on various stock picks. Very well versed in financial ratios and company evaluation.",
  },
  {
    name: "Sanat Mudundi",
    role: "Vice President",
    initials: "SM",
    bio:
      "More than a year of investing experience and superb understanding of the markets. One of the most dedicated members on the team.",
  },
  {
    name: "Deniz Buldum",
    role: "Tech Lead / PR",
    initials: "DB",
    bio:
      "3 years of safe investing with ~15% year-over-year returns and experience in businesses with various internships. Placed second in NASA hackathon, APCSA alum.",
  },
  {
    name: "Akshat Sawner",
    role: "Secretary",
    initials: "AS",
    bio:
      "295% return over 3 years on Howthemarketworks.com, ranked 8th out of 3238 people with multiple stocks with above 100% return.",
  },
  {
    name: "Jonathan Parran",
    role: "Head Consultant / Treasurer",
    initials: "JP",
    bio:
      "4 years investing experience, 2,400% returns on crypto (bitcoin investor), managed an investing community with 2000 people.",
  },
];

export default function OfficersPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Officers</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          All officers have either taken AP Economics or are currently taking it.
        </p>
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