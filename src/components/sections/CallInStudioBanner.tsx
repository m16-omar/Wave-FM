import React from 'react';
import { PhoneCall } from 'lucide-react';
import { STATION_INFO } from '../../data/station';
import { SocialLinks } from '../ui/SocialLinks';

interface CallInStudioBannerProps {
  className?: string;
  variant?: 'full' | 'compact';
}

export const CallInStudioBanner: React.FC<CallInStudioBannerProps> = ({
  className = '',
  variant = 'full',
}) => {
  return (
    <div
      className={`w-full rounded-3xl overflow-hidden relative shadow-2xl border border-white/10 select-none bg-[#070B19] ${className}`}
      style={{
        backgroundImage:
          'radial-gradient(circle at 50% 30%, rgba(83, 38, 136, 0.25) 0%, rgba(7, 11, 25, 0.95) 100%), radial-gradient(#ffffff0a 1px, transparent 1px)',
        backgroundSize: '100% 100%, 16px 16px',
      }}
    >
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-yellow/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 px-4 py-8 sm:px-8 sm:py-10 flex flex-col items-center justify-center space-y-6 text-center">
        {/* Main Pill Banner (CALL IN AND CONTRIBUTE | 09022000085) */}
        <div className="w-full max-w-3xl rounded-full overflow-hidden shadow-2xl flex flex-col sm:flex-row items-center border border-white/20 bg-white group hover:scale-[1.01] transition-transform duration-300">
          {/* Left White Section: Icon + Text */}
          <div className="w-full sm:w-auto sm:flex-1 bg-white px-6 py-4 sm:py-4.5 flex items-center justify-center sm:justify-start gap-3.5 shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B1536] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <PhoneCall className="w-5 h-5 fill-white stroke-none" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-xs sm:text-sm md:text-base font-black tracking-tight text-[#0B1536] uppercase font-display">
                CALL IN AND
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl font-black tracking-tight text-[#0B1536] uppercase font-display -mt-0.5">
                CONTRIBUTE
              </span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden sm:block w-[2px] h-14 bg-black/15 shrink-0" />

          {/* Right Yellow Section: Big Bold Phone Number */}
          <a
            href={`tel:${STATION_INFO.hotline}`}
            className="w-full sm:w-auto sm:min-w-[340px] md:min-w-[400px] bg-brand-yellow hover:bg-brand-yellowHover px-8 py-3.5 sm:py-4.5 flex items-center justify-center text-black font-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-sans tracking-tight transition-colors cursor-pointer"
            title="Click to Call Live Studio Hotline"
          >
            <span className="drop-shadow-xs font-black">{STATION_INFO.hotline}</span>
          </a>
        </div>

        {/* Bottom Social Media Strip: FOLLOW US @IMOLEFMLAGOS + Icons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
          <div className="flex items-center gap-1.5 text-white text-xs sm:text-sm md:text-base font-black uppercase tracking-wider">
            <span>FOLLOW US</span>
            <a
              href={STATION_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-yellow hover:underline cursor-pointer"
            >
              {STATION_INFO.socialHandle}
            </a>
          </div>

          {/* 4 Colored Circular Social Media Buttons */}
          <SocialLinks size="sm" variant="colored-circles" />
        </div>
      </div>
    </div>
  );
};
