import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Radio, ListMusic } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

interface PlayerControlsProps {
  className?: string;
  onOpenChannels?: () => void;
}

export const PlayerControls: React.FC<PlayerControlsProps> = ({
  className,
  onOpenChannels,
}) => {
  const {
    isPlaying,
    isLoading,
    playbackMode,
    volume,
    isMuted,
    togglePlay,
    setVolumeLevel,
    toggleMute,
    nextTrack,
    prevTrack,
  } = useAudio();

  return (
    <div className={clsx('flex items-center gap-3 sm:gap-4', className)}>
      {/* Previous Track (Available in Track Preview mode) */}
      <button
        onClick={prevTrack}
        className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors hidden md:block"
        aria-label="Previous Track"
      >
        <SkipBack className="w-4 h-4" />
      </button>

      {/* Main Play / Pause Button with energetic yellow glow */}
      <button
        onClick={togglePlay}
        disabled={isLoading}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-yellow text-black flex items-center justify-center shadow-glow-yellow hover:scale-105 active:scale-95 transition-all select-none"
        aria-label={isPlaying ? 'Pause Radio' : 'Play Live Radio'}
      >
        {isLoading ? (
          <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
        ) : isPlaying ? (
          <Pause className="w-5 h-5 fill-current" />
        ) : (
          <Play className="w-5 h-5 fill-current ml-0.5" />
        )}
      </button>

      {/* Next Track */}
      <button
        onClick={nextTrack}
        className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors hidden md:block"
        aria-label="Next Track"
      >
        <SkipForward className="w-4 h-4" />
      </button>

      {/* Volume Slider with Mute Toggle */}
      <div className="items-center gap-2 hidden lg:flex">
        <button
          onClick={toggleMute}
          className="p-1.5 text-gray-400 hover:text-brand-yellow transition-colors"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-4 h-4 text-rose-400" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={(e) => setVolumeLevel(parseFloat(e.target.value))}
          className="w-16 xl:w-20 h-1.5 bg-background-tertiary rounded-lg appearance-none cursor-pointer accent-brand-yellow"
          aria-label="Volume Slider"
        />
      </div>

      {/* Channel Switcher Button */}
      {onOpenChannels && (
        <button
          onClick={onOpenChannels}
          className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-brand-yellow text-xs font-bold uppercase tracking-wider hidden sm:flex items-center gap-1.5 transition-colors border border-border"
          aria-label="Switch Channel"
        >
          <Radio className="w-3.5 h-3.5 text-brand-yellow" />
          <span>Channels</span>
        </button>
      )}
    </div>
  );
};
