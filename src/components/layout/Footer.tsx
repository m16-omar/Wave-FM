import React from 'react';
import { StationLogo } from '../ui/StationLogo';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0C0D10] text-white pt-12 sm:pt-16 pb-12 select-none border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Contact Banner Card (Screenshot 5) */}
        <div className="max-w-4xl mx-auto rounded-[32px] overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 md:grid-cols-12 relative">
          {/* Left Yellow Block (6/7 Cols) */}
          <div className="md:col-span-6 lg:col-span-7 bg-brand-yellow text-black p-8 sm:p-10 flex flex-col justify-between relative z-10">
            {/* Contact Details */}
            <div className="space-y-3.5">
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
                <span>+234 800 466 5336</span>
              </div>

              <div className="flex items-start gap-3 font-bold text-xs sm:text-sm text-black">
                <div className="w-8 h-8 rounded-full bg-black text-brand-yellow flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-snug">
                  20, Adetoro John Street,
                  <br />
                  Fadeyi, Lagos.
                </span>
              </div>

              {/* Round Black Social Icons */}
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black text-brand-yellow hover:scale-110 active:scale-95 flex items-center justify-center transition-transform shadow-md"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black text-brand-yellow hover:scale-110 active:scale-95 flex items-center justify-center transition-transform shadow-md"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black text-brand-yellow hover:scale-110 active:scale-95 flex items-center justify-center transition-transform shadow-md"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black text-brand-yellow hover:scale-110 active:scale-95 flex items-center justify-center transition-transform shadow-md"
                  aria-label="Telegram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.535-.197 1.006.128.832.942z"/>
                  </svg>
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
