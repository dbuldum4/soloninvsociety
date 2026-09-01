"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1] as const;

const features = [
  { number: "01", title: "Weekly Meetings", body: "Hands-on sessions every Monday covering markets, investing strategies, and portfolio management." },
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

function MarketLine() {
  const path = "M0 45 C25 42 31 27 55 31 C78 35 90 20 112 30 C137 41 150 18 171 26 C194 34 215 24 235 27 C257 30 270 6 292 18 C319 33 337 12 363 19 C388 25 405 16 425 22 C451 29 468 41 492 35 C515 30 531 44 553 36 C579 27 592 33 620 27";
  return (
    <svg viewBox="0 0 620 60" preserveAspectRatio="none" className="h-16 w-full" role="img" aria-label="S&P 500 intraday market line">
      <path d={path} fill="none" stroke="var(--primary)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="container">
      <section className="grid gap-12 py-14 md:grid-cols-[1.05fr_.95fr] md:gap-0 md:py-14 lg:py-16">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: easing }} className="md:border-r md:pr-12 rule lg:pr-16">
          <p className="eyebrow">Solon High School Investment Club</p>
          <h1 className="display-title mt-8">Invest in<br /><span className="inline-block w-max origin-left scale-x-[.84] whitespace-nowrap">your future.</span></h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Learn markets, build portfolios, compete in stock pitches, and discover the world of finance — all at Solon High School.
          </p>
          <Link href="/schedule" className="editorial-button group mt-7">
            View schedule <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.7} />
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.13, duration: 0.65, ease: easing }} className="md:pl-12 lg:pl-16">
          <p className="eyebrow">Weekly meeting</p>
          <h2 className="mt-5 text-[clamp(3rem,5.5vw,5.5rem)] font-bold leading-none tracking-[-0.065em]">Every Monday</h2>
          <div className="mt-7 grid grid-cols-2 border-y py-5 text-sm rule sm:text-base">
            <span>3:00 PM – 4:00 PM</span><span className="text-right">Room 227</span>
          </div>
          <p className="mt-6 max-w-lg text-base leading-relaxed">Open to all Solon High School students.<br />No experience required.</p>
          <div className="mt-9 grid grid-cols-2 border-t hairline sm:grid-cols-4">
            {[
              ["50+", "Active members"], ["Weekly", "Meetings"], ["6+", "Competitions"], ["3+", "Guest speakers"],
            ].map(([value, label], index) => (
              <div key={label} className={`py-5 ${index % 2 ? "border-l pl-5" : ""} ${index > 1 ? "border-t sm:border-t-0" : ""} sm:border-l sm:first:border-l-0 sm:px-5 sm:first:pl-0 hairline`}>
                <strong className="block text-2xl font-bold tracking-[-0.05em] text-primary">{value}</strong>
                <span className="mt-1 block text-[9px] font-semibold uppercase leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32, duration: 0.7 }} className="grid border-y-2 py-5 rule lg:grid-cols-[230px_1fr_190px] lg:items-center lg:gap-8">
        <div>
          <h2 className="text-xs font-bold uppercase">Market snapshot</h2>
          <p className="mt-1 text-xs text-muted-foreground">Live market overview</p>
        </div>
        <div className="mt-5 min-w-0 border-y py-2 hairline lg:mt-0 lg:border-y-0">
          <div className="flex justify-between font-mono text-[9px] text-muted-foreground"><span>9:30 AM</span><span>11:00 AM</span><span>12:30 PM</span><span>2:00 PM</span><span>4:00 PM</span></div>
          <MarketLine />
        </div>
        <div className="mt-5 lg:mt-0">
          <span className="text-xs font-bold">S&amp;P 500</span>
          <strong className="mt-1 block text-3xl font-bold tracking-[-0.04em] text-primary">5,647.31</strong>
          <span className="text-sm text-primary">+0.45% &nbsp;+25.21</span>
        </div>
      </motion.section>

      <section className="border-b-2 py-7 rule sm:py-8">
        <p className="eyebrow">What we do</p>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => (
            <motion.article
              key={feature.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.06, duration: 0.45, ease: easing }}
              className={`editorial-row border-t py-5 hairline sm:px-6 lg:border-l lg:border-t-0 lg:py-0 ${index === 0 ? "sm:pr-6 lg:border-l-0 lg:pl-0" : ""}`}
            >
              <span className="text-[11px] font-bold text-primary">{feature.number}</span>
              <h3 className="mt-2 text-base font-bold tracking-[-0.02em]">{feature.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{feature.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="grid gap-12 py-14 lg:grid-cols-[.72fr_1.28fr] lg:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="eyebrow">Keep learning</p>
          <h2 className="mt-4 text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl">Build your<br />market fluency.</h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">The best investors stay curious. Explore trusted sources for market news, research, and foundational finance.</p>
          <Link href="/about" className="editorial-link mt-7">About the club</Link>
        </motion.div>
        <div className="border-t-2 rule">
          {resources.map((resource, index) => (
            <motion.a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="editorial-row grid grid-cols-[2rem_1fr_auto] items-center gap-4 border-b py-5 hairline"
            >
              <span className="font-mono text-[10px] text-primary">0{index + 1}</span>
              <span><strong className="block text-lg tracking-[-0.025em]">{resource.title}</strong><small className="text-muted-foreground">{resource.body}</small></span>
              <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
            </motion.a>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8 border-y-2 py-10 rule sm:flex-row sm:items-end sm:justify-between sm:py-12">
        <div><p className="eyebrow">Next meeting</p><h2 className="mt-3 text-4xl font-bold tracking-[-0.055em] sm:text-6xl">Make Monday count.</h2></div>
        <Link href="/schedule" className="editorial-button group shrink-0">See the schedule <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
      </section>
    </div>
  );
}
