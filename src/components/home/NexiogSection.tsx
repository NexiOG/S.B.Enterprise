'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const studioOfferings = [
  {
    id: 'web',
    title: 'Custom Next.js 15 Web Applications',
    subtitle: 'Modern B2B Portals & Customer Dashboards',
    description: 'Built with Next.js 15 and React — delivering ultra-fast responsive corporate websites, B2B customer ordering portals, and secure administrative inventory dashboards.',
    image: '/images/slide4.jpg',
    deliverables: [
      'Next.js 15 SSR architecture & lightning speed',
      'B2B customer ordering & invoice download portals',
      '100% mobile-responsive & SEO-optimized structure',
    ],
  },
  {
    id: 'app',
    title: 'Cross-Platform iOS & Android Mobile Apps',
    subtitle: 'Native Mobile Applications for Sales & Field Teams',
    description: 'Custom mobile applications designed for field sales executives, warehouse staff, and business managers, featuring secure cloud database authentication and offline sync.',
    image: '/images/ind_retail.jpg',
    deliverables: [
      'Cross-platform iOS and Android mobile apps',
      'Field sales order booking & collection tracking',
      'Push notifications & real-time inventory lookup',
    ],
  },
  {
    id: 'custom-software',
    title: 'Custom Enterprise Software Builds (CRM, CMS & ERP)',
    subtitle: 'Bespoke Business Management & Workflow Automation',
    description: 'We design and engineer tailored enterprise software systems built around your exact operational workflow — empowering teams with custom CRM platforms, content CMS tools, warehouse systems, and automated dashboards.',
    image: '/images/ind_corporate.jpg',
    deliverables: [
      'Custom Customer Relationship Management (CRM) Systems',
      'Content Management Systems (CMS) & Web Admin Portals',
      'Warehouse Inventory & Order Management Systems (WMS)',
      'Employee Payroll, Attendance & HR Administrative Portals',
      'Custom Financial Executive Reporting & Analytics Dashboards',
    ],
  },
  {
    id: 'seo',
    title: 'B2B Technical SEO & Growth Engineering',
    subtitle: 'Local Business Visibility & Organic Search Reach',
    description: 'Technical search engine optimization, local business visibility across West Bengal, structured schema markup, and Google Business Profile management.',
    image: '/images/sbe_tally_partner.jpg',
    deliverables: [
      'Technical SEO audit & page speed optimization',
      'Local Kolkata business search ranking strategy',
      'Schema markup & Google Business Profile setup',
    ],
  },
];

export default function NexiogSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFBEB] text-slate-900 border-t border-b border-amber-200/80 relative overflow-hidden">
      
      {/* Background Soft Ambient Glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-amber-200/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-800 uppercase tracking-[0.2em]">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span>SBE DIGITAL BUILD STUDIO</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Custom Web Software, Mobile Apps & Enterprise Systems.
            </h2>
          </div>

          <div>
            <Link
              href="/digital"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] shrink-0"
            >
              <span>Explore Digital Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Clean Executive Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studioOfferings.map((item) => (
            <div
              key={item.id}
              className="bg-white border-2 border-amber-200/90 rounded-3xl overflow-hidden flex flex-col justify-between shadow-md hover:border-amber-500 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Visual Photography Header */}
              <div className="relative h-56 w-full bg-slate-950 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2.5 pt-3 border-t border-amber-100 text-xs font-semibold text-slate-900">
                  {item.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-8 pb-8 pt-2">
                <Link
                  href={`/contact?interest=Digital%20Studio&service=${encodeURIComponent(item.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,158,11,0.39)]"
                >
                  <span>Inquire Software Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
