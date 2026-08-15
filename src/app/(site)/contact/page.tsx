import { constructMetadata } from '@/lib/metadata';
import { companyInfo } from '@/content/company';
import EnquiryForm from '@/components/forms/EnquiryForm';
import GoogleMapSection from '@/components/common/GoogleMapSection';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { FadeIn, PageHeaderReveal, InteractiveCard } from '@/components/common/MotionWrapper';

export const metadata = constructMetadata({
  title: 'Contact Us | S.B. Enterprise — Kolkata Office & Desk',
  description: 'Contact S.B. Enterprise in Kolkata for TallyPrime licensing, AMC technical support, GST queries, and digital software development.',
  path: '/contact',
});

interface ContactPageProps {
  searchParams: Promise<{ interest?: string; edition?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  return (
    <div className="pt-24 space-y-0">
      
      {/* Page Hero - Dark Dual-Tone */}
      <section className="bg-gradient-to-br from-[#060A14] via-[#0D1527] to-[#121B2F] text-white py-24 lg:py-32 border-b border-amber-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[750px] h-[400px] bg-gradient-to-br from-amber-500/15 via-emerald-500/15 to-transparent blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <PageHeaderReveal
            badge="AUTHORISED TALLY SOLUTIONS PARTNER · KOLKATA"
            title="Speak directly with our"
            highlightText="Kolkata team."
            description="Whether you need a new TallyPrime license, AMC remote AnyDesk assistance, or a custom web software consultation — we are here to help."
          />
        </div>
      </section>

      {/* Main Form & Office Info - Warm Cream Light Dual-Tone */}
      <section className="bg-[#FFFBEB] text-slate-900 py-20 lg:py-28 border-b border-amber-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Office Information (5 cols) */}
            <FadeIn direction="right" className="lg:col-span-5 space-y-6">
              <InteractiveCard className="bg-white rounded-3xl border-2 border-amber-200/90 p-8 shadow-md space-y-6">
                <h2 className="text-xl font-bold text-slate-950 pb-4 border-b border-amber-100 flex items-center justify-between">
                  <span>Kolkata Head Office</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </h2>

                <div className="space-y-5 text-sm text-slate-700">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-0.5">
                        Full Address
                      </span>
                      <span className="font-semibold text-slate-900">{companyInfo.location.fullAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-0.5">
                        Phone Numbers
                      </span>
                      <div className="space-y-0.5 font-bold text-amber-900">
                        {companyInfo.contact.phones.map((phone) => (
                          <a key={phone} href={`tel:${phone}`} className="block hover:underline">
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-0.5">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${companyInfo.contact.email}`}
                        className="text-amber-900 hover:underline font-bold"
                      >
                        {companyInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-0.5">
                        Operational Desk Hours
                      </span>
                      <span className="font-semibold text-slate-900">{companyInfo.contact.hoursDetail.days}: {companyInfo.contact.hoursDetail.time}</span>
                      <span className="block text-xs text-slate-500 mt-0.5">Sunday: Closed</span>
                    </div>
                  </div>
                </div>
              </InteractiveCard>

              {/* SLA Response Guarantee Box */}
              <div className="p-6 bg-[#0A0E1A] text-white rounded-3xl border border-amber-500/30 flex items-center gap-4 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-white block">Certified Response SLA</span>
                  <span className="text-slate-300">All web enquiries & support calls acknowledged within 1 working day.</span>
                </div>
              </div>
            </FadeIn>

            {/* Right: Interactive Form (7 cols) */}
            <FadeIn direction="left" delay={0.12} className="lg:col-span-7">
              <EnquiryForm defaultInterest={params.interest as any} />
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <GoogleMapSection title="Locate S.B. Enterprise on Google Maps" />
    </div>
  );
}
