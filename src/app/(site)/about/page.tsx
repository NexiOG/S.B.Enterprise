import Link from 'next/link';
import Image from 'next/image';
import { constructMetadata } from '@/lib/metadata';
import { companyInfo } from '@/content/company';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, MapPin, Users, Phone, Mail, Clock, Layers, Cpu, Code2, QrCode } from 'lucide-react';
import ClientTestimonials from '@/components/home/ClientTestimonials';
import GoogleMapSection from '@/components/common/GoogleMapSection';

export const metadata = constructMetadata({
  title: 'About Us | S.B. Enterprise — Authorized Tally Partner in Kolkata',
  description: 'Learn about S.B. Enterprise, an Authorized Tally Solutions Partner based in Kolkata delivering TallyPrime licensing, GST compliance, AMC support SLAs, and digital web software.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="pt-24 space-y-0">
      
      {/* Page Hero - Dark Dual-Tone */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-24 lg:py-32 border-b border-amber-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[750px] h-[400px] bg-gradient-to-br from-amber-500/15 via-emerald-500/15 to-transparent blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-6">
          <div className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">
            <span className="w-8 h-[2px] bg-amber-400" />
            <span>AUTHORISED TALLY SOLUTIONS PARTNER · KOLKATA HEADQUARTERS</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl">
            S.B. Enterprise: Authorized Tally Partner & Digital Studio.
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed font-normal">
            We are experienced IT dealers and software engineers in Kolkata who assist organizations across West Bengal with business accounting, TallyPrime licensing, GST compliance, AnyDesk AMC support SLAs, and custom web applications.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {['Kolkata Location', 'Authorized Tally Partner', '24–48h Support SLA', 'Mon–Sat, 10am–7pm'].map((tag) => (
              <span key={tag} className="px-4 py-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Company Story & Paragraphs - Warm Cream Light Dual-Tone */}
      <section className="bg-[#FFFBEB] text-slate-900 py-24 lg:py-32 border-b border-amber-200/80 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Office Photography & Credentials (5 cols) */}
            <div className="lg:col-span-5 sticky top-28 space-y-6">
              <div className="relative h-[440px] rounded-3xl overflow-hidden border-2 border-amber-300/80 shadow-2xl group">
                <Image
                  src="/images/sbe_tally_partner.jpg"
                  alt="S.B. Enterprise Kolkata Office"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/20 to-transparent" />
                
                <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-[#0A0E1A]/90 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-bold rounded-full shadow-lg">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Authorized Tally Solutions Partner</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 space-y-1 text-white">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">KOLKATA HEAD OFFICE</span>
                  <h3 className="text-xl font-bold text-white">S.B. Enterprise Operations</h3>
                  <p className="text-xs text-slate-300">191, Ashokegarh, Near Post Office, Kolkata - 700108</p>
                </div>
              </div>

              {/* Direct Desk Info */}
              <div className="p-6 bg-white border-2 border-amber-200/90 rounded-3xl space-y-3 shadow-md">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">Direct Desk Phone Numbers</div>
                <div className="text-sm font-extrabold text-slate-950 space-y-1">
                  {companyInfo.contact.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="block hover:text-amber-700">
                      📞 {phone}
                    </a>
                  ))}
                </div>
                <div className="text-xs text-slate-600 pt-1">Email: {companyInfo.contact.email}</div>
              </div>
            </div>

            {/* Right Column: Detailed Story Paragraphs (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-bold text-amber-800 uppercase tracking-[0.2em]">
                  <span className="w-8 h-[2px] bg-amber-600" />
                  <span>WHO WE ARE & WHAT WE DO</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                  Dedicated after-sales support over one-off transactions.
                </h2>
              </div>

              {/* Detailed Editorial Content */}
              <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                
                <p>
                  Founded in Kolkata, <strong>S.B. Enterprise</strong> was established with a clear mandate: to provide businesses, trading houses, manufacturing plants, and chartered accounting firms across West Bengal with genuine, transparent software licensing and accountable technical support.
                </p>

                <p>
                  As an <strong>Authorized Tally Solutions Partner</strong>, we do not merely sell software keys. Our certified consultants evaluate each client’s operational workflow, recommending the exact edition — whether that is <strong>TallyPrime Silver</strong> for standalone single-user workstations or <strong>TallyPrime Gold</strong> for multi-department local area networks (LAN).
                </p>

                <div className="p-6 bg-white border-l-4 border-amber-500 rounded-r-2xl space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-950 text-base">Comprehensive GST, e-Way Bill & e-Invoicing Compliance Desk</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Navigating statutory tax requirements in India requires precise configuration. We configure TallyPrime to generate compliant GSTR-1, GSTR-3B, and GSTR-9 returns, enabling direct e-Way Bill generation and seamless e-Invoicing portal integration directly from voucher entry screens.
                  </p>
                </div>

                <div className="p-6 bg-white border-l-4 border-amber-500 rounded-r-2xl space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-950 text-base">24*7 Remote Support Through AnyDesk & UltraViewer</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under our Annual Maintenance Contracts (AMC), clients benefit from <strong>24*7 remote support through AnyDesk and UltraViewer</strong>. Our Kolkata technical support desk assists with emergency corrupted accounting database repair, Tally version upgrades, custom TDL voucher print scripting, and financial year-end book closure.
                  </p>
                </div>

                <div className="p-6 bg-white border-l-4 border-amber-500 rounded-r-2xl space-y-2 shadow-xs">
                  <h3 className="font-bold text-slate-950 text-base">SBE Digital Build Studio: Web Applications & Tally REST API Sync</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    To meet modern digital demands, S.B. Enterprise operates an in-house digital development division. We build bespoke responsive Next.js 15 web applications, B2B client ordering web portals, iOS and Android mobile apps, and automated <strong>Tally REST API synchronization connectors</strong> that bridge web orders seamlessly into desktop Tally ledgers.
                  </p>
                </div>

              </div>

              {/* Core Values / Deliverable Checklist */}
              <div className="space-y-3 pt-4 border-t border-amber-200/80">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-widest block">OUR GUARANTEED CORE CREDENTIALS:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Authorized Tally Solutions Partner in Kolkata',
                    'Same-day remote AnyDesk licensing setup',
                    '24*7 remote support through AnyDesk and UltraViewer',
                    'Custom voucher TDL & dynamic UPI QR codes',
                    '100% GST, e-Way Bill & e-Invoicing compliance',
                    'In-house Next.js web & mobile app studio',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-slate-900 bg-white p-3 rounded-xl border border-amber-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,158,11,0.39)]"
                >
                  <span>Contact Our Kolkata Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <ClientTestimonials />

      {/* Embedded Location Map */}
      <GoogleMapSection title="Visit Our Head Office in Kolkata" />

    </div>
  );
}
