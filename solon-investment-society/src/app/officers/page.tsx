'use client';

import { useState } from 'react';
import Image from 'next/image';

type Officer = {
  name: string;
  role: string;
  bio?: string;
  initials: string;
  image?: string;
};

const officers: Officer[] = [
  {
    name: "Jacob Khaykin",
    role: "President of AI & Real World Applications",
    initials: "JK",
    image: "/officers/jacob-khaykin.jpg"
  },
  {
    name: "Avery Andrews",
    role: "President of Investing",
    initials: "AA",
    image: "/officers/avery-andrews.jpg"
  },
  {
    name: "Athulith Kanteti",
    role: "President of Finance",
    initials: "AK",
    image: "/officers/athulith-kanteti.jpg"
  },
  {
    name: "Sanat Mudundi",
    role: "Secretary",
    initials: "SM",
    image: "/officers/sanat-mudundi.jpg"
  },
  {
    name: "Deniz Buldum",
    role: "Tech Lead",
    initials: "DB",
    image: "/officers/deniz-buldum.jpg"
  },
  {
    name: "Jonathan Parran",
    role: "Head Consultant",
    initials: "JP",
    image: "/officers/jonathan-parran.jpg"
  },
  {
    name: "Jason Kaganovich",
    role: "Head Consultant",
    initials: "JK",
    image: "/officers/jason-kaganovich.jpg"
  },
  {
    name: "Ethan Belkin",
    role: "Public Relations",
    initials: "EB",
    image: "/officers/ethan-belkin.jpg"
  }
];

function OfficerCard({ officer }: { officer: Officer }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-4 overflow-hidden">
            {!imageError && officer.image ? (
              <Image
                src={officer.image}
                alt={officer.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="text-4xl font-bold text-blue-600">
                {officer.initials}
              </div>
            )}
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            {officer.name}
          </h3>
          <p className="text-blue-600 font-medium">{officer.role}</p>
          {officer.bio && (
            <p className="mt-3 text-gray-600 text-sm">{officer.bio}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OfficersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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