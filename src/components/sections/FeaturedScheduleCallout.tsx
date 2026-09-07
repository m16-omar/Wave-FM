import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Play, ArrowRight } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';
import { getCurrentLiveShow } from '../../data/schedule';

import { LiveNowBadge } from '../ui/LiveNowBadge';

export const FeaturedScheduleCallout: React.FC = () => {
  const { playLiveStream } = useAudio();
  const currentShow = getCurrentLiveShow();

  const handleSeeSchedule = (e: React.MouseEvent) => {
    const el = document.getElementById('schedule');
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-6 sm:py-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Card: Dynamic Live Show Card (7 Cols) */}
          <div className="lg:col-span-7 relative rounded-[32px] overflow-hidden bg-neutral-900 shadow-2xl min-h-[340px] sm:min-h-[380px] flex flex-col justify-end p-6 sm:p-10 border border-white/10 group">
            {/* Full Image of Show Artwork */}
            <img
              src={currentShow.image}
              alt={`${currentShow.showTitle} - Imole 106.3 FM`}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

            {/* Content Foreground */}
            <div className="relative z-10 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <LiveNowBadge size="md" />
                <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                  {currentShow.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase font-display drop-shadow-md">
                {currentShow.showTitle}
              </h3>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-brand-yellow/60 shrink-0 bg-neutral-800 shadow-md">
                  <img
                    src={currentShow.hostAvatar}
                    alt={currentShow.hostName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base font-bold text-gray-100 drop-shadow">
                  Hosted by <span className="text-brand-yellow">{currentShow.hostName}</span>
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-gray-200 pt-1">
                <span className="flex items-center gap-1.5 font-mono bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  <Clock className="w-4 h-4 text-brand-yellow" />
                  {currentShow.timeSlot} (WAT)
                </span>

                <button
                  onClick={() => playLiveStream()}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-black text-xs font-black uppercase tracking-wider transition-all active:scale-95 cursor-pointer ml-auto shadow-lg"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Listen Live</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Card: Clean White Schedule CTA Box (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-[32px] p-8 sm:p-12 text-black shadow-2xl flex flex-col justify-center space-y-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black uppercase font-display leading-none">
              WEEKLY
              <br />
              SCHEDULE
            </h2>

            <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
              Explore our full weekly broadcasting timetable. Live resident show hosts, indigenous music, community dialogue, and faith inspirations 24/7.
            </p>

            <div>
              <Link
                to="/shows#schedule"
                onClick={handleSeeSchedule}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all cursor-pointer"
              >
                <span>SEE SCHEDULE</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
