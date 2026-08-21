import React from 'react';
import { Play, Eye, Clock } from 'lucide-react';
import { VideoItem } from '../../types/video';
import { Badge } from '../ui/Badge';
import { clsx } from 'clsx';

interface VideoCardProps {
  video: VideoItem;
  onPlay?: (video: VideoItem) => void;
  className?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  video,
  onPlay,
  className,
}) => {
  return (
    <div
      onClick={() => onPlay && onPlay(video)}
      className={clsx(
        'group cursor-pointer bg-background-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-yellow/50 hover:-translate-y-1 shadow-card flex flex-col',
        className
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-background-tertiary">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

        <div className="absolute top-3 left-3 z-10">
          <Badge variant="yellow" size="sm">
            {video.category}
          </Badge>
        </div>

        {/* Center Play Button with hover glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-yellow/90 group-hover:bg-brand-yellow text-black flex items-center justify-center shadow-glow-yellow group-hover:scale-110 active:scale-95 transition-all">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
          </div>
        </div>

        <div className="absolute bottom-3 right-3 z-10 px-2 py-1 rounded bg-black/80 text-[11px] font-bold text-white tracking-wider flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {video.duration}
        </div>
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-yellow transition-colors leading-snug line-clamp-2 mb-3">
          {video.title}
        </h4>

        <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-border">
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5 text-gray-500" />
            {video.viewsCount} views
          </span>
          <span>{video.publishedAt}</span>
        </div>
      </div>
    </div>
  );
};
