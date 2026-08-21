import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PODCAST_EPISODES } from '../../data/podcasts';
import { PodcastCard } from '../../components/cards/PodcastCard';
import { Badge } from '../../components/ui/Badge';
import { Play, Pause, Clock, Mic2 } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

export const PodcastDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isPlaying, currentTrack, playPodcast, togglePlay } = useAudio();

  const episode = PODCAST_EPISODES.find((e) => e.slug === slug || e.id === slug) || PODCAST_EPISODES[0];
  const isCurrentPlaying = isPlaying && currentTrack.title === episode.title;
  const relatedEpisodes = PODCAST_EPISODES.filter((e) => e.id !== episode.id).slice(0, 3);

  const handlePlay = () => {
    if (isCurrentPlaying) {
      togglePlay();
    } else {
      playPodcast({
        title: episode.title,
        hostName: episode.hostName,
        audioUrl: episode.audioUrl,
        coverImage: episode.coverImage,
      });
    }
  };

  return (
    <div className="w-full py-8 md:py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-yellow">Home</Link>
          <span>/</span>
          <Link to="/podcasts" className="hover:text-brand-yellow">Podcasts</Link>
          <span>/</span>
          <span className="text-brand-yellow truncate max-w-xs">{episode.title}</span>
        </div>

        {/* Hero Card with Audio Play */}
        <div className="relative rounded-3xl overflow-hidden bg-background-card border border-border p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Cover */}
            <div className="lg:col-span-4 aspect-square rounded-2xl overflow-hidden bg-background-tertiary border-2 border-border shadow-2xl">
              <img
                src={episode.coverImage}
                alt={episode.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Episode Meta & Big Play Control */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="cyan" size="md">
                  {episode.category}
                </Badge>
                <span className="text-xs font-bold text-brand-yellow uppercase tracking-wider">
                  {episode.podcastTitle} • Episode #{episode.episodeNumber}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                {episode.title}
              </h1>

              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Mic2 className="w-4 h-4 text-brand-yellow" />
                  Hosted by {episode.hostName}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {episode.duration}
                </span>
                <span>•</span>
                <span>{episode.publishedAt}</span>
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                {episode.description}
              </p>

              {/* Action */}
              <div className="pt-4 border-t border-border flex items-center gap-4">
                <button
                  onClick={handlePlay}
                  className="px-8 py-4 rounded-2xl bg-brand-yellow text-black font-black uppercase text-xs sm:text-sm tracking-wider shadow-glow-yellow hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                >
                  {isCurrentPlaying ? (
                    <>
                      <Pause className="w-5 h-5 fill-current" />
                      <span>Pause Episode</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                      <span>Play Full Episode ({episode.duration})</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Episode Show Notes */}
        <div className="p-8 rounded-3xl bg-background-card border border-border space-y-4">
          <h3 className="text-xl font-extrabold text-white border-l-2 border-brand-yellow pl-3">
            Episode Show Notes & Highlights
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            In this exclusive broadcast episode, we sit down for an in-depth conversation exploring modern electronic music arrangements, tour logistics, synthesizer sound design, and life behind the DJ booth.
          </p>
          <div className="pt-4 flex flex-wrap gap-2">
            {episode.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-background-secondary border border-border text-xs text-gray-300 font-bold"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* More Episodes */}
        <div className="pt-8 border-t border-border">
          <h3 className="text-2xl font-black text-white mb-6">
            More Episodes to Stream
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedEpisodes.map((rel) => (
              <PodcastCard key={rel.id} episode={rel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
