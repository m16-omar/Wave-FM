import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAudio } from '../../context/AudioContext';
import { Radio, Mic2, Sparkles, Send, CheckCircle2, Headphones, Bell, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ASSET_IMAGES } from '../../assets/images';

export const PodcastsPage: React.FC = () => {
  const { playLiveStream, isPlaying } = useAudio();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#F5B800', '#532688', '#FFFFFF', '#00E5FF'],
    });
  };

  return (
    <div className="w-full select-none overflow-hidden pb-16 font-sans">
      {/* ========================================================================= */}
      {/* 1. COMING SOON HERO SPOTLIGHT                                             */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-[#532688]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-brand-yellow/40 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
            <span className="text-[11px] font-black tracking-widest text-brand-yellow uppercase font-mono">
              IMOLE 106.3 FM DIGITAL AUDIO
            </span>
          </div>

          {/* Main Headline */}
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-display tracking-tight text-white leading-[1.05]">
              PODCASTS
              <br />
              <span className="text-brand-yellow">COMING SOON!</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto">
            We are currently in the broadcast studio recording exclusive on-demand audio series, cultural deep-dives, investigative features, and candid conversations with your favorite Imole 106.3 FM on-air hosts.
          </p>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-4">
            <div className="bg-[#0F204E]/80 backdrop-blur-md rounded-2xl p-5 border border-blue-900/40 shadow-xl space-y-2 group hover:border-brand-yellow/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow">
                <Mic2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-white uppercase font-display">Exclusive Host Shows</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Uncut, long-form discussions and backstage stories from Lagos's finest presenters.
              </p>
            </div>

            <div className="bg-[#0F204E]/80 backdrop-blur-md rounded-2xl p-5 border border-blue-900/40 shadow-xl space-y-2 group hover:border-brand-yellow/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-white uppercase font-display">On-Demand HD Audio</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Stream full episodes anytime, anywhere on your smartphone, tablet, or desktop.
              </p>
            </div>

            <div className="bg-[#0F204E]/80 backdrop-blur-md rounded-2xl p-5 border border-blue-900/40 shadow-xl space-y-2 group hover:border-brand-yellow/50 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-brand-yellow/15 flex items-center justify-center text-brand-yellow">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-white uppercase font-display">Indigenous Culture</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Rich stories highlighting Yoruba heritage, contemporary Lagos lifestyle, and trending urban affairs.
              </p>
            </div>
          </div>

          {/* Notify Me Form Box */}
          <div className="pt-6 max-w-lg mx-auto">
            {isSubscribed ? (
              <div className="bg-[#0F204E] border border-brand-yellow/40 rounded-2xl p-6 shadow-2xl space-y-2 text-center">
                <CheckCircle2 className="w-10 h-10 text-brand-yellow mx-auto" />
                <h4 className="text-base font-black text-white uppercase font-display">You're on the VIP list!</h4>
                <p className="text-xs text-gray-400">
                  We'll send you an exclusive early-access notification as soon as our first podcast episode drops.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleNotifySubmit}
                className="bg-[#0F204E]/90 border border-blue-900/40 rounded-2xl p-2 sm:p-2.5 shadow-2xl flex flex-col sm:flex-row items-center gap-2"
              >
                <div className="flex items-center gap-2 px-3 w-full sm:flex-1">
                  <Bell className="w-4 h-4 text-brand-yellow shrink-0" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to get notified..."
                    className="w-full bg-transparent text-white text-xs sm:text-sm placeholder-gray-500 focus:outline-none py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-yellow text-black hover:bg-brand-yellowHover active:scale-95 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Notify Me</span>
                </button>
              </form>
            )}
          </div>

          {/* Quick Action Buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => playLiveStream()}
              className="px-8 py-3.5 rounded-full bg-brand-yellow hover:bg-brand-yellowHover active:scale-95 text-black font-black text-xs uppercase tracking-wider shadow-glow-yellow transition-all flex items-center gap-2 cursor-pointer"
            >
              <Radio className="w-4 h-4" />
              <span>{isPlaying ? 'Listening Live Now' : 'Listen Live On Air'}</span>
            </button>

            <Link
              to="/shows"
              className="px-8 py-3.5 rounded-full bg-neutral-900 border border-white/10 hover:border-brand-yellow/50 active:scale-95 text-white font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Radio Shows</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PHOTO BANNER SHOWCASE                                                  */}
      {/* ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl aspect-[16/6] min-h-[220px]">
          <img
            src={ASSET_IMAGES.studio}
            alt="Imole Broadcast Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/80" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 max-w-xl space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-yellow font-mono">
              BROADCASTING 24/7 ACROSS LAGOS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display">
              Tune into Imole 106.3 FM
            </h2>
            <p className="text-xs text-gray-300">
              Catch our live interactive shows, news bulletins, and high-energy music rotations while our podcast series are being recorded.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

/*
===================================================================================
PREVIOUS PODCASTS PAGE DESIGN (PRESERVED IN COMMENTS FOR FUTURE ACTIVATION)
===================================================================================

import { ALL_PODCASTS_DATA, PodcastItem } from '../../data/podcasts';
import { Play, Pause, MoreVertical, Calendar, Eye, Share2 } from 'lucide-react';
import { clsx } from 'clsx';

export const PreviousPodcastsPageDesign: React.FC = () => {
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
        artist: 'Imole 106.3 FM Podcast',
        album: podcast.category,
        coverArt: ASSET_IMAGES.shows.gospelLight,
        duration: 2400,
        previewAudioUrl: podcast.audioUrl,
        votes: 1200,
        genre: podcast.category,
      });
    }
  };

  return (
    <div className="w-full select-none space-y-12 sm:space-y-16 pb-16 font-sans">
      <div className="w-full bg-[#060D24] relative overflow-hidden border-b border-blue-900/30 pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight leading-[1.05]">
                PODCASTS
                <br />
                EPISODES
              </h1>

              <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed max-w-md">
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

            <div className="lg:col-span-5">
              <div className="rounded-[28px] overflow-hidden bg-[#0F204E] p-2 aspect-[16/10] sm:aspect-[1.8/1] shadow-2xl flex items-center justify-center relative group border border-blue-900/40">
                <img
                  src={ASSET_IMAGES.hero3}
                  alt="Podcaster with Microphone"
                  className="w-full h-full object-cover rounded-[22px] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          <div className="md:col-span-6 bg-white rounded-[32px] p-8 sm:p-10 text-black shadow-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black uppercase font-display leading-[1.05]">
                FEATURED
                <br />
                PODCAST
              </h2>

              <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            <div
              onClick={() => handlePlayPodcast(ALL_PODCASTS_DATA[0])}
              className="bg-[#0F204E] rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 text-white shadow-lg cursor-pointer hover:bg-[#162E6E] transition-colors group mt-4 border border-blue-900/40"
            >
              <div className="w-10 h-10 rounded-xl bg-[#060D24] border border-blue-900/40 flex flex-col items-center justify-center shrink-0 p-1">
                <span className="text-[11px] font-black text-brand-yellow font-display leading-none">POD</span>
                <span className="text-[9px] font-black text-white font-display leading-none mt-0.5">CAST</span>
              </div>

              <span className="font-black text-sm text-white group-hover:text-brand-yellow transition-colors font-display">
                Beat Breakdown
              </span>
            </div>
          </div>

          <div
            onClick={() => handlePlayPodcast(ALL_PODCASTS_DATA[0])}
            className="md:col-span-6 bg-[#0F204E] rounded-[32px] overflow-hidden relative aspect-[16/10] sm:aspect-auto shadow-2xl border border-blue-900/40 p-6 sm:p-8 flex flex-col justify-between group cursor-pointer min-h-[260px]"
          >
            <img
              src={ASSET_IMAGES.studio}
              alt="Behind the Lens Podcast Studio"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060D24]/90 via-transparent to-[#060D24]/40" />

            <div className="relative z-10">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">
                Commercial
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-brand-yellow to-amber-300 text-black flex items-center justify-center shadow-glow-yellow group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 text-black" />
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display tracking-tight group-hover:text-brand-yellow transition-colors leading-none">
                Behind the Lens
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="px-2.5 py-0.5 rounded bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
            RELATED PODCASTS
          </span>
          <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ALL_PODCASTS_DATA.slice(1, 4).map((pod) => (
            <div
              key={pod.id}
              onClick={() => handlePlayPodcast(pod)}
              className="bg-[#0F204E] rounded-[28px] overflow-hidden border border-blue-900/40 shadow-2xl p-5 sm:p-6 flex flex-col justify-end group relative aspect-[4/5] cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#0B173D] flex flex-col items-center justify-center p-6 select-none">
                <div className="text-center relative">
                  <span className="font-black text-6xl sm:text-7xl text-brand-yellow font-display block leading-none tracking-tighter">
                    POD
                  </span>
                  <span className="font-black text-6xl sm:text-7xl text-brand-yellow font-display block leading-none tracking-tighter mt-2">
                    CAST
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#060D24]/90 via-[#060D24]/30 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <h4 className="text-base sm:text-lg font-black text-white uppercase font-display group-hover:text-brand-yellow transition-colors leading-snug">
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

      <section id="all-podcasts" className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-brand-yellow text-black rounded-[32px] p-6 sm:p-10 shadow-2xl space-y-6 sm:space-y-8 border border-brand-yellowHover">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-display tracking-tight text-center text-black leading-none">
            ALL PODCASTS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {displayedPodcasts.map((podcast) => {
              const isThisPlaying = isPlaying && currentTrack.title === podcast.title;

              return (
                <div
                  key={podcast.id}
                  onClick={() => handlePlayPodcast(podcast)}
                  className="bg-[#0F204E] rounded-2xl overflow-hidden p-3.5 border border-blue-900/40 text-white shadow-xl space-y-3 group hover:scale-[1.03] transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-square w-full rounded-xl bg-[#060D24] overflow-hidden flex flex-col items-center justify-center p-4 select-none border border-blue-900/30">
                    <div className="text-center relative">
                      <span className="font-black text-4xl text-brand-yellow font-display block leading-none">
                        POD
                      </span>
                      <span className="font-black text-4xl text-brand-yellow font-display block leading-none mt-1">
                        CAST
                      </span>
                    </div>

                    <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white shadow-md group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                      {isThisPlaying ? (
                        <Pause className="w-3.5 h-3.5 fill-current" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div>
                      <span className="px-2 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[9px] font-black uppercase tracking-wider inline-block">
                        {podcast.category}
                      </span>
                    </div>

                    <h4 className="font-black text-xs sm:text-sm text-white group-hover:text-brand-yellow transition-colors line-clamp-1 font-display leading-tight">
                      {podcast.title}
                    </h4>

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
                className="px-8 py-2.5 rounded-full border border-black text-black hover:bg-black hover:text-white font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md"
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
*/
