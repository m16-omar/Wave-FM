import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, Clock, Mic2 } from 'lucide-react';
import type { PodcastEpisode } from '../../types/podcast';
import { Badge } from '../ui/Badge';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

interface PodcastCardProps {
  episode: PodcastEpisode;
  className?: string;
  variant?: 'grid' | 'list';
}

export const PodcastCard: React.FC<PodcastCardProps> = ({
  episode,
  className,
  variant = 'grid',
}) => {
  const { isPlaying, currentTrack, playPodcast, togglePlay } = useAudio();
  const isCurrentPlaying = isPlaying && currentTrack.title === episode.title;

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
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

  if (variant === 'list') {
    return (
      <div
        className={clsx(
          'group flex items-center justify-between gap-4 p-4 rounded-xl bg-background-card border border-border hover:border-brand-yellow/40 transition-all duration-200 shadow-sm',
          className
        )}
      >
        <div className="flex items-center gap-4 min-w-0">
          <button
            onClick={handlePlayClick}
            className={clsx(
              'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all',
              isCurrentPlaying
                ? 'bg-brand-yellow text-black shadow-glow-yellow'
                : 'bg-background-tertiary text-white group-hover:bg-brand-yellow group-hover:text-black'
            )}
            aria-label="Play Episode"
          >
            {isCurrentPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs text-brand-yellow font-bold uppercase tracking-wider mb-1">
              <span>{episode.podcastTitle}</span>
              <span>•</span>
              <span>Ep. {episode.episodeNumber}</span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-yellow transition-colors truncate">
              <Link to={`/podcasts/${episode.slug}`}>{episode.title}</Link>
            </h4>
            <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {episode.duration}
              </span>
              <span>•</span>
              <span>{episode.publishedAt}</span>
            </div>
          </div>
        </div>

        <Link
          to={`/podcasts/${episode.slug}`}
          className="text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white shrink-0 hidden sm:block transition-colors"
        >
          Details
        </Link>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'group bg-background-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-yellow/40 hover:-translate-y-1 shadow-card flex flex-col',
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-background-tertiary">
        <Link to={`/podcasts/${episode.slug}`}>
          <img
            src={episode.coverImage}
            alt={episode.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        <div className="absolute top-3 left-3 z-10">
          <Badge variant="cyan" size="sm">
            {episode.category}
          </Badge>
        </div>

        <button
          onClick={handlePlayClick}
          className={clsx(
            'absolute bottom-3.5 right-3.5 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-xl',
            isCurrentPlaying
              ? 'bg-brand-yellow text-black scale-110 shadow-glow-yellow'
              : 'bg-black/70 hover:bg-brand-yellow hover:text-black text-white backdrop-blur-md hover:scale-110'
          )}
          aria-label="Play Episode"
        >
          {isCurrentPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
        </button>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
            <span className="font-bold text-brand-yellow uppercase tracking-wider">
              {episode.podcastTitle}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {episode.duration}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-yellow transition-colors leading-snug mb-2 line-clamp-2">
            <Link to={`/podcasts/${episode.slug}`}>
              {episode.title}
            </Link>
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
            {episode.description}
          </p>
        </div>

        <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <Mic2 className="w-3.5 h-3.5 text-brand-yellow" />
            <span className="truncate max-w-[120px]">{episode.hostName}</span>
          </span>
          <span>{episode.publishedAt}</span>
        </div>
      </div>
    </div>
  );
};
