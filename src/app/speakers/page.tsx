"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const speakers = [
  {
    name: "Elizabeth Khaykin",
    role: "Financial Accounting Advisory Staff at EY",
    bio: "Ohio State graduate in accounting and finance.",
    image: "/speakers/ekhaykin.jpg",
  },
  {
    name: "Tyler Dalton",
    role: "Senior Associate at Kaulig Capital",
    bio: "Experience in corporate finance, financial modeling, and private accounting.",
    image: "/speakers/tdalton.jpg",
  },
  {
    name: "Abel Castillo",
    role: "Venture Analyst at JumpStart",
    bio: "Previously worked in business development and licensing at Cleveland Clinic Innovations.",
    image: "/speakers/acastillo.jpg",
  },
];

export default function SpeakersPage() {
  return (
    <div className="container">
      <header className="page-header"><h1 className="page-title">Speakers</h1></header>

      <div className="grid gap-x-8 lg:grid-cols-3">
        {speakers.map((s) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="group border-b py-8 hairline"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              {s.image ? (
                <Image
                  src={s.image}
                  alt={s.name}
                  width={480}
                  height={360}
                  className="h-full w-full object-cover object-top transition-transform group-hover:scale-[1.025]"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-3xl font-bold text-muted-foreground">
                  {s.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
            </div>
            <div className="pt-6">

              <h2 className="text-3xl font-bold tracking-[-.045em]">{s.name}</h2>
              <p className="mt-1 text-sm font-medium text-primary">
                {s.role}
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {s.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-7 border-y-2 py-10 rule sm:flex-row sm:items-end sm:justify-between"
      >
        <div><h2 className="mt-3 text-4xl font-bold tracking-[-.05em]">Interested in speaking?</h2>
</div>
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
