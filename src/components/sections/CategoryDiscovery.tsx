import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Megaphone, Building2, Radio, Sparkles } from 'lucide-react';

interface PartnerItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  href: string;
  watermark: string;
  isCta?: boolean;
}

const PARTNER_CATEGORIES: PartnerItem[] = [
  {
    id: 'partner-1',
    title: 'Corporate Brands',
    subtitle: 'FMCG, Banking & Telecom',
    icon: <Building2 className="w-6 h-6 text-brand-yellow mb-2" />,
    href: '/promote',
    watermark: 'Brands',
  },
  {
    id: 'partner-2',
    title: 'Digital & Media',
    subtitle: 'Streaming & Tech Networks',
    icon: <Radio className="w-6 h-6 text-brand-yellow mb-2" />,
    href: '/promote',
    watermark: 'Digital',
  },
  {
    id: 'partner-3',
    title: 'Prime-Time Jingles',
    subtitle: 'Commercial Broadcast Spots',
    icon: <Megaphone className="w-6 h-6 text-brand-yellow mb-2" />,
    href: '/promote',
    watermark: 'Radio Ads',
  },
  {
    id: 'partner-4',
    title: 'Partner With Us',
    subtitle: 'Bespoke Radio Packages',
    icon: <Sparkles className="w-6 h-6 text-brand-yellow mb-2" />,
    href: '/promote',
    watermark: 'Sponsor',
    isCta: true,
  },
];

export const CategoryDiscovery: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-brand-yellow text-black relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Black Pill Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full bg-black text-brand-yellow font-black text-xs sm:text-sm uppercase tracking-widest shadow-xl">
            <Megaphone className="w-4 h-4 text-brand-yellow" />
            <span>OFFICIAL ADVERTISING PARTNERS</span>
          </div>
          <p className="mt-2 text-xs sm:text-sm font-bold text-black/80 max-w-md mx-auto">
            Reach over 5 million daily Lagos listeners across digital airwaves and indigenous broadcast slots.
          </p>
        </div>

        {/* 4 Dark Deep Blue Rounded Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNER_CATEGORIES.map((partner) => (
            <Link
              key={partner.id}
              to={partner.href}
              className={`bg-[#0B173D] text-white rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px] relative overflow-hidden group shadow-2xl hover:scale-105 hover:bg-[#0F204E] transition-all duration-300 border ${
                partner.isCta
                  ? 'border-brand-yellow shadow-glow-yellow/20'
                  : 'border-blue-900/40'
              }`}
            >
              {/* Icon */}
              <div className="relative z-10 transition-transform group-hover:scale-110 duration-300">
                {partner.icon}
              </div>

              {/* Main Partner Title */}
              <span className="relative z-10 font-extrabold text-lg sm:text-xl text-white tracking-wide group-hover:text-brand-yellow transition-colors font-display">
                {partner.title}
              </span>

              {/* Subtitle */}
              <span className="relative z-10 text-[11px] sm:text-xs text-gray-300 font-medium mt-1 group-hover:text-gray-200 transition-colors">
                {partner.subtitle}
              </span>

              {/* Action Indicator */}
              <div className="relative z-10 mt-3 inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-brand-yellow opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Explore</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

