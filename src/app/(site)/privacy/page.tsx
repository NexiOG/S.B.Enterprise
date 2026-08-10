import { Metadata } from 'next';
import Link from 'next/link';
import { companyInfo } from '@/content/company';
import { ShieldCheck, Lock, Eye, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | S.B. Enterprise - Authorized Tally Partner Kolkata',
  description: 'Privacy policy and data protection guidelines for S.B. Enterprise, Authorized Tally Solutions Partner in Kolkata.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-32 pb-24 relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-amber-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[250px] bg-emerald-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 text-center sm:text-left border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold rounded-full">
            <Lock className="w-3.5 h-3.5" />
            <span>DATA PROTECTION & COMPLIANCE</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Last Updated: August 2026 · Effective for all client consultations, remote support sessions, and software licensing.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-l-2 border-amber-400 pl-3">
              1. Overview & Commitment
            </h2>
            <p>
              At {companyInfo.name} (&quot;S.B. Enterprise&quot;, &quot;we&quot;, &quot;our&quot;), an official Authorized Tally Solutions Partner headquartered at {companyInfo.location.fullAddress}, we are committed to protecting the privacy, confidentiality, and security of our business clients, website visitors, and software users in compliance with the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act of India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-l-2 border-amber-400 pl-3">
              2. Information We Collect
            </h2>
            <p>
              We collect information provided directly by you when inquiring about TallyPrime licensing, requesting 24*7 AnyDesk/UltraViewer remote technical support, or engaging our web software build studio:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li>Contact details (Full Name, Business Email Address, Phone Number, Business Name).</li>
              <li>Tally License Serial Numbers and Tally.NET IDs required for genuine license activation, version upgrades, or TDL deployment.</li>
              <li>Temporary remote desktop credentials (AnyDesk IDs or UltraViewer passcodes) provided during remote technical troubleshooting sessions.</li>
              <li>Technical project specifications for custom Next.js web application or CRM development.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-l-2 border-amber-400 pl-3">
              3. Remote Support & Accounting Data Confidentiality
            </h2>
            <p>
              During 24*7 remote support sessions conducted via AnyDesk or UltraViewer:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li>Our certified engineers only access systems and Tally company data relevant to resolving your specific technical or accounting data issue.</li>
              <li>We never copy, store, extract, sell, or share your proprietary financial ledgers, vouchers, GST returns, or customer data with third parties.</li>
              <li>Remote desktop sessions require your explicit passcode grant and can be terminated by you at any moment.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-l-2 border-amber-400 pl-3">
              4. Data Usage & Security
            </h2>
            <p>
              Your contact information is strictly utilized to process official TallyPrime license activations with Tally Solutions Pvt. Ltd., deliver technical assistance, issue tax invoices, and communicate relevant software updates. We implement bank-grade encryption and administrative safeguards to prevent unauthorized access.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-l-2 border-amber-400 pl-3">
              5. Third-Party Trademarks
            </h2>
            <p>
              Tally, TallyPrime, Tally.ERP 9, and Tally.Server 9 are registered trademarks of Tally Solutions Pvt. Ltd. S.B. Enterprise operates as an independent Authorized Tally Partner and does not claim ownership over official Tally logos or trademarks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-l-2 border-amber-400 pl-3">
              6. Contact Our Privacy Officer
            </h2>
            <p>
              For any questions regarding data confidentiality or to update your business records, please contact our office desk:
            </p>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2 text-xs">
              <div className="font-bold text-white">{companyInfo.name}</div>
              <div>Address: {companyInfo.location.fullAddress}</div>
              <div>Phone: {companyInfo.contact.phones[0]} / {companyInfo.contact.phones[1]}</div>
              <div>Email: {companyInfo.contact.email}</div>
            </div>
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
            href="/terms"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <span>Read Terms of Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </main>
  );
}
