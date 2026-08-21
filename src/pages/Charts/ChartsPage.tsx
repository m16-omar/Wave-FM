import React from 'react';
import { TOP_CHART_SONGS, OFFICIAL_RADIO_CHART } from '../../data/charts';
import { SongCard } from '../../components/cards/SongCard';
import { Trophy, Flame } from 'lucide-react';

export const ChartsPage: React.FC = () => {
  return (
    <div className="w-full py-8 md:py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Hero Chart Header */}
        <div className="relative rounded-3xl overflow-hidden bg-background-card border border-border p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="absolute inset-0 -z-10">
            <img
              src={OFFICIAL_RADIO_CHART.coverImage}
              alt={OFFICIAL_RADIO_CHART.title}
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-card via-background-card/90 to-background-card/50" />
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-brand-yellow font-extrabold text-xs uppercase tracking-widest">
              <Trophy className="w-4 h-4" />
              <span>Official Listener Countdown</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              The Official WAVE Top 20
            </h1>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Updated every Friday at 6:00 PM on *Hitmakers Live* with Maya Lin. Calculated from listener votes, digital streaming data, and airplay frequency.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-2">
              <span className="bg-white/10 px-3 py-1.5 rounded-lg text-white font-mono">
                Week Ending: {OFFICIAL_RADIO_CHART.updatedDate}
              </span>
              <span>Sponsored by: <strong className="text-brand-yellow">{OFFICIAL_RADIO_CHART.sponsor}</strong></span>
            </div>
          </div>
        </div>

        {/* Voting Instructions Alert */}
        <div className="p-4 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5 text-brand-yellow font-bold">
            <Flame className="w-4 h-4 shrink-0" />
            <span>Click the heart icon next to any track to cast your official weekly vote!</span>
          </div>
          <span className="text-gray-400 hidden sm:inline text-[11px]">
            1 Vote Per User Per Week
          </span>
        </div>

        {/* Song Rank List */}
        <div className="space-y-3">
          {TOP_CHART_SONGS.map((song) => (
            <SongCard
              key={song.id}
              song={song}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
