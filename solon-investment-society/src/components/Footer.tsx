import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2">
            <h3 className="text-sm font-bold">Solon Investment Society</h3>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
              Empowering students with financial literacy, practical investing
              skills, and the confidence to make informed financial decisions.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Links
            </h4>
            <ul className="mt-3 space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Schedule", href: "/schedule" },
                { label: "Competitions", href: "/competitions" },
                { label: "Officers", href: "/officers" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </h4>
            <div className="mt-3 space-y-2 text-xs text-muted-foreground">
              <p>Solon High School</p>
              <p>33600 Inwood Dr, Solon, OH 44139</p>
              <a
                href="mailto:soloninvestmentsociety@gmail.com"
                className="block transition-colors hover:text-foreground"
              >
                soloninvestmentsociety@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-5 text-center text-[11px] text-muted-foreground">
          &copy; {new Date().getFullYear()} Solon Investment Society
        </div>
      </div>
    </footer>
  );
}
