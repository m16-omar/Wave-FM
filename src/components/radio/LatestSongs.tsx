import React from 'react';
import { RECENTLY_PLAYED_SONGS } from '../../data/songs';
import { Play, Pause, Clock, Music } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

interface LatestSongsProps {
  className?: string;
  limit?: number;
}

export const LatestSongs: React.FC<LatestSongsProps> = ({
  className,
  limit = 5,
}) => {
  const { isPlaying, currentTrack, playTrack, togglePlay } = useAudio();
  const displaySongs = RECENTLY_PLAYED_SONGS.slice(0, limit);

  return (
    <div className={clsx('space-y-2.5', className)}>
      {displaySongs.map((song) => {
        const isCurrentPlaying = isPlaying && currentTrack.title === song.title;

        return (
          <div
            key={song.id}
            className={clsx(
              'group flex items-center justify-between gap-3 p-3 rounded-xl border transition-all duration-200',
              isCurrentPlaying
                ? 'bg-brand-yellow/10 border-brand-yellow'
                : 'bg-background-card border-border hover:border-brand-yellow/40 hover:bg-background-hover'
            )}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-background-tertiary shrink-0">
                <img
                  src={song.coverArt}
                  alt={song.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => {
                    if (isCurrentPlaying) togglePlay();
                    else playTrack(song);
                  }}
                  className={clsx(
                    'absolute inset-0 flex items-center justify-center transition-all',
                    isCurrentPlaying
                      ? 'bg-brand-yellow text-black'
                      : 'bg-black/60 text-white opacity-0 group-hover:opacity-100 hover:bg-brand-yellow hover:text-black'
                  )}
                  aria-label="Play song"
                >
                  {isCurrentPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>
              </div>

              <div className="min-w-0">
                <h5 className="text-xs sm:text-sm font-bold text-white group-hover:text-brand-yellow transition-colors truncate">
                  {song.title}
                </h5>
                <p className="text-[11px] text-gray-400 truncate">
                  {song.artist}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[10px] text-gray-500 font-mono bg-white/5 px-2 py-1 rounded">
                {song.playedAt}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
