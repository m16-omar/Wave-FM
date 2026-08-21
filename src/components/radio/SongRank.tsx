import React from 'react';
import { Link } from 'react-router-dom';
import { TOP_CHART_SONGS } from '../../data/charts';
import { SongCard } from '../cards/SongCard';
import { Trophy, ArrowRight, Flame } from 'lucide-react';
import { clsx } from 'clsx';

interface SongRankProps {
  className?: string;
  limit?: number;
}

export const SongRank: React.FC<SongRankProps> = ({
  className,
  limit = 5,
}) => {
  const displaySongs = TOP_CHART_SONGS.slice(0, limit);

  return (
    <div className={clsx('space-y-3', className)}>
      {displaySongs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
};
