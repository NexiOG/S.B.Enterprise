'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Layers, Cpu, Code2, FileCheck, Globe, Users, CheckCircle2, ArrowRight, 
  ShieldCheck, Clock, Phone, Sparkles, Database, Wrench, Check, Search, Filter, Monitor
} from 'lucide-react';
import ClientTestimonials from '@/components/home/ClientTestimonials';
import GoogleMapSection from '@/components/common/GoogleMapSection';
import CostCalculator from '@/components/common/CostCalculator';
import TdlPreviewWidget from '@/components/tally/TdlPreviewWidget';

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
      'Seamless data rewrite & migration to TallyPrime format',
      'Verification of ledger balances, stock units, and GST masters',
      'Post-migration reconciliation report provided',
    ],
  },

  // 2. AMC & Technical Desk
  {
    id: 'amc-annual',
    category: 'amc',
    categoryName: 'AMC & Technical Desk',
    badge: 'ANNUAL CONTRACT',
    title: 'Annual Technical Maintenance Contract (AMC)',
    price: 'Annual Retainer',
    description: 'Year-round technical insurance covering phone support during business hours and fast AnyDesk remote troubleshooting.',
    sla: '24*7 AnyDesk & UltraViewer Support',
    deliverables: [
      'Direct phone support line during Kolkata business hours (Mon–Sat)',
      'Unlimited remote AnyDesk troubleshooting for Tally errors',
      'Regular database maintenance & data corruption prevention',
      'Free minor TDL adjustments and voucher layout updates',
    ],
  },
  {
    id: 'data-repair',
    category: 'amc',
    categoryName: 'AMC & Technical Desk',
    badge: 'EMERGENCY SERVICE',
    title: 'Tally Data Corruption Repair & Emergency Data Recovery',
    price: 'Per Case Inspection',
    description: 'Emergency database repair for corrupted Tally company files, out-of-sync vouchers, or improper system shutdowns.',
    sla: 'Priority Emergency Desk',
    deliverables: [
      'Emergency extraction & repair of corrupted Tally data files',
      'Restoration of damaged company ledgers and stock masters',
      'Splitting large Tally company files by financial year',
      'Zero-data-loss recovery protocol applied',
    ],
  },
  {
    id: 'remote-anydesk',
    category: 'amc',
    categoryName: 'AMC & Technical Desk',
    badge: 'ON-DEMAND SUPPORT',
    title: 'Remote AnyDesk Technical Assistance & Troubleshooting',
    price: 'Pay-Per-Session / AMC',
    description: 'Instant remote desktop assistance for voucher posting issues, GST tax calculation errors, and report export fixes.',
    sla: 'Fast Remote SLA',
    deliverables: [
      'Secure remote AnyDesk desktop connectivity',
      'On-the-spot voucher & tax master error diagnosis',
      'Printer configuration for custom Tally invoice vouchers',
      'Immediate resolution confirmation with your accounting team',
    ],
  },
  {
    id: 'year-end-closure',
    category: 'amc',
    categoryName: 'AMC & Technical Desk',
    badge: 'FINANCIAL SERVICE',
    title: 'Year-End Book Closure & Financial Year Data Splitting',
    price: 'Per Financial Year',
    description: 'Closing financial years, opening new company ledger files, carrying forward stock balances, and archiving historic books.',
    sla: 'Scheduled Delivery',
    deliverables: [
      'Financial year data splitting without affecting old records',
      'Accurate carry-forward of closing stock & ledger opening balances',
      'GST & statutory tax series counter reset for the new year',
      'Archiving past years into secure read-only backup files',
    ],
  },

  // 3. Custom TDL Engineering
  {
    id: 'tdl-qr-code',
    category: 'tdl',
    categoryName: 'Custom TDL Engineering',
    badge: 'PAYMENT INTEGRATION',
    title: 'UPI Payment QR Code Integration in Sales Invoices',
    price: 'One-Time License',
    description: 'Embedding dynamic UPI payment QR codes directly onto printed and PDF sales vouchers for fast customer payments.',
    sla: '24–48 Hours Delivery',
    deliverables: [
      'Dynamic UPI QR code generation linked to your company bank VPA',
      'Seamless printing on Tax Invoice, Retail Bill, and Delivery Challans',
      'Supports GPay, PhonePe, Paytm, and all UPI mobile banking apps',
      'Reduces collection cycles and speeds up invoice payment receipts',
    ],
  },
  {
    id: 'tdl-invoice-design',
    category: 'tdl',
    categoryName: 'Custom TDL Engineering',
    badge: 'VOUCHER CUSTOMIZATION',
    title: 'Custom Voucher Print Layout & Invoice Branding TDL',
    price: 'Tailored Scripting',
    description: 'Customizing sales invoices, purchase orders, and delivery challans with your company logo, bank details, and terms.',
    sla: '48 Hours Delivery',
    deliverables: [
      'High-resolution company logo branding on all invoice voucher types',
      'Custom terms & conditions, bank account details, and signature blocks',
      'Item-wise discount, HSN/SAC column, and batch/expiry formatting',
      'Available in thermal receipt, half-page A5, and full-page A4 layouts',
    ],
  },
  {
    id: 'tdl-custom-reports',
    category: 'tdl',
    categoryName: 'Custom TDL Engineering',
    badge: 'MANAGEMENT MODULE',
    title: 'Custom TDL Management Reports & Executive Dashboards',
    price: 'Based on Complexity',
    description: 'Bespoke TDL report modules showing item-wise profit margins, sales rep commission, and stock movement aging.',
    sla: '3–5 Days Delivery',
    deliverables: [
      'Custom executive dashboard reports built directly inside Tally',
      'Party-wise sales analysis, credit limit tracking, and overdue reminders',
      'Sales representative commission & regional performance reports',
      'Exportable to Excel, PDF, and CSV formats with 1-click',
    ],
  },
  {
    id: 'tdl-security-locks',
    category: 'tdl',
    categoryName: 'Custom TDL Engineering',
    badge: 'CONTROL MODULE',
    title: 'Voucher Approval Locks & Security Permission Rules',
    price: 'One-Time Setup',
    description: 'Enforcing multi-level voucher approval rules, field locking, back-dated entry restriction, and audit trail controls.',
    sla: '48 Hours Delivery',
    deliverables: [
      'Back-dated voucher entry restriction to protect audit integrity',
      'User-level price & discount editing locks for billing clerks',
      'Multi-level sales order approval before invoice generation',
      'Mandatory field verification rules (e.g. mobile no. or GSTIN)',
    ],
  },

  // 4. GST & Statutory Compliance
  {
    id: 'gst-einvoice-api',
    category: 'compliance',
    categoryName: 'GST & Statutory Compliance',
    badge: 'AUTOMATED API',
    title: 'Direct e-Invoice Portal API Integration inside Tally',
    price: 'One-Time Setup',
    description: 'Generating Invoice Reference Numbers (IRN) and signed QR codes directly from Tally without manually opening portals.',
    sla: 'Same-Day Configuration',
    deliverables: [
      'Direct API registration with the Government NIC e-Invoice Portal',
      '1-click e-Invoice IRN generation & QR code printing on vouchers',
      'Automatic cancellation & error handling within TallyPrime',
      'Complete compliance with mandatory statutory e-Invoicing limits',
    ],
  },
  {
    id: 'gst-eway-bill',
    category: 'compliance',
    categoryName: 'GST & Statutory Compliance',
    badge: 'LOGISTICS MODULE',
    title: 'Automated e-Way Bill Integration & Transporter Setup',
    price: 'Included in Setup',
    description: 'Generating e-Way Bills directly from sales vouchers, calculating transport distances, and printing Part-B vehicle details.',
    sla: 'Same-Day Configuration',
    deliverables: [
      'Direct e-Way Bill JSON generation & NIC portal submission',
      'Distance calculation & transporter ID validation inside Tally',
      'Consolidated e-Way Bill printing for multi-consignment dispatches',
      'Cancellation and vehicle number update routines',
    ],
  },
  {
    id: 'gst-return-reconcile',
    category: 'compliance',
    categoryName: 'GST & Statutory Compliance',
    badge: 'TAX ACCOUNTING',
    title: 'GSTR-1, GSTR-3B & GSTR-2B Reconciliation Services',
    price: 'Monthly / Quarterly',
    description: 'Setting up automated return filing routines in Tally and reconciling purchase ledgers with portal GSTR-2A/2B data.',
    sla: 'Ongoing Compliance',
    deliverables: [
      'GSTR-1 sales JSON export & error reconciliation before filing',
      'GSTR-3B tax liability calculation & Input Tax Credit (ITC) match',
      'GSTR-2B purchase reconciliation to identify unfiled vendor invoices',
      'HSN/SAC summary verification to avoid tax penalty notices',
    ],
  },
  {
    id: 'tds-tcs-setup',
    category: 'compliance',
    categoryName: 'GST & Statutory Compliance',
    badge: 'STATUTORY TAX',
    title: 'TDS & TCS Tax Master Configuration & Statutory Rates',
    price: 'One-Time Setup',
    description: 'Configuring Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) ledgers with updated statutory thresholds.',
    sla: '24 Hours Delivery',
    deliverables: [
      'Creation of statutory TDS nature of payments & deductees',
      'TCS ledger setup for sale of goods (Section 206C 1H)',
      'Automated TDS deduction on purchase & service vouchers',
      'Quarterly Form 26Q & 27EQ export preparation from Tally',
    ],
  },

  // 5. Digital & Web Studio
  {
    id: 'web-apps',
    category: 'digital',
    categoryName: 'Digital & Web Studio',
    badge: 'WEB ENGINEERING',
    title: 'Custom Web Application & B2B Wholesale Portal Build',
    price: 'Bespoke Scope Quote',
    description: 'Modern Next.js 15 web software, B2B wholesale self-service ordering portals, and multi-branch inventory web dashboards.',
    sla: '3–5 Weeks Build SLA',
    deliverables: [
      'Sub-second fast Next.js 15 web software with mobile-first design',
      'B2B Wholesale client portal for order placement & invoice history',
      'Role-based access control (Admin, Manager, Client, Accountant)',
      'High-security cloud hosting setup on Vercel or AWS with SSL',
    ],
  },
  {
    id: 'mobile-apps',
    category: 'digital',
    categoryName: 'Digital & Web Studio',
    badge: 'MOBILE ENGINEERING',
    title: 'Cross-Platform iOS & Android Mobile Application Build',
    price: 'Bespoke Scope Quote',
    description: 'Native cross-platform mobile apps for field sales order booking, logistics status tracking, and customer catalogues.',
    sla: '6–8 Weeks Build SLA',
    deliverables: [
      'Cross-platform iOS and Android mobile app build (React Native / Flutter)',
      'Sales representative order booking app with offline sync mode',
      'Camera barcode scanner & Bluetooth thermal receipt printing',
      'App Store & Google Play Store publishing & maintenance',
    ],
  },
  {
    id: 'tally-rest-api',
    category: 'digital',
    categoryName: 'Digital & Web Studio',
    badge: 'DATABASE API SYNC',
    title: 'Real-Time Tally Database REST API Integration Bridge',
    price: 'Bespoke Scope Quote',
    description: 'Connecting e-commerce websites, mobile apps, and external ERP databases directly to Tally for automated voucher creation.',
    sla: '2–3 Weeks Build SLA',
    deliverables: [
      'Secure Node.js REST API bridge connecting Tally with web servers',
      'Automated sales order & customer ledger creation inside Tally',
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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-6">
          <div className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">
            <span className="w-8 h-[2px] bg-amber-400" />
            <span>COMPLETE ENTERPRISE SERVICES & PRODUCTS DIRECTORY</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl">
            All Services & Products Offered by S.B. Enterprise.
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed font-normal">
            Explore our complete catalogue of 20+ specialized solutions — from official TallyPrime software licensing and AnyDesk AMC support to custom TDL scripts, e-Invoicing, Next.js web applications, and staff training.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {['20+ Professional Services', 'Tally Certified Partner', '24–48h AMC SLA', 'Kolkata Desk'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Cost Estimator Tool Section (Dark Dual-Tone) */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-20 lg:py-28 border-b border-amber-500/20 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          <CostCalculator />
        </div>
      </section>

      {/* Interactive Catalogue & Filter Hub - Warm Cream Light Dual-Tone */}
      <section className="bg-[#FFFBEB] text-slate-900 py-20 lg:py-28 border-b border-amber-200/80 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          
          {/* Top Search Bar & Category Tabs */}
          <div className="space-y-6 bg-white p-6 rounded-3xl border-2 border-amber-200/90 shadow-md">
            
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
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === cat.id
                      ? 'bg-amber-500 text-slate-950 shadow-sm font-extrabold'
                      : 'bg-amber-50/70 text-slate-700 hover:bg-amber-100 border border-amber-200/80'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCatalogue.map((service) => (
              <div
                key={service.id}
                className="bg-white border-2 border-amber-200/90 rounded-3xl p-8 space-y-6 shadow-md hover:border-amber-500 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0A0E1A] hover:bg-slate-900 rounded-xl transition-all shadow-sm"
                  >
                    Inquire Service
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCatalogue.length === 0 && (
            <div className="bg-white border-2 border-amber-200 rounded-3xl p-12 text-center space-y-3">
              <p className="text-slate-600 font-medium">No matching services found for "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                className="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Live Interactive TDL Preview Widget Section (Dark Dual-Tone) */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-24 lg:py-32 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8">
          <TdlPreviewWidget />
        </div>
      </section>

      {/* Client Testimonials */}
      <ClientTestimonials />

      {/* Embedded Location Map */}
      <GoogleMapSection title="Visit Our Service Desk in Kolkata" />

    </div>
  );
}
