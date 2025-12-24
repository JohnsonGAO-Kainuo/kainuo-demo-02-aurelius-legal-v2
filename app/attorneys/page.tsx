"use client";

import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

const AttorneyCard = ({ name, role, image, bio, education }: any) => (
  <div className="flex flex-col lg:flex-row gap-10 bg-[#1E293B] border border-slate-700 p-8 hover:border-[#D4AF37] transition-colors">
    <div className="lg:w-1/3 relative aspect-[3/4] lg:aspect-auto min-h-[300px]">
      <Image 
        src={image} 
        alt={name} 
        fill 
        className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
      />
    </div>
    <div className="lg:w-2/3 flex flex-col justify-center">
      <div className="mb-6">
        <h3 className="font-serif text-3xl text-white mb-2">{name}</h3>
        <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">{role}</p>
      </div>
      <p className="text-slate-400 leading-relaxed mb-8">{bio}</p>
      
      <div className="mb-8">
        <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-3">Education</h4>
        <ul className="space-y-1 text-sm text-slate-500">
          {education.map((edu: string, i: number) => (
            <li key={i}>• {edu}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <button className="flex items-center gap-2 text-slate-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wide">
          <Mail size={16} /> Contact
        </button>
        <button className="flex items-center gap-2 text-slate-400 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wide">
          <Linkedin size={16} /> Profile
        </button>
      </div>
    </div>
  </div>
);

export default function AttorneysPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl text-white mb-6">Our Partners</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Distinguished legal minds committed to the highest standards of the profession.
          </p>
        </div>

        <div className="grid gap-12 max-w-5xl mx-auto">
          <AttorneyCard 
            name="Marcus Aurelius III"
            role="Managing Partner"
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
            bio="With over 40 years of litigation experience, Marcus has successfully defended Fortune 100 companies in some of the most complex corporate liability cases in history. He is recognized by Chambers USA as a 'Titan of the Bar'."
            education={["J.D., Harvard Law School, magna cum laude", "B.A., Yale University"]}
          />
          <AttorneyCard 
            name="Elena Vance"
            role="Senior Partner, M&A"
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
            bio="Elena leads the firm's Mergers & Acquisitions practice. She has orchestrated over $50 billion in transaction value over the last decade, specializing in cross-border technology and pharmaceutical deals."
            education={["J.D., Stanford Law School", "M.B.A., Wharton School of Business"]}
          />
          <AttorneyCard 
            name="Julian Thorne"
            role="Partner, White Collar Defense"
            image="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
            bio="A former U.S. Attorney, Julian brings unparalleled insight to government investigations. He has successfully represented high-profile individuals and corporations in SEC, DOJ, and congressional inquiries."
            education={["J.D., Columbia Law School", "B.A., Princeton University"]}
          />
        </div>
      </div>
    </div>
  );
}

