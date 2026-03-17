'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Officer = {
  name: string;
  role: string;
  bio?: string;
  initials: string;
  photoSlug?: string;
  photoExtension?: PhotoExtension;
};
type PhotoExtension = 'jpg' | 'jpeg' | 'png' | 'webp';

const EXTS: PhotoExtension[] = ['jpg', 'jpeg', 'png', 'webp'];

function slug(o: Officer) {
  if (o.photoSlug) return norm(o.photoSlug);
  const p = o.name.trim().split(/\s+/);
  if (!p.length) return '';
  return norm(p[0]).slice(0, 1) + norm(p[p.length - 1]);
}
function norm(v: string) {
  return v.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
}
function candidates(o: Officer) {
  const s = slug(o);
  if (!s) return [];
  const exts = o.photoExtension
    ? [o.photoExtension, ...EXTS.filter((e) => e !== o.photoExtension)]
    : EXTS;
  return [...new Set(exts)].map((e) => `/officers/${s}.${e}`);
}

const officers: Officer[] = [
  { name: 'Jacob Khaykin', role: 'President of AI & Real World Applications', initials: 'JK' },
  { name: 'Avery Andrews', role: 'President of Investing', initials: 'AA' },
  { name: 'Athulith Kanteti', role: 'President of Finance', initials: 'AK' },
  { name: 'Sanat Mudundi', role: 'Secretary', initials: 'SM', photoExtension: 'jpeg' },
  { name: 'Deniz Buldum', role: 'Tech Lead', initials: 'DB' },
  { name: 'Jonathan Parran', role: 'Head Consultant', initials: 'JP' },
  { name: 'Jason Kaganovich', role: 'Head Consultant', initials: 'JK' },
  { name: 'Ethan Belkin', role: 'Public Relations', initials: 'EB' },
];

function Card({ officer, index }: { officer: Officer; index: number }) {
  const [err, setErr] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => { setErr(false); setIdx(0); }, [officer.name, officer.photoSlug, officer.photoExtension]);

  const imgs = candidates(officer);
  const src = !err && imgs.length ? imgs[Math.min(idx, imgs.length - 1)] : null;

  const onErr = () => {
    if (idx < imgs.length - 1) { setIdx((p) => p + 1); return; }
    setErr(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card text-center transition-colors hover:border-primary/25"
    >
      <div className="px-6 pt-6 pb-5">
        <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-secondary ring-2 ring-border transition-all group-hover:ring-primary/40">
          {src ? (
            <Image
              src={src}
              alt={officer.name}
              width={96}
              height={96}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={onErr}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-primary">
              {officer.initials}
            </div>
          )}
        </div>
        <h3 className="text-base font-bold">{officer.name}</h3>
        <p className="mt-0.5 text-xs font-medium text-primary">{officer.role}</p>
        {officer.bio && (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{officer.bio}</p>
        )}
      </div>
    </motion.div>
  );
}

export default function OfficersPage() {
  return (
    <div className="container py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Leadership
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tighter sm:text-5xl">
          Our Team
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Meet the dedicated team leading the Solon Investment Society.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {officers.map((o, i) => (
          <Card key={o.name} officer={o} index={i} />
        ))}
      </div>
    </div>
  );
}
