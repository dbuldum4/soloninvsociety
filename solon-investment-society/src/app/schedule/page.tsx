export default function SchedulePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Schedule</h1>
      <p className="mt-4 text-muted-foreground">
          Below is our working plan for the coming weeks and related ideas.
        </p>

      <div className="mt-8 space-y-6">
        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Week 1 — Financial Literacy &amp; Intro to the market</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li><span className="font-medium">Warm-up:</span> Kahoot on personal finance <span className="text-muted-foreground">(candy prize)</span></li>
            <li><span className="font-medium">Lecture:</span> Investing basics (what are stocks/index funds/mutual funds/hedge funds/ETFs)</li>
            <li><span className="font-medium">Simulation:</span> Create a virtual portfolio on Investopedia simulator</li>
          </ul>
        </article>

        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Week 2–3 — How to effectively research stocks</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li><span className="font-medium">Lecture:</span> Growth vs Value, Diversification, Stocks vs. ETFs, basic company valuations
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Responsible investing: using objectivity, not using emotion, not panic selling</li>
              </ul>
            </li>
            <li><span className="font-medium">Activity:</span> Students continue building their virtual portfolio with their learned principles</li>
            <li>Sign up for <a href="https://globalyouth.wharton.upenn.edu/competitions/investment-competition/" className="underline">Wharton High School Investment Game</a></li>
          </ul>
        </article>

        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Week 4 — Company Valuation part 2</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Introduction to financial statements (how to read basic Income Statements + Balance Sheets)
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>P/E, debt/equity, profit margins, EPS, liquidity</li>
              </ul>
            </li>
          </ul>
        </article>

        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Week 5 — Case Studies &amp; Real-World Events</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Begin stock debates (eg. AMD vs Intel)</li>
            <li>Begin stock pitches (members come in and propose stocks with potential growth — promotes value investing)
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Use CWRU weatherhead fund template</li>
              </ul>
            </li>
          </ul>
        </article>

        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Week 6 — Guest Speaker / Project Lab</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Host a CWRU Journal of Economics member to speak on investing and stock picking OR</li>
            <li>Host a local CFA or financial advisor to speak on career paths
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Tyler Dalton — senior associate at Kaulig Capital</li>
              </ul>
            </li>
          </ul>
        </article>

        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Week 7/8 — Real world applications</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>What can make stocks fluctuate?
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Earnings reports, news</li>
                <li>Look into Trump’s impacts on the market</li>
                <li>Look at how famous investors like Buffet, Pelosi effect market</li>
              </ul>
            </li>
            <li>Continue the Wharton competition, stock debates, stock pitches</li>
          </ul>
        </article>

        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Week 9+ — Continuations + Advanced Trading</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>Continue researching + investing responsibility</li>
            <li>Continue stock pitches and debates</li>
            <li>Leveraging money RESPONSIBLY — MANY RISKS
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Shorts</li>
                <li>Options trading/scalping</li>
              </ul>
            </li>
          </ul>
        </article>

        <article className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Specific Ideas / Events Brainstorming</h2>
          <div className="mt-3 space-y-4">
            <div>
              <h3 className="font-semibold">Investopedia in-club competition</h3>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Individual competition based on growth from September to May</li>
                <li>Managed by officers with mandated full transparency</li>
                <li>$100 end of year prize</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold"><a href="https://globalyouth.wharton.upenn.edu/competitions/investment-competition/" className="underline">Wharton Global High School Investment Competition</a></h3>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Teams of 4–5</li>
                <li>Compete within the club</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold"><a href="https://yis.org/programs/stock-pitch-competition/" className="underline">Young Investors Society stock pitch competition</a></h3>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Written stock pitch &amp; presentation + 10 minute video</li>
                <li>Top 100 teams advance to global youth investment summit in NYC</li>
                <li>February 20th deadline</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Club Investment Fund</h3>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Simulate a student-managed portfolio ($100 per member?)</li>
                <li>Assign sectors: tech, consumer goods, green energy, etc.</li>
                <li>Have members prepare pitches and vote on buys/sells monthly</li>
                <li>Showcase a dashboard with metrics using Google Sheets or Notion</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Career Pathways Mini-Series</h3>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Invite guests across the finance spectrum:</li>
                <li>Wealth Management, Venture Capital, Private/Public equity, Investment banking</li>
                <li>FinTech Startup Founder</li>
                <li>CFP vs. CFA — what’s the difference?</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">New York City</h3>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>A 2-night trip to the financial capital of the world</li>
                <li>Itinerary (tentative)
                  <ul className="mt-2 list-disc pl-6 space-y-1">
                    <li>Friday
                      <ul className="mt-1 list-disc pl-6 space-y-1">
                        <li>Leave SHS @ 7am</li>
                        <li>Arrive around 2:30pm</li>
                        <li>1–2 tours before dinner</li>
                        <li>Dinner @ 6:30pm</li>
                      </ul>
                    </li>
                    <li>Saturday
                      <ul className="mt-1 list-disc pl-6 space-y-1">
                        <li>9am–3pm tours</li>
                        <li>Rest 3pm–6pm</li>
                        <li>Dinner @ 6pm</li>
                        <li>7:30pm fun night (movie, play, dance, anything else in New York)</li>
                      </ul>
                    </li>
                    <li>Sunday
                      <ul className="mt-1 list-disc pl-6 space-y-1">
                        <li>Breakfast then leave ~ 9:30am</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          </article>
      </div>
    </div>
    </section>
  );
}