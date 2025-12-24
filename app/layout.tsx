import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import SocialWidget from "@/components/SocialWidget";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif",
  display: "swap",
});

const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurelius & Partners | Elite Legal Counsel",
  description: "Defending your legacy with precision and integrity. Specialized in Corporate Law, M&A, and High-Stakes Litigation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lato.variable} ${playfair.variable} font-sans bg-[#0F172A] text-slate-300 antialiased`}>
        <Navbar />
        {children}
        <SocialWidget />
      </body>
    </html>
  );
}
