"use client";

import Link from "next/link";
import { ArrowRight, BarChart2, Briefcase, Users, Mic } from "lucide-react";
import { motion } from "framer-motion";
import StockChart from "@/components/StockChart";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

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
    <motion.div 
      className="flex flex-col min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-accent text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Solon Investment Society
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Empowering the next generation of investors at Solon High School. Learn, analyze, and compete in the world of finance.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
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
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </motion.section>

      {/* Investment Resources Section */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Learning Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential tools and resources to enhance your investment knowledge
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Investopedia Academy",
                description: "Learn the essentials of investing with comprehensive courses.",
                link: "https://academy.investopedia.com/",
                image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Investopedia_Logo.png",
                color: "from-blue-100 to-blue-200"
              },
              {
                title: "Yahoo Finance",
                description: "Track markets, get financial news, and manage your portfolio.",
                link: "https://finance.yahoo.com/",
                image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Yahoo_FInance_Logo_2019.png",
                color: "from-purple-100 to-purple-200"
              },
              {
                title: "Bloomberg Markets",
                description: "Global business and financial market news and analysis.",
                link: "https://www.bloomberg.com/markets",
                image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Bloomberg_Logo.svg",
                color: "from-green-100 to-green-200"
              },
              {
                title: "Seeking Alpha",
                description: "Stock market insights and investment research.",
                link: "https://seekingalpha.com/",
                image: "https://seekvectorlogo.com/wp-content/uploads/2022/01/seeking-alpha-vector-logo-2022-small.png",
                color: "from-amber-100 to-amber-200"
              },
              {
                title: "Morningstar",
                description: "Independent investment research and ratings.",
                link: "https://www.morningstar.com/",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Morningstar_Logo.png",
                color: "from-red-100 to-red-200"
              },
              {
                title: "Khan Academy - Finance",
                description: "Free courses on finance and capital markets.",
                link: "https://www.khanacademy.org/economics-finance-domain/core-finance",
                image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Khan_Academy_Logo_Old_2010s.svg",
                color: "from-emerald-100 to-emerald-200"
              }
            ].map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className={`h-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100`}>
                  <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center mr-4 overflow-hidden">
                        <div className="text-3xl">
                          {resource.image ? (
                            <img 
                              src={resource.image} 
                              alt={resource.title} 
                              className="w-10 h-10 object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(resource.title)}&background=random`;
                              }}
                            />
                          ) : (
                            <span className="text-gray-400">📊</span>
                          )}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                      Visit Resource
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-16 sm:py-24 bg-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Offer</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive financial education through hands-on experience and expert guidance
            </p>
          </div>

          <motion.div 
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                variants={item}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/20 transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="bg-gradient-to-r from-blue-900 to-accent text-white py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
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
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="bg-background border-t border-border mt-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
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
      </motion.footer>
    </motion.div>
  );
}
