"use client";

import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ArticleCard = ({ image, category, title, excerpt, date, author }: any) => (
  <div className="bg-[#1E293B] border border-slate-700 group hover:border-[#D4AF37] transition-colors overflow-hidden flex flex-col h-full">
    <div className="relative aspect-video overflow-hidden">
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0F172A] text-xs font-bold uppercase tracking-widest px-3 py-1">
        {category}
      </div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 uppercase tracking-wider">
        <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
        <span className="flex items-center gap-1"><User size={12} /> {author}</span>
      </div>
      <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
        {excerpt}
      </p>
      <Link href="#" className="inline-flex items-center text-[#D4AF37] font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
        Read Article <ArrowRight size={14} className="ml-2" />
      </Link>
    </div>
  </div>
);

export default function InsightsPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl text-white mb-6">Legal Insights</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Expert analysis on the latest legal developments, regulatory changes, and market trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard 
            image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
            category="Corporate Law"
            title="Navigating the New SEC Climate Disclosure Rules"
            excerpt="A comprehensive guide for public companies on preparing for the upcoming mandatory climate risk reporting requirements."
            date="Dec 12, 2024"
            author="Elena Vance"
          />
          <ArticleCard 
            image="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2012&auto=format&fit=crop"
            category="M&A"
            title="Cross-Border Mergers in a Volatile Economy"
            excerpt="Key strategies for mitigating risk and maximizing value in international transactions during periods of high inflation."
            date="Nov 28, 2024"
            author="Marcus Aurelius III"
          />
          <ArticleCard 
            image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
            category="Litigation"
            title="The Rise of AI in Intellectual Property Disputes"
            excerpt="Examining recent court rulings on copyright infringement in the age of generative artificial intelligence."
            date="Nov 15, 2024"
            author="Julian Thorne"
          />
           <ArticleCard 
            image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
            category="Banking"
            title="Fintech Regulation: What to Expect in 2025"
            excerpt="Analyzing the shifting regulatory landscape for digital assets, stablecoins, and decentralized finance platforms."
            date="Oct 30, 2024"
            author="Sarah Jenkins"
          />
           <ArticleCard 
            image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
            category="Employment"
            title="Executive Compensation and Non-Competes"
            excerpt="Understanding the FTC's proposed ban on non-compete agreements and its impact on executive contracts."
            date="Oct 12, 2024"
            author="David Ross"
          />
           <ArticleCard 
            image="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2070&auto=format&fit=crop"
            category="Real Estate"
            title="Commercial Real Estate Distress and Opportunity"
            excerpt="Legal strategies for restructuring debt and acquiring distressed assets in the current office market."
            date="Sep 25, 2024"
            author="Michael Chang"
          />
        </div>
      </div>
    </div>
  );
}

