import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Play, ArrowRight } from 'lucide-react';
import type { RadioShow } from '../../types/show';
import { Badge } from '../ui/Badge';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

interface ShowCardProps {
  show: RadioShow;
  className?: string;
  variant?: 'grid' | 'compact' | 'hero';
}

export const ShowCard: React.FC<ShowCardProps> = ({
  show,
  className,
}) => {
  const { playLiveStream } = useAudio();

  return (
    <div
      className={clsx(
        'group relative bg-background-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-yellow/50 hover:-translate-y-1 shadow-card flex flex-col',
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-background-tertiary">
        <Link to={`/shows/${show.slug}`}>
          <img
            src={show.image}
            alt={show.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          {show.isLive ? (
            <Badge variant="live" size="sm" dot>
              ON AIR
            </Badge>
          ) : (
            <Badge variant="yellow" size="sm">
              {show.category}
            </Badge>
          )}
        </div>

        {show.isLive && (
          <button
            onClick={() => playLiveStream()}
            className="absolute bottom-3 right-3 z-10 p-3 rounded-full bg-brand-yellow text-black shadow-glow-yellow hover:scale-110 active:scale-95 transition-all"
            aria-label="Listen Live"
          >
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </button>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-brand-yellow font-bold uppercase tracking-wider mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>{show.scheduleSummary}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-yellow transition-colors leading-snug mb-2">
            <Link to={`/shows/${show.slug}`}>
              {show.title}
            </Link>
          </h3>

          <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
            {show.description}
          </p>
        </div>

        <div className="pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={show.hostAvatar}
              alt={show.hostName}
              className="w-6 h-6 rounded-full object-cover border border-white/10"
            />
            <span className="text-xs font-semibold text-gray-300 truncate max-w-[130px]">
              {show.hostName}
            </span>
          </div>

          <Link
            to={`/shows/${show.slug}`}
            className="text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-brand-yellow flex items-center gap-1 transition-colors"
          >
            <span>Show Details</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
