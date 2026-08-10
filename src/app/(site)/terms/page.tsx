import { Metadata } from 'next';
import Link from 'next/link';
import { companyInfo } from '@/content/company';
import { ShieldCheck, FileText, ArrowRight, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service & Disclaimer | S.B. Enterprise Kolkata',
  description: 'Terms of service, support SLAs, and trademark disclaimer for S.B. Enterprise, Authorized Tally Partner in Kolkata.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-32 pb-24 relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-amber-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[250px] bg-emerald-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 text-center sm:text-left border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold rounded-full">
            <FileText className="w-3.5 h-3.5" />
            <span>TERMS & LEGAL DISCLAIMER</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Last Updated: August 2026 · Governing all Tally licensing, remote AnyDesk/UltraViewer support, and custom software builds.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-l-2 border-amber-400 pl-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website or procuring software licensing, custom TDL developments, or technical support services from {companyInfo.name} (&quot;S.B. Enterprise&quot;), you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-l-2 border-amber-400 pl-3">
              2. Tally Licensing & Genuine Software Guarantee
            </h2>
            <p>
              S.B. Enterprise is an officially recognized Authorized Tally Solutions Partner in Kolkata. All TallyPrime Silver (Single-User) and Gold (Multi-User LAN) licenses procured through us are 100% genuine, registered directly with Tally Solutions Pvt. Ltd., and eligible for official Tally.NET upgrades.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-l-2 border-amber-400 pl-3">
              3. Remote Support Service Level Agreement (SLA)
            </h2>
            <p>
              Our support desk provides 24*7 remote technical support through AnyDesk and UltraViewer for client accounts with active Annual Maintenance Contracts (AMC) or active license agreements.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li>Remote support is subject to client internet stability and grant of remote desktop access passcodes.</li>
              <li>Clients are advised to maintain independent daily offsite data backups of Tally data folders prior to major data repair or version upgrades.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-l-2 border-amber-400 pl-3">
              4. Custom TDL & Web Development Warranty
            </h2>
            <p>
              Custom TDL scripts, dynamic UPI QR invoice modifications, and Next.js web software applications developed by S.B. Enterprise are tested for performance and provided with post-deployment bug fix support under specified contract terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-l-2 border-amber-400 pl-3 text-amber-400">
              5. Official Trademark Disclaimer
            </h2>
            <div className="bg-amber-400/10 border border-amber-400/30 rounded-2xl p-5 space-y-2 text-xs text-amber-200">
              <div className="font-bold text-amber-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Trademark Recognition</span>
              </div>
              <p>
                Tally, TallyPrime, Tally.ERP 9, Tally.Server 9, and Tally logo marks are registered trademarks of Tally Solutions Pvt. Ltd. S.B. Enterprise is an independent Authorized Tally Partner offering sales, customization, and technical assistance in West Bengal.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-l-2 border-amber-400 pl-3">
              6. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal.
            </p>
          </section>

        </div>

        {/* Back Link */}
        <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <span>Read Privacy Policy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </main>
  );
}
