'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Officer = {
  name: string;
  role: string;
  bio?: string;
  initials: string;
  photoSlug?: string;
  photoExtension?: PhotoExtension;
};

type PhotoExtension = 'jpg' | 'jpeg' | 'png' | 'webp';

const DEFAULT_PHOTO_EXTENSIONS: PhotoExtension[] = ['jpg', 'jpeg', 'png', 'webp'];

function normalizeSegment(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

function getPhotoSlug(officer: Officer) {
  if (officer.photoSlug) {
    return normalizeSegment(officer.photoSlug);
  }

  const parts = officer.name.trim().split(/\s+/);

  if (!parts.length) {
    return '';
  }

  const firstInitial = normalizeSegment(parts[0]).slice(0, 1);
  const lastName = normalizeSegment(parts[parts.length - 1]);

  return `${firstInitial}${lastName}`;
}

function buildImageCandidates(officer: Officer) {
  const slug = getPhotoSlug(officer);

  if (!slug) {
    return [];
  }

  const prioritizedExtensions = officer.photoExtension
    ? [officer.photoExtension, ...DEFAULT_PHOTO_EXTENSIONS.filter((ext) => ext !== officer.photoExtension)]
    : DEFAULT_PHOTO_EXTENSIONS;

  const uniqueExtensions = Array.from(new Set(prioritizedExtensions));

  return uniqueExtensions.map((ext) => `/officers/${slug}.${ext}`);
}

const officers: Officer[] = [
  {
    name: "Jacob Khaykin",
    role: "President of AI & Real World Applications",
    initials: "JK"
  },
  {
    name: "Avery Andrews",
    role: "President of Investing",
    initials: "AA"
  },
  {
    name: "Athulith Kanteti",
    role: "President of Finance",
    initials: "AK"
  },
  {
    name: "Sanat Mudundi",
    role: "Secretary",
    initials: "SM",
    photoExtension: "jpeg"
  },
  {
    name: "Deniz Buldum",
    role: "Tech Lead",
    initials: "DB"
  },
  {
    name: "Jonathan Parran",
    role: "Head Consultant",
    initials: "JP"
  },
  {
    name: "Jason Kaganovich",
    role: "Head Consultant",
    initials: "JK"
  },
  {
    name: "Ethan Belkin",
    role: "Public Relations",
    initials: "EB"
  }
];

function OfficerCard({ officer }: { officer: Officer }) {
  const [imageError, setImageError] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageError(false);
    setImageIndex(0);
  }, [officer.name, officer.photoSlug, officer.photoExtension]);

  const imageCandidates = buildImageCandidates(officer);
  const currentImage =
    !imageError && imageCandidates.length > 0
      ? imageCandidates[Math.min(imageIndex, imageCandidates.length - 1)]
      : null;

  const handleImageError = () => {
    if (imageIndex < imageCandidates.length - 1) {
      setImageIndex((prev) => prev + 1);
      return;
    }

    setImageError(true);
  };

  return (
    <div className="border rounded-xl bg-card text-card-foreground overflow-hidden hover:shadow transition-shadow duration-300">
      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-4 overflow-hidden">
            {currentImage ? (
              <Image
                src={currentImage}
                alt={officer.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            ) : (
              <div className="text-4xl font-bold text-primary">
                {officer.initials}
              </div>
            )}
          </div>
          <h3 className="text-xl font-semibold">
            {officer.name}
          </h3>
          <p className="text-primary font-medium">{officer.role}</p>
          {officer.bio && (
            <p className="mt-3 text-muted-foreground text-sm">{officer.bio}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OfficersPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated team leading the Solon Investment Society
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {officers.map((officer) => (
            <OfficerCard key={officer.name} officer={officer} />
          ))}
        </div>
      </div>
    </div>
  );
}