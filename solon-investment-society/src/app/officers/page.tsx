type Officer = {
  name: string;
  role: string;
  bio?: string;
  initials: string;
};

const officers: Officer[] = [
  { name: "Alex Kim", role: "President", initials: "AK", bio: "Leads weekly meetings and organizes stock pitch events." },
  { name: "Maya Patel", role: "Vice President", initials: "MP", bio: "Coordinates guest speakers and outreach." },
  { name: "Jordan Li", role: "Treasurer", initials: "JL", bio: "Manages budgets and competition fees." },
  { name: "Sam Rivera", role: "Secretary", initials: "SR", bio: "Keeps notes and maintains resources." },
];

export default function OfficersPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Officers</h1>
      <p className="mt-4 text-muted-foreground">
        Meet the student leaders who help run Solon Investment Society.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
  );
}