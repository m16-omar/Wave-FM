import React from 'react';

export const SponsorBadges: React.FC = () => {
  return (
    <section className="w-full py-10 sm:py-14 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center opacity-90 hover:opacity-100 transition-opacity">
          {/* 1. BASE PLANT TO HIGHWAY (Circle Badge) */}
          <div className="flex flex-col items-center justify-center text-brand-yellow hover:scale-105 transition-transform">
            <svg viewBox="0 0 100 100" className="w-20 h-20 fill-none stroke-current stroke-[2.5]">
              <circle cx="50" cy="50" r="44" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="38" />
              <ellipse cx="50" cy="50" rx="30" ry="16" />
              <line x1="50" y1="12" x2="50" y2="88" />
              <line x1="12" y1="50" x2="88" y2="50" />
              <text x="50" y="32" textAnchor="middle" fill="currentColor" stroke="none" className="text-[7px] font-black tracking-widest uppercase">BASE PLANT</text>
              <text x="50" y="53" textAnchor="middle" fill="currentColor" stroke="none" className="text-[8px] font-black tracking-wider">TO</text>
              <text x="50" y="74" textAnchor="middle" fill="currentColor" stroke="none" className="text-[7px] font-black tracking-widest uppercase">HIGHWAY</text>
            </svg>
          </div>

          {/* 2. HIGH (Block Typography) */}
          <div className="flex items-center justify-center text-brand-yellow hover:scale-105 transition-transform">
            <div className="border-2 border-brand-yellow px-4 py-2 rounded-lg font-black text-2xl sm:text-3xl tracking-widest font-display text-center">
              HIGH
            </div>
          </div>

          {/* 3. BLACK HOLE (Starburst Badge) */}
          <div className="flex flex-col items-center justify-center text-brand-yellow hover:scale-105 transition-transform">
            <svg viewBox="0 0 100 100" className="w-20 h-20 fill-none stroke-current stroke-[2]">
              <circle cx="50" cy="50" r="44" />
              <circle cx="50" cy="50" r="28" />
              <polygon points="50,16 57,36 78,36 61,48 67,68 50,56 33,68 39,48 22,36 43,36" />
              <circle cx="50" cy="50" r="8" fill="currentColor" />
              <text x="50" y="12" textAnchor="middle" fill="currentColor" stroke="none" className="text-[6.5px] font-black tracking-widest uppercase">BLACK HOLE</text>
            </svg>
          </div>

          {/* 4. PROJECT 802 (Retro Stencil) */}
          <div className="flex flex-col items-center justify-center text-brand-yellow hover:scale-105 transition-transform">
            <div className="text-[10px] font-black tracking-widest text-center">★ PROJECT ★</div>
            <div className="font-black text-3xl sm:text-4xl tracking-tighter font-display leading-none">
              802
            </div>
          </div>

          {/* 5. EXO (Futuristic Logo) */}
          <div className="flex items-center justify-center text-brand-yellow hover:scale-105 transition-transform">
            <div className="border-2 border-brand-yellow p-2 rounded-md flex items-center gap-1 font-black text-2xl font-display tracking-widest">
              <span>E</span>
              <span className="text-white font-mono">X</span>
              <span>O</span>
            </div>
          </div>

          {/* 6. DREAM (Graffiti Style) */}
          <div className="flex items-center justify-center text-brand-yellow hover:scale-105 transition-transform">
            <span className="font-marker text-2xl sm:text-3xl text-brand-yellow border-2 border-dashed border-brand-yellow px-3 py-1 rounded-xl">
              DREAM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
