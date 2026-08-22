import React, { useState } from 'react';
import { SponsorBadges } from '../../components/sections/SponsorBadges';
import { useAudio } from '../../context/AudioContext';
import { Play, Pause, MoreVertical, ShoppingCart, Star, Clock } from 'lucide-react';
import { clsx } from 'clsx';
import confetti from 'canvas-confetti';

interface HostSong {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  audioUrl: string;
}

const HOST_SELECTION_TRACKS: HostSong[] = [
  {
    id: 'hs-01',
    title: 'Sweater Weather [I Love You.]',
    artist: 'The Neighbourhood',
    coverArt: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 'hs-02',
    title: 'Who [MUSE]',
    artist: 'Jimin',
    coverArt: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 'hs-03',
    title: 'Timeless [Timeless - Single]',
    artist: 'The Weeknd & Playboi Carti',
    coverArt: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 'hs-04',
    title: 'YOU M4KE ME [Broken Symphonies]',
    artist: 'Jan Metternich',
    coverArt: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
];

export const ShowsPage: React.FC = () => {
  const { isPlaying, currentTrack, playTrack, togglePlay, playLiveStream } = useAudio();
  const [showFullHostedTracklist, setShowFullHostedTracklist] = useState(false);

  return (
    <div className="w-full select-none space-y-12 sm:space-y-16 pb-16">
      {/* 1. Hero Show Highlight Section (Screenshot 1) */}
      <section className="w-full pt-8 sm:pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Card: SHOW OF THE WEEK with Yellow Overlay Card (7 Cols) */}
          <div className="lg:col-span-7 relative rounded-[32px] overflow-hidden bg-neutral-900 shadow-2xl min-h-[360px] sm:min-h-[400px] flex items-center p-6 sm:p-10 border border-white/10 group">
            {/* Background Image of Woman in Tan Coat */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
              alt="Show of the Week Presenter"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            {/* Overlaid Yellow Box: "SHOW OF THE WEEK" */}
            <div className="relative z-10 bg-brand-yellow text-black rounded-3xl p-6 sm:p-8 max-w-sm shadow-2xl space-y-3.5 border border-brand-yellowHover">
              <h2 className="text-3xl sm:text-4xl font-black uppercase font-display leading-none text-black">
                SHOW OF
                <br />
                THE WEEK
              </h2>

              {/* Host Info Row */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl overflow-hidden bg-black/20 shrink-0 border border-black/10">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                    alt="Alex Rivera"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-extrabold text-xs sm:text-sm text-black">
                  With Alex Rivera
                </span>
              </div>

              <p className="text-xs text-black/80 font-semibold leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>

              <div>
                <button
                  onClick={() => playLiveStream()}
                  className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-neutral-900 active:scale-95 font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </div>

          {/* Right Card: "The Fan Zone" Spotlight (5 Cols) */}
          <div className="lg:col-span-5 relative rounded-[32px] overflow-hidden bg-neutral-900 shadow-2xl min-h-[360px] sm:min-h-[400px] flex flex-col justify-end p-6 sm:p-8 border border-white/10 group">
            {/* Background Image of Host with Beanie & Sunglasses */}
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80"
              alt="The Fan Zone - Dave Sparks"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Stylized Background Watermark "SHOW RADIO" */}
            <div className="absolute top-6 left-6 pointer-events-none opacity-20 select-none">
              <span className="font-black text-6xl sm:text-7xl tracking-tighter text-white uppercase font-display leading-none">
                SHOW
              </span>
              <span className="block font-marker text-brand-yellow text-2xl -mt-2">
                RADIO
              </span>
            </div>

            {/* Content Foreground */}
            <div className="relative z-10 space-y-2">
              <span className="px-2.5 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[10px] font-black uppercase tracking-wider inline-block">
                Interviews
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase font-display">
                The Fan Zone
              </h3>

              <div className="flex items-center justify-between text-xs text-gray-400 font-medium pt-1">
                <span>Weekdays 5:00 pm - 6:45 pm</span>
                <button
                  onClick={() => playLiveStream()}
                  className="p-1.5 text-gray-300 hover:text-brand-yellow transition-colors cursor-pointer"
                >
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sponsor / Station Graphic Badges Row (Screenshot 1) */}
      <SponsorBadges />

      {/* 3. "MEET OUR HOST STAR" + Host Selection (Screenshot 1 & 2) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (6 Cols): White Callout Box + Host Portrait Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* White Callout Box: MEET OUR HOST STAR */}
            <div className="bg-white rounded-[32px] p-8 sm:p-10 text-black shadow-2xl space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black uppercase font-display leading-none">
                MEET OUR
                <br />
                HOST STAR
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Dark Portrait Card: Jordan Carter */}
            <div className="bg-[#141416] rounded-[32px] overflow-hidden relative aspect-[4/3] sm:aspect-[16/11] shadow-2xl border border-white/10 group flex flex-col justify-end p-6 sm:p-8">
              {/* Photo of Jordan Carter */}
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80"
                alt="Jordan Carter"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Floating Top-Right Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
                <Star className="w-4 h-4 text-brand-yellow fill-current" />
              </div>

              {/* Foreground Host Details */}
              <div className="relative z-10 text-center space-y-2">
                <div className="inline-block px-3 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[10px] font-black uppercase tracking-wider bg-black/40 backdrop-blur-sm">
                  Host
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase font-display tracking-tight drop-shadow-md">
                  Jordan Carter
                </h3>

                {/* 5 Yellow Stars / Dots */}
                <div className="flex items-center justify-center gap-1 text-brand-yellow">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="w-2.5 h-2.5 rounded-full bg-brand-yellow inline-block shadow-glow-yellow" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (6 Cols): Stack of 2 Widgets */}
          <div className="lg:col-span-6 space-y-6">
            {/* Widget 1: OUR HOST SELECTION (4 Tracks) */}
            <div>
              {/* Header with Yellow Dashed Line */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
                  OUR HOST SELECTION
                </span>
                <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
              </div>

              <div className="bg-[#141416] rounded-2xl p-3 sm:p-4 border border-white/5 shadow-2xl space-y-2.5">
                {HOST_SELECTION_TRACKS.map((track) => {
                  const isThisPlaying = isPlaying && currentTrack.title === track.title;

                  return (
                    <div
                      key={track.id}
                      onClick={() => {
                        if (isThisPlaying) togglePlay();
                        else {
                          playTrack({
                            id: track.id,
                            title: track.title,
                            artist: track.artist,
                            album: 'Host Selection',
                            coverArt: track.coverArt,
                            duration: 210,
                            previewAudioUrl: track.audioUrl,
                            votes: 1500,
                            genre: 'Urban / Alternative',
                          });
                        }
                      }}
                      className="p-2 sm:p-2.5 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-between gap-3 cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-neutral-900 shrink-0 border border-white/10">
                          <img
                            src={track.coverArt}
                            alt={track.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-extrabold text-xs sm:text-sm text-white group-hover:text-brand-yellow transition-colors truncate">
                            {track.title}
                          </h4>
                          <p className="text-[11px] text-gray-400 font-medium truncate mt-0.5">
                            {track.artist}
                          </p>
                        </div>
                      </div>

                      {/* Play Button */}
                      <button
                        className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-brand-yellow group-hover:text-black text-white flex items-center justify-center transition-all shrink-0"
                        title={isThisPlaying ? 'Pause' : 'Play Song'}
                      >
                        {isThisPlaying ? (
                          <Pause className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Widget 2: HOSTED CHART */}
            <div>
              {/* Header with Yellow Dashed Line */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
                  HOSTED CHART
                </span>
                <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
              </div>

              <div className="bg-[#141416] rounded-2xl p-4 sm:p-5 border border-white/5 shadow-2xl space-y-4">
                <h4 className="font-black text-sm text-white uppercase font-display">
                  The Rap Radar
                </h4>

                <div className="space-y-2 divide-y divide-white/5">
                  {/* Track 1 */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-brand-yellow text-black font-black text-xs font-mono flex items-center justify-center shrink-0">
                        1
                      </div>
                      <div className="w-9 h-9 rounded-lg overflow-hidden bg-neutral-900 shrink-0 border border-white/10">
                        <img
                          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80"
                          alt="Who - Jimin"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-extrabold text-white truncate">Who</div>
                        <div className="text-[10px] text-gray-400 truncate">Jimin</div>
                      </div>
                    </div>
                    <ShoppingCart className="w-4 h-4 text-brand-yellow shrink-0 cursor-pointer" />
                  </div>

                  {/* Track 2 */}
                  <div className="pt-2 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-white/10 text-gray-300 font-black text-xs font-mono flex items-center justify-center shrink-0">
                        2
                      </div>
                      <div className="w-9 h-9 rounded-lg overflow-hidden bg-neutral-900 shrink-0 border border-white/10">
                        <img
                          src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=200&q=80"
                          alt="Timeless - The Weeknd"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-extrabold text-white truncate">Timeless</div>
                        <div className="text-[10px] text-gray-400 truncate">The Weeknd & Playboi Carti</div>
                      </div>
                    </div>
                    <ShoppingCart className="w-4 h-4 text-brand-yellow shrink-0 cursor-pointer" />
                  </div>
                </div>

                {/* FULL TRACKLIST Button */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      confetti({
                        particleCount: 30,
                        spread: 50,
                        origin: { y: 0.7 },
                        colors: ['#F5B800', '#FFFFFF'],
                      });
                      setShowFullHostedTracklist(!showFullHostedTracklist);
                    }}
                    className="px-6 py-2 rounded-full border border-white/30 text-white hover:border-brand-yellow hover:text-brand-yellow text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    FULL TRACKLIST
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "NOW PLAYING" Hero Show Card (Screenshot 2) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 relative">
        {/* Giant Watermark Background "WAVE 98" */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-[0.03] overflow-hidden select-none">
          <span className="font-black text-[24vw] leading-none tracking-tighter text-white uppercase whitespace-nowrap font-display">
            WAVE 98
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight text-center mb-8 sm:mb-10">
          NOW PLAYING
        </h2>

        {/* Large Wide Dark Show Card: The Sound Session */}
        <div className="max-w-4xl mx-auto rounded-[32px] overflow-hidden relative min-h-[300px] sm:min-h-[340px] bg-neutral-900 shadow-2xl border border-white/10 flex items-center justify-between p-6 sm:p-10 group">
          {/* Background Image of Chloe Nguyen */}
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
            alt="The Sound Session with Chloe Nguyen"
            className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

          {/* Stylized Background Watermark "SHOW RADIO" */}
          <div className="absolute top-6 left-8 pointer-events-none opacity-25 select-none">
            <span className="font-black text-7xl sm:text-8xl tracking-tighter text-white uppercase font-display leading-none">
              SHOW
            </span>
            <span className="block font-marker text-brand-yellow text-3xl -mt-2">
              RADIO
            </span>
          </div>

          {/* Content Foreground */}
          <div className="relative z-10 space-y-3 max-w-md">
            <span className="px-3 py-1 rounded-full bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
              ON AIR
            </span>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-display leading-none">
              The Sound Session
            </h3>

            <p className="text-base sm:text-lg font-bold text-gray-200">
              With <span className="text-brand-yellow">Chloe Nguyen</span>
            </p>

            <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-gray-300 pt-2">
              <span className="flex items-center gap-1.5 font-mono">
                <Clock className="w-4 h-4 text-brand-yellow" />
                1:00 am – 7:00 am
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
      </section>

      {/* 5. "COMING NEXT" Grid (Screenshot 3) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 sm:pt-12">
        {/* Header with Yellow Dashed Line across */}
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-brand-yellow text-black text-[11px] font-black uppercase tracking-wider">
            COMING NEXT
          </span>
          <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
        </div>

        {/* 2-Column Show Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: After Hours Mix */}
          <div className="relative rounded-[28px] overflow-hidden bg-neutral-900 shadow-2xl min-h-[260px] sm:min-h-[280px] flex flex-col justify-end p-6 sm:p-8 border border-white/10 group">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="After Hours Mix"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Stylized Background Watermark */}
            <div className="absolute top-4 left-6 pointer-events-none opacity-20 select-none">
              <span className="font-black text-5xl tracking-tighter text-white uppercase font-display leading-none">
                SHOW
              </span>
              <span className="block font-marker text-brand-yellow text-xl -mt-1">
                RADIO
              </span>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 space-y-1.5">
              <span className="px-2.5 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[10px] font-black uppercase tracking-wider inline-block">
                Music
              </span>

              <h4 className="text-xl sm:text-2xl font-black text-white uppercase font-display">
                After Hours Mix
              </h4>

              <div className="flex items-center justify-between text-xs text-gray-400 font-medium pt-1">
                <span className="font-mono">1:00 pm – 3:00 pm</span>
                <button
                  onClick={() => playLiveStream()}
                  className="p-1.5 text-gray-300 hover:text-brand-yellow transition-colors cursor-pointer"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Vibe Check */}
          <div className="relative rounded-[28px] overflow-hidden bg-neutral-900 shadow-2xl min-h-[260px] sm:min-h-[280px] flex flex-col justify-end p-6 sm:p-8 border border-white/10 group">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
              alt="Vibe Check"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Stylized Background Watermark */}
            <div className="absolute top-4 left-6 pointer-events-none opacity-20 select-none">
              <span className="font-black text-5xl tracking-tighter text-white uppercase font-display leading-none">
                SHOW
              </span>
              <span className="block font-marker text-brand-yellow text-xl -mt-1">
                RADIO
              </span>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 space-y-1.5">
              <span className="px-2.5 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[10px] font-black uppercase tracking-wider inline-block">
                Trends
              </span>

              <h4 className="text-xl sm:text-2xl font-black text-white uppercase font-display">
                Vibe Check
              </h4>

              <div className="flex items-center justify-between text-xs text-gray-400 font-medium pt-1">
                <span className="font-mono">4:00 pm – 7:00 pm</span>
                <button
                  onClick={() => playLiveStream()}
                  className="p-1.5 text-gray-300 hover:text-brand-yellow transition-colors cursor-pointer"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
