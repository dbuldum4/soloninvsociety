"use client";

import { Target, Users, BookOpen, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const show = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.1 + i * 0.08, duration: 0.45, ease: [0.25, 1, 0.5, 1] },
});

export default function AboutPage() {
  return (
    <div className="container py-16 sm:py-24">
      {/* Header */}
      <motion.div {...show(0)} className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          About
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tighter sm:text-5xl">
          Building financial literacy,
          <br />
          <span className="text-primary">one meeting at a time.</span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground leading-relaxed sm:text-lg">
          Solon Investment Society is a student-led club at Solon High School
          focused on building financial literacy and practical investing skills.
          We host weekly meetings that combine foundational lessons with
          hands-on activities.
        </p>
      </motion.div>

      {/* Two-column cards */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        <motion.div
          {...show(1)}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BookOpen className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold">What we do</h2>
          <ul className="mt-4 space-y-3">
            {[
              "Intro to markets, equities, ETFs, and portfolio theory",
              "Company research and stock pitch workshops",
              "Portfolio simulations and challenges",
              "Guest speakers from finance and alumni network",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          {...show(2)}
          className="rounded-2xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Users className="h-5 w-5" />
          </div>
          <h2 className="text-lg font-bold">Who should join</h2>
          <ul className="mt-4 space-y-3">
            {[
              "Anyone curious about investing, finance, or business",
              "No prior experience required",
              "We welcome beginners and experienced students alike",
              "Open to all Solon High School students",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Mission */}
      <motion.div
        {...show(3)}
        className="mt-6 rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Target className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Our Mission</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Empower students with the knowledge and confidence to make
              informed financial decisions, communicate investment ideas
              effectively, and learn by doing. We believe that financial
              literacy is a critical life skill that every student deserves
              access to.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div {...show(4)} className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { value: "50+", label: "Active Members" },
          { value: "Weekly", label: "Meetings" },
          { value: "6+", label: "Competitions" },
          { value: "3+", label: "Guest Speakers" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-border bg-card p-5 text-center"
          >
            <div className="text-2xl font-extrabold tracking-tight text-primary">
              {stat.value}
            </div>
            <div className="mt-1 text-xs font-medium text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
