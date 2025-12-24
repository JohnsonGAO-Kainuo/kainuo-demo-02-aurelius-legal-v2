"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/practice-areas", label: "Practice Areas" },
    { href: "/attorneys", label: "Attorneys" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-2xl font-bold text-white tracking-widest uppercase">
            Aurelius <span className="text-[#D4AF37]">&</span> Partners
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 group-hover:text-[#D4AF37] transition-colors">
            Est. 1985 • New York
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`text-sm font-medium tracking-widest uppercase transition-all hover:text-[#D4AF37] relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] after:transition-all hover:after:w-full ${pathname === link.href ? 'text-[#D4AF37] after:w-full' : 'text-slate-400'}`}
            >
              {link.label}
            </Link>
          ))}
          
          <Link href="/contact" className="border border-[#D4AF37] text-[#D4AF37] px-8 py-3 hover:bg-[#D4AF37] hover:text-[#0F172A] transition-all text-xs font-bold tracking-widest uppercase">
            Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F172A] absolute top-24 left-0 w-full overflow-hidden border-t border-slate-800"
          >
            <div className="flex flex-col p-8 gap-8 text-center mt-12">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl text-white hover:text-[#D4AF37] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-slate-800">
                 <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-[#D4AF37] text-[#0F172A] w-full block py-4 font-bold tracking-widest uppercase hover:bg-white transition-colors">
                  Request Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

