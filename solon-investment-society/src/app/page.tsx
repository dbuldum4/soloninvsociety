"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  TrendingUp,
  Mic,
  BookOpen,
  ExternalLink,
  Trophy,
  Users,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

const show = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.55, ease: [0.25, 1, 0.5, 1] },
  }),
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ───── Hero ───── */}
      <section className="relative isolate overflow-hidden border-b border-border">
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        <div className="container py-28 sm:py-36 lg:py-44">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={show}
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1 text-xs font-medium text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Solon High School Investment Club
            </motion.div>

            <motion.h1
              variants={show}
              custom={1}
              className="mt-8 text-5xl font-extrabold tracking-tighter sm:text-7xl lg:text-8xl"
            >
              Invest in
              <br />
              <span className="text-primary">your future.</span>
            </motion.h1>

            <motion.p
              variants={show}
              custom={2}
              className="mx-auto mt-6 max-w-lg text-base text-muted-foreground sm:text-lg"
            >
              Learn markets, build portfolios, compete in stock pitches, and
              discover the world of finance — all at Solon High School.
            </motion.p>

            <motion.div
              variants={show}
              custom={3}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link
                href="/schedule"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                View Schedule
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───── Stats strip ───── */}
      <section className="border-b border-border bg-muted/30">
        <div className="container grid grid-cols-2 divide-x divide-border sm:grid-cols-4">
          {[
            { label: "Active Members", value: "50+" },
            { label: "Weekly Meetings", value: "Every Mon" },
            { label: "Competitions", value: "6+" },
            { label: "Guest Speakers", value: "3+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="px-4 py-6 text-center sm:py-8"
            >
              <div className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── Bento features ───── */}
      <section className="container py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            What we do
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything you need to start investing.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* Large card */}
          <BentoCard
            i={0}
            className="lg:col-span-2 lg:row-span-2"
            icon={<BarChart3 className="h-5 w-5" />}
            title="Weekly Meetings"
            body="Hands-on sessions every Monday covering markets, investing strategies, financial analysis, and real-time portfolio management."
            large
          />
          <BentoCard
            i={1}
            icon={<Briefcase className="h-5 w-5" />}
            title="Stock Pitches"
            body="Develop research, build investment theses, and present to peers for feedback."
          />
          <BentoCard
            i={2}
            icon={<TrendingUp className="h-5 w-5" />}
            title="Portfolio Challenge"
            body="Simulated investing with real market data and friendly competition between members."
          />
          <BentoCard
            i={3}
            icon={<Mic className="h-5 w-5" />}
            title="Guest Speakers"
            body="Hear from finance professionals, analysts, and accomplished alumni."
          />
          <BentoCard
            i={4}
            icon={<Trophy className="h-5 w-5" />}
            title="Competitions"
            body="Compete nationwide in Wharton, NPFC, Young Investors, and more."
          />
        </div>
      </section>

      {/* ───── Resources ───── */}
      <section className="border-t border-border bg-muted/30 py-20 sm:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Resources
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Level up your knowledge.
            </h2>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Investopedia Academy", desc: "Comprehensive investing courses and guides.", link: "https://www.investopedia.com/investing-4427685" },
              { title: "Yahoo Finance", desc: "Track markets, financial news, and portfolios.", link: "https://finance.yahoo.com/" },
              { title: "Bloomberg Markets", desc: "Global business and financial market analysis.", link: "https://www.bloomberg.com/markets" },
              { title: "Seeking Alpha", desc: "Stock market insights and investment research.", link: "https://seekingalpha.com/" },
              { title: "Morningstar", desc: "Independent investment research and ratings.", link: "https://www.morningstar.com/" },
              { title: "Khan Academy — Finance", desc: "Free courses on finance and capital markets.", link: "https://www.khanacademy.org/economics-finance-domain/core-finance" },
            ].map((r, i) => (
              <motion.a
                key={r.title}
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30 hover:bg-primary/[0.03]"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                    {r.desc}
                  </p>
                </div>
                <ExternalLink className="ml-auto mt-1 h-3.5 w-3.5 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="relative isolate overflow-hidden border-t border-border">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-primary/8 blur-[100px]" />
        </div>
        <div className="container py-20 text-center sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Reach out at{" "}
              <a
                href="mailto:soloninvestmentsociety@gmail.com"
                className="font-medium text-primary hover:underline"
              >
                soloninvestmentsociety@gmail.com
              </a>
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/schedule"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Meeting Schedule
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/competitions"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Browse Competitions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ─── Bento card ─── */
function BentoCard({
  icon,
  title,
  body,
  className = "",
  large = false,
  i,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  className?: string;
  large?: boolean;
  i: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.07, duration: 0.4 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/25 ${
        large ? "flex flex-col justify-between sm:p-8" : ""
      } ${className}`}
    >
      <div>
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {icon}
        </div>
        <h3 className={`font-bold ${large ? "text-xl sm:text-2xl" : "text-base"}`}>
          {title}
        </h3>
        <p className={`mt-2 leading-relaxed text-muted-foreground ${large ? "text-sm sm:text-base" : "text-sm"}`}>
          {body}
        </p>
      </div>
      {/* Decorative gradient on hover */}
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-opacity opacity-0 group-hover:opacity-100" />
    </motion.div>
  );
}
