'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const coreServices = [
  {
    id: 'licensing',
    title: 'TallyPrime Licensing & LAN Setup',
    description: 'Official Silver single-user and Gold multi-user LAN software licenses registered directly with Tally Solutions in Kolkata. Includes same-day remote AnyDesk and UltraViewer activation, version migration, and complete GST compliance.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85',
    ctaText: 'View Licensing Options',
    ctaHref: '/tally',
  },
  {
    id: 'amc',
    title: 'Technical Support & Data Recovery',
    description: 'Annual Maintenance Contracts (AMC) providing 24*7 remote support through AnyDesk and UltraViewer. Our Kolkata desk handles corrupted database recovery, TDL scripting, and year-end book closure.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85',
    ctaText: 'View Support Plans',
    ctaHref: '/tally#services',
  },
  {
    id: 'tdl',
    title: 'Custom TDL & UPI Invoice Printing',
    description: 'Tailor-made voucher printing layouts, company logo branding, embedded dynamic UPI payment QR codes, and statutory GST notices engineered for your exact accounting workflow.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',
    ctaText: 'Inquire Custom TDL',
    ctaHref: '/contact?interest=Custom%20TDL',
  },
  {
    id: 'digital',
    title: 'Web Software & Mobile Applications',
    description: 'Extend desktop accounting into modern Next.js web portals, B2B customer ordering dashboards, iOS and Android mobile apps, and real-time inventory REST API database synchronization.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
    ctaText: 'Discover Digital Builds',
    ctaHref: '/digital',
  },
];

export default function MainOfferings() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white border-b border-amber-500/20 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[450px] bg-gradient-to-br from-amber-500/15 via-emerald-500/10 to-transparent blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">
              <span className="w-8 h-[2px] bg-amber-400" />
              <span>CORE SERVICES & CAPABILITIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Services for Accounting, Compliance & Custom Software.
            </h2>
          </div>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Clean Human Service Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900/90 border border-amber-500/30 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-amber-400 transition-all duration-300 shadow-2xl group"
            >
              {/* Visual Photography Header */}
              <div className="relative h-60 w-full bg-[#0A0E1A] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/30 to-transparent" />
              </div>

              {/* Content Body */}
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-display text-2xl font-extrabold text-white tracking-tight leading-snug group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Apple Signature CTA Capsule Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">S.B. Enterprise Desk</span>
                  <Link
                    href={service.ctaHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,158,11,0.39)]"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Centered View All Services CTA Button */}
        <div className="flex justify-center pt-8 border-t border-white/10">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-9 py-4 text-sm font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-[0_6px_20px_0_rgba(245,158,11,0.45)] hover:scale-105"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
