"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
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
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 4);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => router.push(href), 180);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="SIS"
            width={28}
            height={28}
            className="rounded-full"
          />
          <span className="text-sm font-semibold tracking-tight hidden sm:block">
            Solon Investment Society
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop right */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link
            href="/schedule"
            className="rounded-md bg-primary px-3.5 py-1.5 text-[13px] font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Schedule
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile overlay */}
      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div className="fixed inset-0 z-[100] md:hidden" role="dialog" aria-modal="true">
                <motion.div
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                />
                <motion.div
                  className="absolute inset-0 z-10 flex flex-col bg-background px-5 py-5"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between">
                    <button onClick={() => go("/")} className="flex items-center gap-2">
                      <Image src="/logo.jpg" alt="SIS" width={28} height={28} className="rounded-full" />
                      <span className="text-sm font-semibold">Solon Investment Society</span>
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      className="rounded-md p-2 text-muted-foreground hover:text-foreground"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <nav className="mt-10 flex flex-col gap-1">
                    {NAV.map((item) => {
                      const active = pathname === item.href;
                      return (
                        <button
                          key={item.name}
                          onClick={() => go(item.href)}
                          className={`rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                            active
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                          }`}
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </nav>

                  <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
                    <button
                      onClick={() => go("/schedule")}
                      className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                    >
                      View Schedule
                    </button>
                    <ThemeToggle />
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
}
