'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { getImageAsset } from '@/lib/images';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideData {
  id: number;
  badge: string;
  headline: string;
  highlightText: string;
  description: string;
  cta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  imageKey: string;
  stats: { label: string; val: string }[];
}

const slides: SlideData[] = [
  {
    id: 1,
    badge: 'Certified Tally Partner · Kolkata',
    headline: 'The right business tools.',
    highlightText: 'The right local support.',
    description:
      `We provide genuine TallyPrime licensing, dedicated AMC support, GST compliance setup, and web software development with Nexiog — serving Kolkata and West Bengal.`,
    cta: { label: 'Explore Products', href: '/products' },
    secondaryCta: { label: 'Contact Our Team', href: '/contact' },
    imageKey: 'sbeHero',
    stats: [
      { label: 'Authorized Partner', val: 'Tally Certified' },
      { label: 'Support SLA', val: '24–48 Hours' },
      { label: 'Location', val: 'Kolkata' },
    ],
  },
  {
    id: 2,
    badge: 'TallyPrime Solutions',
    headline: 'Power your accounting with',
    highlightText: 'TallyPrime Silver & Gold.',
    description:
      'From single-PC Silver setups to unlimited multi-user Gold LAN access and dedicated Server databases — configured for GST by our Kolkata team.',
    cta: { label: 'Compare Editions', href: '/tally' },
    secondaryCta: { label: 'Get Instant Quote', href: '/contact?interest=TallyPrime' },
    imageKey: 'tallyHero',
    stats: [
      { label: 'Silver Edition', val: 'Single User' },
      { label: 'Gold Edition', val: 'Unlimited LAN' },
      { label: 'GST Compliance', val: '100% Ready' },
    ],
  },
  {
    id: 3,
    badge: 'Product Catalogue',
    headline: 'Software & services built for',
    highlightText: 'long-term stability.',
    description:
      'Browse our complete B2B portfolio across accounting licenses, AMC packages, statutory add-ons, and digital software.',
    cta: { label: 'View Catalogue', href: '/products' },
    secondaryCta: { label: 'Send Requirement', href: '/contact' },
    imageKey: 'productsPortfolio',
    stats: [
      { label: 'Licensing', val: 'Genuine Keys' },
      { label: 'Services', val: 'AMC & TDL' },
      { label: 'Digital', val: 'Web & App' },
    ],
  },
  {
    id: 4,
    badge: 'Nexiog Partnership',
    headline: 'Websites, mobile apps &',
    highlightText: 'custom B2B software.',
    description:
      `We've partnered with Nexiog to bring modern web development, mobile apps, and custom business portals directly to our customers.`,
    cta: { label: 'Explore Nexiog', href: '/nexiog' },
    secondaryCta: { label: 'Consult Us', href: '/contact?interest=Nexiog%20products' },
    imageKey: 'nexiogHero',
    stats: [
      { label: 'Web Apps', val: 'Next.js Tech' },
      { label: 'Mobile', val: 'iOS & Android' },
      { label: 'Point of Contact', val: 'S.B. Enterprise' },
    ],
  },
];

const smoothEase = [0.16, 1, 0.3, 1];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6500);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.targetTouches[0].clientX; };
  const onTouchMove = (e: React.TouchEvent) => { touchEndX.current = e.targetTouches[0].clientX; };
  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slide = slides[current];

  return (
    <section
      className="relative min-h-[92vh] flex items-center bg-slate-950 text-white overflow-hidden pt-20"
      aria-roledescription="carousel"
      aria-label="S.B. Enterprise highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Background imagery with crossfade */}
      {slides.map((s, idx) => {
        const asset = getImageAsset(s.imageKey);
        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? 'opacity-40 scale-105' : 'opacity-0 pointer-events-none scale-100'
            } transition-transform duration-[8000ms]`}
          >
            <Image
              src={asset.src}
              alt={asset.alt}
              fill
              priority={idx === 0}
              quality={90}
              className="object-cover object-center"
            />
          </div>
        );
      })}

      {/* Modern Gradient & Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      
      {/* Glowing accent ambient light */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content with AnimatePresence */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: smoothEase }}
                className="space-y-8"
              >
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-xs font-semibold text-indigo-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {slide.badge}
                </div>

                {/* Headline */}
                <div className="space-y-2">
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                    {slide.headline}
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-amber-200">
                      {slide.highlightText}
                    </span>
                  </h1>
                </div>

                {/* Description */}
                <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                  {slide.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={slide.cta.href}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-105"
                  >
                    {slide.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={slide.secondaryCta.href}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white border border-white/20 hover:border-white/40 rounded-xl backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
                  >
                    {slide.secondaryCta.label}
                  </Link>
                </div>

                {/* Quick Stat Bar inside Hero */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl">
                  {slide.stats.map((st, i) => (
                    <div key={i}>
                      <div className="text-xs text-slate-400 font-medium">{st.label}</div>
                      <div className="text-sm font-bold text-white mt-0.5">{st.val}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Interactive Card Preview Badge */}
          <div className="hidden lg:block lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-200">Local Service SLA</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-slate-900/60 rounded-xl border border-white/5 text-xs space-y-1">
                  <span className="text-indigo-300 font-semibold block">TallyPrime Certified</span>
                  <p className="text-slate-400">Direct sales, licence migration & AnyDesk support</p>
                </div>
                <div className="p-3.5 bg-slate-900/60 rounded-xl border border-white/5 text-xs space-y-1">
                  <span className="text-amber-300 font-semibold block">Nexiog Execution</span>
                  <p className="text-slate-400">Web applications, mobile apps & B2B portals</p>
                </div>
              </div>

              <a
                href="tel:+917059574585"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/15 text-white font-medium text-xs rounded-xl border border-white/10 transition-all hover:scale-[1.02]"
              >
                <PhoneCall className="w-3.5 h-3.5 text-indigo-300" />
                <span>Call +91-7059574585</span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Modern Slide Controls & Progress Bar */}
      <div className="absolute bottom-6 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            {/* Slide Navigation Dots */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium text-slate-400 tabular-nums">
                0{current + 1} / 0{slides.length}
              </span>
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === current ? 'w-8 bg-indigo-500' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Carousel Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-lg border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer hover:scale-105"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all cursor-pointer hover:scale-105"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
