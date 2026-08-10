'use client';

import { Phone } from 'lucide-react';
import { companyInfo } from '@/content/company';

export default function FloatingContactButtons() {
  const phone = companyInfo.contact.phones[0];
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    'Hello S.B. Enterprise, I would like to enquire about TallyPrime licensing, AMC support, and digital services.'
  )}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 group select-none">
      
      {/* 1. Phone Call Floating Button */}
      <a
        href={`tel:${phone}`}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white flex items-center justify-center shadow-lg shadow-orange-500/30 hover:scale-110 hover:shadow-orange-500/50 transition-all cursor-pointer relative"
        aria-label="Call S.B. Enterprise"
        title="Call S.B. Enterprise (+91-7059574585)"
      >
        <Phone className="w-5 h-5 fill-current" />
        
        {/* Tooltip Label */}
        <span className="absolute left-14 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-800">
          Call +91-7059574585
        </span>
      </a>

      {/* 2. Official WhatsApp Green Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-110 hover:shadow-emerald-500/50 transition-all cursor-pointer relative"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        {/* Official WhatsApp SVG Logo */}
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Tooltip Label */}
        <span className="absolute left-14 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-800">
          WhatsApp Us
        </span>
      </a>

    </div>
  );
}
