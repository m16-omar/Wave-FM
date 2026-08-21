import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SHOWS_DATA } from '../../data/shows';
import { PODCAST_EPISODES } from '../../data/podcasts';
import { ShowCard } from '../../components/cards/ShowCard';
import { PodcastCard } from '../../components/cards/PodcastCard';
import { Badge } from '../../components/ui/Badge';
import { Clock, Play, Music } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

export const ShowDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isPlaying, playLiveStream, togglePlay } = useAudio();

  const show = SHOWS_DATA.find((s) => s.slug === slug || s.id === slug) || SHOWS_DATA[0];
  const otherShows = SHOWS_DATA.filter((s) => s.id !== show.id).slice(0, 3);

  return (
    <div className="w-full py-8 md:py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-yellow">Home</Link>
          <span>/</span>
          <Link to="/shows" className="hover:text-brand-yellow">Shows</Link>
          <span>/</span>
          <span className="text-brand-yellow">{show.title}</span>
        </div>

        {/* Hero Show Header */}
        <div className="relative rounded-3xl overflow-hidden bg-background-card border border-border p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="absolute inset-0 -z-10">
            <img
              src={show.bannerImage}
              alt={show.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-card via-background-card/90 to-background-card/40" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Show Artwork */}
            <div className="lg:col-span-4 aspect-square rounded-2xl overflow-hidden bg-background-tertiary border-2 border-border shadow-2xl">
              <img
                src={show.image}
                alt={show.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Show Info & Broadcast Callout */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                {show.isLive ? (
                  <Badge variant="live" size="md" dot>
                    ON AIR NOW
                  </Badge>
                ) : (
                  <Badge variant="yellow" size="md">
                    {show.category}
                  </Badge>
                )}
                <span className="text-xs font-bold text-gray-300 flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-border">
                  <Clock className="w-3.5 h-3.5 text-brand-yellow" />
                  {show.scheduleSummary}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {show.title}
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                {show.longDescription}
              </p>

              {/* Host link & Listen CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                <button
                  onClick={() => (isPlaying ? togglePlay() : playLiveStream())}
                  className="px-6 py-3.5 rounded-xl bg-brand-yellow text-black font-extrabold text-xs uppercase tracking-wider shadow-glow-yellow hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{show.isLive && isPlaying ? 'Pause Live Audio' : 'Listen Live'}</span>
                </button>

                <Link
                  to={`/hosts/${show.hostId}`}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-border transition-colors"
                >
                  <img
                    src={show.hostAvatar}
                    alt={show.hostName}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <span className="text-[10px] text-gray-400 block uppercase">Presented by</span>
                    <span className="text-xs font-bold text-white">{show.hostName}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Show Recent Tracklist & Episodes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Recent Tracklist */}
          {show.recentTracklist && (
            <div className="lg:col-span-5 p-6 rounded-2xl bg-background-card border border-border space-y-4">
              <div className="flex items-center gap-2 text-brand-yellow font-extrabold text-xs uppercase tracking-wider">
                <Music className="w-4 h-4" />
                <span>Recent Show Playlist</span>
              </div>
              <h3 className="text-xl font-extrabold text-white">
                Played on the Last Broadcast
              </h3>
              <div className="space-y-2.5 pt-2">
                {show.recentTracklist.map((track, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-background-secondary border border-border/80"
                  >
                    <div>
                      <h5 className="text-xs font-bold text-white">{track.title}</h5>
                      <p className="text-[11px] text-gray-400">{track.artist}</p>
                    </div>
                    <span className="text-[10px] font-mono text-gray-500">{track.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right: Show Episodes / Podcasts */}
          <div className={show.recentTracklist ? 'lg:col-span-7' : 'lg:col-span-12'}>
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-white border-l-2 border-brand-yellow pl-3">
                Catch Up On Podcasts
              </h3>
              <div className="space-y-3">
                {PODCAST_EPISODES.slice(0, 3).map((ep) => (
                  <PodcastCard key={ep.id} episode={ep} variant="list" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Shows You Might Like */}
        <div className="pt-8 border-t border-border">
          <h3 className="text-2xl font-black text-white mb-6">
            Other Radio Shows
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherShows.map((other) => (
              <ShowCard key={other.id} show={other} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
