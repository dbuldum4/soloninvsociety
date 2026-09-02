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
      transition={{ delay: index * 0.05, duration: 0.35 }}
      className="group border-b py-8 text-left hairline"
    >
      <div className="grid grid-cols-[5rem_1fr] items-center gap-5">
        <div className="relative h-20 w-20 overflow-hidden bg-secondary grayscale transition duration-500 group-hover:grayscale-0">
          {src ? (
            <Image
              src={src}
              alt={officer.name}
              width={96}
              height={96}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={onErr}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xl font-bold text-primary">
              {officer.initials}
            </div>
          )}
        </div><div><span className="font-mono text-[9px] text-primary">{String(index + 1).padStart(2, '0')}</span><h2 className="mt-1 text-xl font-bold tracking-[-.035em]">{officer.name}</h2><p className="mt-1 text-[10px] font-semibold uppercase leading-snug tracking-[.04em] text-primary">{officer.role}</p>{officer.bio && <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{officer.bio}</p>}</div>
      </div>
    </motion.div>
  );
}

export default function OfficersPage() {
  return (
    <div className="container">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-8 border-b-2 py-14 rule lg:grid-cols-[1fr_.65fr] lg:items-end lg:py-20"
      >
        <div><p className="eyebrow">Leadership</p><h1 className="page-title mt-6">Students leading students.</h1></div>
        <p className="text-lg leading-relaxed text-muted-foreground lg:border-l lg:pl-10 rule">Meet the team building the program, organizing competitions, and making every meeting count.</p>
      </motion.header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
        {officers.map((o, i) => (
          <Card key={o.name} officer={o} index={i} />
        ))}
      </div>
      <section className="border-y-2 py-10 rule"><p className="eyebrow">Get involved</p><h2 className="mt-3 text-4xl font-bold tracking-[-.055em] sm:text-5xl">The next leader could be you.</h2><a href="mailto:soloninvestmentsociety@gmail.com" className="editorial-button mt-7">Contact the team</a></section>
    </div>
  );
}
