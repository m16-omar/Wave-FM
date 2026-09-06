import React, { useState } from 'react';
import { FeaturedScheduleCallout } from '../../components/sections/FeaturedScheduleCallout';
import { Schedule } from '../../components/radio/Schedule';
import { SponsorBadges } from '../../components/sections/SponsorBadges';
import { useAudio } from '../../context/AudioContext';
import { getCurrentLiveShow, getNextLiveShow } from '../../data/schedule';
import { Play, Pause, MoreVertical, ShoppingCart, Star, Clock, Calendar } from 'lucide-react';
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
  const currentLive = getCurrentLiveShow();
  const nextLive = getNextLiveShow();

  return (
    <div className="w-full select-none space-y-8 sm:space-y-12 pb-16">
      {/* 1. Top Paired Cards: Featured Show + Weekly Schedule CTA Box */}
      <FeaturedScheduleCallout />

      {/* 2. Broadcast Program Guide / Weekly Radio Schedule */}
      <section id="schedule" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        {/* Header */}
        <div className="border-b border-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-brand-yellow font-extrabold uppercase tracking-widest mb-2">
              <Calendar className="w-4 h-4" />
              <span>Broadcast Program Guide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display uppercase">
              Weekly Radio Schedule
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-2 max-w-xl">
              All times are broadcast in West Africa Time (WAT). Tune in live on 106.3 FM or our high-definition digital streams.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-brand-yellow font-bold bg-brand-yellow/10 px-3 py-1.5 rounded-lg border border-brand-yellow/20 shadow-glow-yellow/10">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
              Live Feed Active
            </span>
          </div>
        </div>

        {/* Schedule Component */}
        <div className="bg-background-card/50 rounded-3xl p-4 sm:p-8 border border-white/5 shadow-2xl">
          <Schedule />
        </div>
      </section>

      {/* 3. Sponsor / Station Graphic Badges Row (Commented out) */}
      {/* <SponsorBadges /> */}

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
                Meet the charismatic on-air personalities, journalists, and cultural voices who bring Imole 106.3 FM alive every single day with stories, music, and energy.
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
                  Lead Presenter
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
                            genre: 'Urban / Indigenous',
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
                  STATION FAVORITES
                </span>
                <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
              </div>

              <div className="bg-[#141416] rounded-2xl p-4 sm:p-5 border border-white/5 shadow-2xl space-y-4">
                <h4 className="font-black text-sm text-white uppercase font-display">
                  Imole Top Countdown
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
                        <div className="text-xs font-extrabold text-white truncate">Gospel Light Praises</div>
                        <div className="text-[10px] text-gray-400 truncate">Imole Worship Team</div>
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
                        <div className="text-xs font-extrabold text-white truncate">Comedy Splash Jams</div>
                        <div className="text-[10px] text-gray-400 truncate">Imole Comedy Crew</div>
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
                    FULL COUNTDOWN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "NOW BROADCASTING" Dynamic Show Card */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-4 relative">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight text-center mb-8 sm:mb-10">
          NOW BROADCASTING
        </h2>

        {/* Large Wide Dark Show Card: Dynamic Current Live Show */}
        <div className="max-w-4xl mx-auto rounded-[32px] overflow-hidden relative min-h-[300px] sm:min-h-[340px] bg-neutral-900 shadow-2xl border border-white/10 flex items-center justify-between p-6 sm:p-10 group">
          {/* Background Image of Show Artwork */}
          <img
            src={currentLive.image}
            alt={`${currentLive.showTitle} - Imole 106.3 FM`}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />

          {/* Content Foreground */}
          <div className="relative z-10 space-y-3 max-w-md">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
                ON AIR NOW
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                {currentLive.category}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-display leading-none drop-shadow-md">
              {currentLive.showTitle}
            </h3>

            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full overflow-hidden border border-brand-yellow/60 shrink-0 bg-neutral-800 shadow-md">
                <img
                  src={currentLive.hostAvatar}
                  alt={currentLive.hostName}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm sm:text-base font-bold text-gray-200 drop-shadow">
                With <span className="text-brand-yellow">{currentLive.hostName}</span>
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-gray-200 pt-2">
              <span className="flex items-center gap-1.5 font-mono bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                <Clock className="w-4 h-4 text-brand-yellow" />
                {currentLive.timeSlot}
              </span>

              <button
                onClick={() => playLiveStream()}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow hover:bg-brand-yellowHover text-black text-xs font-black uppercase tracking-wider cursor-pointer ml-auto shadow-md"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
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
          {/* Card 1: Next Show */}
          <div className="relative rounded-[28px] overflow-hidden bg-neutral-900 shadow-2xl min-h-[260px] sm:min-h-[280px] flex flex-col justify-end p-6 sm:p-8 border border-white/10 group">
            {/* Background Image */}
            <img
              src={nextLive.image}
              alt={nextLive.showTitle}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />

            {/* Foreground Content */}
            <div className="relative z-10 space-y-1.5">
              <span className="px-2.5 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[10px] font-black uppercase tracking-wider inline-block bg-black/40 backdrop-blur-md">
                {nextLive.category}
              </span>

              <h4 className="text-xl sm:text-2xl font-black text-white uppercase font-display drop-shadow-md">
                {nextLive.showTitle}
              </h4>

              <div className="flex items-center justify-between text-xs text-gray-300 font-medium pt-1">
                <span className="font-mono bg-black/40 px-2 py-0.5 rounded border border-white/10">{nextLive.timeSlot}</span>
                <button
                  onClick={() => playLiveStream()}
                  className="p-1.5 text-gray-300 hover:text-brand-yellow transition-colors cursor-pointer"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Featured Show (Gist Hangout / Gudugbe) */}
          <div className="relative rounded-[28px] overflow-hidden bg-neutral-900 shadow-2xl min-h-[260px] sm:min-h-[280px] flex flex-col justify-end p-6 sm:p-8 border border-white/10 group">
            {/* Background Image */}
            <img
              src={ASSET_IMAGES.shows.gudugbe}
              alt="Gudugbe"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />

            {/* Foreground Content */}
            <div className="relative z-10 space-y-1.5">
              <span className="px-2.5 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[10px] font-black uppercase tracking-wider inline-block">
                Street Talk & Drive
              </span>

              <h4 className="text-xl sm:text-2xl font-black text-white uppercase font-display">
                Gudugbe
              </h4>

              <div className="flex items-center justify-between text-xs text-gray-400 font-medium pt-1">
                <span className="font-mono">07:00 pm – 09:30 pm</span>
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
