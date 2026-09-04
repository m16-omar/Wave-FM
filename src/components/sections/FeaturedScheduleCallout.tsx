import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Play, ArrowRight } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

export const FeaturedScheduleCallout: React.FC = () => {
  const { playLiveStream } = useAudio();

  return (
    <section className="w-full py-8 sm:py-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Card: Featured Show Card (7 Cols) */}
          <div className="lg:col-span-7 relative rounded-[32px] overflow-hidden bg-neutral-900 shadow-2xl min-h-[340px] sm:min-h-[380px] flex flex-col justify-end p-6 sm:p-10 border border-white/10 group">
            {/* Background Image of Host Ryan Taylor */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
              alt="After Hours Mix - Ryan Taylor"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Giant Watermark Background Text "SHOW" */}
            <div className="absolute top-4 left-6 pointer-events-none opacity-20 select-none">
              <span className="font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white uppercase font-display leading-none">
                SHOW
              </span>
            </div>

            {/* Content Foreground */}
            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
                  FEATURED ON AIR
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-display">
                After Hours Mix
              </h3>

              <p className="text-base sm:text-lg font-bold text-gray-200">
                Mixed by <span className="text-brand-yellow">Ryan Taylor</span>
              </p>

              <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-gray-300 pt-1">
                <span className="flex items-center gap-1.5 font-mono">
                  <Clock className="w-4 h-4 text-brand-yellow" />
                  10:45 am – 2:30 pm
                </span>

                <button
                  onClick={() => playLiveStream()}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-brand-yellow hover:underline cursor-pointer ml-auto"
                >
                  <Play className="w-4 h-4 fill-current" />
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
              Explore our full weekly broadcasting timetable. Live resident DJ sets, artist interviews, top charts, and underground sessions 24/7.
            </p>

            <div>
              <Link
                to="/contact#schedule"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all"
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
