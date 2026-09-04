import React, { useState } from 'react';
import { CHART_CATEGORIES, ChartCategoryItem } from '../../data/charts';
import { useAudio } from '../../context/AudioContext';
import { Play, Pause, ShoppingCart } from 'lucide-react';
import { clsx } from 'clsx';
import confetti from 'canvas-confetti';

export const ChartsPage: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState<ChartCategoryItem>(CHART_CATEGORIES[0]);
  const [showFullTracklist, setShowFullTracklist] = useState<boolean>(false);
  const { isPlaying, currentTrack, playTrack, togglePlay } = useAudio();

  const handleSelectChart = (chart: ChartCategoryItem) => {
    setSelectedChart(chart);
  };

  const displayedSongs = showFullTracklist
    ? selectedChart.songs
    : selectedChart.songs.slice(0, 4);

  return (
    <div className="w-full select-none">
      {/* 1. Hero Page Title Banner with Repeating "charts" Watermark */}
      <div className="w-full bg-[#0C0D10] relative overflow-hidden border-b border-white/5 pt-12 pb-32 sm:pt-16 sm:pb-40">
        {/* Background Grayscale Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80"
            alt="Song Charts Live Studio"
            className="w-full h-full object-cover grayscale opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0D10]/80 via-[#0C0D10]/60 to-[#0C0D10]" />
        </div>

        {/* Background Repeating Cursive Script Watermark "charts" */}
        <div className="absolute inset-0 flex items-center justify-around pointer-events-none opacity-[0.06] overflow-hidden select-none">
          <span className="font-script text-8xl sm:text-[12rem] text-white rotate-[-12deg] whitespace-nowrap">
            charts
          </span>
          <span className="font-script text-8xl sm:text-[12rem] text-white rotate-[-12deg] whitespace-nowrap hidden sm:inline">
            charts
          </span>
          <span className="font-script text-8xl sm:text-[12rem] text-white rotate-[-12deg] whitespace-nowrap hidden md:inline">
            charts
          </span>
        </div>

        {/* Top Header Row Content (Aligned to right/center as in reference screenshot) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 hidden lg:block" />

            {/* Right Column: Title + Subtitle + Live Now Playing Ticker */}
            <div className="lg:col-span-7 space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight leading-none">
                SONG CHARTS
              </h1>

              <p className="text-sm sm:text-base text-gray-300 max-w-xl font-medium leading-relaxed">
                Vote for your favorite records to climb this week's official airplay chart. Direct listener power on Imole 106.3 FM.
              </p>

              {/* Active Now Playing Ticker */}
              <div className="pt-2">
                <div className="text-xs sm:text-sm font-black text-white uppercase tracking-wide">
                  NOW PLAYING:{' '}
                  <span className="text-brand-yellow">
                    {currentTrack.title} (feat. Baer & Suzi)
                  </span>
                </div>
                <div className="text-xs font-semibold text-gray-400">
                  - {currentTrack.artist}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Layout Grid: White "SEE ALL CHARTS" Box on Left + Right Widgets */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-20 -mt-24 sm:-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (6 Cols on LG): Tall White Rounded Container */}
          <div className="lg:col-span-6 bg-white rounded-[32px] p-6 sm:p-8 md:p-10 shadow-2xl text-black relative">
            {/* Header + Floating Yellow Script "Listeners Choice" */}
            <div className="relative pr-28 sm:pr-36">
              <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight leading-none uppercase font-display">
                SEE ALL
                <br />
                CHARTS
              </h2>

              {/* Overlapping Yellow Brush Script Badge */}
              <span className="font-marker text-brand-yellow text-3xl sm:text-4xl absolute -top-4 sm:-top-6 right-0 sm:right-2 rotate-[-10deg] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] pointer-events-none select-none whitespace-nowrap leading-tight">
                Listeners
                <br />
                Choice
              </span>
            </div>

            {/* 2-Column Grid of 6 Chart Categories */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 pt-8">
              {CHART_CATEGORIES.map((cat) => {
                const isSelected = selectedChart.id === cat.id;

                return (
                  <div
                    key={cat.id}
                    onClick={() => handleSelectChart(cat)}
                    className={clsx(
                      'bg-[#141416] rounded-2xl overflow-hidden shadow-lg cursor-pointer group transition-all duration-300 flex flex-col justify-between border',
                      isSelected
                        ? 'border-brand-yellow ring-2 ring-brand-yellow scale-[1.02]'
                        : 'border-neutral-800 hover:border-brand-yellow/50 hover:scale-[1.02]'
                    )}
                  >
                    {/* Stylized Chart Artwork Graphic ("CH AR TS" yellow & black motif) */}
                    <div className="relative aspect-square w-full bg-neutral-900 overflow-hidden flex items-center justify-center p-3">
                      {/* Stylized Poster Layout matching reference design */}
                      <div className="absolute inset-0 bg-[#0E0E10] flex flex-col justify-between p-2">
                        {/* Top Row: Yellow "CH" + Photo */}
                        <div className="flex justify-between items-center h-1/2 gap-1">
                          <span className="font-black text-3xl sm:text-4xl text-brand-yellow font-display leading-none">
                            CH
                          </span>
                          <div className="w-12 sm:w-14 h-full rounded-lg overflow-hidden shrink-0 border border-white/10">
                            <img
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                              alt="Chart Icon"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Bottom Row: Yellow "AR" + Script */}
                        <div className="flex justify-between items-end h-1/2 gap-1">
                          <span className="font-black text-3xl sm:text-4xl text-brand-yellow font-display leading-none">
                            AR
                          </span>
                          <span className="font-script text-xs sm:text-sm text-brand-yellow rotate-[-8deg]">
                            ★ 98 FM
                          </span>
                        </div>
                      </div>

                      {/* Large Center Overlay Text "TS" */}
                      <div className="absolute bottom-1 right-2 pointer-events-none">
                        <span className="font-black text-2xl sm:text-3xl text-brand-yellow/90 font-display">
                          TS
                        </span>
                      </div>
                    </div>

                    {/* Title in White Text */}
                    <div className="bg-[#141416] p-2.5 sm:p-3 text-center border-t border-neutral-800">
                      <h4
                        className={clsx(
                          'text-xs sm:text-sm font-extrabold truncate transition-colors',
                          isSelected
                            ? 'text-brand-yellow'
                            : 'text-white group-hover:text-brand-yellow'
                        )}
                      >
                        {cat.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (6 Cols on LG): Stack of 2 Widgets */}
          <div className="lg:col-span-6 space-y-6">
            {/* Widget 1: Yellow "FEATURED CHART" Card */}
            <div className="bg-brand-yellow text-black rounded-[28px] sm:rounded-[32px] p-8 sm:p-10 shadow-2xl space-y-4 border border-brand-yellowHover">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display leading-none text-black">
                FEATURED
                <br />
                CHART
              </h3>

              <p className="text-xs sm:text-sm text-black/80 font-semibold leading-relaxed max-w-md">
                Updated weekly from live radio requests, streaming data, and listener votes across the globe on Imole 106.3.
              </p>

              <div>
                <button
                  onClick={() => {
                    confetti({
                      particleCount: 50,
                      spread: 60,
                      origin: { y: 0.6 },
                      colors: ['#000000', '#FFFFFF', '#F5B800'],
                    });
                  }}
                  className="px-8 py-3 rounded-full bg-black text-white hover:bg-neutral-900 active:scale-95 font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  DISCOVER MORE
                </button>
              </div>
            </div>

            {/* Widget 2: Dark Tracklist Card */}
            <div className="bg-[#141416] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 border border-white/10 text-white shadow-2xl space-y-5">
              {/* Header: Selected Chart Title */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <h4 className="font-black text-base sm:text-lg text-white font-display">
                  {selectedChart.title}
                </h4>
                <span className="text-[11px] font-mono text-gray-400 font-bold">
                  {selectedChart.songs.length} Tracks
                </span>
              </div>

              {/* Track Rows */}
              <div className="divide-y divide-white/5">
                {displayedSongs.map((song) => {
                  const isThisPlaying =
                    isPlaying && currentTrack.title === song.title;

                  return (
                    <div
                      key={song.id}
                      onClick={() => {
                        if (isThisPlaying) {
                          togglePlay();
                        } else {
                          playTrack({
                            id: song.id,
                            title: song.title,
                            artist: song.artist,
                            album: song.album,
                            coverArt: song.coverArt,
                            duration: 220,
                            previewAudioUrl: song.previewAudioUrl,
                            votes: song.votes,
                            genre: song.genre,
                          });
                        }
                      }}
                      className="py-3 sm:py-3.5 flex items-center justify-between gap-3 hover:bg-white/[0.03] px-2 rounded-xl transition-colors cursor-pointer group"
                    >
                      {/* Left: Rank Badge + Square Art + Title & Artist */}
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        {/* Rank Badge Box */}
                        <div
                          className={clsx(
                            'w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-black text-xs sm:text-sm font-mono shrink-0 shadow-sm transition-colors',
                            song.rank === 1
                              ? 'bg-brand-yellow text-black'
                              : 'bg-white/10 text-gray-300 group-hover:bg-brand-yellow group-hover:text-black'
                          )}
                        >
                          {song.rank}
                        </div>

                        {/* Thumbnail Cover Art */}
                        <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden bg-neutral-900 shrink-0 border border-white/10">
                          <img
                            src={song.coverArt}
                            alt={song.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            {isThisPlaying ? (
                              <Pause className="w-4 h-4 text-brand-yellow fill-current" />
                            ) : (
                              <Play className="w-4 h-4 text-brand-yellow fill-current ml-0.5" />
                            )}
                          </div>
                        </div>

                        {/* Title & Artist */}
                        <div className="min-w-0">
                          <h5 className="font-extrabold text-xs sm:text-sm text-white group-hover:text-brand-yellow transition-colors truncate">
                            {song.title}
                          </h5>
                          <p className="text-[11px] text-gray-400 font-medium truncate mt-0.5">
                            {song.artist}
                          </p>
                        </div>
                      </div>

                      {/* Right: Cart / Buy / Stream Icon */}
                      <div className="shrink-0 flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(song.spotifyUrl, '_blank');
                          }}
                          className="p-2 text-gray-400 hover:text-brand-yellow transition-colors cursor-pointer"
                          title="Stream / Buy Track"
                        >
                          <ShoppingCart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom "FULL TRACKLIST" Button */}
              <div className="pt-2">
                <button
                  onClick={() => setShowFullTracklist(!showFullTracklist)}
                  className="px-6 py-2 rounded-full border border-white/30 text-white hover:border-brand-yellow hover:text-brand-yellow text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
                >
                  {showFullTracklist ? 'SHOW LESS' : 'FULL TRACKLIST'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
