'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { companyInfo } from '@/content/company';

const homeFaqs = [
  {
    q: 'How fast can S.B. Enterprise activate a new TallyPrime license?',
    a: 'For TallyPrime Silver and Gold editions, license activation is completed on the same day. Our Kolkata technical team handles remote AnyDesk setup, company data creation, and GST tax master setup immediately upon registration.',
  },
  {
    q: 'What is included in an Annual Maintenance Contract (AMC) with S.B. Enterprise?',
    a: 'Our AMC includes year-round direct phone support line during business hours (Mon–Sat 10am–7pm), 24*7 remote support through AnyDesk and UltraViewer for voucher errors, corrupted data recovery, version upgrades, and minor TDL adjustments.',
  },
  {
    q: 'Can we integrate dynamic UPI payment QR codes onto our printed invoices?',
    a: 'Yes! We install a custom TDL module that generates dynamic UPI payment QR codes linked directly to your company bank account on Tax Invoices, Delivery Challans, and Retail Bills.',
  },
  {
    q: 'Do you build custom web applications and mobile apps that connect with Tally?',
    a: 'Yes. Our SBE Digital Studio builds bespoke Next.js 15 web applications, B2B client ordering portals, iOS/Android mobile apps, and real-time REST API bridges that sync orders and stock balances directly with your Tally database.',
  },
  {
    q: 'Can S.B. Enterprise assist with upgrading older Tally ERP 9 data to TallyPrime?',
    a: 'Absolutely. We handle 100% safe data migrations from legacy Tally versions (7.2, 9, ERP 9) to the latest TallyPrime version without any loss of voucher history, ledger balances, or inventory stock units.',
  },
];

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white border-b border-amber-500/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">
            <span className="w-6 h-[2px] bg-amber-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
            <span className="w-6 h-[2px] bg-amber-400" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Clear answers to common questions.
          </h2>
          <p className="text-slate-300 text-xs leading-relaxed font-normal">
            Everything you need to know about TallyPrime licensing, AMC support, custom TDL scripting, and web software builds.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {homeFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left font-bold text-white flex items-center justify-between gap-4 cursor-pointer text-sm"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-400 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="p-6 pt-0 text-xs text-slate-300 leading-relaxed border-t border-white/10 font-normal">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Contact Footer */}
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-slate-300 font-medium">Have a specific technical question? Speak directly with our Kolkata desk.</span>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl transition-all shrink-0"
          >
            Contact Desk
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
