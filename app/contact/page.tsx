"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 min-h-screen bg-[#0F172A] flex flex-col">
      <div className="container mx-auto px-6 mb-20 flex-grow">
        <h1 className="font-serif text-5xl text-white mb-16 text-center">Contact Us</h1>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-[#1E293B] p-12 border border-slate-700">
             <form className="space-y-8">
               <div className="grid md:grid-cols-2 gap-8">
                 <div>
                   <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">First Name</label>
                   <input type="text" className="w-full bg-[#0F172A] border border-slate-700 text-white p-4 focus:border-[#D4AF37] focus:outline-none transition-colors" />
                 </div>
                 <div>
                   <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">Last Name</label>
                   <input type="text" className="w-full bg-[#0F172A] border border-slate-700 text-white p-4 focus:border-[#D4AF37] focus:outline-none transition-colors" />
                 </div>
               </div>
               <div>
                  <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">Email Address</label>
                  <input type="email" className="w-full bg-[#0F172A] border border-slate-700 text-white p-4 focus:border-[#D4AF37] focus:outline-none transition-colors" />
               </div>
               <div>
                  <label className="block text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">Matter Details</label>
                  <textarea rows={5} className="w-full bg-[#0F172A] border border-slate-700 text-white p-4 focus:border-[#D4AF37] focus:outline-none transition-colors" />
               </div>
               <button className="w-full bg-[#D4AF37] text-[#0F172A] py-5 font-bold tracking-widest uppercase hover:bg-white transition-colors">
                 Request Consultation
               </button>
             </form>
          </div>

          <div className="space-y-12 py-8">
            <div>
              <h3 className="font-serif text-2xl text-white mb-6 flex items-center gap-4">
                <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <MapPin size={24} strokeWidth={1} />
                </div>
                Headquarters
              </h3>
              <p className="text-slate-400 text-lg ml-16 leading-relaxed">
                123 Wall Street, Suite 400<br/>
                New York, NY 10005<br/>
                United States
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-white mb-6 flex items-center gap-4">
                <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <Phone size={24} strokeWidth={1} />
                </div>
                Inquiries
              </h3>
              <div className="ml-16 text-slate-400 text-lg space-y-2">
                <p>Global: <span className="text-white">+1 (212) 555-0123</span></p>
                <p>Fax: +1 (212) 555-0124</p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-white mb-6 flex items-center gap-4">
                <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <Mail size={24} strokeWidth={1} />
                </div>
                Email
              </h3>
              <p className="text-slate-400 text-lg ml-16">
                <a href="mailto:contact@aurelius.com" className="hover:text-[#D4AF37] transition-colors">contact@aurelius.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Map */}
      <div className="w-full h-[400px] grayscale invert hover:grayscale-0 hover:invert-0 transition-all duration-1000 border-t border-slate-800">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.0086609845942!3d40.70562587933285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a171350e413%3A0x675865581e2894b6!2s123%20Wall%20St%2C%20New%20York%2C%20NY%2010005!5e0!3m2!1sen!2sus!4v1703660000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

