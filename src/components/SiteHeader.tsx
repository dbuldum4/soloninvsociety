"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const NAV = [
  { name: "About", href: "/about" },
  { name: "Schedule", href: "/schedule" },
  { name: "Competitions", href: "/competitions" },
  { name: "Speakers", href: "/speakers" },
  { name: "Officers", href: "/officers" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;

    // A modal dialog contains keyboard focus and makes the page behind it inert.
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.body.style.overflow = previousOverflow;
      dialog.close();
    };
  }, [open]);

  return (
    <header className="relative z-50 bg-background/95 backdrop-blur-md">
      <div className="container flex h-[74px] items-center gap-5 border-b-2 rule lg:h-[78px]">
        <Link href="/" className="text-base font-bold tracking-[-0.035em] sm:text-lg">
          Solon Investment Society
        </Link>
        <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}
              className={`relative py-3 text-sm font-medium transition-colors hover:text-primary ${pathname === item.href ? "text-primary" : "text-foreground"}`}>
              {item.name}
              {pathname === item.href && <motion.span layoutId="nav-active" className="absolute inset-x-0 -bottom-4 h-0.5 bg-primary" />}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block"><ThemeToggle /></div>
        <button type="button" onClick={() => setOpen(true)}
          className="ml-auto grid h-11 w-11 shrink-0 place-items-center lg:hidden"
          aria-label="Open menu" aria-haspopup="dialog" aria-controls="mobile-menu" aria-expanded={open}>
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <dialog ref={dialogRef} id="mobile-menu" aria-label="Navigation menu" onCancel={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-background p-0 text-foreground backdrop:bg-background">
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="container flex min-h-dvh flex-col">
            <div className="flex h-[74px] shrink-0 items-center justify-between border-b-2 rule">
              <span className="font-semibold">Menu</span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="py-5" aria-label="Mobile navigation">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}
                  className={`block border-b py-4 text-3xl font-semibold tracking-[-0.045em] hairline ${pathname === item.href ? "text-primary" : "text-foreground"}`}>
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex items-center justify-between border-t py-5 rule">
              <span className="detail-label">Theme</span><ThemeToggle showLabel />
            </div>
          </motion.div>
        )}
      </dialog>
    </header>
  );
}
