'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/common/MotionWrapper';

const industries = [
  {
    id: 'manufacturing',
    title: 'Manufacturing & Processing Plants',
    description: 'Multi-level Bill of Materials (BOM), godown raw material stock transfers, batch/expiry tracking, scrap recording, and manufacturing journal vouchers in TallyPrime.',
    image: '/images/ind_manufacturing.jpg',
    deliverables: [
      'Multi-level Bill of Materials (BOM) setup',
      'Batch-wise stock aging & expiry date alerts',
      'Manufacturing journal & scrap allocation',
    ],
  },
  {
    id: 'distribution',
    title: 'Wholesale & FMCG Distribution',
    description: 'Multi-tier price list structures, customer credit limit enforcement, salesman commission tracking, automated e-Way Bill, and e-Invoice API voucher generation.',
    image: '/images/ind_distribution.jpg',
    deliverables: [
      'Automated e-Way Bill & e-Invoicing portal sync',
      'Multi-tier price lists & bulk discount schemes',
      'Credit limit lock system during invoice entry',
    ],
  },
  {
    id: 'retail',
    title: 'Retail Outlets & POS Outlets',
    description: 'Fast POS invoice entry, barcode scanner integration, split cash/UPI/card payment collection, daily counter cash balance reports, and stock audit sheets.',
    image: '/images/ind_retail.jpg',
    deliverables: [
      'Barcode scanner & thermal receipt printer setup',
      'Split payment checkout (Cash + UPI + Card)',
      'Daily counter reconciliation & stock audit',
    ],
  },
  {
    id: 'services',
    title: 'Corporate & Service Agencies',
    description: 'Statutory Service GST compliance, automated client TDS deduction tracking, retainer invoice scheduling, and direct client ledger statement dispatch.',
    image: '/images/ind_corporate.jpg',
    deliverables: [
      'Service GST e-Invoicing & SAC master setup',
      'Automated client TDS deduction ledger tracking',
      'Scheduled WhatsApp & PDF ledger dispatch',
    ],
  },
  {
    id: 'trade',
    title: 'Export & Import Enterprises',
    description: 'Multi-currency ledger entries, automated forex gain/loss calculation, LUT shipping bill vouchers, and foreign remittance bank realization vouchers.',
    image: '/images/ind_export.jpg',
    deliverables: [
      'Multi-currency transaction & forex gain/loss',
      'Letter of Undertaking (LUT) & shipping bills',
      'Bank realization certificate (BRC) tracking',
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFBEB] text-slate-900 border-b border-amber-200/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <FadeIn direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-800 uppercase tracking-[0.2em]">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span>INDUSTRY-SPECIFIC SOLUTIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Configured for your specific business workflow.
            </h2>
          </div>

          <p className="text-slate-700 text-sm max-w-md font-normal leading-relaxed">
            We customize TallyPrime features, voucher entry screens, and statutory GST modules to match the operational demands of your industry sector.
          </p>
        </FadeIn>

        {/* Industries Grid */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <StaggerItem key={ind.id}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white border-2 border-amber-200/90 rounded-3xl overflow-hidden flex flex-col justify-between shadow-md hover:border-amber-500 transition-colors duration-300 group h-full"
              >
                <div>
                  {/* Header Image */}
                  <div className="relative h-48 w-full bg-amber-100 overflow-hidden">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    <h3 className="font-display text-xl font-extrabold text-slate-950 leading-snug group-hover:text-amber-800 transition-colors">
                      {ind.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {ind.description}
                    </p>

                    <div className="pt-3 space-y-2 border-t border-amber-100">
                      <span className="text-[11px] font-extrabold text-slate-950 uppercase block">Key Deliverables:</span>
                      {ind.deliverables.map((del, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="px-8 pb-8 pt-0">
                  <Link
                    href={`/contact?interest=${encodeURIComponent(ind.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-950 bg-amber-100 hover:bg-amber-400 border border-amber-300 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span>Inquire Industry Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
