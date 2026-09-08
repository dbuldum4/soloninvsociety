'use client';

import { ExternalLink } from 'lucide-react';
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
  { id: 'wharton', name: 'Wharton Global High School Investment Competition', registrationDeadline: 'Open for 2026–27', description: 'Build and defend an investment strategy for a real-world client.', eligibility: 'Grades 9–12 worldwide', teamSize: '4–6 + advisor', website: 'https://globalyouth.wharton.upenn.edu/competitions/investment-competition/' },
  { id: 'npfc', name: 'National Personal Finance Challenge', registrationDeadline: 'TBD', description: 'Test your knowledge of saving, investing, credit, and personal finance.', eligibility: 'High school', teamSize: '3-4', website: 'https://www.councilforeconed.org/programs/for-students/national-personal-finance-challenge/' },
  { id: 'yis', name: 'YIS Global Stock Pitch Competition', registrationDeadline: 'See 2026–27 schedule', description: 'Research a company and defend your stock pitch to investment professionals.', eligibility: 'High school', teamSize: '1–2', website: 'https://yis.org/programs/stock-pitch-competition/' },
  { id: 'nec', name: 'National Economics Challenge', registrationDeadline: 'Varies by state', description: 'Compete in microeconomics, macroeconomics, and the global economy.', eligibility: 'High school', teamSize: '3-4', website: 'https://www.councilforeconed.org/nec/' },
  { id: 'budget-challenge', name: 'Budget Challenge', registrationDeadline: 'Rolling', description: 'Practice managing money, paying bills, and making financial decisions.', eligibility: 'High school', teamSize: 'Individual', website: 'https://www.ngpf.org/budget-challenge/' },
  { id: 'osmc', name: 'Ohio Stock Market Challenge', registrationDeadline: '2026-10-26', description: 'Trade a virtual portfolio against high-school teams across Ohio.', eligibility: 'Ohio high school', teamSize: '1–5', website: 'https://ohiosms.stocktrak.com/' },
  { id: 'ja-cleveland', name: 'JA Greater Cleveland Stock Market Challenge', registrationDeadline: '2026–27 announcement TBD', description: 'Manage a mock portfolio in a fast-paced, one-day trading challenge.', eligibility: 'Northeast Ohio high school', teamSize: '3–4', website: 'https://greatercleveland.ja.org/' },
  { id: 'fbla-smg', name: 'FBLA Stock Market Game', registrationDeadline: 'See 2026–27 schedule', description: 'Manage a virtual portfolio and compete against the S&P 500.', eligibility: 'Paid high school FBLA members', teamSize: '1–5', website: 'https://www.fbla.org/hs-ce-26-27/' },
  { id: 'deca-smg', name: 'DECA Stock Market Game', registrationDeadline: 'See current DECA schedule', description: 'Manage a portfolio and present your investment strategy to judges.', eligibility: 'High school DECA members', teamSize: '1–3', website: 'https://www.deca.org/compete/stock-market-game' },
  { id: 'kstate', name: 'K-State High School Investment Competition', registrationDeadline: '2027 dates TBD', description: 'Build a virtual portfolio and defend your strategy and results.', eligibility: 'High school', teamSize: '3–5', website: 'https://cba.k-state.edu/academics/departments/finance/hs-investment-management.html' },
];

export default function CompetitionsPage() {
  return (
    <div className="container">
      <header className="page-header"><h1 className="page-title">Competitions</h1></header>

      <div className="grid md:grid-cols-2">
        {competitions.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`group border-b-2 py-9 rule md:px-8 ${i % 2 === 0 ? 'md:border-r md:pl-0' : 'md:pr-0'} ${i >= competitions.length - 2 ? 'md:border-b-0' : ''}`}
          >
            <h2 className="max-w-xl text-2xl font-bold leading-tight tracking-[-.04em] sm:text-3xl">{c.name}</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            <p className="mt-5 text-sm text-muted-foreground">
              {c.eligibility} <span aria-hidden="true">·</span> {c.teamSize === 'Individual' ? 'Individual entry' : `Team: ${c.teamSize}`}
            </p>
            {/^\d{4}-\d{2}-\d{2}$/.test(c.registrationDeadline) && (
              <p className="mt-2 text-sm">Register by {formatDeadline(c.registrationDeadline)}</p>
            )}
            <a href={c.website} target="_blank" rel="noopener noreferrer" className="editorial-link mt-6">
              Competition details <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 grid gap-10 border-y-2 py-10 rule sm:grid-cols-2 sm:py-12"
      >
        <div>
          <h2 className="mt-3 text-3xl font-bold tracking-[-.04em]">Investopedia Simulator</h2>
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
