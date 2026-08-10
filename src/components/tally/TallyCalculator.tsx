'use client';

import { useState } from 'react';
import { companyInfo } from '@/content/company';
import { Calculator, Check, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function TallyCalculator() {
  const [licenseType, setLicenseType] = useState<'silver' | 'gold'>('silver');
  const [amcDuration, setAmcDuration] = useState<'1year' | '3year'>('1year');
  const [addons, setAddons] = useState<string[]>(['upi_qr']);

  // Base Prices (INR)
  const prices = {
    silver: 22500, // TallyPrime Silver Single User
    gold: 67500,   // TallyPrime Gold Multi-User
    amc1year: 5400,
    amc3year: 13500,
    upi_qr: 3500,
    eway_bill: 4500,
    ledger_doc: 3000,
    whatsapp_integration: 6000,
  };

  const toggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter((a) => a !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  // Calculate Total
  const licensePrice = prices[licenseType];
  const amcPrice = amcDuration === '1year' ? prices.amc1year : prices.amc3year;
  const addonsPrice = addons.reduce((acc, curr) => acc + (prices[curr as keyof typeof prices] || 0), 0);
  const subtotal = licensePrice + amcPrice + addonsPrice;
  const gst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gst;

  // Generate WhatsApp Message
  const getWhatsAppUrl = () => {
    const text = `Hello S.B. Enterprise Kolkata Desk,%0A%0AI would like an official quotation for:%0A- License: ${licenseType === 'silver' ? 'TallyPrime Silver Single-User' : 'TallyPrime Gold Multi-User LAN'} (₹${licensePrice})%0A- Remote AMC Support: ${amcDuration === '1year' ? '1 Year SLA' : '3 Years SLA'} (₹${amcPrice})%0A- TDL Modules: ${addons.join(', ') || 'None'} (₹${addonsPrice})%0A- Total Estimated Quote (Inc. GST): ₹${grandTotal.toLocaleString('en-IN')}%0A%0APlease contact me.`;
    return `https://wa.me/917059574585?text=${text}`;
  };

  return (
    <section id="calculator" className="py-24 bg-[#0A0E1A] text-white relative overflow-hidden border-t border-amber-500/20">
      
      {/* Background Soft Mesh Ambient Glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-amber-500/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-emerald-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold rounded-full">
            <Calculator className="w-4 h-4" />
            <span>INTERACTIVE PRICING CALCULATOR</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculate your TallyPrime & Support Scope
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Configure your Tally license edition, remote support SLA tier, and custom TDL modules for instant estimated quote transparency.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Select License Edition */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5">
              <h3 className="text-base font-bold text-white flex items-center justify-between">
                <span>1. Select TallyPrime License Edition</span>
                <span className="text-xs text-amber-400 font-normal">Genuine Official License</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setLicenseType('silver')}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    licenseType === 'silver'
                      ? 'bg-amber-400/10 border-amber-400 text-white shadow-lg'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-white">Silver Single-User</span>
                    {licenseType === 'silver' && <Check className="w-4 h-4 text-amber-400" />}
                  </div>
                  <p className="text-xs text-slate-400 mb-3">For single PC accounting desk</p>
                  <div className="text-lg font-extrabold text-amber-400">₹22,500 <span className="text-[10px] font-normal text-slate-400">+ GST</span></div>
                </button>

                <button
                  type="button"
                  onClick={() => setLicenseType('gold')}
                  className={`p-5 rounded-2xl border text-left transition-all ${
                    licenseType === 'gold'
                      ? 'bg-amber-400/10 border-amber-400 text-white shadow-lg'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-white">Gold Multi-User (LAN)</span>
                    {licenseType === 'gold' && <Check className="w-4 h-4 text-amber-400" />}
                  </div>
                  <p className="text-xs text-slate-400">Unlimited PCs on local network</p>
                  <div className="text-lg font-extrabold text-amber-400 mt-3">₹67,500 <span className="text-[10px] font-normal text-slate-400">+ GST</span></div>
                </button>
              </div>
            </div>

            {/* Step 2: Remote Support SLA Tier */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5">
              <h3 className="text-base font-bold text-white flex items-center justify-between">
                <span>2. Select Remote Support SLA Duration</span>
                <span className="text-xs text-emerald-400 font-normal">24*7 AnyDesk & UltraViewer</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setAmcDuration('1year')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    amcDuration === '1year'
                      ? 'bg-amber-400/10 border-amber-400 text-white'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="font-bold text-sm text-white">1 Year Remote AMC</div>
                  <div className="text-xs text-slate-400 mt-1">₹5,400 / year</div>
                </button>

                <button
                  type="button"
                  onClick={() => setAmcDuration('3year')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    amcDuration === '3year'
                      ? 'bg-amber-400/10 border-amber-400 text-white'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="font-bold text-sm text-white flex items-center justify-between">
                    <span>3 Years Remote AMC</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">Save 15%</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">₹13,500 / 3 years</div>
                </button>
              </div>
            </div>

            {/* Step 3: Custom TDL Modules */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5">
              <h3 className="text-base font-bold text-white">
                3. Optional Custom TDL Addon Modules
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'upi_qr', name: 'Dynamic UPI QR on Invoice', price: 3500 },
                  { id: 'eway_bill', name: 'Automated e-Way Bill & e-Invoice TDL', price: 4500 },
                  { id: 'ledger_doc', name: 'Document & Voucher Attachment TDL', price: 3000 },
                  { id: 'whatsapp_integration', name: 'Automated WhatsApp PDF Invoice Alert', price: 6000 },
                ].map((addon) => (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between gap-3 ${
                      addons.includes(addon.id)
                        ? 'bg-amber-400/10 border-amber-400 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="font-bold text-xs text-white">{addon.name}</div>
                      <div className="text-[11px] text-amber-400">+₹{addon.price.toLocaleString('en-IN')}</div>
                    </div>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${addons.includes(addon.id) ? 'bg-amber-400 border-amber-400 text-slate-950' : 'border-slate-700'}`}>
                      {addons.includes(addon.id) && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Quote Summary Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-slate-900 border border-amber-500/40 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="font-display font-bold text-lg text-white">Estimated Quote Summary</div>
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Tally Edition ({licenseType === 'silver' ? 'Silver' : 'Gold'})</span>
                  <span className="font-bold text-white">₹{licensePrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Remote AMC SLA ({amcDuration === '1year' ? '1 Year' : '3 Years'})</span>
                  <span className="font-bold text-white">₹{amcPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Selected TDL Addons ({addons.length})</span>
                  <span className="font-bold text-white">₹{addonsPrice.toLocaleString('en-IN')}</span>
                </div>

                <div className="border-t border-slate-800 pt-3 flex justify-between font-medium">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>GST (18%)</span>
                  <span>₹{gst.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="border-t-2 border-dashed border-amber-500/30 pt-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-normal">Estimated Grand Total</span>
                  <span className="text-2xl font-extrabold text-amber-400">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  All-Inclusive
                </span>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-xl hover:scale-[1.02]"
                >
                  <span>Get Official Quote via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-[10px] text-center text-slate-400">
                  Instant dispatch to Kolkata Desk. Official tax invoices provided upon purchase.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
