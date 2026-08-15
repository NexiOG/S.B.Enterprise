'use client';

import Link from 'next/link';
import { companyInfo } from '@/content/company';
import { Phone, Monitor, FileCheck, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/common/MotionWrapper';

const pathways = [
  {
    icon: Phone,
    title: 'Direct Phone Support',
    description: 'Speak straight to our certified Kolkata desk during business hours for quick licensing and setup help.',
    tag: 'Phone Desk',
  },
  {
    icon: Monitor,
    title: 'Technical AMC & Remote Session',
    description: '24*7 remote support through AnyDesk and UltraViewer for TDL invoice configuration, data corruption repair, and version updates.',
    tag: 'Technical SLA',
  },
  {
    icon: FileCheck,
    title: 'GST & Statutory Compliance',
    description: 'e-Invoice API configuration, e-Way Bill integration, GSTR-1 & GSTR-3B return routines inside Tally.',
    tag: 'Statutory SLA',
  },
];

export default function SupportSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0E1A] text-white border-b border-emerald-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <FadeIn direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-bold text-emerald-400 uppercase tracking-[0.25em] mb-3">
              <span className="w-8 h-[2px] bg-emerald-400" />
              <span>GUARANTEED TECHNICAL RESPONSE SLA</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Accountable technical support when you need it.
            </h2>
          </div>
          <p className="text-slate-300 text-sm max-w-md leading-relaxed font-normal">
            Direct phone support during business hours and 24*7 remote support through AnyDesk and UltraViewer for urgent Tally issues.
          </p>
        </FadeIn>

        {/* 2-Column Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Support Pathways Cards (7 cols) */}
          <StaggerContainer staggerDelay={0.12} className="lg:col-span-7 space-y-4">
            {pathways.map((item, idx) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={idx}>
                  <motion.div
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    className="p-6 rounded-3xl bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-400 shadow-2xl transition-colors flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-white text-base">{item.title}</h3>
                        <span className="text-[10px] font-bold text-emerald-400 uppercase bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Right Column: Live Desk Status Box (5 cols) */}
          <FadeIn direction="left" delay={0.15} className="lg:col-span-5 bg-slate-900/95 text-white rounded-3xl p-8 border border-amber-500/30 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-sm text-white">Live Support Queue</span>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Desk Open
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl flex justify-between items-center">
                  <span className="text-slate-300 font-medium">Remote Session Resolution SLA</span>
                  <span className="text-emerald-400 font-bold">24–48 Hours</span>
                </div>
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl flex justify-between items-center">
                  <span className="text-slate-300 font-medium">Kolkata Desk Office Hours</span>
                  <span className="text-amber-400 font-bold">Mon–Sat, 10am–7pm</span>
                </div>
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl flex justify-between items-center">
                  <span className="text-slate-300 font-medium">Data Corruption Recovery</span>
                  <span className="text-amber-300 font-bold">Priority Queue</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`tel:${companyInfo.contact.phones[0]}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 rounded-xl transition-all shadow-md hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4" />
                Call Desk {companyInfo.contact.phones[0]}
              </a>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
