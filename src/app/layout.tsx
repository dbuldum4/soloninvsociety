import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Solon Investment Society", template: "%s | Solon Investment Society" },
  description: "Empowering the next generation of investors at Solon High School. Learn markets, build portfolios, and compete in stock pitches.",
  keywords: ["investment", "finance", "stock market", "Solon High School", "student club"],
  authors: [{ name: "Solon Investment Society" }],
  icons: { icon: "/icon.jpg", shortcut: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soloninvestmentsociety.org",
    title: "Solon Investment Society",
    description: "Empowering the next generation of investors at Solon High School.",
    siteName: "Solon Investment Society",
  },
};

const themeScript = `
  try {
    const saved = localStorage.getItem('sis-theme');
    const dark = saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList.toggle('dark', dark);
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="bg-background font-sans text-foreground antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
