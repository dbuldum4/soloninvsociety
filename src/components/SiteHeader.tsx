"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="relative z-50 bg-background/95 backdrop-blur-md">
      <div className="container flex h-[74px] items-center border-b-2 rule md:h-[78px]">
        <Link href="/" className="text-[16px] font-bold tracking-[-0.035em] sm:text-[18px]">
          Solon Investment Society
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex" aria-label="Primary navigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-2 text-[12px] font-medium transition-colors hover:text-primary ${pathname === item.href ? "text-primary" : "text-foreground"}`}
            >
              {item.name}
              {pathname === item.href && (
                <motion.span layoutId="nav-active" className="absolute inset-x-0 -bottom-[22px] h-0.5 bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-5 md:flex">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-primary">
            Est. 2023
          </span>
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="ml-auto grid h-10 w-10 place-items-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[74px] h-[calc(100dvh-74px)] bg-background md:hidden"
          >
            <nav className="container flex h-full flex-col py-8" aria-label="Mobile navigation">
              {NAV.map((item, index) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.045 }}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between border-b py-4 text-3xl font-semibold tracking-[-0.045em] hairline ${pathname === item.href ? "text-primary" : "text-foreground"}`}
                  >
                    {item.name}<span className="font-mono text-xs">0{index + 1}</span>
                  </Link>
                </motion.div>
              ))}
              <div className="mt-auto flex items-center justify-between border-t py-5 rule">
                <span className="eyebrow">Theme</span>
                <ThemeToggle showLabel />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
