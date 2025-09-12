'use client';

function formatRegistrationDeadline(deadline: string) {
  // If the date is in YYYY-MM-DD format, parse as a local date to avoid timezone shifts
  const isoDateOnly = /^\d{4}-\d{2}-\d{2}$/;
  if (isoDateOnly.test(deadline)) {
    const [yearStr, monthStr, dayStr] = deadline.split('-');
    const year = Number(yearStr);
    const month = Number(monthStr);
    const day = Number(dayStr);
    const dt = new Date(year, month - 1, day);
    return dt.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  const timestamp = Date.parse(deadline);
  if (!Number.isNaN(timestamp)) {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  return deadline;
}

const competitions = [
  {
    id: 'wharton',
    name: 'Wharton Global High School Investment Competition',
    organizer: 'University of Pennsylvania',
    registrationDeadline: '2025-09-12',
    competitionPeriod: 'October - December 2025',
    description: 'A global competition where teams of 4-6 students manage a virtual $100,000 portfolio and compete against other schools worldwide.',
    eligibility: 'High school students in grades 9-12',
    teamSize: '4-6 students per team',
    prizes: ['Global recognition', 'Scholarship opportunities', 'Networking with finance professionals'],
    website: 'https://globalyouth.wharton.upenn.edu/competitions/investment-competition/'
  },
  {
    id: 'npfc',
    name: 'National Personal Finance Challenge',
    organizer: 'Council for Economic Education',
    registrationDeadline: 'TBD',
    competitionPeriod: 'January - May 2026',
    description: 'A team competition that provides students with the opportunity to build and demonstrate their knowledge of earning income, spending, saving, investing, managing credit, and managing risk.',
    eligibility: 'High school students',
    teamSize: '3-4 students per team',
    prizes: ['National finals', 'Scholarships', 'Recognition'],
    website: 'https://www.councilforeconed.org/programs/for-students/national-personal-finance-challenge/'
  },
  {
    id: 'yis',
    name: 'Young Investors Society Stock Pitch Competition',
    organizer: 'Young Investors Society',
    registrationDeadline: 'February 2026',
    competitionPeriod: 'March - April 2026',
    description: 'Students research and present a stock pitch to a panel of judges. Top teams advance to the national competition.',
    eligibility: 'High school students',
    teamSize: '1-5 students per team',
    prizes: ['National recognition', 'Scholarships', 'Mentorship opportunities'],
    website: 'https://yis.org/'
  },
  {
    id: 'nec',
    name: 'National Economics Challenge',
    organizer: 'Council for Economic Education',
    registrationDeadline: 'Varies by state',
    competitionPeriod: 'January - April 2026',
    description: 'A competition that focuses on micro and macroeconomic concepts as well as knowledge of the world economy.',
    eligibility: 'High school students',
    teamSize: '3-4 students per team',
    prizes: ['National finals', 'Scholarships', 'Recognition'],
    website: 'https://www.councilforeconed.org/nec/'
  },
  {
    id: 'budget-challenge',
    name: 'Budget Challenge',
    organizer: 'Next Gen Personal Finance',
    registrationDeadline: 'Rolling',
    competitionPeriod: 'Ongoing',
    description: 'A personal finance simulation that teaches students how to manage their money, pay bills, and make smart financial decisions.',
    eligibility: 'High school students',
    teamSize: 'Individual',
    prizes: ['Scholarships', 'Classroom grants'],
    website: 'https://www.ngpf.org/budget-challenge/'
  },
  {
    id: 'osmc',
    name: 'Ohio Stock Market Competition',
    organizer: 'Ohio Council on Economic Education',
    registrationDeadline: 'Varies',
    competitionPeriod: 'Fall and Spring semesters',
    description: 'A state-wide competition where students manage a virtual investment portfolio and compete against other Ohio schools.',
    eligibility: 'Ohio high school students',
    teamSize: '3-5 students per team',
    prizes: ['Cash prizes', 'Recognition'],
    website: 'https://www.econedohio.org/programs/stock-market-competition/'
  }
];

export default function CompetitionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Investment Competitions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Test your investment knowledge and compete against students nationwide
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {competitions.map((competition, index) => (
          <div
            key={competition.id}
            className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
              <h2 className="text-2xl font-bold">{competition.name}</h2>
              <p className="text-blue-100">Organized by: {competition.organizer}</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Registration Deadline</h3>
                  <p className="font-medium">{formatRegistrationDeadline(competition.registrationDeadline)}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Competition Period</h3>
                  <p className="font-medium">{competition.competitionPeriod}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Eligibility</h3>
                  <p className="font-medium">{competition.eligibility}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Team Size</h3>
                  <p className="font-medium">{competition.teamSize}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Description</h3>
                <p className="mb-4">{competition.description}</p>
                
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Prizes & Recognition</h3>
                <ul className="list-disc pl-5 space-y-1 mb-6">
                  {competition.prizes.map((prize, i) => (
                    <li key={i}>{prize}</li>
                  ))}
                </ul>
                
                <a
                  href={competition.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline"
                >
                  Learn more on official website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-card rounded-xl p-8 max-w-4xl mx-auto border border-border">
        <h2 className="text-2xl font-bold mb-4 text-center">Investment Resources</h2>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Investopedia Simulator</h3>
          <p className="text-muted-foreground mb-4">
            Practice trading with virtual money in a realistic market simulation. The top performer in our club will receive a $100 prize at the end of the year!
          </p>
          <a 
            href="https://www.investopedia.com/simulator" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            Try Investopedia Simulator →
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <h2 className="text-2xl font-bold mb-4 text-center">Interested in Competing?</h2>
          <p className="text-lg text-muted-foreground mb-6 text-center">
            Join our club to get support, resources, and team matching for these competitions.
          </p>
          <div className="text-center">
            <a
              href="mailto:soloninvestmentsociety@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent/90"
            >
              Contact Us to Join
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
