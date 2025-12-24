"use client";

import { motion } from "framer-motion";
import { Scale, Shield, Landmark, ArrowRight, Gavel, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-[#1E293B] p-10 border border-slate-700 hover:border-[#D4AF37] transition-all group cursor-pointer"
  >
    <div className="mb-6 text-[#D4AF37]">
      <Icon size={40} strokeWidth={1} />
    </div>
    <h3 className="text-xl font-serif text-white mb-4 tracking-wide">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm mb-6">{description}</p>
    <div className="flex items-center text-[#D4AF37] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
      Read More <ArrowRight size={14} className="ml-2" />
    </div>
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
            alt="Law Library"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0F172A]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#D4AF37] text-sm font-bold tracking-[0.3em] uppercase mb-6">
              Excellence • Integrity • Legacy
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
              Defending Your <br />
              <span className="italic font-light text-slate-300">Greatest Interests</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              For over three decades, Aurelius & Partners has provided uncompromising legal representation for the world's most discerning clients.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="px-10 py-4 bg-[#D4AF37] text-[#0F172A] font-bold tracking-widest uppercase text-sm hover:bg-white transition-colors min-w-[200px]">
                Consultation
              </Link>
              <Link href="/practice-areas" className="px-10 py-4 border border-slate-600 text-slate-300 font-bold tracking-widest uppercase text-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors min-w-[200px]">
                Our Expertise
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-[#0F172A]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
               <div className="h-1 w-24 bg-[#D4AF37] mb-8" />
               <h2 className="font-serif text-4xl lg:text-5xl text-white mb-8 leading-snug">
                 We navigate complex legal landscapes with <span className="text-[#D4AF37] italic">unwavering focus.</span>
               </h2>
               <p className="text-slate-400 leading-relaxed text-lg mb-8">
                 In an era of uncertainty, you need more than just a lawyer; you need a strategic partner. Our firm combines deep industry knowledge with aggressive advocacy to deliver results that matter.
               </p>
               <div className="grid grid-cols-2 gap-8 border-t border-slate-800 pt-8">
                 <div>
                   <h4 className="text-3xl font-serif text-white mb-2">35+</h4>
                   <p className="text-xs uppercase tracking-widest text-slate-500">Years of Experience</p>
                 </div>
                 <div>
                   <h4 className="text-3xl font-serif text-white mb-2">$5B+</h4>
                   <p className="text-xs uppercase tracking-widest text-slate-500">Recovered for Clients</p>
                 </div>
               </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative aspect-[4/5] border border-slate-700 p-4">
                 <div className="relative h-full w-full transition-all duration-700">
                   <Image 
                     src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
                     alt="Boardroom Meeting" 
                     fill 
                     className="object-cover" 
                   />
                 </div>
                 <div className="absolute -bottom-8 -left-8 bg-[#1E293B] p-8 border border-slate-700 max-w-xs">
                   <p className="font-serif text-white italic text-lg">"Justice consists not in being neutral between right and wrong, but in finding out the right and upholding it."</p>
                   <p className="text-[#D4AF37] text-xs font-bold uppercase mt-4 tracking-widest">— Theodore Roosevelt</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-24 bg-[#1E293B]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">Areas of Practice</span>
            <h2 className="font-serif text-4xl text-white mt-4">Specialized Legal Counsel</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Scale}
              title="Corporate Litigation"
              description="Representing corporations and executives in high-stakes commercial disputes, antitrust matters, and securities litigation."
            />
            <FeatureCard 
              icon={Shield}
              title="Mergers & Acquisitions"
              description="Guiding companies through complex domestic and cross-border transactions with strategic precision."
            />
            <FeatureCard 
              icon={Landmark}
              title="Intellectual Property"
              description="Protecting your most valuable assets through robust patent, trademark, and copyright enforcement strategies."
            />
            <FeatureCard 
              icon={Gavel}
              title="White Collar Defense"
              description="Defending individuals and organizations against government investigations and regulatory enforcement actions."
            />
            <FeatureCard 
              icon={FileText}
              title="Real Estate Law"
              description="Navigating commercial property acquisitions, development, and zoning regulations for major developers."
            />
             <FeatureCard 
              icon={Scale}
              title="Private Client Services"
              description="Discreet wealth management, estate planning, and family law services for high-net-worth individuals."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F172A] border-t border-slate-800 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div>
              <span className="font-serif text-2xl font-bold text-white tracking-widest uppercase">
                Aurelius <span className="text-[#D4AF37]">&</span> Partners
              </span>
              <p className="text-slate-500 mt-6 max-w-xs leading-relaxed">
                A premier law firm dedicated to excellence in legal representation.
                <br /><br />
                123 Wall Street, Suite 400<br />
                New York, NY 10005
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12">
               <div>
                 <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Firm</h4>
                 <ul className="space-y-4 text-slate-500 text-sm">
                   <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
                   <li><Link href="/attorneys" className="hover:text-[#D4AF37] transition-colors">Our Team</Link></li>
                   <li><Link href="/careers" className="hover:text-[#D4AF37] transition-colors">Careers</Link></li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Legal</h4>
                 <ul className="space-y-4 text-slate-500 text-sm">
                   <li><Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
                   <li><Link href="/terms" className="hover:text-[#D4AF37] transition-colors">Terms of Use</Link></li>
                   <li><Link href="/disclaimer" className="hover:text-[#D4AF37] transition-colors">Disclaimer</Link></li>
                 </ul>
               </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Aurelius & Partners LLP. All rights reserved.</p>
            <p>Attorney Advertising.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
