'use client';

import { useState } from 'react';
import Link from 'next/link';
import { tallyEditions, tallyServices } from '@/content/tally';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GoogleMapSection from '@/components/common/GoogleMapSection';
import TdlPreviewWidget from '@/components/tally/TdlPreviewWidget';
import TallyCalculator from '@/components/tally/TallyCalculator';
import { FadeIn, PageHeaderReveal, StaggerContainer, StaggerItem, InteractiveCard } from '@/components/common/MotionWrapper';

const tallyFaqs = [
  {
    q: 'What is the difference between TallyPrime Silver and Gold?',
    a: 'TallyPrime Silver is a single-user standalone license designed for one PC. TallyPrime Gold is an unlimited multi-user license for LAN environments, allowing multiple accountants and managers to work on the database simultaneously.',
  },
  {
    q: 'Can S.B. Enterprise assist with Tally version upgrades and data migration?',
    a: 'Yes! We handle seamless migrations from older Tally versions (Tally 7.2, 9, ERP 9) to the latest TallyPrime, preserving your entire voucher history, company ledgers, and inventory data.',
  },
  {
    q: 'How fast can our team receive remote AnyDesk support during an AMC contract?',
    a: 'Our Kolkata AMC desk operates with 24*7 remote support through AnyDesk and UltraViewer for troubleshooting sessions, invoice TDL fixes, and database maintenance.',
  },
  {
    q: 'Do you provide custom invoice templates with QR codes and company branding?',
    a: 'Yes. We write custom TDL (Tally Definition Language) scripts to embed UPI QR codes, company logos, bank account details, and statutory GST notices on your printed and PDF vouchers.',
  },
];

export default function TallyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-24 space-y-0">
      
      {/* Page Hero - Dark Dual-Tone */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-24 lg:py-32 border-b border-amber-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[750px] h-[400px] bg-gradient-to-br from-amber-500/15 via-emerald-500/15 to-transparent blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <PageHeaderReveal
            badge="AUTHORISED TALLY SOLUTIONS PARTNER · KOLKATA"
            title="Licensed, configured, and supported by a"
            highlightText="certified partner."
            description="Choose the TallyPrime edition that matches your operational scale, then rely on our Kolkata team for installation, customization, AMC support, and GST compliance."
            tags={['Silver · Gold · Server', 'Genuine Tally License', 'Remote & On-site Support']}
          />
        </div>
      </section>

      {/* Editions - Warm Cream Light Dual-Tone */}
      <section className="bg-[#FFFBEB] text-slate-900 py-20 lg:py-28 border-b border-amber-200/80 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <FadeIn direction="up">
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-800 uppercase tracking-[0.2em] mb-3">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span>TALLYPRIME LICENSING EDITIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950">
              Choose the edition that fits your business.
            </h2>
          </FadeIn>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tallyEditions.map((edition) => (
              <StaggerItem key={edition.id}>
                <InteractiveCard
                  lift={-6}
                  className={`p-8 rounded-3xl border flex flex-col justify-between space-y-6 transition-colors duration-300 h-full ${
                    edition.isPopular
                      ? 'bg-white border-2 border-amber-500 shadow-xl ring-2 ring-amber-500/20'
                      : 'bg-white text-slate-900 border-amber-200/80 shadow-md hover:border-amber-400'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold uppercase tracking-wider ${edition.isPopular ? 'text-amber-800' : 'text-slate-500'}`}>
                        {edition.badge || edition.userType}
                      </span>
                      {edition.isPopular && (
                        <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase bg-amber-400 text-slate-950 rounded-full">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-950">{edition.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {edition.description}
                    </p>
                    <div className="py-3 border-y border-amber-100">
                      <span className="text-3xl font-extrabold text-slate-950">{edition.price}</span>
                      <span className="text-xs block mt-0.5 text-amber-800 font-medium">
                        {edition.priceUnit}
                      </span>
                    </div>
                    <ul className="space-y-2 text-xs font-medium text-slate-700">
                      {(edition.features || []).map((h, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 ${edition.isPopular ? 'text-amber-600' : 'text-emerald-600'}`} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/contact?interest=TallyPrime%20sales&edition=${encodeURIComponent(edition.name)}`}
                    className={`w-full text-center py-3.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md hover:scale-[1.02] ${
                      edition.isPopular
                        ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    Inquire About {edition.name}
                  </Link>
                </InteractiveCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services & Support - Dark Dual-Tone */}
      <section id="services" className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-24 lg:py-32 border-b border-amber-500/20 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <FadeIn direction="up">
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em] mb-3">
              <span className="w-8 h-[2px] bg-amber-400" />
              <span>TECHNICAL SERVICES & AMC DESK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Beyond the license: implementation, TDL, AMC, and training.
            </h2>
          </FadeIn>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tallyServices.map((service, idx) => (
              <StaggerItem key={idx}>
                <InteractiveCard
                  lift={-5}
                  className="bg-slate-900/90 border border-amber-500/30 rounded-3xl p-8 space-y-4 shadow-2xl hover:border-amber-400 transition-colors duration-300 h-full flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                        SERVICE {service.number}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">S.B. Enterprise</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-xs font-bold text-amber-400">{service.shortDesc}</p>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">{service.fullDesc}</p>
                  </div>
                  <div className="pt-2">
                    <Link
                      href={`/contact?interest=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      Inquire Service
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </InteractiveCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Live Interactive TDL Preview Widget Section */}
      <section className="bg-[#0A0E1A] py-20 lg:py-28 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          <FadeIn direction="up">
            <TdlPreviewWidget />
          </FadeIn>
        </div>
      </section>

      {/* Interactive Tally Calculator */}
      <FadeIn direction="up">
        <TallyCalculator />
      </FadeIn>

      {/* Tally FAQ - Warm Cream Light Dual-Tone */}
      <section className="bg-[#FFFBEB] text-slate-900 py-20 lg:py-28 border-b border-amber-200/80">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <FadeIn direction="up">
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-800 uppercase tracking-[0.2em] mb-3">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold text-slate-950">
              Tally Licensing & AMC Assistance.
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.1} className="space-y-4">
            {tallyFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white border-2 border-amber-200/90 rounded-2xl overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-slate-950 flex items-center justify-between gap-4 cursor-pointer text-sm"
                >
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="w-5 h-5 text-amber-800" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="p-6 pt-0 text-xs text-slate-700 leading-relaxed border-t border-amber-100 font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Embedded Location Map */}
      <GoogleMapSection />

    </div>
  );
}
