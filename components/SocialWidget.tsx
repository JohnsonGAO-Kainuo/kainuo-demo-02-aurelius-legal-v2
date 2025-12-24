"use client";

import { useState } from 'react';
import { Mail, Linkedin, Twitter, Facebook, MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SocialWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: Mail, href: "mailto:contact@aurelius.com", color: "bg-[#D4AF37]", label: "Email" },
    { icon: Linkedin, href: "#", color: "bg-[#0077B5]", label: "LinkedIn" },
    { icon: Twitter, href: "#", color: "bg-[#1DA1F2]", label: "Twitter" },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`w-12 h-12 flex items-center justify-center text-white shadow-lg hover:brightness-110 transition-all cursor-pointer bg-slate-800 border border-slate-700 hover:border-[#D4AF37]`}
                title={social.label}
              >
                <social.icon size={20} className="text-[#D4AF37]" />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#D4AF37] text-[#0F172A] flex items-center justify-center shadow-2xl hover:bg-white transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}

