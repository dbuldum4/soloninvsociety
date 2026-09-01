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
    <div className="container">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b-2 py-14 rule lg:py-20"
      >
        <p className="eyebrow">Compete</p>
        <h1 className="page-title mt-6">Put your thesis to the test.</h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">Research, collaborate, and compete against high school investors from Ohio and across the world.</p>
      </motion.header>

      <div className="grid md:grid-cols-2">
        {competitions.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className={`group border-b-2 py-9 rule md:px-8 ${i % 2 === 0 ? 'md:border-r md:pl-0' : 'md:pr-0'} ${i < 4 ? '' : 'md:border-b-0'}`}
          >
            <div className="flex items-start justify-between gap-6">
              <div><span className="font-mono text-[10px] text-primary">{String(i + 1).padStart(2, '0')}</span><p className="mt-2 text-[10px] font-bold uppercase tracking-[.08em] text-muted-foreground">{c.organizer}</p></div>
              <Trophy className="h-5 w-5 text-primary" strokeWidth={1.4} />
            </div>
            <h2 className="mt-6 max-w-xl text-2xl font-bold leading-tight tracking-[-.04em] sm:text-3xl">{c.name}</h2>
            <div className="mt-6 border-t pt-5 hairline">
              <div className="grid grid-cols-2 gap-x-5 gap-y-4 text-xs">
                {[
                  { icon: <Calendar className="h-3.5 w-3.5" />, label: 'Deadline', val: formatDeadline(c.registrationDeadline) },
                  { icon: <Target className="h-3.5 w-3.5" />, label: 'Period', val: c.competitionPeriod },
                  { icon: <Users className="h-3.5 w-3.5" />, label: 'Eligibility', val: c.eligibility },
                  { icon: <Users className="h-3.5 w-3.5" />, label: 'Team', val: c.teamSize },
                ].map((m) => (
                  <div key={m.label} className="flex items-start gap-2">
                    <span className="mt-0.5 text-primary">{m.icon}</span>
                    <div>
                      <span className="text-[9px] font-bold uppercase text-muted-foreground">{m.label}</span>
                      <p className="font-semibold text-foreground">{m.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 border-y py-3 hairline">
                {c.prizes.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase text-primary"
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
                className="editorial-link mt-6"
              >
                Official website <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="mt-4 grid gap-10 border-y-2 py-10 rule sm:grid-cols-2 sm:py-12"
      >
        <div>
          <p className="eyebrow">Practice first</p><h2 className="mt-3 text-3xl font-bold tracking-[-.04em]">Investopedia Simulator</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Practice trading with virtual money in a realistic market
            simulation. The top performer in our club receives a $100 prize!
          </p>
          <a
            href="https://www.investopedia.com/simulator"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link mt-5"
          >
            Try Investopedia Simulator <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="flex flex-col items-start justify-center border-t pt-8 sm:border-l sm:border-t-0 sm:pl-10 sm:pt-0 hairline">
          <h3 className="text-3xl font-bold tracking-[-.04em]">Interested in competing?</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Join us for support, resources, and team matching.
          </p>
          <a
            href="mailto:soloninvestmentsociety@gmail.com"
            className="editorial-button mt-5"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}
