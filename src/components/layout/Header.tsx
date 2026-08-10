'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavItems } from '@/content/navigation';
import { companyInfo } from '@/content/company';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 pt-4">
      {/* Apple Liquid Glass Floating Container */}
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0A0E1A]/80 backdrop-blur-2xl backdrop-saturate-200 border border-white/20 shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] py-2.5 px-7 text-white'
            : 'bg-[#0A0E1A]/65 backdrop-blur-xl backdrop-saturate-150 border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] py-3 px-7 text-white'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Liquid Metallic Badge */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 text-slate-950 flex items-center justify-center font-black text-xs tracking-tight shadow-md group-hover:scale-105 transition-all duration-300 shadow-amber-500/25">
              SB
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-extrabold leading-tight text-white tracking-tight group-hover:text-amber-300 transition-colors">
                {companyInfo.name}
              </span>
              <span className="text-[9px] font-semibold tracking-wider text-amber-400/90 uppercase font-sans">
                Tally Partner · Kolkata
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md" aria-label="Main Navigation">
            {mainNavItems.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400/25 to-amber-500/25 border border-amber-400/50 text-amber-300 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Desk with Apple CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${companyInfo.contact.phones[0]}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{companyInfo.contact.phones[0]}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] hover:shadow-[0_6px_20px_rgba(245,158,11,0.45)] hover:scale-[1.03] active:scale-[0.98]"
            >
              Contact Desk
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-slate-300 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 bg-[#0A0E1A]/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-5 shadow-2xl text-white space-y-4">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-semibold rounded-full transition-colors ${
                  pathname === item.href
                    ? 'bg-amber-400 text-slate-950 font-extrabold'
                    : 'text-slate-300 hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="text-xs text-slate-300 space-y-1 px-2">
              <div>📍 {companyInfo.location.fullAddress}</div>
              <div>📞 {companyInfo.contact.phones.join(' / ')}</div>
            </div>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-xs font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-full shadow-[0_4px_14px_0_rgba(245,158,11,0.39)]"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
