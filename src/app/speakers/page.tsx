"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const speakers = [
  {
    name: "Elizabeth Khaykin",
    role: "Financial Accounting Advisory Staff at EY",
    bio: "Elizabeth Khaykin is an alumnus of The Ohio State University, where she graduated Summa Cum Laude in Accounting & Finance. She is currently a part of the Financial Accounting Advisory Staff at EY.",
    image: "/speakers/ekhaykin.jpg",
  },
  {
    name: "Tyler Dalton",
    role: "Senior Associate at Kaulig Capital",
    bio: "Tyler Dalton is a senior associate at Kaulig Capital. Tyler has significant experience in corporate finance, private accounting, financial modeling, and process integration.",
    image: "/speakers/tdalton.jpg",
  },
  {
    name: "Abel Castillo",
    role: "Venture Analyst at JumpStart",
    bio: "Abel Castillo is a venture analyst at JumpStart. Prior to joining JumpStart, he worked as part of the Business Development and Licensing Team at Cleveland Clinic Innovations. Abel holds a B.S. degree in Biology as well as a Master of Business Administration from the University of Toledo.",
    image: "/speakers/acastillo.jpg",
  },
];

export default function SpeakersPage() {
  return (
    <div className="container">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-8 border-b-2 py-14 rule lg:grid-cols-[1fr_.65fr] lg:items-end lg:py-20"
      >
        <div><p className="eyebrow">Speakers</p><h1 className="page-title mt-6">Experience, shared.</h1></div>
        <p className="text-lg leading-relaxed text-muted-foreground lg:border-l lg:pl-10 rule">Industry professionals bring candid career stories and real-world financial insight into the room.</p>
      </motion.header>

      <div className="grid lg:grid-cols-3">
        {speakers.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.45 }}
            className={`group py-10 lg:px-8 ${i < speakers.length - 1 ? 'border-b lg:border-b-0 lg:border-r' : ''} ${i === 0 ? 'lg:pl-0' : ''} ${i === speakers.length - 1 ? 'lg:pr-0' : ''} hairline`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              {s.image ? (
                <Image
                  src={s.image}
                  alt={s.name}
                  width={480}
                  height={360}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-3xl font-bold text-muted-foreground">
                  {s.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
            </div>
            <div className="pt-6">
              <span className="font-mono text-[10px] text-primary">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="mt-2 text-3xl font-bold tracking-[-.045em]">{s.name}</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[.04em] text-primary">
                {s.role}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {s.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col gap-7 border-y-2 py-10 rule sm:flex-row sm:items-end sm:justify-between"
      >
        <div><p className="eyebrow">Share your perspective</p><h2 className="mt-3 text-4xl font-bold tracking-[-.05em]">Interested in speaking?</h2>
        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          We&apos;re always looking for industry professionals to share their
          insights with our members.
        </p></div>
        <a
          href="mailto:soloninvestmentsociety@gmail.com"
          className="editorial-button shrink-0"
        >
          <Mail className="h-4 w-4" />
          Contact Us
        </a>
      </motion.div>
    </div>
  );
}
