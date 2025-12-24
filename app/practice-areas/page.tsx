"use client";

import { Scale, Shield, Landmark, Gavel, FileText, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

const PracticeArea = ({ icon: Icon, title, desc, features }: any) => (
  <div className="bg-[#1E293B] border border-slate-700 p-10 hover:border-[#D4AF37] transition-colors group">
    <div className="w-16 h-16 bg-[#0F172A] border border-slate-700 flex items-center justify-center text-[#D4AF37] mb-8 group-hover:bg-[#D4AF37] group-hover:text-[#0F172A] transition-colors">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="font-serif text-2xl text-white mb-4">{title}</h3>
    <p className="text-slate-400 leading-relaxed mb-8">{desc}</p>
    <ul className="space-y-3 mb-8">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
          <span className="text-[#D4AF37] mt-1">▪</span>
          {f}
        </li>
      ))}
    </ul>
    <Link href="/contact" className="inline-flex items-center text-[#D4AF37] font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
      Case Evaluation <ArrowRight size={14} className="ml-2" />
    </Link>
  </div>
);

export default function PracticeAreasPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-[#0F172A]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl text-white mb-6">Areas of Practice</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            We focus on complex, high-stakes matters where our strategic insight and aggressive advocacy can make the decisive difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PracticeArea 
            icon={Scale}
            title="Corporate Litigation"
            desc="Representing Fortune 500 companies in bet-the-company lawsuits."
            features={["Securities Class Actions", "Antitrust Litigation", "Intellectual Property Disputes", "Shareholder Derivative Suits"]}
          />
          <PracticeArea 
            icon={Shield}
            title="Mergers & Acquisitions"
            desc="Navigating the complexities of domestic and cross-border transactions."
            features={["Public & Private M&A", "Private Equity", "Joint Ventures", "Hostile Takeover Defense"]}
          />
          <PracticeArea 
            icon={Gavel}
            title="White Collar Defense"
            desc="Protecting reputations and liberties in government investigations."
            features={["SEC Enforcement Actions", "FCPA Investigations", "Healthcare Fraud", "Internal Investigations"]}
          />
          <PracticeArea 
            icon={Landmark}
            title="Banking & Finance"
            desc="Advising financial institutions on regulatory compliance and transactions."
            features={["Capital Markets", "Project Finance", "Asset Securitization", "Regulatory Defense"]}
          />
          <PracticeArea 
            icon={Briefcase}
            title="Employment Law"
            desc="Defending employers in complex labor disputes and executive compensation."
            features={["Executive Contracts", "Discrimination Defense", "Trade Secret Protection", "Labor Relations"]}
          />
          <PracticeArea 
            icon={FileText}
            title="Real Estate"
            desc="Structuring major commercial developments and real estate finance."
            features={["Commercial Development", "Real Estate Finance", "Zoning & Land Use", "Leasing & Management"]}
          />
        </div>
      </div>
    </div>
  );
}

