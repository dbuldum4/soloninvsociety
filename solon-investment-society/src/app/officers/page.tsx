type Officer = {
  name: string;
  role: string;
  bio?: string;
  initials: string;
};

const officers: Officer[] = [
  {
    name: "Avery Mark Andrews",
    role: "Club President",
    initials: "AA",
    bio: "Chairs meetings and sets the club's direction and programming.",
  },
  {
    name: "Sanat Mudundi",
    role: "Club Vice President",
    initials: "SM",
    bio: "Supports programming and coordinates projects and outreach.",
  },
  {
    name: "Deniz Buldum",
    role: "Technical Director, PR",
    initials: "DB",
    bio: "Leads technical and PR efforts—manages the website, challenges, and social channels.",
  },
  {
    name: "Akshat Sawner",
    role: "Secretary",
    initials: "AS",
    bio: "Keeps notes organized and maintains club resources and communications.",
  },
  {
    name: "Jonathan Parran",
    role: "Head Consultant",
    initials: "JP",
    bio: "Your go-to for stock research and personal investing questions.",
  },
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