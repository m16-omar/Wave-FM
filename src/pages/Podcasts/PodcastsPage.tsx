import React, { useState } from 'react';
import { ALL_PODCASTS_DATA, PodcastItem } from '../../data/podcasts';
import { useAudio } from '../../context/AudioContext';
import { Play, Pause, MoreVertical, Calendar, Eye, Share2 } from 'lucide-react';
import { clsx } from 'clsx';
import confetti from 'canvas-confetti';

export const PodcastsPage: React.FC = () => {
  const { isPlaying, currentTrack, playTrack, togglePlay } = useAudio();
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const displayedPodcasts = ALL_PODCASTS_DATA.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_PODCASTS_DATA.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handlePlayPodcast = (podcast: PodcastItem) => {
    const isThisPlaying = isPlaying && currentTrack.title === podcast.title;
    if (isThisPlaying) {
      togglePlay();
    } else {
      playTrack({
        id: podcast.id,
        title: podcast.title,
        artist: 'WAVE Original Podcast',
        album: podcast.category,
        coverArt: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80',
        duration: 2400,
        previewAudioUrl: podcast.audioUrl,
        votes: 1200,
        genre: podcast.category,
      });
    }
  };

  return (
    <div className="w-full select-none space-y-12 sm:space-y-16 pb-16">
      {/* 1. Hero Page Header: PODCASTS EPISODES + Red Studio Card (Screenshot 1) */}
      <div className="w-full bg-[#0C0D10] relative overflow-hidden border-b border-white/5 pt-12 pb-16 sm:pt-16 sm:pb-20">
        {/* Background Repeating Cursive Script Watermark "podcasts" */}
        <div className="absolute inset-0 flex items-center justify-around pointer-events-none opacity-[0.05] overflow-hidden select-none">
          <span className="font-script text-7xl sm:text-[11rem] text-white rotate-[-12deg] whitespace-nowrap">
            podcasts
          </span>
          <span className="font-script text-7xl sm:text-[11rem] text-white rotate-[-12deg] whitespace-nowrap hidden sm:inline">
            podcasts
          </span>
          <span className="font-script text-7xl sm:text-[11rem] text-white rotate-[-12deg] whitespace-nowrap hidden md:inline">
            podcasts
          </span>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (7 Cols): Title + Description + Button */}
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight leading-none">
                PODCASTS
                <br />
                EPISODES
              </h1>

              <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('all-podcasts');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-brand-yellow text-black hover:bg-brand-yellowHover active:scale-95 font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  DISCOVER ALL
                </button>
              </div>
            </div>

            {/* Right Column (5 Cols): Red Studio Card */}
            <div className="lg:col-span-5">
              <div className="rounded-[28px] overflow-hidden bg-[#C91A1A] p-2 aspect-[16/10] sm:aspect-[1.8/1] shadow-2xl flex items-center justify-center relative group">
                <img
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"
                  alt="Podcaster with Microphone"
                  className="w-full h-full object-cover rounded-[22px] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. "FEATURED PODCAST" + Hero Preview (Screenshot 1) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Card: Clean White Rounded Card */}
          <div className="md:col-span-6 bg-white rounded-[32px] p-8 sm:p-10 text-black shadow-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black uppercase font-display leading-none">
              FEATURED
              <br />
              PODCAST
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Dark Pill Widget: Beat Breakdown */}
            <div
              onClick={() => handlePlayPodcast(ALL_PODCASTS_DATA[0])}
              className="bg-[#141416] rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 text-white shadow-lg cursor-pointer hover:bg-neutral-900 transition-colors group"
            >
              {/* Stylized Square "POD CAST" Artwork */}
              <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex flex-col items-center justify-center shrink-0 p-1">
                <span className="text-[10px] font-black text-brand-yellow font-display leading-none">POD</span>
                <span className="text-[8px] font-black text-white font-display leading-none">CAST</span>
              </div>

              <span className="font-extrabold text-sm text-white group-hover:text-brand-yellow transition-colors">
                Beat Breakdown
              </span>
            </div>
          </div>

          {/* Right Card: Dark Rounded Behind the Lens Player Card */}
          <div
            onClick={() => handlePlayPodcast(ALL_PODCASTS_DATA[0])}
            className="md:col-span-6 bg-neutral-900 rounded-[32px] overflow-hidden relative aspect-[16/10] shadow-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between group cursor-pointer"
          >
            {/* Background Grayscale Image */}
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
              alt="Behind the Lens Podcast Studio"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            {/* Top Category Badge */}
            <div className="relative z-10">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                Commercial
              </span>
            </div>

            {/* Giant Center Golden Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-brand-yellow to-amber-300 text-black flex items-center justify-center shadow-glow-yellow group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 text-black" />
              </div>
            </div>

            {/* Bottom Title Text */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display tracking-tight group-hover:text-brand-yellow transition-colors">
                Behind the Lens
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "RELATED PODCASTS" (3 Large Cards Grid - Screenshot 1 & 2) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header with Yellow Dashed Line */}
        <div className="flex items-center gap-2 mb-6">
          <span className="px-2.5 py-0.5 rounded bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
            RELATED PODCASTS
          </span>
          <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ALL_PODCASTS_DATA.slice(1, 4).map((pod) => (
            <div
              key={pod.id}
              onClick={() => handlePlayPodcast(pod)}
              className="bg-[#141416] rounded-[28px] overflow-hidden border border-white/10 shadow-2xl p-5 sm:p-6 flex flex-col justify-end group relative aspect-[4/5] cursor-pointer"
            >
              {/* Stylized Poster Graphic in Background */}
              <div className="absolute inset-0 bg-[#0E0E10] flex flex-col items-center justify-center p-6 select-none">
                {/* Large Stylized "POD CAST" Gold Typography */}
                <div className="text-center relative">
                  <span className="font-black text-6xl sm:text-7xl text-brand-yellow font-display block leading-none tracking-tighter">
                    POD
                  </span>
                  <span className="font-script text-2xl text-white/80 absolute top-7 left-1/2 -translate-x-1/2 rotate-[-8deg] whitespace-nowrap">
                    podcasts
                  </span>
                  <span className="font-black text-6xl sm:text-7xl text-brand-yellow font-display block leading-none tracking-tighter mt-2">
                    CAST
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Foreground Bottom Details */}
              <div className="relative z-10 flex items-center justify-between">
                <h4 className="text-base sm:text-lg font-black text-white uppercase font-display group-hover:text-brand-yellow transition-colors">
                  {pod.title}
                </h4>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayPodcast(pod);
                  }}
                  className="p-1.5 text-gray-400 hover:text-brand-yellow transition-colors cursor-pointer"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. "ALL PODCASTS" Golden Yellow Banner & Grid (Screenshot 2 & 3) */}
      <section id="all-podcasts" className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-brand-yellow text-black rounded-[32px] p-6 sm:p-10 shadow-2xl space-y-6 sm:space-y-8 border border-brand-yellowHover">
          {/* Centered Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display tracking-tight text-center text-black leading-none">
            ALL PODCASTS
          </h2>

          {/* 4-Column Podcasts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {displayedPodcasts.map((podcast) => {
              const isThisPlaying = isPlaying && currentTrack.title === podcast.title;

              return (
                <div
                  key={podcast.id}
                  onClick={() => handlePlayPodcast(podcast)}
                  className="bg-[#141416] rounded-2xl overflow-hidden p-3.5 border border-black/10 text-white shadow-xl space-y-3 group hover:scale-[1.03] transition-all cursor-pointer flex flex-col justify-between"
                >
                  {/* Artwork Poster with "POD CAST" and Floating Play Button */}
                  <div className="relative aspect-square w-full rounded-xl bg-neutral-950 overflow-hidden flex flex-col items-center justify-center p-4 select-none border border-white/5">
                    {/* Stylized Typography */}
                    <div className="text-center relative">
                      <span className="font-black text-4xl text-brand-yellow font-display block leading-none">
                        POD
                      </span>
                      <span className="font-script text-base text-white/80 absolute top-4 left-1/2 -translate-x-1/2 rotate-[-8deg] whitespace-nowrap">
                        podcasts
                      </span>
                      <span className="font-black text-4xl text-brand-yellow font-display block leading-none mt-1">
                        CAST
                      </span>
                    </div>

                    {/* Floating Play Button on Top-Right */}
                    <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white shadow-md group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                      {isThisPlaying ? (
                        <Pause className="w-3.5 h-3.5 fill-current" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      )}
                    </div>
                  </div>

                  {/* Info Row */}
                  <div className="space-y-1.5 flex-1">
                    {/* Category Tag with Yellow Border */}
                    <div>
                      <span className="px-2 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[9px] font-black uppercase tracking-wider inline-block">
                        {podcast.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-black text-xs sm:text-sm text-white group-hover:text-brand-yellow transition-colors line-clamp-1 font-display">
                      {podcast.title}
                    </h4>

                    {/* Meta Row: Date, Views, Share */}
                    <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono pt-2 border-t border-white/5">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5 text-brand-yellow" />
                        <span>{podcast.date}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <Eye className="w-2.5 h-2.5" />
                          <span>{podcast.views}</span>
                        </div>
                        <Share2 className="w-2.5 h-2.5" />
                        <MoreVertical className="w-2.5 h-2.5" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered "LOAD MORE" Button */}
          {hasMore && (
            <div className="text-center pt-2">
              <button
                onClick={() => {
                  confetti({
                    particleCount: 30,
                    spread: 50,
                    origin: { y: 0.8 },
                    colors: ['#000000', '#FFFFFF'],
                  });
                  handleLoadMore();
                }}
                className="px-8 py-2.5 rounded-full border-2 border-black text-black hover:bg-black hover:text-white font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md"
              >
                LOAD MORE
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
