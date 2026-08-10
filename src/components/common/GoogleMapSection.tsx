import { MapPin, Navigation, Clock, Phone, Mail, Building2, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '@/content/company';

interface GoogleMapSectionProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function GoogleMapSection({
  title = 'Visit Our Head Office in Kolkata',
  subtitle = 'We welcome clients for in-person consultations, Tally license activations, custom TDL reviews, and staff training at our Kolkata location.',
}: GoogleMapSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFBEB] text-slate-900 border-t border-b border-amber-200/80 relative overflow-hidden">
      {/* Background Soft Mesh Glow Matching Testimonials */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[300px] bg-amber-200/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        
        {/* Section Header with Natural Non-AI Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-800 uppercase tracking-[0.2em] mb-3">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span>OFFICE LOCATION & DIRECTIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              {title}
            </h2>
          </div>
          <p className="text-slate-700 text-sm max-w-md leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Map & Office Detail Desk Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Office Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white border-2 border-amber-200/90 rounded-3xl p-8 shadow-md flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-amber-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm border border-amber-300">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-950">S.B. Enterprise</h3>
                    <p className="text-[11px] font-semibold text-amber-800">Tally Certified Partner Desk</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open Desk
                </span>
              </div>

              {/* Office Contact Info Cards */}
              <div className="space-y-3 text-xs">
                
                <div className="p-4 bg-amber-50/50 border border-amber-200/60 rounded-2xl flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-950 block">Office Address</span>
                    <span className="text-slate-700 leading-relaxed block">{companyInfo.location.fullAddress}</span>
                  </div>
                </div>

                <div className="p-4 bg-amber-50/50 border border-amber-200/60 rounded-2xl flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-950 block">Business Working Hours</span>
                    <span className="text-slate-700 block">{companyInfo.contact.displayHours}</span>
                    <span className="text-slate-500 block text-[11px]">Sunday: Closed</span>
                  </div>
                </div>

                <div className="p-4 bg-amber-50/50 border border-amber-200/60 rounded-2xl flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-950 block">Direct Phone Desk</span>
                    <div className="flex flex-wrap gap-2 text-slate-950 font-bold pt-0.5">
                      {companyInfo.contact.phones.map((phone) => (
                        <a key={phone} href={`tel:${phone}`} className="hover:text-amber-800 transition-colors">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-amber-50/50 border border-amber-200/60 rounded-2xl flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="font-bold text-slate-950 block">Official Email</span>
                    <a href={`mailto:${companyInfo.contact.email}`} className="text-slate-800 font-semibold hover:text-amber-800 transition-colors block">
                      {companyInfo.contact.email}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <a
              href="https://maps.google.com/?q=191+Ashokegarh+Kolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-5 text-xs font-bold text-white bg-[#0A0E1A] hover:bg-slate-900 rounded-2xl transition-all shadow-md cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-amber-400" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

          {/* Right Column: Google Map Iframe Frame (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-amber-200/90 rounded-3xl p-3 shadow-md flex flex-col justify-between">
            <div className="bg-[#0A0E1A] text-white p-3 rounded-2xl mb-2 flex items-center justify-between text-xs font-semibold px-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                S.B. Enterprise Head Office · Kolkata Map
              </span>
              <span className="text-amber-300 text-[11px] font-mono">191 Ashokegarh</span>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200/80 min-h-[420px] relative w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.476722744837!2d88.3756209!3d22.6359995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89db9668d2b3b%3A0x6b107bc4bbdf1633!2sAshokegarh%20Post%20Office!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="S.B. Enterprise Kolkata Office Map"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
