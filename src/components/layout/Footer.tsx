import React from 'react';
import { StationLogo } from '../ui/StationLogo';
import { Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0C0D10] text-white pt-12 sm:pt-16 pb-12 select-none border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Contact Banner Card (Screenshot 5) */}
        <div className="max-w-4xl mx-auto rounded-[32px] overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 md:grid-cols-12 relative">
          {/* Left Yellow Block (6/7 Cols) */}
          <div className="md:col-span-6 lg:col-span-7 bg-brand-yellow text-black p-8 sm:p-10 flex flex-col justify-between relative z-10">
            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-sm sm:text-base text-black">
                <div className="w-8 h-8 rounded-full bg-black text-brand-yellow flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@imolefm.com</span>
              </div>

              <div className="flex items-center gap-3 font-bold text-sm sm:text-base text-black">
                <div className="w-8 h-8 rounded-full bg-black text-brand-yellow flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+12 345 678 39</span>
              </div>

              {/* Round Black Social Icons */}
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black text-brand-yellow hover:scale-110 active:scale-95 flex items-center justify-center transition-transform font-bold text-sm"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black text-brand-yellow hover:scale-110 active:scale-95 flex items-center justify-center transition-transform font-bold text-xs"
                  aria-label="Instagram"
                >
                  📸
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black text-brand-yellow hover:scale-110 active:scale-95 flex items-center justify-center transition-transform font-bold text-xs"
                  aria-label="YouTube"
                >
                  ▶
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black text-brand-yellow hover:scale-110 active:scale-95 flex items-center justify-center transition-transform font-bold text-xs"
                  aria-label="Telegram"
                >
                  ✈
                </a>
              </div>
            </div>

            {/* Copyright note */}
            <div className="mt-8 text-[11px] font-semibold text-black/70">
              Copyright © 2026 Imole 106.3 FM — All rights reserved
            </div>

            {/* Angled Brush Script "Contact us" */}
            <span className="font-marker text-black text-3xl sm:text-4xl md:text-5xl absolute -top-3 right-4 sm:-right-8 md:-right-12 rotate-[-12deg] z-20 pointer-events-none select-none drop-shadow-sm whitespace-nowrap">
              Contact us
            </span>
          </div>

          {/* Right Image Block (5/6 Cols): Smiling Woman in Beanie with Sneakers */}
          <div className="md:col-span-6 lg:col-span-5 relative min-h-[220px] bg-neutral-900 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
              alt="Radio Listener Contact"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Bottom Station Identity Row from Screenshot 5 */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
          {/* Logo on Left */}
          <StationLogo variant="dark" size="lg" />

          {/* Dark Pill Show Widget on Right */}
          <div className="bg-[#141416] rounded-2xl p-3 sm:p-4 flex items-center gap-3 border border-white/10 shadow-xl">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-neutral-800 shrink-0 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                alt="Ryan Taylor"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-black text-sm text-white leading-tight">After Hours Mix</h4>
              <p className="text-xs text-gray-400 font-medium">Mixed by Ryan Taylor</p>
              <p className="text-[10px] text-brand-yellow font-mono mt-0.5">10:45 am - 2:30 pm</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
