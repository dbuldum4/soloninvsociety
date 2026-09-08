"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const principles = [
  ["01", "Learn the language", "Understand markets, equities, ETFs, financial statements, and portfolio theory."],
  ["02", "Research with rigor", "Turn curiosity into company research, investment theses, and thoughtful stock pitches."],
  ["03", "Practice in public", "Build simulated portfolios, debate ideas, and learn from feedback without risking capital."],
  ["04", "Meet the industry", "Hear directly from finance professionals, analysts, advisors, and alumni."],
];

export default function AboutPage() {
  return (
    <div className="container">
      <header className="page-header"><h1 className="page-title">About</h1></header>
      <p className="max-w-2xl py-8 text-lg leading-relaxed text-muted-foreground">
        We’re a student-led investing club at Solon High School. Learn how markets work, research companies, and practice building portfolios.
      </p>

      <section className="pb-10">
        <h2 className="section-label">How we learn</h2>
        <div className="mt-6 border-t-2 rule">
          {principles.map(([number, title, body]) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="editorial-row grid gap-3 border-b py-6 hairline sm:grid-cols-[.75fr_1.25fr] sm:items-baseline"
            >

              <h2 className="text-xl font-bold tracking-[-0.03em]">{title}</h2>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-y-2 py-10 rule sm:grid-cols-[1fr_auto] sm:items-end">
        <div><h2 className="mt-3 text-4xl font-bold tracking-[-0.055em] sm:text-5xl">Curiosity is the only prerequisite.</h2><p className="mt-4 text-sm text-muted-foreground">Open to every Solon High School student. No prior finance experience required.</p></div>
        <Link href="/schedule" className="editorial-button group">Find a meeting <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
      </section>
    </div>
  );
}
