import React from 'react';
import { Play, Pause, Heart, TrendingUp, TrendingDown, Minus, Music } from 'lucide-react';
import type { ChartSong } from '../../types/chart';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

interface SongCardProps {
  song: ChartSong;
  className?: string;
  onOpenLyrics?: (song: ChartSong) => void;
}

export const SongCard: React.FC<SongCardProps> = ({
  song,
  className,
}) => {
  const { isPlaying, currentTrack, playTrack, togglePlay, voteSong, votedSongIds } = useAudio();
  const isCurrentPlaying = isPlaying && currentTrack.title === song.title;
  const isVoted = votedSongIds.includes(song.id);

  const handlePlayClick = () => {
    if (isCurrentPlaying) {
      togglePlay();
    } else {
      playTrack({
        id: song.id,
        title: song.title,
        artist: song.artist,
        coverArt: song.coverArt,
        previewAudioUrl: song.previewAudioUrl,
        spotifyUrl: song.spotifyUrl,
        appleMusicUrl: song.appleMusicUrl,
        genre: song.genre,
        votes: song.votes,
      });
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return 'text-brand-yellow font-black text-2xl sm:text-3xl text-glow-yellow';
    if (rank === 2) return 'text-gray-200 font-extrabold text-xl sm:text-2xl';
    if (rank === 3) return 'text-amber-500 font-extrabold text-xl sm:text-2xl';
    return 'text-gray-500 font-bold text-lg sm:text-xl';
  };

  const getMovementIcon = () => {
    if (song.movement === 'up') {
      return (
        <span className="flex items-center text-[11px] font-bold text-emerald-400 gap-0.5">
          <TrendingUp className="w-3 h-3" />
          +{song.movementCount}
        </span>
      );
    }
    if (song.movement === 'down') {
      return (
        <span className="flex items-center text-[11px] font-bold text-rose-400 gap-0.5">
          <TrendingDown className="w-3 h-3" />
          -{song.movementCount}
        </span>
      );
    }
    if (song.movement === 'new') {
      return (
        <span className="flex items-center text-[10px] font-extrabold text-brand-yellow uppercase bg-brand-yellow/10 px-1.5 py-0.5 rounded">
          NEW
        </span>
      );
    }
    return (
      <span className="flex items-center text-[11px] font-medium text-gray-500">
        <Minus className="w-3 h-3" />
      </span>
    );
  };

  return (
    <div
      className={clsx(
        'group flex items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-background-card border border-border transition-all duration-300 hover:border-brand-yellow/40 hover:bg-background-hover shadow-sm',
        isCurrentPlaying && 'border-brand-yellow/60 bg-brand-yellow/5',
        className
      )}
    >
      {/* Left: Rank & Movement */}
      <div className="flex flex-col items-center justify-center w-8 sm:w-10 shrink-0">
        <span className={getRankBadge(song.rank)}>
          {song.rank < 10 ? `0${song.rank}` : song.rank}
        </span>
        <div className="mt-0.5">{getMovementIcon()}</div>
      </div>

      {/* Middle: Cover art & Play Button */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-background-tertiary shrink-0">
        <img
          src={song.coverArt}
          alt={song.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          loading="lazy"
        />
        <button
          onClick={handlePlayClick}
          className={clsx(
            'absolute inset-0 flex items-center justify-center transition-all',
            isCurrentPlaying
              ? 'bg-brand-yellow/90 text-black opacity-100'
              : 'bg-black/60 text-white opacity-0 group-hover:opacity-100 hover:bg-brand-yellow hover:text-black'
          )}
          aria-label={isCurrentPlaying ? 'Pause' : 'Play Track'}
        >
          {isCurrentPlaying ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 fill-current ml-0.5" />
          )}
        </button>
      </div>

      {/* Track Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-brand-yellow transition-colors truncate">
          {song.title}
        </h4>
        <p className="text-xs sm:text-sm text-gray-400 truncate">
          {song.artist}
        </p>
        <span className="text-[10px] text-gray-500 hidden sm:inline-block">
          Peak #{song.peakRank} • {song.weeksOnChart} wks on chart
        </span>
      </div>

      {/* Right: Actions (Vote + Spotify) */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <button
          onClick={() => voteSong(song.id)}
          className={clsx(
            'flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all',
            isVoted
              ? 'bg-brand-pink/20 text-brand-pink border border-brand-pink/40'
              : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-brand-pink'
          )}
          aria-label="Vote for Track"
        >
          <Heart className={clsx('w-3.5 h-3.5', isVoted && 'fill-current text-brand-pink')} />
          <span>{(song.votes + (isVoted ? 1 : 0)).toLocaleString()}</span>
        </button>

        {song.spotifyUrl && (
          <a
            href={song.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-gray-400 hover:text-brand-lime hover:bg-white/5 transition-colors hidden md:block"
            aria-label="Listen on Spotify"
          >
            <Music className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};
