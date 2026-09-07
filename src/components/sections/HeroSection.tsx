import React from 'react';
import { StationLogo } from '../ui/StationLogo';
import { Play, Pause } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';
import { ASSET_IMAGES } from '../../assets/images';

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
          <h1 className="inline-flex items-center justify-center">
            <StationLogo variant="dark" size="hero" asLink={false} />
            <span className="sr-only">Imole 106.3 FM — Lagos's Urban Indigenous Voice</span>
          </h1>

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

        {/* Now Streaming Subtitle */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-gray-300">
          <span className="text-white font-extrabold">Now streaming:</span>
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

        {/* Main Station Official Backdrop Showcase Banner (Top Before Individual Pictures) */}
        <div className="w-full max-w-5xl mt-8 sm:mt-10">
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-neutral-900 shadow-2xl border border-white/10 group aspect-[16/10] sm:aspect-[21/9] md:aspect-[2.5/1]">
            <img
              src={ASSET_IMAGES.building}
              alt="Imole 106.3 FM Stage Backdrop - We Are The Light"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* 3 Large Rounded Photo Cards in a row (Individual Presenter Pictures) */}
        <div className="w-full max-w-5xl mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Card 1: Presenter / Music Photo */}
          <div className="relative group">
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-[4/5] bg-neutral-900 shadow-2xl border border-white/5">
              <img
                src={ASSET_IMAGES.hero}
                alt="The Best Music - Imole FM"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Card 2 (Center): Presenter Photo */}
          <div className="relative group">
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-[4/5] bg-neutral-900 shadow-2xl border border-white/5">
              <img
                src={ASSET_IMAGES.hero2}
                alt="Imole 106.3 FM"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Card 3: Urban Music Roster */}
          <div className="relative group">
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-[4/5] bg-neutral-900 shadow-2xl border border-white/5">
              <img
                src={ASSET_IMAGES.hero3}
                alt="Urban Music Roster - Imole FM"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
