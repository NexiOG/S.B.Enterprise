'use client';

import { useState } from 'react';
import { FileCode, QrCode, Receipt, Layers, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TdlPreviewWidget() {
  const [activeLayout, setActiveLayout] = useState<'standard' | 'upiQr' | 'thermal'>('upiQr');

  return (
    <div className="bg-[#0A0E1A] text-white border border-amber-500/30 rounded-3xl p-8 lg:p-10 shadow-2xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2.5 text-xs font-bold text-amber-400 uppercase tracking-[0.2em] mb-2">
            <span className="w-6 h-[2px] bg-amber-400" />
            <span>INTERACTIVE TDL INVOICE SIMULATOR</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Visualize Custom TDL Print Layouts.
          </h3>
        </div>

        {/* Layout Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-white/5 p-1.5 rounded-xl border border-white/10 text-xs font-semibold">
          {[
            { id: 'standard', label: 'Standard GST Invoice', icon: FileCode },
            { id: 'upiQr', label: 'UPI QR Code Layout', icon: QrCode },
            { id: 'thermal', label: 'Thermal Receipt POS', icon: Receipt },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeLayout === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveLayout(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-extrabold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual Simulated Invoice Display Frame */}
      <div className="bg-slate-900 border border-white/15 rounded-2xl p-6 md:p-8 space-y-6 max-w-3xl mx-auto shadow-inner text-slate-900 font-sans">
        
        {/* Simulated Invoice Paper */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-slate-200 space-y-6 text-xs text-slate-800">
          
          {/* Header Bar */}
          <div className="flex justify-between items-start border-b border-slate-300 pb-4">
            <div>
              <div className="font-extrabold text-base text-slate-950">KOLKATA INDUSTRIAL TRADERS</div>
              <div className="text-[11px] text-slate-600">191, Ashokegarh, Near Post Office, Kolkata - 700108</div>
              <div className="text-[11px] font-mono text-slate-600 mt-0.5">GSTIN: 19AAACK8821K1Z2</div>
            </div>
            <div className="text-right">
              <span className="font-extrabold text-sm text-slate-950 block">TAX INVOICE</span>
              <span className="text-[11px] font-mono text-slate-600">Inv No: KIT/26-27/0492</span>
              <span className="text-[11px] text-slate-600 block">Date: 07-Aug-2026</span>
            </div>
          </div>

          {/* Customer Info */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex justify-between">
            <div>
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Billed To:</span>
              <span className="font-bold text-slate-950">Eastern Engineering Enterprise</span>
              <span className="text-[11px] text-slate-600 block">Howrah Industrial Zone, WB</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-slate-500 uppercase block">State Code:</span>
              <span className="font-bold text-slate-950">West Bengal (19)</span>
            </div>
          </div>

          {/* Line Items Table */}
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 border-y border-slate-300 font-bold text-slate-950">
                <th className="py-2 px-2">Description</th>
                <th className="py-2 px-2 text-center">HSN</th>
                <th className="py-2 px-2 text-center">Qty</th>
                <th className="py-2 px-2 text-right">Rate</th>
                <th className="py-2 px-2 text-right">Amount (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="py-2 px-2 font-semibold">TallyPrime Gold Multi-User LAN</td>
                <td className="py-2 px-2 text-center font-mono">997331</td>
                <td className="py-2 px-2 text-center">1 Nos</td>
                <td className="py-2 px-2 text-right font-mono">67,500.00</td>
                <td className="py-2 px-2 text-right font-mono font-bold">67,500.00</td>
              </tr>
              <tr>
                <td className="py-2 px-2 font-semibold">Annual AMC Support SLA</td>
                <td className="py-2 px-2 text-center font-mono">998313</td>
                <td className="py-2 px-2 text-center">1 Year</td>
                <td className="py-2 px-2 text-right font-mono">6,500.00</td>
                <td className="py-2 px-2 text-right font-mono font-bold">6,500.00</td>
              </tr>
            </tbody>
          </table>

          {/* Dynamic Footer based on Layout Tab */}
          <div className="pt-4 border-t border-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            
            {/* Conditional Left Block */}
            {activeLayout === 'upiQr' ? (
              <div className="p-3 bg-amber-50 border border-amber-300 rounded-lg flex items-center gap-3">
                <div className="w-14 h-14 bg-white border border-amber-400 rounded flex items-center justify-center font-bold text-[9px] text-amber-900 text-center leading-tight shadow-xs shrink-0">
                  [ UPI QR CODE ]
                </div>
                <div className="text-[10px]">
                  <span className="font-bold text-amber-900 block">Scan to Pay via UPI</span>
                  <span className="text-slate-600 block">GPay / PhonePe / Paytm</span>
                  <span className="font-mono text-slate-800">sbenterprise@upi</span>
                </div>
              </div>
            ) : activeLayout === 'thermal' ? (
              <div className="p-3 bg-slate-100 border border-slate-300 rounded-lg text-[10px]">
                <span className="font-bold text-slate-950 block">POS Thermal Receipt Mode</span>
                <span className="text-slate-600">Formatted for 80mm Thermal Printer roll with barcode.</span>
              </div>
            ) : (
              <div className="text-[10px] text-slate-600 space-y-0.5">
                <span className="font-bold text-slate-950 block">Standard Terms:</span>
                <span>Payment due within 15 days of invoice date. Subject to Kolkata jurisdiction.</span>
              </div>
            )}

            {/* Right Tax Summary Block */}
            <div className="space-y-1 text-right text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal:</span>
                <span className="font-mono">₹74,000.00</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>CGST (9%):</span>
                <span className="font-mono">₹6,660.00</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>SGST (9%):</span>
                <span className="font-mono">₹6,660.00</span>
              </div>
              <div className="flex justify-between font-extrabold text-slate-950 text-sm pt-1 border-t border-slate-300">
                <span>Total Amount:</span>
                <span className="font-mono">₹87,320.00</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Footer CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Custom TDL modules engineered & tested within 48 hours.</span>
        </div>
        <Link
          href="/contact?interest=Custom%20TDL"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl transition-all shadow-md shrink-0"
        >
          Inquire Custom Layout TDL
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
