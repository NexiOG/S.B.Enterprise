'use client';

import { useState } from 'react';
import Link from 'next/link';
import { tallyEditions } from '@/content/tally';
import { CheckCircle2, ArrowRight, Sparkles, Server, Laptop, Users } from 'lucide-react';

export default function TallyEstimatorWidget() {
  const [selectedEditionId, setSelectedEditionId] = useState<string>('tallyprime-gold');

  const selectedEdition =
    tallyEditions.find((e) => e.id === selectedEditionId) || tallyEditions[1];

  const icons = {
    'tallyprime-silver': Laptop,
    'tallyprime-gold': Users,
    'tallyprime-server': Server,
  };

  const IconComp = icons[selectedEdition.id as keyof typeof icons] || Users;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl space-y-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header & Edition Selector */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive License Configurator
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Configure Your TallyPrime Environment
          </h3>
        </div>

        {/* Edition Switcher Pills */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 shrink-0">
          {tallyEditions.map((edition) => (
            <button
              key={edition.id}
              onClick={() => setSelectedEditionId(edition.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                selectedEditionId === edition.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {edition.name.replace('TallyPrime ', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Main Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Edition Details & Features (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
              <IconComp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider block">
                Selected Edition
              </span>
              <h4 className="font-display text-2xl font-bold text-white">
                {selectedEdition.name}
              </h4>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            {selectedEdition.description}
          </p>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block">
              Capabilities Included:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedEdition.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Pricing & Quick Action Card (5 cols) */}
        <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 relative">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs text-slate-400 font-medium">Official Licence Price</span>
            <div className="text-4xl font-bold text-white tracking-tight">{selectedEdition.price}</div>
            <p className="text-xs text-slate-400">{selectedEdition.priceUnit}</p>
          </div>

          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs space-y-1">
            <span className="font-semibold text-emerald-300 block">✓ Included with S.B. Enterprise</span>
            <p className="text-slate-300">
              Kolkata certified activation, GST e-Invoice setup & data migration assistance.
            </p>
          </div>

          <Link
            href={`/contact?interest=TallyPrime&edition=${encodeURIComponent(selectedEdition.name)}`}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-lg shadow-cyan-400/20"
          >
            Request Instant Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
