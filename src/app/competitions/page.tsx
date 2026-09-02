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
  { id: 'wharton', name: 'Wharton Global High School Investment Competition', organizer: 'Wharton Global Youth Program', registrationDeadline: 'Open for 2026–27', competitionPeriod: '2026–27 season', description: 'Teams build and defend an investment strategy for a real-world client case—not simply the highest return—using portfolio construction, company analysis, diversification, risk management, and written and presentation skills.', eligibility: 'Grades 9–12 worldwide', teamSize: '4–6 + advisor', prizes: ['Global recognition', 'Finale at Wharton', 'Industry feedback'], website: 'https://globalyouth.wharton.upenn.edu/competitions/investment-competition/' },
  { id: 'npfc', name: 'National Personal Finance Challenge', organizer: 'Council for Economic Education', registrationDeadline: 'TBD', competitionPeriod: 'January – May 2026', description: 'Build and demonstrate knowledge of earning income, spending, saving, investing, managing credit, and managing risk.', eligibility: 'High school', teamSize: '3-4', prizes: ['National finals', 'Scholarships', 'Recognition'], website: 'https://www.councilforeconed.org/programs/for-students/national-personal-finance-challenge/' },
  { id: 'yis', name: 'YIS Global Stock Pitch Competition', organizer: 'Young Investors Society', registrationDeadline: 'See 2026–27 schedule', competitionPeriod: 'Annual global tournament', description: 'Students choose a publicly traded company, perform financial analysis, and submit a report, slide deck, and recorded Buy or Sell pitch before defending their thesis to investment professionals.', eligibility: 'High school', teamSize: '1–2', prizes: ['Global Youth Investment Summit', 'Live championship', 'Professional feedback'], website: 'https://yis.org/programs/stock-pitch-competition/' },
  { id: 'nec', name: 'National Economics Challenge', organizer: 'Council for Economic Education', registrationDeadline: 'Varies by state', competitionPeriod: 'January – April 2026', description: 'A competition focusing on micro and macroeconomic concepts as well as knowledge of the world economy.', eligibility: 'High school', teamSize: '3-4', prizes: ['National finals', 'Scholarships', 'Recognition'], website: 'https://www.councilforeconed.org/nec/' },
  { id: 'budget-challenge', name: 'Budget Challenge', organizer: 'Next Gen Personal Finance', registrationDeadline: 'Rolling', competitionPeriod: 'Ongoing', description: 'A personal finance simulation that teaches students how to manage money, pay bills, and make smart financial decisions.', eligibility: 'High school', teamSize: 'Individual', prizes: ['Scholarships', 'Classroom grants'], website: 'https://www.ngpf.org/budget-challenge/' },
  { id: 'osmc', name: 'Ohio Stock Market Challenge', organizer: 'Ohio Stock Market Challenge', registrationDeadline: '2026-10-26', competitionPeriod: 'October 5 – December 11, 2026', description: 'Ohio teams trade stocks, preferred stocks, and mutual funds in a virtual portfolio while competing in separate high-school and regional rankings.', eligibility: 'Ohio high school', teamSize: '1–5', prizes: ['State rankings', 'Regional rankings', 'Recognition'], website: 'https://ohiosms.stocktrak.com/' },
  { id: 'ja-cleveland', name: 'JA Greater Cleveland Stock Market Challenge', organizer: 'Junior Achievement of Greater Cleveland', registrationDeadline: '2026–27 announcement TBD', competitionPeriod: 'One-day live challenge', description: 'Teams trade a $1 million mock portfolio through a fast-paced simulated 60-day market, with each market day compressed into 60 seconds. Contact JA Greater Cleveland to join the next Northeast Ohio event.', eligibility: 'Northeast Ohio high school', teamSize: '3–4', prizes: ['$500 team award', 'Future Bound advancement', 'Regional recognition'], website: 'https://greatercleveland.ja.org/' },
  { id: 'fbla-smg', name: 'FBLA Stock Market Game', organizer: 'Future Business Leaders of America', registrationDeadline: 'See 2026–27 schedule', competitionPeriod: '10-week session', description: 'FBLA members manage a hypothetical $100,000 portfolio and are ranked by percentage performance relative to the S&P 500.', eligibility: 'Paid high school FBLA members', teamSize: '1–5', prizes: ['National recognition', 'Performance rankings', 'Competitive event experience'], website: 'https://www.fbla.org/hs-ce-26-27/' },
  { id: 'deca-smg', name: 'DECA Stock Market Game', organizer: 'DECA', registrationDeadline: 'See current DECA schedule', competitionPeriod: 'Annual online session', description: 'Competitors manage an investment portfolio, and qualifying students advance to explain and defend their portfolio strategy in a judged presentation.', eligibility: 'High school DECA members', teamSize: '1–3', prizes: ['Qualifying recognition', 'Judged presentation', 'ICDC pathway'], website: 'https://www.deca.org/compete/stock-market-game' },
  { id: 'kstate', name: 'K-State High School Investment Competition', organizer: 'Kansas State University College of Business', registrationDeadline: '2027 dates TBD', competitionPeriod: 'Spring; 2027 dates TBD', description: 'Teams manage a $1 million StockTrak portfolio and are evaluated on total return, risk-adjusted return, and the quality of their documented investment strategy and presentation.', eligibility: 'High school', teamSize: '3–5', prizes: ['$1,000 first-place scholarships', '$750 second-place scholarships', '$500 third-place scholarships'], website: 'https://cba.k-state.edu/academics/departments/finance/hs-investment-management.html' },
];

export default function CompetitionsPage() {
  return (
    <div className="container">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b-2 py-14 rule lg:py-20"
      >
        <p className="eyebrow">Competitions</p>
        <h1 className="page-title mt-6">Put your skills to the test.</h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">Research, collaborate, and compete against high school investors from Ohio and across the world.</p>
      </motion.header>

      <div className="grid md:grid-cols-2">
        {competitions.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className={`group border-b-2 py-9 rule md:px-8 ${i % 2 === 0 ? 'md:border-r md:pl-0' : 'md:pr-0'} ${i >= competitions.length - 2 ? 'md:border-b-0' : ''}`}
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
