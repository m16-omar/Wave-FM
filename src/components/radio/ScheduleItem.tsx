import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Play, Radio, ArrowRight } from 'lucide-react';
import { ScheduleSlot } from '../../types/schedule';
import { Badge } from '../ui/Badge';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

interface ScheduleItemProps {
  item: ScheduleSlot;
  className?: string;
}

export const ScheduleItem: React.FC<ScheduleItemProps> = ({
  item,
  className,
}) => {
  const { isPlaying, playLiveStream } = useAudio();

  return (
    <div
      className={clsx(
        'group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-300',
        item.isLiveNow
          ? 'bg-brand-yellow/10 border-brand-yellow shadow-glow-yellow/20'
          : 'bg-background-card border-border hover:border-brand-yellow/40 hover:bg-background-hover',
        className
      )}
    >
      <div className="flex items-center gap-4 min-w-0">
        {/* Show Artwork Thumbnail */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-background-tertiary shrink-0 border border-white/10">
          <img
            src={item.image}
            alt={item.showTitle}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            loading="lazy"
          />
          {item.isLiveNow && (
            <div className="absolute inset-0 bg-brand-yellow/20 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-ping" />
            </div>
          )}
        </div>

        {/* Schedule Info */}
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-1">
            {item.isLiveNow ? (
              <Badge variant="live" size="sm" dot>
                LIVE NOW
              </Badge>
            ) : (
              <span className="text-xs font-bold text-brand-yellow uppercase tracking-wider flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {item.timeSlot}
              </span>
            )}
            <Badge variant="dark" size="sm">
              {item.category}
            </Badge>
          </div>

          <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-yellow transition-colors truncate">
            <Link to={`/shows/${item.showSlug}`}>
              {item.showTitle}
            </Link>
          </h4>

          <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
            <img
              src={item.hostAvatar}
              alt={item.hostName}
              className="w-4 h-4 rounded-full object-cover"
            />
            <span className="truncate">w/ {item.hostName}</span>
          </div>
        </div>
      </div>

      {/* Action: Listen Live or Details */}
      <div className="flex items-center gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/60">
        {item.isLiveNow ? (
          <button
            onClick={() => playLiveStream()}
            className="px-4 py-2 rounded-xl bg-brand-yellow text-black font-extrabold uppercase text-xs tracking-wider shadow-glow-yellow hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Listen Live</span>
          </button>
        ) : (
          <Link
            to={`/shows/${item.showSlug}`}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white font-bold uppercase text-xs tracking-wider transition-colors flex items-center gap-1.5"
          >
            <span>Show Info</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
};
