"use client";

import { Mail, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SocialWidget() {
  const socialLinks = [
    { icon: Mail, href: "mailto:contact@aurelius.com", color: "bg-[#D4AF37]", label: "Email" },
    { icon: Linkedin, href: "#", color: "bg-[#0077B5]", label: "LinkedIn" },
    { icon: Twitter, href: "#", color: "bg-[#1DA1F2]", label: "Twitter" },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ x: -5 }}
          className={`w-12 h-12 flex items-center justify-center text-white shadow-lg cursor-pointer bg-slate-800 border border-slate-700 hover:border-[#D4AF37] transition-all`}
          title={social.label}
        >
          <social.icon size={20} className="text-[#D4AF37]" />
        </motion.a>
      ))}
    </div>
  );
}
