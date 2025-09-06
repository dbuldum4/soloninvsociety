import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import StockTicker from "@/components/StockTicker";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Solon Investment Society",
    template: "%s | Solon Investment Society"
  },
  description: "Empowering the next generation of investors at Solon High School. Learn markets, build portfolios, and compete in stock pitches.",
  keywords: ["investment", "finance", "stock market", "trading", "Solon High School", "student club"],
  authors: [{ name: "Solon Investment Society" }],
  creator: "Solon Investment Society",
  icons: {
    icon: "/icon.jpg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soloninvestmentsociety.org",
    title: "Solon Investment Society",
    description: "Empowering the next generation of investors at Solon High School.",
    siteName: "Solon Investment Society",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solon Investment Society",
    description: "Empowering the next generation of investors at Solon High School.",
    creator: "@soloninvest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <StockTicker />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          {/* Footer removed to prevent duplication */}
        </div>
      </body>
    </html>
  );
}
