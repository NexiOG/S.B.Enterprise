import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { companyInfo } from '@/content/company';
import { ShieldCheck, ArrowRight, Building2, CheckCircle2, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Client Case Studies & Enterprise Projects | S.B. Enterprise Kolkata',
  description: 'Explore real-world Tally customization, multi-godown inventory automation, and Next.js web application case studies by S.B. Enterprise in West Bengal.',
};

const caseStudies = [
  {
    id: 'mfg-steel-bom',
    title: 'Manufacturing BOM & Multi-Godown Automation',
    industry: 'Manufacturing & Industrial Fabrication',
    location: 'Howrah Industrial Belt, West Bengal',
    image: '/images/ind_manufacturing.jpg',
    challenge: 'A multi-unit steel fabrication plant was struggling with inaccurate Raw Material Bill of Materials (BOM) tracking and manual multi-godown ledger reconciliations across 4 factories.',
    solution: 'Engineered a custom TDL module for TallyPrime Gold, integrating automated Job Work manufacturing vouchers, multi-godown stock transfer rules, and real-time scrap loss calculations.',
    results: [
      'Eliminated 98% of physical inventory audit discrepancies.',
      'Reduced daily bill of entry and dispatch voucher entry times from 4 hours to 15 minutes.',
      'Full compliance with GST e-Way Bill & e-Invoicing automated pipeline.',
    ],
  },
  {
    id: 'wholesale-distribution-qr',
    title: 'Wholesale Distribution & Dynamic UPI QR Invoicing',
    industry: 'Wholesale & FMCG Distribution',
    location: 'Burrabazar & Posta, Kolkata',
    image: '/images/ind_distribution.jpg',
    challenge: 'A major FMCG distributor managing 1,200+ retail accounts experienced outstanding payment collection delays due to static bank transfer details on paper tax invoices.',
    solution: 'Deployed custom TDL for TallyPrime with dynamic bank UPI QR codes generated directly on tax invoice PDFs, alongside 24*7 remote AnyDesk support SLA.',
    results: [
      'Payment collection turnaround accelerated by 42%.',
      'Instant settlement verification via customer mobile UPI apps.',
      'Zero manual payment reconciliation errors in Tally ledger.',
    ],
  },
  {
    id: 'retail-pos-multi-store',
    title: 'Multi-Store Retail POS & Central Accounting Sync',
    industry: 'Retail & Consumer Outlets',
    location: 'Kolkata & Salt Lake Outlets',
    image: '/images/ind_retail.jpg',
    challenge: 'A growing apparel retail chain required real-time daily sales sync between 5 outlet POS billing counters and their central Tally accounting server.',
    solution: 'Built a custom Next.js web portal with REST API synchronization connecting daily POS cash register totals directly to central Tally company data.',
    results: [
      'Automated nightly ledger sync across all 5 retail locations.',
      'Real-time central dashboard visibility for management.',
      '24*7 remote AnyDesk/UltraViewer support ensuring uninterrupted weekend billing.',
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="pt-24 min-h-screen bg-slate-950 text-white">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-20 lg:py-28 border-b border-amber-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-amber-500/10 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-6">
          <div className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">
            <span className="w-8 h-[2px] bg-amber-400" />
            <span>REAL-WORLD ENTERPRISE IMPACT</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl">
            Client Success Stories & Enterprise Builds
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
            Discover how S.B. Enterprise empowers manufacturing plants, wholesale distributors, and retail chains across West Bengal with genuine TallyPrime licensing, custom TDLs, and Next.js web applications.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 lg:py-28 bg-[#0A0E1A] border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          
          {caseStudies.map((study, idx) => (
            <div
              key={study.id}
              className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center hover:border-amber-500/40 transition-all duration-300 shadow-2xl"
            >
              {/* Image Column (5 cols) */}
              <div className="lg:col-span-5 relative h-[320px] rounded-2xl overflow-hidden border border-slate-800">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-xs">
                  <span className="px-3 py-1 bg-amber-400 text-slate-950 font-bold rounded-full text-[10px]">
                    {study.industry}
                  </span>
                  <p className="text-slate-300 font-medium mt-2">{study.location}</p>
                </div>
              </div>

              {/* Text Content Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {study.title}
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-normal">
                  <div>
                    <span className="font-bold text-amber-400 block mb-1">Business Challenge:</span>
                    <p className="leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <span className="font-bold text-amber-400 block mb-1">Our Partner Solution:</span>
                    <p className="leading-relaxed">{study.solution}</p>
                  </div>

                  <div className="pt-2">
                    <span className="font-bold text-emerald-400 block mb-2">Key Measurable Results:</span>
                    <ul className="space-y-2">
                      {study.results.map((res, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-6 py-3 rounded-full transition-all duration-300 shadow-md"
                  >
                    <span>Request Similar Scope for Your Business</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CTA Callout */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-display text-3xl font-bold text-white">
            Have a custom accounting or software requirement?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto">
            Speak directly with our Kolkata engineering desk for custom TDL modules, TallyPrime licensing, or Next.js web application scopes.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-xl"
            >
              <span>Contact Kolkata Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
