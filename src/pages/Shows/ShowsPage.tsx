import React, { useState } from 'react';
import { FeaturedScheduleCallout } from '../../components/sections/FeaturedScheduleCallout';
import { WeeklySchedule } from '../../components/sections/WeeklySchedule';
import { SponsorBadges } from '../../components/sections/SponsorBadges';
import { useAudio } from '../../context/AudioContext';
import { Play, Pause, MoreVertical, ShoppingCart, Star, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ASSET_IMAGES } from '../../assets/images';

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
    title: 'Olomon Leto Sessions',
    artist: 'Imole Indigenous Band',
    coverArt: ASSET_IMAGES.shows.olomonLeto,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 'hs-02',
    title: 'To Ba Se Wo Ni Vibe',
    artist: 'Lagos Cultural Voices',
    coverArt: ASSET_IMAGES.shows.toBaSeWoNi,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 'hs-03',
    title: 'Gist Hangout Live Mix',
    artist: 'Imole Sound Studio',
    coverArt: ASSET_IMAGES.shows.gistHangout,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 'hs-04',
    title: 'Reggae Roots Rhythm',
    artist: 'Fadeyi Dub All-Stars',
    coverArt: ASSET_IMAGES.shows.reggaeHour,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
];

export const ShowsPage: React.FC = () => {
  const { isPlaying, currentTrack, playTrack, togglePlay, playLiveStream } = useAudio();
  const [showFullHostedTracklist, setShowFullHostedTracklist] = useState(false);

  return (
    <div className="w-full select-none space-y-8 sm:space-y-12 pb-16">
      {/* 1. Top Paired Cards: Featured Show + Weekly Schedule CTA Box */}
      <FeaturedScheduleCallout />

      {/* 2. Tabbed Weekly Timetable Widget */}
      <WeeklySchedule />

      {/* 3. Sponsor / Station Graphic Badges Row */}
      <SponsorBadges />

      {/* 4. "MEET OUR HOST STAR" + Host Selection & Hosted Chart */}
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
                Meet the charismatic on-air personalities, journalists, and DJs who bring Imole 106.3 FM alive every single day with stories, music, and energy.
              </p>
            </div>

            {/* Dark Portrait Card: Amwoni */}
            <div className="bg-[#141416] rounded-[32px] overflow-hidden relative aspect-[4/3] sm:aspect-[16/11] shadow-2xl border border-white/10 group flex flex-col justify-end p-6 sm:p-8">
              {/* Photo of Amwoni */}
              <img
                src={ASSET_IMAGES.amwoni}
                alt="Amwoni - Imole FM"
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
                  Amwoni
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
                          src={ASSET_IMAGES.shows.gospelLight}
                          alt="Gospel Light"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-extrabold text-white truncate">Gospel Light</div>
                        <div className="text-[10px] text-gray-400 truncate">Imole Choir</div>
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
                          src={ASSET_IMAGES.shows.comedySplash}
                          alt="Comedy Splash"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-extrabold text-white truncate">Comedy Splash</div>
                        <div className="text-[10px] text-gray-400 truncate">Fadeyi Crew</div>
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

      {/* 5. "NOW PLAYING" Hero Show Card */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-4 relative">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight text-center mb-8 sm:mb-10">
          NOW PLAYING
        </h2>

        {/* Large Wide Dark Show Card: The Sound Session */}
        <div className="max-w-4xl mx-auto rounded-[32px] overflow-hidden relative min-h-[300px] sm:min-h-[340px] bg-neutral-900 shadow-2xl border border-white/10 flex items-center justify-between p-6 sm:p-10 group">
          {/* Background Image of Imole Studio */}
          <img
            src={ASSET_IMAGES.studio}
            alt="The Sound Session - Imole 106.3 FM"
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
              With <span className="text-brand-yellow">Amwoni</span>
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

      {/* 6. "COMING NEXT" Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6">
        {/* Header with Yellow Dashed Line across */}
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-brand-yellow text-black text-[11px] font-black uppercase tracking-wider">
            COMING NEXT
          </span>
          <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
        </div>

        {/* 2-Column Show Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Reggae Hour */}
          <div className="relative rounded-[28px] overflow-hidden bg-neutral-900 shadow-2xl min-h-[260px] sm:min-h-[280px] flex flex-col justify-end p-6 sm:p-8 border border-white/10 group">
            {/* Background Image */}
            <img
              src={ASSET_IMAGES.shows.reggaeHour}
              alt="Reggae Hour"
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
                Reggae Hour
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

          {/* Card 2: Gudugbe */}
          <div className="relative rounded-[28px] overflow-hidden bg-neutral-900 shadow-2xl min-h-[260px] sm:min-h-[280px] flex flex-col justify-end p-6 sm:p-8 border border-white/10 group">
            {/* Background Image */}
            <img
              src={ASSET_IMAGES.shows.gudugbe}
              alt="Gudugbe"
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
                Indigenous
              </span>

              <h4 className="text-xl sm:text-2xl font-black text-white uppercase font-display">
                Gudugbe
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
