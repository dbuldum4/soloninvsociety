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
    <div className="container py-16 sm:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Speakers
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tighter sm:text-5xl">
          Guest Speakers
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Industry professionals sharing insights and real-world experience.
        </p>
      </motion.div>

      {/* Speaker cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.45 }}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/25"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              {s.image ? (
                <Image
                  src={s.image}
                  alt={s.name}
                  width={480}
                  height={360}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-3xl font-bold text-muted-foreground">
                  {s.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold">{s.name}</h3>
              <p className="mt-0.5 text-sm font-medium text-primary">
                {s.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-14 rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 text-center sm:p-10"
      >
        <h2 className="text-2xl font-bold">Interested in speaking?</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          We&apos;re always looking for industry professionals to share their
          insights with our members.
        </p>
        <a
          href="mailto:soloninvestmentsociety@gmail.com"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          Contact Us
        </a>
      </motion.div>
    </div>
  );
}
