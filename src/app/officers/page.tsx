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
  { name: 'Avery Andrews', role: 'President of Investing', initials: 'AA' },
  { name: 'Sanat Mudundi', role: 'President of Finance', initials: 'SM', photoExtension: 'jpeg' },
  { name: 'Jonathan Parran', role: 'President of AI Applications', initials: 'JP' },
  { name: 'Deniz Buldum', role: 'Tech Lead', initials: 'DB' },
  { name: 'Akshat Sawner', role: 'Secretary', initials: 'AS' },
  { name: 'Matthew Georgiadi', role: 'PR/Treasurer', initials: 'MG' },
];

function Card({ officer }: { officer: Officer }) {
  const [err, setErr] = useState(false);
  const [idx, setIdx] = useState(0);

  // Reset image fallback state when the card receives a different officer.
  // eslint-disable-next-line react-hooks/set-state-in-effect
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
      className="group border-b py-8 text-left hairline"
    >
      <div className="grid grid-cols-[5rem_1fr] items-center gap-5">
        <div className="relative h-20 w-20 overflow-hidden bg-secondary">
          {src ? (
            <Image
              src={src}
              alt={officer.name}
              width={96}
              height={96}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
              onError={onErr}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xl font-bold text-primary">
              {officer.initials}
            </div>
          )}
        </div><div><h2 className="mt-1 text-xl font-bold tracking-[-.035em]">{officer.name}</h2><p className="mt-1 text-sm font-medium leading-snug text-primary">{officer.role}</p>{officer.bio && <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{officer.bio}</p>}</div>
      </div>
    </motion.div>
  );
}

export default function OfficersPage() {
  return (
    <div className="container">
      <header className="page-header"><h1 className="page-title">Officers</h1></header>

      <div className="grid sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
        {officers.map((o) => (
          <Card key={o.name} officer={o} />
        ))}
      </div>
      <section className="border-y-2 py-10 rule"><h2 className="mt-3 text-4xl font-bold tracking-[-.055em] sm:text-5xl">The next leader could be you.</h2><a href="mailto:soloninvestmentsociety@gmail.com" className="editorial-button mt-7">Contact the team</a></section>
    </div>
  );
}
