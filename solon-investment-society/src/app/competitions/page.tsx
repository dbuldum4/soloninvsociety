'use client';

import { ExternalLink, Trophy, Calendar, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';

function formatDeadline(d: string) {
  const iso = /^\d{4}-\d{2}-\d{2}$/;
  if (iso.test(d)) {
    const [y, m, day] = d.split('-').map(Number);
    return new Date(y, m - 1, day).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  }
  const ts = Date.parse(d);
  if (!Number.isNaN(ts))
    return new Date(ts).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  return d;
}

const competitions = [
  { id: 'wharton', name: 'Wharton Global High School Investment Competition', organizer: 'University of Pennsylvania', registrationDeadline: '2025-09-12', competitionPeriod: 'October – December 2025', description: 'A global competition where teams of 4-6 students manage a virtual $100,000 portfolio and compete against other schools worldwide.', eligibility: 'Grades 9-12', teamSize: '4-6', prizes: ['Global recognition', 'Scholarship opportunities', 'Networking with finance professionals'], website: 'https://globalyouth.wharton.upenn.edu/competitions/investment-competition/' },
  { id: 'npfc', name: 'National Personal Finance Challenge', organizer: 'Council for Economic Education', registrationDeadline: 'TBD', competitionPeriod: 'January – May 2026', description: 'Build and demonstrate knowledge of earning income, spending, saving, investing, managing credit, and managing risk.', eligibility: 'High school', teamSize: '3-4', prizes: ['National finals', 'Scholarships', 'Recognition'], website: 'https://www.councilforeconed.org/programs/for-students/national-personal-finance-challenge/' },
  { id: 'yis', name: 'Young Investors Society Stock Pitch', organizer: 'Young Investors Society', registrationDeadline: 'February 2026', competitionPeriod: 'March – April 2026', description: 'Students research and present a stock pitch to a panel of judges. Top teams advance to the national competition.', eligibility: 'High school', teamSize: '1-5', prizes: ['National recognition', 'Scholarships', 'Mentorship'], website: 'https://yis.org/' },
  { id: 'nec', name: 'National Economics Challenge', organizer: 'Council for Economic Education', registrationDeadline: 'Varies by state', competitionPeriod: 'January – April 2026', description: 'A competition focusing on micro and macroeconomic concepts as well as knowledge of the world economy.', eligibility: 'High school', teamSize: '3-4', prizes: ['National finals', 'Scholarships', 'Recognition'], website: 'https://www.councilforeconed.org/nec/' },
  { id: 'budget-challenge', name: 'Budget Challenge', organizer: 'Next Gen Personal Finance', registrationDeadline: 'Rolling', competitionPeriod: 'Ongoing', description: 'A personal finance simulation that teaches students how to manage money, pay bills, and make smart financial decisions.', eligibility: 'High school', teamSize: 'Individual', prizes: ['Scholarships', 'Classroom grants'], website: 'https://www.ngpf.org/budget-challenge/' },
  { id: 'osmc', name: 'Ohio Stock Market Competition', organizer: 'Ohio Council on Economic Education', registrationDeadline: 'Varies', competitionPeriod: 'Fall & Spring semesters', description: 'A state-wide competition where students manage a virtual investment portfolio and compete against other Ohio schools.', eligibility: 'Ohio HS', teamSize: '3-5', prizes: ['Cash prizes', 'Recognition'], website: 'https://www.econedohio.org/programs/stock-market-competition/' },
];

export default function CompetitionsPage() {
  return (
    <div className="container py-16 sm:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Compete
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tighter sm:text-5xl">
          Investment Competitions
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Test your investment knowledge and compete against students nationwide.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {competitions.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/25"
          >
            {/* Header bar */}
            <div className="border-b border-border bg-secondary/50 px-5 py-4">
              <h2 className="text-base font-bold leading-snug sm:text-lg">
                {c.name}
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {c.organizer}
              </p>
            </div>

            <div className="p-5">
              {/* Meta */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  { icon: <Calendar className="h-3.5 w-3.5" />, label: 'Deadline', val: formatDeadline(c.registrationDeadline) },
                  { icon: <Target className="h-3.5 w-3.5" />, label: 'Period', val: c.competitionPeriod },
                  { icon: <Users className="h-3.5 w-3.5" />, label: 'Eligibility', val: c.eligibility },
                  { icon: <Users className="h-3.5 w-3.5" />, label: 'Team', val: c.teamSize },
                ].map((m) => (
                  <div key={m.label} className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">{m.icon}</span>
                    <div>
                      <span className="text-muted-foreground">{m.label}</span>
                      <p className="font-semibold text-foreground">{m.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>

              {/* Prizes */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.prizes.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary"
                  >
                    <Trophy className="h-3 w-3" />
                    {p}
                  </span>
                ))}
              </div>

              <a
                href={c.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Official website <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mt-14 grid gap-6 rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 sm:grid-cols-2 sm:p-8"
      >
        <div>
          <h2 className="text-xl font-bold">Investopedia Simulator</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Practice trading with virtual money in a realistic market
            simulation. The top performer in our club receives a $100 prize!
          </p>
          <a
            href="https://www.investopedia.com/simulator"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            Try Investopedia Simulator <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-lg font-bold">Interested in competing?</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Join us for support, resources, and team matching.
          </p>
          <a
            href="mailto:soloninvestmentsociety@gmail.com"
            className="mt-4 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}
