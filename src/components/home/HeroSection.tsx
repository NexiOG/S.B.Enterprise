'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { companyInfo } from '@/content/company';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    topic: 'Tally Licensing',
    badge: 'AUTHORIZED TALLY SOLUTIONS PARTNER · KOLKATA',
    headline: 'Official TallyPrime Software & Enterprise ERP',
    highlightText: 'in Kolkata.',
    description: 'Genuine Silver single-user & Gold multi-user LAN software licenses registered directly with Tally Solutions, featuring same-day remote AnyDesk activation and complete GST compliance.',
    primaryCta: 'Explore Tally Licensing',
    primaryHref: '/tally',
    image: '/images/sbe_slide1_branded_v2.jpg',
    imageAlt: 'S.B. Enterprise Official Tally Solutions Partner Kolkata',
    perks: ['Silver ₹22,500 / Gold ₹67,500', 'Same-Day Remote Setup', '100% GST & e-Invoice Ready'],
  },
  {
    id: 2,
    topic: 'AMC Technical Desk',
    badge: 'GUARANTEED TECHNICAL AMC SLA · 24*7 DESK',
    headline: 'Dependable AMC Support & Data Recovery',
    highlightText: 'in Kolkata.',
    description: 'Direct phone support line during business hours and fast AnyDesk remote troubleshooting for corrupted data recovery, invoice voucher TDL fixes, version upgrades, and year-end book closure.',
    primaryCta: 'Explore AMC Support',
    primaryHref: '/tally#services',
    image: '/images/slide2.jpg',
    imageAlt: 'TallyPrime Technical AMC Support Desk Session',
    perks: ['24*7 Remote Support (AnyDesk & UltraViewer)', 'Direct Phone Desk Hotline', 'Emergency Data Recovery'],
  },
  {
    id: 3,
    topic: 'Custom TDL Invoices',
    badge: 'BESPOKE TDL SCRIPTING & QR INTEGRATION',
    headline: 'Custom TDL Invoice Printing & Dynamic UPI QR',
    highlightText: 'in Kolkata.',
    description: 'Tailor-made voucher printing layouts, high-resolution logo branding, dynamic UPI payment QR codes, and statutory GST notices engineered for your exact business workflow.',
    primaryCta: 'Inquire Custom TDL',
    primaryHref: '/contact?interest=Custom%20TDL',
    image: '/images/slide3.jpg',
    imageAlt: 'Custom TDL Invoicing with Dynamic UPI QR Code',
    perks: ['Dynamic UPI Payment QR', 'Company Logo & Bank Terms', '48 Hours Delivery SLA'],
  },
  {
    id: 4,
    topic: 'Web & Mobile Studio',
    badge: 'NEXIOG DIGITAL SOFTWARE BUILD STUDIO',
    headline: 'Custom Web Applications, Mobile Apps & Tally API',
    highlightText: 'in Kolkata.',
    description: 'Modern responsive web portals, B2B client ordering dashboards, iOS/Android mobile apps, and real-time inventory REST API synchronization with your desktop Tally database.',
    primaryCta: 'Discover Digital Builds',
    primaryHref: '/digital',
    image: '/images/slide4.jpg',
    imageAlt: 'NexiOG Digital Web & Mobile Development Studio',
    perks: ['Next.js 15 Web Applications', 'iOS / Android Mobile Apps', 'Live Tally Database Sync'],
  },
];

// Ultra-smooth, slow cinematic easing curve
const slowCinematicEase = [0.16, 1, 0.3, 1];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Slower auto-play interval (9.5 seconds) for relaxed reading
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 9500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = slides[activeIndex];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full h-screen min-h-screen flex items-center bg-slate-950 text-white overflow-hidden"
    >
      {/* ── 1. Full-Screen Background Image with Slow 1.6s Crossfade ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority
              quality={90}
              className="object-cover object-center"
            />
            {/* Soft Edge Contrast Vignettes */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── 2. Slow & Graceful Layered Kinetic Typography ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full pt-16">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6"
            >
              {/* Step 1: Eyebrow Header Accent Line & Text (Slow 0.9s) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: slowCinematicEase } },
                  exit: { opacity: 0, x: -10, transition: { duration: 0.5 } },
                }}
                className="flex items-center gap-3 text-xs font-extrabold text-amber-400 uppercase tracking-[0.22em]"
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.0, ease: slowCinematicEase }}
                  className="w-8 h-[2px] bg-amber-400 shrink-0 origin-left"
                />
                <span className="truncate">{slide.badge}</span>
              </motion.div>

              {/* Step 2: Main Headline with Slow 1.2s Optical Blur-In Focus */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: { duration: 1.2, delay: 0.15, ease: slowCinematicEase },
                  },
                  exit: { opacity: 0, y: -14, filter: 'blur(6px)', transition: { duration: 0.5 } },
                }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-md"
              >
                {slide.headline}{' '}
                <span className="text-amber-400">{slide.highlightText}</span>
              </motion.h1>

              {/* Step 3: Subtitle Description (Slow 1.1s Reveal) */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.1, delay: 0.35, ease: slowCinematicEase },
                  },
                  exit: { opacity: 0, y: -8, transition: { duration: 0.4 } },
                }}
                className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal max-w-2xl text-shadow-sm"
              >
                {slide.description}
              </motion.p>

              {/* Step 4: Staggered Deliverable Perks (Slow 0.9s Cascade) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.9, delay: 0.5, ease: slowCinematicEase },
                  },
                  exit: { opacity: 0, transition: { duration: 0.3 } },
                }}
                className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-200 pt-1"
              >
                {slide.perks.map((perk, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.55 + i * 0.12, ease: slowCinematicEase }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{perk}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Step 5: Action Buttons (Slow 1.0s Entrance) */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.0, delay: 0.7, ease: slowCinematicEase },
                  },
                  exit: { opacity: 0, transition: { duration: 0.3 } },
                }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Link
                  href={slide.primaryHref}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-black text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-xl hover:scale-105"
                >
                  <span>{slide.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${companyInfo.contact.phones[0]}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-slate-900/80 hover:bg-slate-900 border border-white/20 rounded-full transition-all duration-300 backdrop-blur-md hover:scale-105"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {companyInfo.contact.phones[0]}</span>
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── 3. Floating Prev / Next Arrow Navigation Controls ── */}
      <div className="absolute right-6 sm:right-12 bottom-8 sm:bottom-10 flex items-center gap-3 z-20">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-white/20 hover:border-amber-400 text-white transition-all cursor-pointer hover:scale-110 shadow-xl"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-white/20 hover:border-amber-400 text-white transition-all cursor-pointer hover:scale-110 shadow-xl"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
}
