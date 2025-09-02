import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solon Investment Society",
  description: "Solon High School's investment and finance club.",
  icons: {
    icon: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 border-b border-border/60 bg-white/70 dark:bg-background/60 backdrop-blur">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <Link href="/" className="font-semibold text-lg sm:text-xl tracking-tight">
                <span className="inline-flex items-center gap-2">
                  <Image src="/logo.jpg" alt="Solon Investment Society" width={28} height={28} className="h-7 w-7 rounded object-cover" />
                  <span>Solon Investment Society</span>
                </span>
              </Link>
              <nav className="hidden md:flex items-center gap-8 text-sm">
                <Link href="/about" className="hover:text-accent transition-colors">About</Link>
                <Link href="/schedule" className="hover:text-accent transition-colors">Schedule</Link>
                <Link href="/officers" className="hover:text-accent transition-colors">Officers</Link>
              </nav>
              <nav className="md:hidden">
                <Link href="/schedule" className="inline-flex items-center rounded-md bg-accent px-3 py-2 text-xs font-medium text-accent-foreground shadow-sm hover:opacity-90">
                  Schedule
                </Link>
              </nav>
            </div>
          </header>
          <main className="relative flex-1">
            <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-[450px] bg-gradient-to-b from-accent/15 to-transparent"></div>
            {children}
          </main>
          <footer className="border-t border-border/60">
            <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-muted-foreground">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p>© {new Date().getFullYear()} Solon Investment Society</p>
                <div className="flex gap-6">
                  <Link href="/about" className="hover:text-accent transition-colors">About</Link>
                  <Link href="/schedule" className="hover:text-accent transition-colors">Schedule</Link>
                  <Link href="/officers" className="hover:text-accent transition-colors">Officers</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
