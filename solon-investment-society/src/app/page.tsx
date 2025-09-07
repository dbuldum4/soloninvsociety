"use client";

import Link from "next/link";
import { ArrowRight, BarChart2, Briefcase, Users, Mic } from "lucide-react";

// Animations removed for now

export default function Home() {
  const features = [
    {
      icon: <BarChart2 className="h-6 w-6 text-accent" />,
      title: "Weekly Meetings",
      desc: "Hands-on sessions covering markets, investing, and analysis."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-accent" />,
      title: "Stock Pitches",
      desc: "Develop research, build theses, and present to peers."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-accent" />,
      title: "Portfolio Challenge",
      desc: "Simulated investing with friendly competition."
    },
    {
      icon: <Mic className="h-6 w-6 text-accent" />,
      title: "Guest Speakers",
      desc: "Hear from finance professionals and alumni."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-accent text-white"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <h1 
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
            >
              Solon Investment Society
            </h1>
            <p 
              className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-blue-100"
            >
              Empowering the next generation of investors at Solon High School. Learn, analyze, and compete in the world of finance.
            </p>
            <div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                href="/schedule" 
                className="flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50 transition-colors duration-200"
              >
                View Schedule
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="/speakers" 
                className="flex items-center gap-2 rounded-md border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-200"
              >
                View Speakers
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section 
        className="py-16 sm:py-24 bg-background"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Offer</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive financial education through hands-on experience and expert guidance
            </p>
          </div>

          <div 
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/20 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Resources Section */}
      <section 
        className="py-16 bg-card"
      >
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Learning Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential tools and resources to enhance your investment knowledge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Investopedia Academy",
                description: "Learn the essentials of investing with comprehensive courses.",
                link: "https://www.investopedia.com/investing-4427685",
                image: "",
                color: ""
              },
              {
                title: "Yahoo Finance",
                description: "Track markets, get financial news, and manage your portfolio.",
                link: "https://finance.yahoo.com/",
                image: "",
                color: ""
              },
              {
                title: "Bloomberg Markets",
                description: "Global business and financial market news and analysis.",
                link: "https://www.bloomberg.com/markets",
                image: "",
                color: ""
              },
              {
                title: "Seeking Alpha",
                description: "Stock market insights and investment research.",
                link: "https://seekingalpha.com/",
                image: "",
                color: ""
              },
              {
                title: "Morningstar",
                description: "Independent investment research and ratings.",
                link: "https://www.morningstar.com/",
                image: "",
                color: ""
              },
              {
                title: "Khan Academy - Finance",
                description: "Free courses on finance and capital markets.",
                link: "https://www.khanacademy.org/economics-finance-domain/core-finance",
                image: "",
                color: ""
              }
            ].map((resource, index) => (
              <a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className={`h-full card`}>
                  <div className="p-6">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                      Visit Resource
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="bg-gradient-to-r from-blue-900 to-accent text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Ready to Join Us?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Contact us at: <a href="mailto:soloninvestmentsociety@gmail.com" className="text-white font-semibold hover:underline">soloninvestmentsociety@gmail.com</a>
          </p>
          <div className="mt-8">
            <Link 
              href="/schedule" 
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50 transition-colors duration-200"
            >
              View Meeting Schedule
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="bg-background border-t border-border mt-auto"
      >
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold">Solon Investment Society</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Empowering students with financial literacy and investment knowledge.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Quick Links</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="/schedule" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Schedule</Link></li>
                <li><Link href="/officers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Officers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Contact</h4>
              <p className="mt-4 text-sm text-muted-foreground">
                Solon High School<br />
                33600 Inwood Dr, Solon, OH 44139
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Solon Investment Society. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
