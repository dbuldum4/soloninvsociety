"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
      </div>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Guest Speakers
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((speaker) => (
            <div 
              key={speaker} 
              className="border rounded-lg bg-card text-card-foreground overflow-hidden hover:shadow transition-shadow duration-300"
            >
              <div className="h-48 bg-muted flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-card border border-border flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Speaker {speaker}</h3>
                <p className="text-muted-foreground mb-4">Position at Company</p>
                <p className="text-sm text-muted-foreground">
                  More details about the speaker will be added soon. Check back later for updates!
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Interested in Speaking?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We&apos;re always looking for industry professionals to share their insights with our members.
            If you&apos;re interested in being a guest speaker, please reach out to us!
          </p>
          <a href="mailto:soloninvestmentsociety@gmail.com" className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors inline-block">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
