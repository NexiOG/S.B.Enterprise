'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { companyInfo } from '@/content/company';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Footer() {
  const watermarkRef = useRef<HTMLDivElement>(null);
  // Trigger as soon as the footer area enters within 150px of viewport
  const isInView = useInView(watermarkRef, { once: false, margin: '0px 0px 100px 0px', amount: 0.1 });

  return (
    <footer className="bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white pt-24 pb-12 relative overflow-hidden border-t border-amber-400/30">
      
      {/* Background Soft Mesh Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[400px] bg-amber-400/15 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-emerald-400/10 blur-[160px] pointer-events-none" />

      {/* Crisp Corporate Background Photography Overlay with Subtle Dark Mask */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/sbe_tally_partner.jpg"
          alt="S.B. Enterprise Kolkata Operations Background"
          fill
          className="object-cover opacity-40 filter contrast-110 saturate-75"
        />
        {/* Subtle Dark Mask Overlay */}
        <div className="absolute inset-0 bg-slate-950/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#1E293B]/80 to-[#0F172A]/95" />
      </div>

      {/* Top Floating Control Dock Widget Bar (Cooldock Style) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto px-6 mb-16 relative z-20"
      >
        <div className="bg-slate-900/95 backdrop-blur-2xl text-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-amber-400/30 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Dock Widget 1: Office Status */}
          <div className="flex items-center gap-4 bg-white/10 border border-white/15 px-5 py-3 rounded-2xl">
            <div className="text-amber-400 font-extrabold text-lg sm:text-xl tracking-tight leading-none">
              KOLKATA DESK
            </div>
            <div className="text-[11px] text-slate-200 border-l border-white/20 pl-4 space-y-0.5 font-medium">
              <div className="font-bold text-white">Mon–Sat, 10am–7pm</div>
              <div className="text-amber-300 text-[10px]">Ashokegarh, Kolkata</div>
            </div>
          </div>

          {/* Dock Widget 2: Authorized Tally Badge */}
          <div className="flex items-center gap-3 bg-white/10 border border-white/15 px-5 py-3 rounded-2xl text-xs">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-[11px] font-medium text-slate-200">
              <span className="font-bold text-white block">Authorized Tally Partner</span>
              <span>24*7 AnyDesk & UltraViewer Support</span>
            </div>
          </div>

          {/* Dock Widget 3: Quick Action Pill CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/support"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-md hover:scale-105"
            >
              <span>Remote Support Portal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={`tel:${companyInfo.contact.phones[0]}`}
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/20 hover:scale-105"
              title="Call Office Desk"
            >
              <Phone className="w-4 h-4 text-amber-400" />
            </a>
          </div>

        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Minimalist 4-Column Editorial Layout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start"
        >
          
          {/* Column 1: Brand & Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm tracking-tight shadow-md">
                SB
              </div>
              <span className="font-display text-2xl font-extrabold text-white tracking-tight">
                {companyInfo.name}
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Official Tally Solutions Partner in Kolkata. Providing TallyPrime licensing, 24*7 remote support through AnyDesk and UltraViewer, custom TDLs, and Next.js web application development across West Bengal.
            </p>

            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-md hover:scale-105"
              >
                <span>Contact Kolkata Office</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Minimalist Menu (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-amber-400">
              Menu
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-amber-400 transition-colors block font-semibold text-slate-200">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-amber-400 transition-colors block">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Minimalist Tally Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-amber-400">
              Tally Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <Link href="/tally" className="hover:text-amber-400 transition-colors block">
                  Silver License
                </Link>
              </li>
              <li>
                <Link href="/tally" className="hover:text-amber-400 transition-colors block">
                  Gold LAN License
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-amber-400 transition-colors block font-semibold text-slate-200">
                  24*7 Support Portal
                </Link>
              </li>
              <li>
                <Link href="/contact?interest=Custom%20TDL" className="hover:text-amber-400 transition-colors block">
                  Custom TDL & UPI QR
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors block">
                  GST & e-Invoicing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Minimalist Digital Studio & Legal (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-widest text-amber-400">
              Digital & Legal
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <Link href="/digital" className="hover:text-amber-400 transition-colors block">
                  Next.js Web Apps
                </Link>
              </li>
              <li>
                <Link href="/digital" className="hover:text-amber-400 transition-colors block">
                  Mobile Apps (iOS/Android)
                </Link>
              </li>
              <li>
                <Link href="/digital" className="hover:text-amber-400 transition-colors block">
                  Custom CRM & CMS
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition-colors block font-semibold text-slate-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition-colors block font-semibold text-slate-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </motion.div>

        {/* Bottom Bar: Exact Left-Corner Copyright & Right-Corner Credit Line */}
        <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-normal relative z-10">
          
          {/* Left Corner: Copyright Notice */}
          <div className="text-slate-300 text-left flex items-center gap-3">
            <span>© {new Date().getFullYear()} S.B. Enterprise — All rights reserved</span>
            <span className="text-slate-600">|</span>
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy</Link>
            <span className="text-slate-600">|</span>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms</Link>
          </div>

          {/* Right Corner: EXACT Credit Link Destination */}
          <div className="text-slate-300 text-right">
            Designed & Crafted with ❤️ by{' '}
            <a
              href="https://nexiog.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold transition-colors underline underline-offset-4"
            >
              NexiOG Technologies
            </a>
          </div>

        </div>

      </div>

      {/* Guaranteed Visible, Slow Left-to-Right Reveal for S.B. ENTERPRISE Typography */}
      <div
        ref={watermarkRef}
        className="w-full pt-16 pb-4 select-none pointer-events-none overflow-hidden flex items-center justify-center text-center z-10 relative px-4"
      >
        <div className="relative inline-block overflow-hidden">
          
          {/* Base High-Visibility Gold Watermark Text */}
          <motion.span
            initial={{ opacity: 0.15 }}
            animate={{ opacity: isInView ? 1 : 0.15 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="font-display font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[11vw] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400/80 via-amber-200/90 to-amber-500/80 whitespace-nowrap leading-none text-center uppercase block"
          >
            S.B. ENTERPRISE
          </motion.span>

          {/* Slow Shimmering Left-to-Right Light Wipe Overlay */}
          <motion.div
            initial={{ x: '-105%' }}
            animate={{ x: isInView ? '105%' : '-105%' }}
            transition={{
              duration: 3.2,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.2,
              repeat: Infinity,
              repeatDelay: 4,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
          />

          {/* Left-to-Right Unmasking Layer */}
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: isInView ? '100%' : '0%' }}
            transition={{
              duration: 3.0,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
            className="absolute top-0 left-0 bottom-0 overflow-hidden pointer-events-none"
          >
            <span className="font-display font-black text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[11vw] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-400 whitespace-nowrap leading-none uppercase block drop-shadow-[0_0_25px_rgba(251,191,36,0.4)]">
              S.B. ENTERPRISE
            </span>
          </motion.div>

        </div>
      </div>

    </footer>
  );
}
