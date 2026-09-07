import React from 'react';
import { Play, Pause, MoreHorizontal, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAudio } from '../../context/AudioContext';
import {
  getUpcomingConsecutiveShows,
  getNextLiveShow,
  getCurrentLiveShow,
} from '../../data/schedule';

export const SongRankSection: React.FC = () => {
  const {
    isPlaying,
    togglePlay,
    playLiveStream,
  } = useAudio();

  const upcomingShows = getUpcomingConsecutiveShows(4);
  const featuredShow = getNextLiveShow() || getCurrentLiveShow();

  return (
    <section className="w-full py-12 sm:py-16 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Title + Featured Show Widget */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          {/* Left Title */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-yellow tracking-tight uppercase font-display">
              LINE UP SHOWS
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-400 font-medium">
              Tune in to upcoming consecutive on-air broadcasts, flagship presentations, and cultural shows on Imole 106.3 FM.
            </p>
          </div>

          {/* Right: Featured Show Pill Card (Dynamic Next Up Show) */}
          <div className="relative self-start md:self-auto">
            <Link
              to={`/shows/${featuredShow.showSlug}`}
              className="bg-brand-yellow text-black rounded-3xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-xl border border-brand-yellowHover group hover:scale-[1.02] transition-transform"
            >
              {/* Show Thumbnail */}
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-black/10 shrink-0 border border-black/10">
                <img
                  src={featuredShow.image}
                  alt={`${featuredShow.showTitle} - Imole FM`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Info */}
              <div className="min-w-0 pr-2">
                <h4 className="font-black text-sm text-black leading-tight truncate">
                  {featuredShow.showTitle}
                </h4>
                <p className="text-xs font-semibold text-black/80 truncate">
                  {featuredShow.category} • {featuredShow.timeSlot}
                </p>
              </div>

              {/* Time & Play */}
              <div className="flex items-center gap-2 pl-2 border-l border-black/10 text-xs font-bold text-black">
                <span className="font-mono">{featuredShow.startTime}</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (isPlaying) {
                      togglePlay();
                    } else {
                      playLiveStream();
                    }
                  }}
                  className="w-7 h-7 rounded-full bg-black text-brand-yellow flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                  title="Listen Live"
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  )}
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* White Rounded Card Container */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 md:p-10 shadow-2xl text-black">
          {/* Top Badge + Dotted Line */}
          <div className="flex items-center gap-4 pb-6">
            <span className="px-4 py-1.5 rounded-full bg-black text-white text-[11px] sm:text-xs font-black uppercase tracking-wider shrink-0 shadow-md">
              UPCOMING SHOWS LINEUP
            </span>
            <div className="flex-1 border-b border-dashed border-gray-300" />
            <Link
              to="/shows"
              className="text-xs font-black text-black hover:text-brand-yellow flex items-center gap-1 uppercase tracking-wider shrink-0 transition-colors"
            >
              <span>View All Shows</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Dark Show Cards (Consecutive Upcoming Lineup) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {upcomingShows.map((show) => {
              return (
                <Link
                  key={show.id}
                  to={`/shows/${show.slug}`}
                  className="bg-[#0F204E] text-white rounded-2xl p-3.5 flex flex-col justify-between group hover:shadow-2xl hover:scale-[1.02] hover:border-brand-yellow/50 transition-all duration-300 border border-blue-900/30"
                >
                  {/* Show Cover Art */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-900 mb-3.5">
                    <img
                      src={show.coverArt}
                      alt={show.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Host / Schedule */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <h4 className="font-extrabold text-sm text-white truncate group-hover:text-brand-yellow transition-colors font-display">
                        {show.title}
                      </h4>
                      <p className="text-xs text-brand-yellow font-semibold truncate mt-0.5">
                        {show.host}
                      </p>
                      <p className="text-[11px] text-gray-400 font-medium truncate mt-0.5">
                        {show.schedule}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div
                      className="p-2 rounded-xl bg-white/10 group-hover:bg-brand-yellow group-hover:text-black text-gray-300 transition-all shrink-0 mt-0.5"
                      title="View Show Details"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
