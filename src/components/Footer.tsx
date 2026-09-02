import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Schedule", href: "/schedule" },
  { label: "Competitions", href: "/competitions" },
  { label: "Speakers", href: "/speakers" },
  { label: "Officers", href: "/officers" },
];

export default function Footer() {
  return (
    <footer className="container mt-16 border-t-2 rule sm:mt-24">
      <div className="grid gap-10 py-7 sm:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_1fr] lg:gap-16">
        <div>
          <h2 className="text-xs font-bold">Solon Investment Society</h2>
          <p className="mt-3 max-w-sm text-[11px] leading-relaxed text-muted-foreground">
            Empowering students with financial literacy, practical investing skills, and real-world market experience.
          </p>
        </div>
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.08em]">Links</h3>
          <ul className="mt-3 grid grid-cols-2 gap-x-5 gap-y-1 lg:grid-cols-1">
            {links.map((link) => (
              <li key={link.href}><Link className="text-[11px] text-muted-foreground hover:text-primary" href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.08em]">Contact</h3>
          <address className="mt-3 text-[11px] not-italic leading-relaxed text-muted-foreground">
            Solon High School<br />33600 Inwood School Dr, Solon, OH 44139<br />
            <a className="break-all hover:text-primary" href="mailto:soloninvestmentsociety@gmail.com">soloninvestmentsociety@gmail.com</a>
          </address>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-t py-4 text-[10px] uppercase tracking-[0.06em] text-muted-foreground hairline sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Solon Investment Society</span>
        <span>Learn · Research · Invest</span>
      </div>
    </footer>
  );
}
