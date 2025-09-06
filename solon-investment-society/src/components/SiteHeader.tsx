"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Prevent background scroll when the mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileMenuOpen]);

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Competitions', href: '/competitions' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Officers', href: '/officers' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between" aria-label="Global">
        <div className="flex items-center gap-x-12">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.jpg" 
              alt="Solon Investment Society" 
              width={32} 
              height={32} 
              className="h-8 w-8 rounded-full"
            />
            <span className="text-lg font-semibold">Solon Investment Society</span>
          </Link>
          <div className="hidden md:flex md:gap-x-8">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:items-center md:gap-x-4">
          <ThemeToggle />
          <Link
            href="/schedule"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-accent/90 transition-colors"
          >
            View Schedule
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu via Portal to avoid stacking issues */}
      {typeof window !== 'undefined' && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <div
              id="mobile-menu"
              className="fixed inset-0 z-[100] md:hidden"
              role="dialog"
              aria-modal="true"
            >
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 dark:bg-black/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />
              {/* Full-screen Panel for reliability on mobile */}
              <motion.div
                className="fixed inset-0 z-[101] bg-background px-6 py-6 overflow-y-auto"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.16, ease: 'easeOut' }}
              >
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2" onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => router.push('/'), 160);
                  }}>
                    <Image 
                      src="/logo.jpg" 
                      alt="Solon Investment Society" 
                      width={32} 
                      height={32} 
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="text-lg font-semibold">Solon Investment Society</span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-foreground/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-base font-semibold text-foreground hover:bg-muted focus:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        setTimeout(() => router.push(item.href), 160);
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-6">
                  <a
                    href="/schedule"
                    className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-accent/90"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      setTimeout(() => router.push('/schedule'), 160);
                    }}
                  >
                    View Schedule
                  </a>
                  <ThemeToggle />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  );
}
