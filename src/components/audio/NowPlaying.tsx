import React from 'react';
import { useAudio } from '../../context/AudioContext';
import { EqualizerVisualizer } from './EqualizerVisualizer';
import { Radio } from 'lucide-react';
import { clsx } from 'clsx';

interface NowPlayingProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export const NowPlaying: React.FC<NowPlayingProps> = ({
  className,
  variant = 'compact',
}) => {
  const { isPlaying, playbackMode, currentTrack, currentChannel, onAirShow } = useAudio();

  return (
    <div className={clsx('flex items-center gap-3 min-w-0', className)}>
      {/* Cover artwork */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden bg-background-tertiary shrink-0 border border-white/10">
        <img
          src={currentTrack.coverArt}
          alt={currentTrack.title}
          className="w-full h-full object-cover"
        />
        {isPlaying && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <EqualizerVisualizer isPlaying={isPlaying} barCount={3} />
          </div>
        )}
      </div>

      {/* Track & Broadcast metadata */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          {playbackMode === 'live-radio' ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-brand-yellow uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
              ON AIR NOW
            </span>
          ) : (
            <span className="text-[10px] font-extrabold text-brand-cyan uppercase tracking-widest">
              PREVIEW PLAY
            </span>
          )}
          <span className="text-[10px] text-gray-500 font-mono hidden md:inline">
            {currentChannel.frequency}
          </span>
        </div>

        <div className="flex items-baseline gap-1.5 min-w-0">
          <h4 className="text-xs sm:text-sm font-extrabold text-white truncate">
            {currentTrack.title}
          </h4>
          <span className="text-xs text-gray-400 truncate hidden sm:inline">
            — {currentTrack.artist}
          </span>
        </div>
      </div>
    </div>
  );
};
