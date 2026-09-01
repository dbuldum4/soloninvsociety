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
      <header className="grid gap-10 border-b-2 py-14 rule lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:py-20">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}>
          <p className="eyebrow">About the society</p>
          <h1 className="page-title mt-6">Finance should feel learnable.</h1>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }} className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:border-l lg:pl-10 rule">
          Solon Investment Society is a student-led club focused on building financial literacy and practical investing skills through weekly lessons, research, and hands-on activities.
        </motion.p>
      </header>

      <section className="grid border-b-2 rule lg:grid-cols-[.72fr_1.28fr]">
        <div className="py-10 lg:border-r lg:py-16 lg:pr-12 rule">
          <p className="eyebrow">Our mission</p>
          <p className="mt-7 text-2xl font-semibold leading-snug tracking-[-0.035em] sm:text-4xl">
            Give every student the knowledge and confidence to make informed financial decisions.
          </p>
        </div>
        <div className="border-t py-10 hairline lg:border-t-0 lg:py-16 lg:pl-12">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            We believe financial literacy is a critical life skill. Our members learn to communicate investment ideas clearly, evaluate evidence objectively, and build good habits through real practice—not hype.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-px bg-[var(--hairline)] sm:grid-cols-4">
            {[["50+", "Members"], ["Weekly", "Meetings"], ["6+", "Competitions"], ["Open", "To all students"]].map(([value, label]) => (
              <div key={label} className="bg-background px-4 py-5">
                <strong className="block text-2xl tracking-[-0.045em] text-primary">{value}</strong>
                <span className="text-[10px] font-semibold uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <p className="eyebrow">How we learn</p>
        <div className="mt-6 border-t-2 rule">
          {principles.map(([number, title, body], index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .05 }}
              className="editorial-row grid gap-3 border-b py-6 hairline sm:grid-cols-[4rem_.75fr_1.25fr] sm:items-baseline"
            >
              <span className="font-mono text-[11px] text-primary">{number}</span>
              <h2 className="text-xl font-bold tracking-[-0.03em]">{title}</h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 border-y-2 py-10 rule sm:grid-cols-[1fr_auto] sm:items-end">
        <div><p className="eyebrow">Who should join</p><h2 className="mt-3 text-4xl font-bold tracking-[-0.055em] sm:text-5xl">Curiosity is the only prerequisite.</h2><p className="mt-4 text-sm text-muted-foreground">Open to every Solon High School student. No prior finance experience required.</p></div>
        <Link href="/schedule" className="editorial-button group">Find a meeting <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
      </section>
    </div>
  );
}
