import EnquiryForm from '@/components/forms/EnquiryForm';
import { companyInfo } from '@/content/company';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function HomeEnquirySection() {
  return (
    <section className="py-24 lg:py-32 bg-[#fafafa] relative" id="enquiry">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Contact & Enquiries
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-semibold tracking-tight leading-[1.15]">
            Let's discuss your requirements.
          </h2>
          <p className="mt-4 text-slate-600 text-base lg:text-lg leading-relaxed">
            Reach out for TallyPrime licensing, AMC technical support, or Nexiog web software solutions. Our Kolkata team responds within 24 hours.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] space-y-6">
              <h3 className="text-xl font-bold text-slate-950 pb-4 border-b border-slate-100">
                Direct Contact Desk
              </h3>

              <div className="space-y-5 text-sm text-slate-700">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-0.5">
                      Office Address
                    </span>
                    <span className="font-medium">{companyInfo.location.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-0.5">
                      Phone Support
                    </span>
                    <div className="space-y-0.5">
                      {companyInfo.contact.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="block text-indigo-600 hover:text-indigo-700 font-bold transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-0.5">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${companyInfo.contact.email}`}
                      className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors"
                    >
                      {companyInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-0.5">
                      Working Hours
                    </span>
                    <span className="font-medium">{companyInfo.contact.hoursDetail.days}: {companyInfo.contact.hoursDetail.time}</span>
                    <span className="block text-xs text-slate-400 mt-0.5">Sunday: {companyInfo.contact.hoursDetail.sunday}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* SLA Guarantee Box */}
            <div className="p-5 bg-slate-950 text-white rounded-2xl border border-slate-800 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Certified Response SLA</span>
                <span className="text-slate-300">All web & email inquiries acknowledged within 1 working day.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

        </div>
      </div>
    </section>
  );
}
