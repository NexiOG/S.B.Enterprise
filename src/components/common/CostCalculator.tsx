'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function CostCalculator() {
  const [edition, setEdition] = useState<'silver' | 'gold' | 'server'>('gold');
  const [amcPlan, setAmcPlan] = useState<'none' | 'standard' | 'priority'>('standard');
  const [addons, setAddons] = useState<{ [key: string]: boolean }>({
    upiQr: true,
    logoLayout: true,
    apiSync: false,
  });

  const editionPrices = {
    silver: 22500,
    gold: 67500,
    server: 150000,
  };

  const amcPrices = {
    none: 0,
    standard: 6500,
    priority: 12500,
  };

  const addonPrices = {
    upiQr: 2500,
    logoLayout: 1800,
    apiSync: 15000,
  };

  const basePrice = editionPrices[edition];
  const amcPrice = amcPrices[amcPlan];
  const addonTotal = Object.entries(addons).reduce((sum, [key, active]) => {
    return active ? sum + (addonPrices[key as keyof typeof addonPrices] || 0) : sum;
  }, 0);

  const subtotal = basePrice + amcPrice + addonTotal;
  const gstAmount = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gstAmount;

  const toggleAddon = (key: string) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white border-2 border-amber-200/90 rounded-3xl p-8 sm:p-10 shadow-xl space-y-8 text-slate-900">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-amber-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold border border-amber-300">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-950">Interactive Solution Cost Estimator</h3>
            <p className="text-xs text-slate-500 font-medium">Estimate TallyPrime licensing, AMC, and custom TDL costs instantly.</p>
          </div>
        </div>
        <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 hidden sm:inline">
          Official Tally Pricing
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Selection Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. Tally Edition Selector */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-950 uppercase tracking-wider block">
              1. Select TallyPrime Software Edition:
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'silver', label: 'Silver (Single User)', price: '₹22,500' },
                { id: 'gold', label: 'Gold (Multi-User LAN)', price: '₹67,500' },
                { id: 'server', label: 'Server Edition', price: '₹1,50,000' },
              ].map((ed) => (
                <button
                  key={ed.id}
                  onClick={() => setEdition(ed.id as any)}
                  className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between space-y-1 transition-all cursor-pointer ${
                    edition === ed.id
                      ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-md font-extrabold'
                      : 'bg-amber-50/50 text-slate-800 border-amber-200 hover:border-amber-400'
                  }`}
                >
                  <span className="text-xs font-bold leading-snug">{ed.label}</span>
                  <span className="text-[11px] font-mono">{ed.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. AMC Plan Selector */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-950 uppercase tracking-wider block">
              2. Technical Support & AMC Tier:
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'none', label: 'Basic Setup Only', price: '₹0' },
                { id: 'standard', label: 'Standard AMC (24-48h SLA)', price: '+₹6,500/yr' },
                { id: 'priority', label: 'Priority SLA Desk', price: '+₹12,500/yr' },
              ].map((amc) => (
                <button
                  key={amc.id}
                  onClick={() => setAmcPlan(amc.id as any)}
                  className={`p-3.5 rounded-2xl border text-left flex flex-col justify-between space-y-1 transition-all cursor-pointer ${
                    amcPlan === amc.id
                      ? 'bg-slate-950 text-white border-slate-950 shadow-md font-extrabold'
                      : 'bg-amber-50/50 text-slate-800 border-amber-200 hover:border-amber-400'
                  }`}
                >
                  <span className="text-xs font-bold leading-snug">{amc.label}</span>
                  <span className="text-[11px] font-mono">{amc.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Custom TDL & Digital Add-ons */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-950 uppercase tracking-wider block">
              3. Optional TDL Modules & Digital Add-ons:
            </label>
            <div className="space-y-2">
              {[
                { key: 'upiQr', title: 'UPI Payment QR Code TDL Module', price: '+₹2,500' },
                { key: 'logoLayout', title: 'Custom Logo Branding & Voucher Terms TDL', price: '+₹1,800' },
                { key: 'apiSync', title: 'Real-Time Tally REST API Sync Connector', price: '+₹15,000' },
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => toggleAddon(item.key)}
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                    addons[item.key]
                      ? 'bg-amber-100 border-amber-400 text-slate-950 font-bold'
                      : 'bg-white border-amber-200 text-slate-700 hover:bg-amber-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border text-xs ${
                        addons[item.key] ? 'bg-amber-500 text-slate-950 border-amber-600 font-bold' : 'border-slate-300'
                      }`}
                    >
                      {addons[item.key] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-xs font-semibold">{item.title}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-900">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Itemized Quote Card (5 cols) */}
        <div className="lg:col-span-5 bg-[#0A0E1A] text-white p-8 rounded-3xl border border-amber-500/30 shadow-2xl flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">ESTIMATED QUOTE BREAKDOWN</span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                100% Tax Compliant
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Tally {edition.toUpperCase()} Edition</span>
                <span className="font-mono text-white">₹{basePrice.toLocaleString()}</span>
              </div>
              
              {amcPlan !== 'none' && (
                <div className="flex justify-between text-slate-300">
                  <span>AMC Support ({amcPlan})</span>
                  <span className="font-mono text-white">₹{amcPrice.toLocaleString()}</span>
                </div>
              )}

              {addonTotal > 0 && (
                <div className="flex justify-between text-slate-300">
                  <span>Custom TDL & Digital Modules</span>
                  <span className="font-mono text-white">₹{addonTotal.toLocaleString()}</span>
                </div>
              )}

              <div className="pt-2 border-t border-white/10 flex justify-between text-slate-300">
                <span>Subtotal</span>
                <span className="font-mono text-white">₹{subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-amber-400">
                <span>Estimated GST (18%)</span>
                <span className="font-mono">₹{gstAmount.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[11px] font-bold text-slate-400 uppercase block mb-1">Estimated Total Investment:</span>
              <div className="text-3xl font-extrabold text-white font-mono">
                ₹{grandTotal.toLocaleString()}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Includes activation, official registration & GST tax invoice.</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <Link
              href={`/contact?interest=Quote%20Estimate&edition=${edition}&amc=${amcPlan}&total=${grandTotal}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md"
            >
              Request Official Quotation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Certified Partner Desk · Kolkata</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
