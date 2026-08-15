'use client';

import Link from 'next/link';
import { tallyEditions, tallyMatrix } from '@/content/tally';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/common/MotionWrapper';

export default function TallySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFBEB] text-slate-900 border-t border-b border-amber-200/80 relative overflow-hidden">
      {/* Background Soft Mesh Glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-amber-200/50 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <FadeIn direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-bold text-amber-800 uppercase tracking-[0.2em] mb-3">
              <span className="w-8 h-[2px] bg-amber-600" />
              <span>TALLYPRIME EDITIONS & TECHNICAL SPECIFICATIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              Official TallyPrime Licensing & Edition Breakdown.
            </h2>
          </div>
          <p className="text-slate-700 text-sm max-w-md leading-relaxed font-normal">
            Single-user Silver for standalone accounting, or Gold multi-user LAN for enterprise teams. Registered and backed by S.B. Enterprise in Kolkata.
          </p>
        </FadeIn>

        {/* 3 Light Dual-Tone Pricing Cards */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tallyEditions.map((edition) => {
            const isPopular = edition.isPopular;
            return (
              <StaggerItem key={edition.id}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className={`p-8 rounded-3xl border flex flex-col justify-between space-y-6 transition-all duration-300 h-full ${
                    isPopular
                      ? 'bg-white border-2 border-amber-500 shadow-xl ring-2 ring-amber-500/20'
                      : 'bg-white text-slate-900 border-amber-200/80 shadow-md hover:border-amber-400'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold uppercase tracking-wider ${isPopular ? 'text-amber-800' : 'text-slate-500'}`}>
                        {edition.badge || edition.userType}
                      </span>
                      {isPopular && (
                        <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase bg-amber-400 text-slate-950 rounded-full">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-slate-950">{edition.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{edition.description}</p>
                    
                    <div className="py-3 border-y border-amber-100">
                      <span className="text-3xl font-extrabold text-slate-950">{edition.price}</span>
                      <span className="text-xs block mt-0.5 text-amber-800 font-medium">
                        {edition.priceUnit}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-700 font-medium">
                      {(edition.features || (edition as any).highlights || []).map((h: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 ${isPopular ? 'text-amber-600' : 'text-emerald-600'}`} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/contact?interest=TallyPrime%20sales&edition=${encodeURIComponent(edition.name)}`}
                    className={`w-full text-center py-3.5 px-4 rounded-xl text-xs font-bold transition-all shadow-md hover:scale-[1.02] ${
                      isPopular
                        ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold shadow-amber-500/20'
                        : 'bg-slate-900 text-white hover:bg-slate-800 border border-slate-900'
                    }`}
                  >
                    Inquire About {edition.name}
                  </Link>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Feature Comparison Table */}
        <FadeIn direction="up" delay={0.2} className="bg-white border border-amber-200/90 rounded-3xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-amber-100 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">TECHNICAL MATRIX</span>
              <h3 className="text-xl font-bold text-slate-950">Full Feature Comparison</h3>
            </div>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">Certified Tally Solutions Specifications</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-amber-50/60 text-slate-700 uppercase tracking-wider border-b border-amber-200/60">
                <tr>
                  <th className="p-4 pl-6 font-bold">Capability / Feature</th>
                  <th className="p-4 text-center font-bold">Silver Edition</th>
                  <th className="p-4 text-center font-bold text-amber-800">Gold Edition</th>
                  <th className="p-4 text-center pr-6 font-bold">Server Edition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100 text-slate-700">
                {(tallyMatrix.rows || []).map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/50 transition-colors">
                    <td className="p-4 pl-6 font-semibold text-slate-900">{row.capability}</td>
                    <td className="p-4 text-center text-slate-600">{row.silver}</td>
                    <td className="p-4 text-center text-amber-800 font-bold">{row.gold}</td>
                    <td className="p-4 text-center text-slate-600 pr-6">{row.server}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
