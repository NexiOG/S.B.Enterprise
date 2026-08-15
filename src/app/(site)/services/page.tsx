'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Check, Search,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ClientTestimonials from '@/components/home/ClientTestimonials';
import GoogleMapSection from '@/components/common/GoogleMapSection';
import CostCalculator from '@/components/common/CostCalculator';
import TdlPreviewWidget from '@/components/tally/TdlPreviewWidget';
import { FadeIn, PageHeaderReveal, InteractiveCard } from '@/components/common/MotionWrapper';

const serviceCategories = [
  { id: 'all', label: 'All Services & Products' },
  { id: 'licensing', label: 'Tally Licensing & ERP' },
  { id: 'amc', label: 'AMC & Technical Desk' },
  { id: 'tdl', label: 'Custom TDL Engineering' },
  { id: 'compliance', label: 'GST & Statutory Compliance' },
  { id: 'digital', label: 'Digital & Web Studio' },
  { id: 'training', label: 'Corporate Staff Training' },
];

const comprehensiveCatalogue = [
  // 1. Tally Licensing & ERP
  {
    id: 'tally-silver',
    category: 'licensing',
    categoryName: 'Tally Licensing & ERP',
    badge: 'SOFTWARE LICENCE',
    title: 'TallyPrime Silver Edition (Single User)',
    price: '₹22,500 + 18% GST',
    description: 'Standalone single-user TallyPrime license for independent offices, retail stores, and single-computer accounting.',
    sla: 'Same-Day Activation',
    deliverables: [
      'Genuine TallyPrime Silver single-user activation key',
      'Remote AnyDesk installation & GST tax master setup',
      'Single-system accounting, inventory, and GST billing',
      'Free update access within release version',
    ],
  },
  {
    id: 'tally-gold',
    category: 'licensing',
    categoryName: 'Tally Licensing & ERP',
    badge: 'POPULAR CHOICE',
    title: 'TallyPrime Gold Edition (Unlimited Multi-User LAN)',
    price: '₹67,500 + 18% GST',
    description: 'Unlimited multi-user LAN license allowing multiple accountants and managers to access the database concurrently.',
    sla: 'Same-Day Activation',
    deliverables: [
      'Genuine TallyPrime Gold multi-user activation key',
      'LAN server configuration & multi-terminal client setup',
      'Remote login capabilities from multiple locations',
      'Priority AMC support desk onboarding',
    ],
  },
  {
    id: 'tally-server',
    category: 'licensing',
    categoryName: 'Tally Licensing & ERP',
    badge: 'ENTERPRISE ENGINE',
    title: 'TallyPrime Server Edition',
    price: 'Custom Enterprise Quote',
    description: 'Dedicated enterprise server database engine for high-volume concurrent multi-terminal data entry without system lag.',
    sla: 'Scheduled Deployment',
    deliverables: [
      'High-speed dedicated server data engine installation',
      'Zero-lag concurrent voucher creation for large teams',
      'Advanced server-level security & user activity monitoring',
      'Dedicated enterprise technical manager assigned',
    ],
  },
  {
    id: 'tss-renewal',
    category: 'licensing',
    categoryName: 'Tally Licensing & ERP',
    badge: 'SUBSCRIPTION RENEWAL',
    title: 'Tally Software Services (TSS) Annual Renewal',
    price: 'Official Renewal Rate',
    description: 'Annual TSS renewal for continuous product feature updates, e-Invoice portal sync, banking automation, and remote access.',
    sla: 'Instant License Renewal',
    deliverables: [
      'Access to the latest TallyPrime software updates & releases',
      'Direct e-Invoicing & e-Way bill API portal connectivity',
      'Auto-bank reconciliation & electronic payment updates',
      'Remote data access from anywhere via Tally browser reports',
    ],
  },
  {
    id: 'tally-migration',
    category: 'licensing',
    categoryName: 'Tally Licensing & ERP',
    badge: 'VERSION UPGRADE',
    title: 'Tally Version Upgrade & Database Data Migration',
    price: 'Based on Data Volume',
    description: 'Upgrading older Tally databases (Tally 7.2, Tally 9, Tally.ERP 9) to the latest TallyPrime with 100% voucher integrity.',
    sla: '24*7 AnyDesk & UltraViewer Support',
    deliverables: [
      'Full backup and audit of legacy Tally company files',
      'Zero voucher loss data migration to TallyPrime format',
      'Multi-currency and stock item master re-indexing',
      'Post-migration trial balance & balance sheet verification',
    ],
  },

  // 2. AMC & Technical Desk
  {
    id: 'amc-annual',
    category: 'amc',
    categoryName: 'AMC & Technical Desk',
    badge: 'ANNUAL CONTRACT',
    title: 'Annual Maintenance Contract (AMC) for Tally',
    price: 'From ₹4,500 / Year',
    description: 'Year-round technical support covering database corruption repair, AnyDesk remote sessions, and regular maintenance.',
    sla: '24–48h Resolution SLA',
    deliverables: [
      'Direct phone support line during business hours (Mon–Sat 10am–7pm)',
      '24*7 remote support through AnyDesk and UltraViewer for emergency downtime',
      'Corrupted accounting database zero-loss recovery',
      'Year-end company data split & new financial year setup',
    ],
  },
  {
    id: 'data-recovery',
    category: 'amc',
    categoryName: 'AMC & Technical Desk',
    badge: 'EMERGENCY SERVICE',
    title: 'Emergency Corrupted Data Repair & Re-Write',
    price: 'Per Incident Scope',
    description: 'Specialized recovery for damaged, crashed, or improperly split Tally database files with zero ledger data loss.',
    sla: 'Priority Emergency Desk',
    deliverables: [
      'Deep binary repair of corrupted 900.tbd and 500.tbd data structures',
      'Restoration of damaged company voucher histories and ledgers',
      'Security audit and automated backup script setup',
      'Guidance on power outage surge protection and storage health',
    ],
  },

  // 3. Custom TDL Engineering
  {
    id: 'tdl-qr-invoice',
    category: 'tdl',
    categoryName: 'Custom TDL Engineering',
    badge: 'FAST PAYMENT SYNC',
    title: 'Dynamic UPI Payment QR Code Invoice Print TDL',
    price: 'Fixed Modular Fee',
    description: 'Automatically embeds bank dynamic UPI QR codes on Tax Invoices for instant mobile payment scanning.',
    sla: '48h Delivery',
    deliverables: [
      'Dynamic UPI QR code linked directly to invoice amount & bank VPA',
      'Instant settlement verification via customer mobile UPI apps',
      'Compatible with Standard Tax Invoice, Retail Bill & POS Print',
      'Customized bank details and authorized signature placement',
    ],
  },
  {
    id: 'tdl-custom-format',
    category: 'tdl',
    categoryName: 'Custom TDL Engineering',
    badge: 'BRANDED FORMAT',
    title: 'Customized Invoice & Delivery Challan Layouts',
    price: 'Per Template Scope',
    description: 'Bespoke voucher print designs featuring your company logo, bank terms, multi-column grids, and statutory declarations.',
    sla: '3–5 Days',
    deliverables: [
      'Tailor-made print layout matching your corporate brand typography',
      'Batch-wise stock details, expiry dates, and manufacturer codes',
      'Custom terms & conditions, warranty clauses, and bank details',
      'Dual-copy (Original for Buyer / Duplicate for Transporter) styling',
    ],
  },

  // 4. GST & Statutory Compliance
  {
    id: 'gst-einvoice-setup',
    category: 'compliance',
    categoryName: 'GST & Statutory Compliance',
    badge: 'MANDATORY STATUTORY',
    title: 'Direct e-Invoicing & e-Way Bill API Configuration',
    price: 'One-Time Setup',
    description: 'Seamless integration of TallyPrime with the Government IRP Portal for single-click IRN and e-Way bill generation.',
    sla: 'Same-Day Configuration',
    deliverables: [
      'Government IRP e-Invoice API credential registration & setup',
      'Automated IRN (Invoice Reference Number) generation from voucher entry',
      'e-Way Bill single-click generation with vehicle details',
      'Auto-generation of signed QR code onto printed Tax Invoices',
    ],
  },
  {
    id: 'gstr-returns-prep',
    category: 'compliance',
    categoryName: 'GST & Statutory Compliance',
    badge: 'TAX AUDIT',
    title: 'GSTR-1, GSTR-3B & GSTR-9 Return Filing Workflow Setup',
    price: 'Consultation Scope',
    description: 'Configuring Tally GST masters to eliminate return mismatch errors and speed up month-end tax filing.',
    sla: 'Structured Session',
    deliverables: [
      'HSN/SAC summary classification & GST tax rate ledger alignment',
      'Reverse Charge Mechanism (RCM) voucher configuration',
      'Direct JSON export for GST Portal portal return upload',
      'GSTR-2B purchase reconciliation workflow assistance',
    ],
  },

  // 5. Digital & Web Studio
  {
    id: 'custom-web-portal',
    category: 'digital',
    categoryName: 'Digital & Web Studio',
    badge: 'NEXT.JS 15 APP',
    title: 'B2B Client Ordering Portal & Corporate Web Application',
    price: 'Custom Project Scope',
    description: 'Modern, high-speed Next.js 15 web applications built for corporate branding, B2B wholesale ordering, and invoice downloads.',
    sla: '3–6 Weeks Build',
    deliverables: [
      'Next.js 15 SSR architecture with responsive mobile-first UI',
      'B2B customer login, order booking, and invoice PDF downloads',
      'Direct API synchronization with central Tally database',
      'SEO-optimized semantic code structure and fast loading times',
    ],
  },
  {
    id: 'tally-rest-api',
    category: 'digital',
    categoryName: 'Digital & Web Studio',
    badge: 'API INTEGRATION',
    title: 'Live Tally REST API & Database Cloud Synchronization',
    price: 'Per Connector Scope',
    description: 'Real-time API connector that syncs website orders, CRM leads, and payment records directly into desktop Tally ledgers.',
    sla: 'Modular Integration',
    deliverables: [
      'Bidirectional REST API connector between web server and Tally',
      'Automated creation of Sales Vouchers, Receipts & Customer Ledgers',
      'Real-time inventory stock balance synchronization to web shop',
      'Audit log monitoring with automated sync error alerts',
    ],
  },
  {
    id: 'technical-seo',
    category: 'digital',
    categoryName: 'Digital & Web Studio',
    badge: 'SEARCH ENGINE GROWTH',
    title: 'Technical SEO & Local Search Engine Optimization',
    price: 'Monthly Strategy',
    description: 'Optimizing your business website to rank higher on Google search results in Kolkata, Howrah, and West Bengal.',
    sla: 'Ongoing Strategy',
    deliverables: [
      'Technical site audit fixing indexing, speed, and sitemap errors',
      'Schema.org structured JSON-LD data implementation for rich search snippets',
      'Google Business Profile optimization for Google Maps local pack ranking',
      'High-intent B2B keyword strategy and monthly search performance reporting',
    ],
  },

  // 6. Corporate Staff Training
  {
    id: 'tally-training-staff',
    category: 'training',
    categoryName: 'Corporate Staff Training',
    badge: 'STAFF ONBOARDING',
    title: 'Practical TallyPrime Accounting & Billing Staff Training',
    price: 'Per Batch Session',
    description: 'Hands-on training sessions for accountants, billing clerks, and inventory handlers conducted at your office or remotely.',
    sla: 'On-Demand Schedule',
    deliverables: [
      'Structured practical training tailored to your company workflow',
      'Voucher entry speed techniques, shortcut keys, and report navigation',
      'Godown stock transfer, batch manufacturing, and GST invoice routines',
      'Custom training reference manual provided for staff',
    ],
  },
  {
    id: 'audit-trail-training',
    category: 'training',
    categoryName: 'Corporate Staff Training',
    badge: 'STATUTORY AUDIT',
    title: 'MCA Audit Trail (Edit Log) Compliance & Inspection Prep',
    price: 'Consultation Session',
    description: 'Preparing finance teams for mandatory MCA Audit Trail rules, Edit Log review, and GST inspection compliance.',
    sla: '1-Day Intensive Session',
    deliverables: [
      'TallyPrime Edit Log feature activation & compliance audit',
      'Training accountants on voucher modification rules & audit trail checks',
      'Preparing documentation for statutory CA audit & GST tax officers',
      'Internal controls review to prevent unauthorized voucher editing',
    ],
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCatalogue = comprehensiveCatalogue.filter((item) => {
    const matchesCategory = activeTab === 'all' || item.category === activeTab;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 space-y-0">
      
      {/* Page Hero - Dark Dual-Tone */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-24 lg:py-32 border-b border-amber-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[850px] h-[480px] bg-gradient-to-br from-amber-500/15 via-emerald-500/15 to-transparent blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <PageHeaderReveal
            badge="COMPLETE ENTERPRISE SERVICES & PRODUCTS DIRECTORY"
            title="All Services & Products Offered by"
            highlightText="S.B. Enterprise."
            description="Explore our complete catalogue of 20+ specialized solutions — from official TallyPrime software licensing and AnyDesk AMC support to custom TDL scripts, e-Invoicing, Next.js web applications, and staff training."
            tags={['20+ Professional Services', 'Tally Certified Partner', '24–48h AMC SLA', 'Kolkata Desk']}
          />
        </div>
      </section>

      {/* Interactive Cost Estimator Tool Section (Dark Dual-Tone) */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-20 lg:py-28 border-b border-amber-500/20 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          <FadeIn direction="up">
            <CostCalculator />
          </FadeIn>
        </div>
      </section>

      {/* Interactive Catalogue & Filter Hub - Warm Cream Light Dual-Tone */}
      <section className="bg-[#FFFBEB] text-slate-900 py-20 lg:py-28 border-b border-amber-200/80 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          
          {/* Top Search Bar & Category Tabs */}
          <FadeIn direction="up" className="space-y-6 bg-white p-6 rounded-3xl border-2 border-amber-200/90 shadow-md">
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-96">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search services, TDL scripts, licensing..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-amber-50/50 border border-amber-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1.5 rounded-full border border-amber-300">
                Showing {filteredCatalogue.length} of {comprehensiveCatalogue.length} Services
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-amber-100">
              {serviceCategories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    activeTab === cat.id
                      ? 'bg-amber-500 text-slate-950 shadow-sm font-extrabold'
                      : 'bg-amber-50/70 text-slate-700 hover:bg-amber-100 border border-amber-200/80'
                  }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>

          </FadeIn>

          {/* Service Cards Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredCatalogue.map((service) => (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <InteractiveCard
                    lift={-5}
                    className="bg-white border-2 border-amber-200/90 rounded-3xl p-8 space-y-6 shadow-md hover:border-amber-500 transition-colors duration-300 flex flex-col justify-between group h-full"
                  >
                    <div className="space-y-4">
                      
                      <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                        <span className="text-[11px] font-extrabold text-amber-800 uppercase tracking-wider">
                          {service.badge}
                        </span>
                        <span className="px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 rounded-full">
                          {service.sla}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-950 group-hover:text-amber-800 transition-colors leading-tight">
                        {service.title}
                      </h3>
                      
                      <div className="text-xs font-bold text-amber-900 bg-amber-50 inline-block px-2.5 py-1 rounded-lg border border-amber-200">
                        {service.price}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {service.description}
                      </p>

                      <div className="pt-3 space-y-2 border-t border-amber-100">
                        <span className="text-[11px] font-bold text-slate-950 uppercase block">Deliverables & Scope:</span>
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                            <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-slate-500">{service.categoryName}</span>
                      <Link
                        href={`/contact?interest=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0A0E1A] hover:bg-slate-900 rounded-xl transition-all shadow-sm hover:scale-105"
                      >
                        Inquire Service
                        <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                      </Link>
                    </div>
                  </InteractiveCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredCatalogue.length === 0 && (
            <FadeIn direction="none" className="bg-white border-2 border-amber-200 rounded-3xl p-12 text-center space-y-3">
              <p className="text-slate-600 font-medium">No matching services found for "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                className="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl"
              >
                Reset Search Filters
              </button>
            </FadeIn>
          )}

        </div>
      </section>

      {/* Live Interactive TDL Preview Widget Section (Dark Dual-Tone) */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-24 lg:py-32 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          <FadeIn direction="up">
            <TdlPreviewWidget />
          </FadeIn>
        </div>
      </section>

      {/* Client Testimonials */}
      <ClientTestimonials />

      {/* Embedded Location Map */}
      <GoogleMapSection title="Visit Our Service Desk in Kolkata" />

    </div>
  );
}
