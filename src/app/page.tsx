"use client";

import Link from "next/link";
import MarketSnapshot from "@/components/MarketSnapshot";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { number: "01", title: "Biweekly Meetings", body: "Hands-on sessions every other Monday covering markets, investing strategies, and portfolio management." },
  { number: "02", title: "Stock Pitches", body: "Develop research, build investment theses, and present to peers for feedback." },
  { number: "03", title: "Portfolio Challenge", body: "Simulated investing with real market data and friendly competition between members." },
  { number: "04", title: "Guest Speakers", body: "Hear from finance professionals, alumni, and accomplished advisors." },
  { number: "05", title: "Competitions", body: "Compete statewide in Wharton, NPFC, Young Investor, and more." },
];

const resources = [
  { title: "Investopedia", body: "Courses and guides", href: "https://www.investopedia.com/investing-4427685" },
  { title: "Yahoo Finance", body: "Markets and portfolios", href: "https://finance.yahoo.com/" },
  { title: "Bloomberg", body: "Global market analysis", href: "https://www.bloomberg.com/markets" },
  { title: "Morningstar", body: "Investment research", href: "https://www.morningstar.com/" },
];

export default function Home() {
  return (
    <div className="container">
      <section className="grid gap-12 py-14 md:grid-cols-[1.05fr_.95fr] md:gap-0 md:py-14 lg:py-16">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} className="md:border-r md:pr-12 rule lg:pr-16">
          <h1 className="display-title">Invest in<br /><span className="inline-block w-max origin-left scale-x-[.84] whitespace-nowrap">your future.</span></h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Learn markets, build portfolios, compete in stock pitches, and discover the world of finance — all at Solon High School.
          </p>
          <Link href="/schedule" className="editorial-button group mt-7">
            View schedule <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.7} />
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} className="min-w-0 md:pl-12 lg:pl-16">
          <h2 className="text-[clamp(3rem,5.5vw,5.5rem)] font-bold leading-none tracking-[-0.065em]">Every other Monday</h2>
          <div className="mt-7 grid grid-cols-2 border-y py-5 text-sm rule sm:text-base">
            <span>3:00 PM – 4:00 PM</span><span className="text-right">Room 227</span>
          </div>
          <p className="mt-6 max-w-lg text-base leading-relaxed">First meeting: Tuesday, September 8.<br />Open to all Solon High School students. No experience required.</p>
          <div className="stats-grid mt-9">
            {[
              ["50+", "Active members"], ["6+", "Competitions"], ["3+", "Guest speakers"],
            ].map(([value, label]) => (
              <div key={label} className="stat">
                <strong className="block text-2xl font-bold tracking-[-0.05em] text-primary">{value}</strong>
                <span className="mt-1 block text-sm leading-snug text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <MarketSnapshot />

      <section className="border-b-2 py-7 rule sm:py-8">
        <h2 className="section-label">What we do</h2>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => (
            <motion.article
              key={feature.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              className={`editorial-row border-t py-5 hairline sm:px-6 lg:border-l lg:border-t-0 lg:py-0 ${index === 0 ? "sm:pr-6 lg:border-l-0 lg:pl-0" : ""}`}
            >

              <h3 className="mt-2 text-base font-bold tracking-[-0.02em]">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="grid gap-12 py-14 lg:grid-cols-[.72fr_1.28fr] lg:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl">Build your<br />market fluency.</h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">Market news, research, and investing fundamentals.</p>
          <Link href="/about" className="editorial-link mt-7">About the club</Link>
        </motion.div>
        <div className="border-t-2 rule">
          {resources.map((resource) => (
            <motion.a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="editorial-row grid grid-cols-[1fr_auto] items-center gap-4 border-b py-5 hairline"
            >

              <span><strong className="block text-lg tracking-[-0.025em]">{resource.title}</strong><small className="text-muted-foreground">{resource.body}</small></span>
              <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
            </motion.a>
          ))}
        </div>
      </section>

    </div>
  );
}
