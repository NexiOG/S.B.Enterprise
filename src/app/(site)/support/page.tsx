import { Metadata } from 'next';
import Link from 'next/link';
import { companyInfo } from '@/content/company';
import { ShieldCheck, Phone, Mail, Clock, ArrowRight, Monitor, LifeBuoy, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: '24*7 Remote Support Portal (AnyDesk / UltraViewer) | S.B. Enterprise Kolkata',
  description: 'Submit an instant remote technical support request for TallyPrime troubleshooting, version upgrades, and TDL fixes via AnyDesk or UltraViewer.',
};

export default function SupportPage() {
  return (
    <main className="pt-24 min-h-screen bg-slate-950 text-white">
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-20 lg:py-28 border-b border-amber-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-amber-500/10 blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-6">
          <div className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em]">
            <span className="w-8 h-[2px] bg-amber-400" />
            <span>24*7 REMOTE DESK SLA</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] max-w-4xl">
            24*7 AnyDesk & UltraViewer Remote Support Desk
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
            Instant technical assistance for TallyPrime licensing, database repair, GST invoice TDL adjustments, and multi-user LAN troubleshooting across Kolkata and West Bengal.
          </p>
        </div>
      </section>

      {/* Support Request Form & Contact Desk */}
      <section className="py-20 lg:py-28 bg-[#0A0E1A] border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form: Support Ticket Request (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl">
            <div>
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                <Monitor className="w-5 h-5 text-amber-400" />
                <span>Submit Remote Support Ticket</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Enter your AnyDesk / UltraViewer ID for immediate Kolkata desk connection.
              </p>
            </div>

            <form className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold mb-1.5">Business / Contact Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name or firm"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-bold mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98300 00000"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold mb-1.5">Remote Software Used *</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-amber-400 focus:outline-none">
                    <option value="anydesk">AnyDesk (Recommended)</option>
                    <option value="ultraviewer">UltraViewer</option>
                    <option value="teamviewer">TeamViewer</option>
                    <option value="phone">Phone / WhatsApp Assistance Only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-bold mb-1.5">Remote ID / Passcode *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 123 456 789"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold mb-1.5">Tally Serial Number (If Applicable)</label>
                  <input
                    type="text"
                    placeholder="e.g. 700123456"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-bold mb-1.5">Issue Severity *</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-amber-400 focus:outline-none">
                    <option value="critical">Critical: Billing / Invoice Stoppage</option>
                    <option value="high">High: Tally Data Sync / LAN Error</option>
                    <option value="medium">Medium: TDL / Report Modification</option>
                    <option value="low">Low: General Inquiry / Upgrade</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1.5">Description of Technical Issue *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your Tally error message or support requirement..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-xl cursor-pointer"
                >
                  <span>Submit Ticket to Kolkata Remote Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[10px] text-slate-400 text-center pt-1">
                24*7 Remote desk engineer response guarantee for active AMC clients.
              </p>
            </form>
          </div>

          {/* Right Info: Desk Direct Numbers (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-8 space-y-6 shadow-2xl">
              <div className="flex items-center gap-3 text-amber-400 font-bold text-base">
                <LifeBuoy className="w-5 h-5 shrink-0" />
                <span>Immediate Desk Hotline</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                For urgent billing stoppages or critical Tally database repair, call our Kolkata engineers directly:
              </p>

              <div className="space-y-3 text-xs pt-1">
                {companyInfo.contact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 hover:border-amber-400 rounded-2xl transition-all font-bold text-white group"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-amber-400" />
                      <span>{phone}</span>
                    </div>
                    <span className="text-[10px] text-amber-400 group-hover:translate-x-1 transition-transform">Call Now →</span>
                  </a>
                ))}
              </div>

              <div className="border-t border-slate-800 pt-4 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-amber-400">
                    {companyInfo.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-emerald-400 font-medium pt-1">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>Mon–Sat: 10:00 AM – 7:00 PM (Desk Open)</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-400/10 border border-amber-400/30 rounded-3xl p-6 text-xs space-y-2 text-amber-200">
              <div className="font-bold text-amber-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Authorized Tally Solutions Partner SLA</span>
              </div>
              <p className="leading-relaxed">
                Remote support sessions are conducted through secure end-to-end encrypted connections. We strictly preserve the privacy of your financial ledgers and company data.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
