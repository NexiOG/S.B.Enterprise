import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { companyInfo } from '@/content/company';

export default function CompanyIntro() {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFBEB] text-slate-900 border-t border-b border-amber-200/80 relative overflow-hidden">
      
      {/* Background Soft Mesh Ambient Glow */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[300px] bg-amber-200/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authorized Tally Partner Photography Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative h-[440px] sm:h-[500px] rounded-3xl overflow-hidden border-2 border-amber-300/80 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
                alt="S.B. Enterprise - Authorized Tally Solutions Partner Kolkata"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/20 to-transparent" />
              
              {/* Top Floating Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-[#0A0E1A]/90 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-bold rounded-full shadow-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Authorized Tally Partner · Kolkata</span>
              </div>

              {/* Bottom Card Banner */}
              <div className="absolute bottom-6 left-6 right-6 space-y-1 text-white">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                  OFFICIAL SOFTWARE & DIGITAL HUB
                </span>
                <h3 className="text-xl font-bold text-white">S.B. Enterprise Kolkata Desk</h3>
                <p className="text-xs text-slate-300">Certified Tally Partner & Custom Web Studio.</p>
              </div>
            </div>

            {/* Quick Location & Phone Box */}
            <div className="p-6 bg-white border-2 border-amber-200/90 rounded-3xl space-y-2 shadow-md text-xs">
              <div className="font-bold text-amber-900 uppercase tracking-wider">Kolkata Head Office</div>
              <div className="font-semibold text-slate-800">{companyInfo.location.fullAddress}</div>
              <div className="font-bold text-amber-900 pt-1">Phone: {companyInfo.contact.phones.join(' / ')}</div>
            </div>
          </div>

          {/* Right Column: Paragraph Breaks with Justified Alignment & NO White Background Container (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-bold text-amber-800 uppercase tracking-[0.2em]">
                <span className="w-8 h-[2px] bg-amber-600" />
                <span>ABOUT S.B. ENTERPRISE · AUTHORIZED TALLY SOLUTIONS PARTNER</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Your trusted partner for TallyPrime, GST compliance & custom web software.
              </h2>
            </div>

            {/* Paragraphs with Justified Alignment & NO White Background Box */}
            <div className="space-y-5 text-slate-800 text-sm sm:text-base leading-relaxed font-normal text-justify">
              <p>
                S.B. Enterprise is an <strong>Authorized Tally Solutions Partner</strong> headquartered in Ashokegarh, Kolkata, dedicated to providing complete business accounting, statutory GST compliance, and custom digital software solutions to businesses, industrial manufacturers, trading houses, and accounting professionals across West Bengal.
              </p>

              <p>
                As an official certified partner, we provide genuine licensing for <strong>TallyPrime Silver</strong> (single-user standalone PC) and <strong>TallyPrime Gold</strong> (unlimited multi-user LAN) with same-day remote AnyDesk activation, version migration, and multi-station local network configurations.
              </p>

              <p>
                Every installation is backed by an Annual Maintenance Contract (AMC) featuring <strong>24*7 remote support through AnyDesk and UltraViewer</strong> for corrupted database recovery, Tally version upgrades, custom TDL voucher print scripting with corporate logo branding and dynamic UPI payment QR codes, and financial book closure.
              </p>

              <p>
                Beyond desktop accounting, our in-house <strong>Digital Build Studio</strong> engineers modern responsive Next.js 15 web applications, B2B client ordering web portals, cross-platform iOS and Android mobile apps, and real-time <strong>Tally REST API synchronization connectors</strong> that seamlessly sync web orders and inventory data directly into your central Tally database.
              </p>
            </div>

            {/* Executive Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-7 py-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,158,11,0.39)]"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${companyInfo.contact.phones[0]}`}
                className="inline-flex items-center gap-2.5 px-6 py-4 text-xs font-bold text-slate-900 bg-white hover:bg-amber-50 border-2 border-amber-300 rounded-full transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call Support Desk ({companyInfo.contact.phones[0]})</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
