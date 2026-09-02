import React from 'react';
import { StationLogo } from '../ui/StationLogo';
import { Play, Pause } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

export const HeroSection: React.FC = () => {
  const { isPlaying, togglePlay, currentTrack } = useAudio();

  return (
    <section className="relative w-full pt-10 sm:pt-14 pb-16 overflow-hidden select-none">
      {/* Giant Background Watermark Text "IMOLE 106.3" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-[0.03] overflow-hidden">
        <span className="font-black text-[22vw] sm:text-[18vw] leading-none tracking-tighter text-white uppercase whitespace-nowrap font-display">
          IMOLE 106.3
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Header: Logo + Big Circular Gold Play Button */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
          <StationLogo variant="dark" size="hero" asLink={false} />

          {/* Big Circular Yellow Play Button from Screenshot 1 */}
          <button
            onClick={togglePlay}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-brand-yellow hover:bg-brand-yellowLight active:scale-95 text-black flex items-center justify-center shadow-[0_10px_35px_rgba(245,184,0,0.4)] transition-all hover:scale-105 cursor-pointer shrink-0"
            aria-label={isPlaying ? 'Pause broadcast' : 'Play broadcast'}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 sm:w-10 sm:h-10 fill-current" />
            ) : (
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1 sm:ml-1.5" />
            )}
          </button>
        </div>

        {/* Now Playing Subtitle */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-gray-300">
          <span className="text-white font-extrabold">Now playing:</span>
          <span className="text-gray-200">
            {currentTrack.title} - {currentTrack.artist}
          </span>
          {isPlaying && (
            <span className="flex items-center gap-0.5 ml-1">
              <span className="w-1 h-3 bg-brand-yellow rounded-full animate-pulse" />
              <span className="w-1 h-4 bg-brand-yellow rounded-full animate-pulse delay-75" />
              <span className="w-1 h-2 bg-brand-yellow rounded-full animate-pulse delay-150" />
            </span>
          )}
        </div>

        {/* 3 Large Rounded Photo Cards in a row with handwriting overlays */}
        <div className="w-full max-w-5xl mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Card 1: Curly Haired Woman with "The Best" */}
          <div className="relative group">
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-[4/5] bg-neutral-900 shadow-2xl border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="The Best Music"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Overlapping Hand-drawn Script "The Best" */}
            <span className="font-marker text-brand-yellow text-3xl sm:text-4xl md:text-5xl absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 rotate-[-12deg] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] z-10 pointer-events-none select-none">
              The Best
            </span>
          </div>

          {/* Card 2 (Center): "ANYWAY" Cover Art */}
          <div className="relative group">
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-[4/5] bg-neutral-900 shadow-2xl border border-white/10 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
                alt="Anyway - Album Track"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

              {/* Album Art Graphic Text Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-between p-6 text-center">
                <div className="w-12 h-6 rounded bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-[10px] font-black tracking-widest text-white">
                  BMP
                </div>

                <div className="w-full">
                  <span className="font-black text-2xl sm:text-3xl tracking-widest text-white/90 uppercase font-display block">
                    ANYWAY
                  </span>
                  <span className="text-[11px] font-bold text-gray-300 uppercase tracking-widest">
                    The Madpix Project
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Urban Guys with "urban music" */}
          <div className="relative group">
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-[4/5] bg-neutral-900 shadow-2xl border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
                alt="Urban Music Roster"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Overlapping Hand-drawn Script "urban music" */}
            <span className="font-marker text-brand-yellow text-3xl sm:text-4xl md:text-5xl absolute top-1/2 -left-4 sm:-left-8 -translate-y-1/2 rotate-[-8deg] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] z-10 pointer-events-none select-none whitespace-nowrap">
              urban music
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
