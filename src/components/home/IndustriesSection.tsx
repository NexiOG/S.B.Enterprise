'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
  {
    id: 'construction',
    title: 'Construction & Project Contractors',
    description: 'Site-wise job costing, project profit & loss reporting, subcontractor TDS deductions, material transfer vouchers between construction sites, and RA bill accounting.',
    image: '/images/ind_construction.jpg',
    deliverables: [
      'Site-wise job costing & project profitability',
      'Subcontractor RA billing & TDS deductions',
      'Inter-site raw material transfer vouchers',
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white border-b border-amber-500/20 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[450px] bg-gradient-to-br from-amber-500/15 via-emerald-500/10 to-transparent blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">
              <span className="w-8 h-[2px] bg-amber-400" />
              <span>INDUSTRY WORKFLOW SOLUTIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Configured for your specific industry workflow.
            </h2>
          </div>
          <p className="text-slate-300 text-sm max-w-md leading-relaxed font-normal">
            Whether you operate a manufacturing plant, distribution warehouse, retail counter, or corporate agency — we tailor TallyPrime for your exact trade.
          </p>
        </div>

        {/* 6 Executive Photography Showcase Cards (3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/90 border border-amber-500/30 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-amber-400 transition-all duration-300 shadow-2xl group"
            >
              {/* Visual Photography Header */}
              <div className="relative h-52 w-full bg-[#0A0E1A] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/30 to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-display text-xl font-extrabold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Key Deliverable Perks */}
                <div className="space-y-2 pt-3 border-t border-white/10 text-xs font-semibold text-slate-200">
                  {item.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>

                {/* Apple Signature CTA Capsule Button */}
                <div className="pt-3">
                  <Link
                    href={`/contact?interest=Industry%20Solution&industry=${encodeURIComponent(item.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,158,11,0.39)]"
                  >
                    <span>Inquire {item.title.split(' ')[0]} Workflow</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
