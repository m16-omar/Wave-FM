import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRESENTERS_DATA, PresenterItem } from '../../data/hosts';
import { ARTICLES_DATA } from '../../data/articles';
import { ArticleCard } from '../../components/cards/ArticleCard';
import { SocialLinks } from '../../components/ui/SocialLinks';
import { useAudio } from '../../context/AudioContext';
import {
  Star,
  Clock,
  Play,
  Pause,
  ShoppingCart,
  Radio,
  Share2,
} from 'lucide-react';
import { clsx } from 'clsx';
import confetti from 'canvas-confetti';

interface HostTrack {
  id: string;
  rank: number;
  title: string;
  artist: string;
  coverArt: string;
  audioUrl: string;
}

const MIA_TRACKS: HostTrack[] = [
  {
    id: 'mt-01',
    rank: 1,
    title: 'Starry Night (Club Mix)',
    artist: 'Peggy Gou',
    coverArt: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 'mt-02',
    rank: 2,
    title: 'Espresso',
    artist: 'Sabrina Carpenter',
    coverArt: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 'mt-03',
    rank: 3,
    title: 'Not Like Us',
    artist: 'Kendrick Lamar',
    coverArt: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 'mt-04',
    rank: 4,
    title: 'Who [MUSE]',
    artist: 'Jimin',
    coverArt: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
  {
    id: 'mt-05',
    rank: 5,
    title: 'Timeless',
    artist: 'The Weeknd & Playboi Carti',
    coverArt: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
];

export const HostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isPlaying, currentTrack, playTrack, togglePlay, playLiveStream } = useAudio();

  const host: PresenterItem =
    PRESENTERS_DATA.find((p) => p.slug === slug || p.id === slug) ||
    PRESENTERS_DATA[0];

  const otherPresenters = PRESENTERS_DATA.filter((p) => p.id !== host.id);
  const hostArticles = ARTICLES_DATA.slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#F5B800', '#FFFFFF', '#000000'],
      });
    }
  };

  return (
    <div className="w-full select-none space-y-12 sm:space-y-16 pb-16">
      {/* 1. Hero Page Header with Repeating Watermark Script */}
      <div className="w-full bg-[#0C0D10] relative overflow-hidden border-b border-white/5 pt-8 pb-12 sm:pt-12 sm:pb-16">
        {/* Background Repeating Cursive Script Watermark */}
        <div className="absolute inset-0 flex items-center justify-around pointer-events-none opacity-[0.05] overflow-hidden select-none">
          <span className="font-script text-8xl sm:text-[11rem] text-white rotate-[-12deg] whitespace-nowrap">
            radio host
          </span>
          <span className="font-script text-8xl sm:text-[11rem] text-white rotate-[-12deg] whitespace-nowrap hidden sm:inline">
            {host.name}
          </span>
          <span className="font-script text-8xl sm:text-[11rem] text-white rotate-[-12deg] whitespace-nowrap hidden md:inline">
            radio host
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
            <Link to="/" className="hover:text-brand-yellow transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/hosts" className="hover:text-brand-yellow transition-colors">
              Hosts
            </Link>
            <span>/</span>
            <span className="text-brand-yellow font-bold">{host.name}</span>
          </div>

          {/* 2-Column Hero Card: Bio & Details (Left) + Portrait Photo (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (7 Cols): Host Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <div className="inline-block px-3 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[10px] font-black uppercase tracking-wider bg-black/40">
                  {host.roleTag}
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase font-display tracking-tight leading-none">
                  {host.name}
                </h1>

                {/* 5 Yellow Rating Stars */}
                <div className="flex items-center gap-1.5 text-brand-yellow pt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-mono font-bold text-gray-400 ml-2">
                    5.0 / 5.0 (2.4k Listener Votes)
                  </span>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
                <p>{host.fullBio}</p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Broadcasting live daily on WAVE 98 FM across digital airwaves and global web stream.
                </p>
              </div>

              {/* Primary Show Highlight Badge */}
              <div className="p-4 rounded-2xl bg-[#141416] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow shrink-0">
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400 font-bold block">
                      Primary Radio Show
                    </span>
                    <span className="text-sm font-extrabold text-white">
                      {host.showTitle}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold text-brand-yellow bg-black/50 px-3 py-1.5 rounded-lg border border-brand-yellow/20 self-start sm:self-auto">
                  {host.showSchedule}
                </span>
              </div>

              {/* Social Media Links & Share */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <SocialLinks size="md" variant="solid" />

                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-brand-yellow hover:text-black text-gray-300 transition-all border border-white/10 cursor-pointer ml-auto"
                  title="Share DJ Profile"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column (5 Cols): Portrait Photo Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#141416] rounded-[32px] overflow-hidden relative aspect-[4/5] shadow-2xl border border-white/10 group flex flex-col justify-end p-6 sm:p-8">
                {/* Host Image */}
                <img
                  src={host.photo}
                  alt={host.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

                {/* Floating Top-Right Star Badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
                  <Star className="w-4 h-4 text-brand-yellow fill-current" />
                </div>

                {/* Background Gold "SHOW RADIO" Watermark */}
                <div className="absolute top-6 left-6 pointer-events-none opacity-20 select-none">
                  <span className="font-black text-6xl tracking-tighter text-white uppercase font-display leading-none">
                    SHOW
                  </span>
                  <span className="block font-marker text-brand-yellow text-2xl -mt-2">
                    RADIO
                  </span>
                </div>

                {/* Foreground Card Info */}
                <div className="relative z-10 space-y-1">
                  <span className="px-2.5 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[9px] font-black uppercase tracking-wider inline-block">
                    {host.roleTag}
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase font-display">
                    {host.name}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. "HOSTED SHOWS" Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header with Yellow Dashed Line */}
        <div className="flex items-center gap-2 mb-6">
          <span className="px-2.5 py-0.5 rounded bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
            HOSTED SHOWS
          </span>
          <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
        </div>

        {/* Featured Show Card */}
        <div className="rounded-[32px] overflow-hidden relative min-h-[260px] sm:min-h-[300px] bg-neutral-900 shadow-2xl border border-white/10 flex items-center justify-between p-6 sm:p-10 group">
          <img
            src={host.bannerPhoto}
            alt={host.showTitle}
            className="absolute inset-0 w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />

          {/* Foreground Show Details */}
          <div className="relative z-10 space-y-3 max-w-md">
            <span className="px-3 py-1 rounded-full bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
              ON AIR SHOW
            </span>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase font-display leading-none">
              {host.showTitle}
            </h3>

            <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-gray-300 pt-2">
              <span className="flex items-center gap-1.5 font-mono">
                <Clock className="w-4 h-4 text-brand-yellow" />
                {host.showSchedule}
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

      {/* 3. "OUR HOST SELECTION" (Playable Audio Tracklist) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header with Yellow Dashed Line */}
        <div className="flex items-center gap-2 mb-6">
          <span className="px-2.5 py-0.5 rounded bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
            OUR HOST SELECTION
          </span>
          <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
        </div>

        {/* Dark Tracklist Container */}
        <div className="bg-[#141416] rounded-3xl p-6 sm:p-8 border border-white/5 shadow-2xl space-y-4">
          <div className="divide-y divide-white/5">
            {MIA_TRACKS.map((track) => {
              const isThisPlaying =
                isPlaying && currentTrack.title === track.title;

              return (
                <div
                  key={track.id}
                  onClick={() => {
                    if (isThisPlaying) {
                      togglePlay();
                    } else {
                      playTrack({
                        id: track.id,
                        title: track.title,
                        artist: track.artist,
                        album: `${host.name} Selection`,
                        coverArt: track.coverArt,
                        duration: 215,
                        previewAudioUrl: track.audioUrl,
                        votes: 1800,
                        genre: 'Urban / Dance',
                      });
                    }
                  }}
                  className="py-3.5 flex items-center justify-between gap-3 hover:bg-white/[0.03] px-3 rounded-2xl transition-colors cursor-pointer group"
                >
                  {/* Left: Rank Badge + Album Art + Title & Artist */}
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div
                      className={clsx(
                        'w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs font-mono shrink-0 transition-colors',
                        track.rank === 1
                          ? 'bg-brand-yellow text-black'
                          : 'bg-white/10 text-gray-300 group-hover:bg-brand-yellow group-hover:text-black'
                      )}
                    >
                      {track.rank}
                    </div>

                    <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-neutral-900 shrink-0 border border-white/10">
                      <img
                        src={track.coverArt}
                        alt={track.title}
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

                    <div className="min-w-0">
                      <h4 className="font-extrabold text-xs sm:text-sm text-white group-hover:text-brand-yellow transition-colors truncate">
                        {track.title}
                      </h4>
                      <p className="text-[11px] text-gray-400 font-medium truncate mt-0.5">
                        {track.artist}
                      </p>
                    </div>
                  </div>

                  {/* Right: Cart / Buy Icon */}
                  <div className="shrink-0 flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://spotify.com', '_blank');
                      }}
                      className="p-2 text-gray-400 hover:text-brand-yellow transition-colors cursor-pointer"
                      title="Buy / Stream Record"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. "LATEST STORIES" by Host */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header with Yellow Dashed Line */}
        <div className="flex items-center gap-2 mb-6">
          <span className="px-2.5 py-0.5 rounded bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
            LATEST STORIES
          </span>
          <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {hostArticles.map((art) => (
            <ArticleCard key={art.id} article={art} variant="grid" />
          ))}
        </div>
      </section>

      {/* 5. "MEET OTHER PRESENTERS" Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header with Yellow Dashed Line */}
        <div className="flex items-center gap-2 mb-6">
          <span className="px-2.5 py-0.5 rounded bg-brand-yellow text-black text-[10px] font-black uppercase tracking-wider">
            MEET THE TEAM
          </span>
          <div className="flex-1 border-b border-dashed border-brand-yellow/60" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {otherPresenters.map((p) => (
            <Link
              key={p.id}
              to={`/hosts/${p.slug}`}
              className="bg-[#141416] rounded-2xl overflow-hidden relative aspect-[4/5] shadow-xl border border-white/10 group flex flex-col justify-end p-4 hover:border-brand-yellow/50 transition-all hover:scale-102"
            >
              <img
                src={p.photo}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="relative z-10 text-center space-y-1">
                <span className="px-2 py-0.5 rounded border border-brand-yellow text-brand-yellow text-[8px] font-black uppercase tracking-wider inline-block bg-black/40">
                  {p.roleTag}
                </span>
                <h4 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-brand-yellow transition-colors truncate">
                  {p.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
