'use client';

import { Star, Quote, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/common/MotionWrapper';

const testimonials = [
  {
    id: 1,
    quote: "S.B. Enterprise configured our TallyPrime Gold multi-user LAN setup seamlessly across 8 accounting terminals. Their Kolkata team's AnyDesk SLA is reliable whenever we have GST filing questions.",
    author: "R. K. Agarwal",
    title: "Managing Director",
    company: "Kolkata Industrial Traders",
    initials: "RKA",
    location: "Ashokegarh Kolkata",
    tag: "Tally Gold Multi-User Setup",
    rating: 5,
  },
  {
    id: 2,
    quote: "We needed custom invoice vouchers with specific UPI QR codes and statutory tax layouts. S.B. Enterprise delivered the exact TDL code within 48 hours without affecting our ledger books.",
    author: "Debashis Banerjee",
    title: "Senior Accountant",
    company: "Eastern Engineering Enterprise",
    initials: "DB",
    location: "Howrah Branch",
    tag: "Custom TDL Invoice Scripting",
    rating: 5,
  },
  {
    id: 3,
    quote: "Our wholesale business needed a custom Next.js web portal so clients could place orders directly into our inventory database. S.B. Enterprise handled both the web build and Tally API sync.",
    author: "Sowmik Mukherjee",
    title: "Operations Lead",
    company: "Bengal Supply Chain Pvt Ltd",
    initials: "SM",
    location: "Salt Lake Sector V",
    tag: "Custom Web App & Tally API",
    rating: 5,
  },
];

export default function ClientTestimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFBEB] text-slate-900 border-t border-b border-amber-200/80 relative overflow-hidden">
      
      {/* Background Soft Mesh Ambient Glow */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[300px] bg-amber-200/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <FadeIn direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-800 uppercase tracking-[0.25em] mb-3">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span>VERIFIED CLIENT REVIEWS & FEEDBACK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Trusted by business owners and accountants across West Bengal.
            </h2>
          </div>
          <p className="text-slate-700 text-sm max-w-md leading-relaxed font-normal">
            Real feedback from local business managers on our TallyPrime licensing, AMC technical support desk, and custom web software builds.
          </p>
        </FadeIn>

        {/* 3 Luxurious Client Testimonial Cards */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <StaggerItem key={item.id}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white border-2 border-amber-200/90 rounded-3xl p-8 lg:p-9 space-y-6 flex flex-col justify-between shadow-md hover:border-amber-500 transition-colors duration-300 group h-full"
              >
                <div className="space-y-4">
                  
                  {/* Rating Stars & Service Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-extrabold rounded-full uppercase">
                      {item.tag}
                    </span>
                  </div>

                  {/* Quote Icon */}
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center border border-amber-300/60">
                    <Quote className="w-5 h-5" />
                  </div>

                  {/* Quote Body */}
                  <p className="text-sm text-slate-800 leading-relaxed font-normal italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author & Verification Footer */}
                <div className="pt-6 border-t border-amber-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0A0E1A] text-amber-400 flex items-center justify-center font-bold text-xs shadow-xs">
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-950 text-sm leading-tight">{item.author}</h4>
                      <p className="text-[11px] text-slate-600 font-medium">{item.title}, {item.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Verified</span>
                  </div>
                </div>

              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
