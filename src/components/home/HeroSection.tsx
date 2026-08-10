'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, CheckCircle2, ChevronLeft, ChevronRight, Layers, Cpu, QrCode, Code2 } from 'lucide-react';
import { companyInfo } from '@/content/company';

const slides = [
  {
    id: 1,
    topic: 'Tally Licensing',
    badge: 'TALLYPRIME LICENSING',
    headline: 'Official TallyPrime Software & Enterprise ERP',
    highlightText: 'in Kolkata.',
    description: 'Genuine Silver single-user & Gold multi-user LAN software licenses registered directly with Tally Solutions, featuring same-day remote AnyDesk activation and complete GST compliance.',
    primaryCta: 'Explore Tally Licensing',
    primaryHref: '/tally',
    bgImage: '/images/sbe_slide1_branded_v2.jpg',
    perks: ['Silver ₹22,500 / Gold ₹67,500', 'Same-Day Activation', '100% GST Compliant'],
    icon: Layers,
  },
  {
    id: 2,
    topic: 'AMC Technical Desk',
    badge: 'TECHNICAL AMC SUPPORT',
    headline: 'Dependable AMC Support & Data Repair',
    highlightText: 'in Kolkata.',
    description: 'Direct phone support line during business hours and fast AnyDesk remote troubleshooting for corrupted data recovery, invoice voucher TDL fixes, version upgrades, and year-end book closure.',
    primaryCta: 'Explore AMC Support',
    primaryHref: '/tally#services',
    bgImage: '/images/slide2.jpg',
    perks: ['24*7 Remote Support (AnyDesk & UltraViewer)', 'Direct Phone Desk Line', 'Emergency Data Recovery'],
    icon: Cpu,
  },
  {
    id: 3,
    topic: 'Custom TDL Invoices',
    badge: 'CUSTOM TDL ENGINEERING',
    headline: 'Custom TDL Invoice Printing & Dynamic UPI QR',
    highlightText: 'in Kolkata.',
    description: 'Tailor-made voucher printing layouts, high-resolution logo branding, dynamic UPI payment QR codes, and statutory GST notices engineered for your exact business workflow.',
    primaryCta: 'Inquire Custom TDL',
    primaryHref: '/contact?interest=Custom%20TDL',
    bgImage: '/images/slide3.jpg',
    perks: ['Dynamic UPI Payment QR', 'Company Logo & Bank Terms', '48 Hours Delivery SLA'],
    icon: QrCode,
  },
  {
    id: 4,
    topic: 'Web & Mobile Studio',
    badge: 'CUSTOM SOFTWARE STUDIO',
    headline: 'Custom Web Applications, Mobile Apps & Tally API',
    highlightText: 'in Kolkata.',
    description: 'Modern responsive web portals, B2B client ordering dashboards, iOS/Android mobile apps, and real-time inventory REST API synchronization with your desktop Tally database.',
    primaryCta: 'Discover Digital Builds',
    primaryHref: '/digital',
    bgImage: '/images/slide4.jpg',
    perks: ['Next.js 15 Web Applications', 'iOS / Android Mobile Apps', 'Live Tally Database Sync'],
    icon: Code2,
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeIndex];

  return (
    <section
      className="relative w-full h-screen min-h-screen flex items-center justify-center pt-20 bg-[#040711] text-white overflow-hidden border-b border-amber-500/20"
    >
      {/* 100% Full Screen Opacity Background Image */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            idx === activeIndex ? 'opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <Image
            src={s.bgImage}
            alt={s.headline}
            fill
            priority={idx === 0}
            className="object-cover object-center"
          />
          {/* Subtle Bottom Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-transparent" />
        </div>
      ))}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Readable Typography */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Natural Line Eyebrow Header */}
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">
              <span className="w-8 h-[2px] bg-amber-400" />
              <span>{slide.badge}</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-md">
              {slide.headline}{' '}
              <span className="text-amber-400">
                {slide.highlightText}
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              {slide.description}
            </p>

            {/* Deliverable Perks */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-200 pt-1">
              {slide.perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            {/* Action CTAs in Apple Signature Pill Style */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href={slide.primaryHref}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.45)] hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>{slide.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${companyInfo.contact.phones[0]}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-full transition-all duration-300 backdrop-blur-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.25)] hover:scale-[1.03] active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {companyInfo.contact.phones[0]}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Floating Glassmorphic Slide Switcher Cards (5 cols) */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="space-y-3">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest px-1 mb-2">
                SELECT SERVICE CATEGORY:
              </div>
              
              {slides.map((s, idx) => {
                const Icon = s.icon;
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full p-4 rounded-full text-left transition-all relative overflow-hidden cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950 font-extrabold shadow-xl scale-[1.02]'
                        : 'bg-slate-900/80 backdrop-blur-md text-slate-300 border border-white/10 hover:border-amber-400/50 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${isSelected ? 'bg-slate-950 text-amber-400' : 'bg-white/10 text-amber-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-snug">{s.topic}</div>
                        <div className={`text-[11px] ${isSelected ? 'text-slate-900 font-medium' : 'text-slate-400'}`}>{s.badge}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 pr-2">
                      {isSelected ? (
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-950 animate-ping" />
                      ) : (
                        <ArrowRight className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
