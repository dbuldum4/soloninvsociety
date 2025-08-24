import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solon Investment Society",
  description: "Investment club at Solon High School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-blue-900">
        <header className="border-b-4 border-blue-600">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <Link href="/" className="text-2xl font-bold text-blue-700">
              Solon Investment Society
            </Link>
            <div className="space-x-4 text-blue-700">
              <Link className="hover:underline" href="/about">
                About
              </Link>
              <Link className="hover:underline" href="/officers">
                Officers
              </Link>
              <Link className="hover:underline" href="/schedule">
                Schedule
              </Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
