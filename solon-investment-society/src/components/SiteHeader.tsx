"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground/70"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
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
      
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-background px-6 py-6 sm:ring-1 sm:ring-foreground/10">
          <div className="flex items-center justify-between">
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
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-foreground/70"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-foreground/90 hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 flex items-center justify-between gap-4">
                <Link
                  href="/schedule"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium leading-7 text-foreground/90 hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  View Schedule
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
