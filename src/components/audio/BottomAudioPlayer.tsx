import React, { useState } from 'react';
import { useAudio } from '../../context/AudioContext';
import { StreamSelectorModal } from './StreamSelectorModal';
import { Play, Pause, SkipBack, SkipForward, Mic2, ListMusic, Volume2, VolumeX } from 'lucide-react';
import { clsx } from 'clsx';

export const BottomAudioPlayer: React.FC = () => {
  const {
    isPlaying,
    togglePlay,
    currentTrack,
    currentChannel,
    volume,
    setVolumeLevel,
    isMuted,
    toggleMute,
    nextTrack,
    prevTrack,
    currentTime,
    duration,
  } = useAudio();

  const [isChannelModalOpen, setIsChannelModalOpen] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-yellow text-black h-16 shadow-[0_-4px_25px_rgba(0,0,0,0.5)] border-t border-brand-yellowHover select-none">
        <div className="max-w-7xl mx-auto h-full px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Play/Pause Button + Song Info */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1 sm:flex-initial">
            {/* Main Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black text-brand-yellow hover:scale-105 active:scale-95 flex items-center justify-center transition-transform shrink-0 shadow-md cursor-pointer"
              aria-label={isPlaying ? 'Pause stream' : 'Play stream'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            {/* Song Title & Artist */}
            <div className="min-w-0 flex flex-col justify-center">
              <span className="font-black text-xs sm:text-sm text-black truncate leading-tight tracking-tight uppercase">
                {currentTrack.title}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-black/80 truncate">
                {currentTrack.artist}
              </span>
            </div>

            {/* Square Album Cover */}
            <div className="hidden xs:block relative w-9 h-9 sm:w-10 sm:h-10 rounded-md overflow-hidden bg-black/10 shrink-0 border border-black/10 shadow-sm">
              <img
                src={currentTrack.coverArt}
                alt={currentTrack.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center-Left: Transport Controls (Prev, Next, Mic) */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              onClick={prevTrack}
              className="p-2 text-black/80 hover:text-black hover:bg-black/10 rounded-full transition-colors cursor-pointer"
              title="Previous Track"
            >
              <SkipBack className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" />
            </button>

            <button
              onClick={nextTrack}
              className="p-2 text-black/80 hover:text-black hover:bg-black/10 rounded-full transition-colors cursor-pointer"
              title="Next Track"
            >
              <SkipForward className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" />
            </button>

            <button
              onClick={() => setIsChannelModalOpen(true)}
              className="p-2 text-black/80 hover:text-black hover:bg-black/10 rounded-full transition-colors cursor-pointer relative"
              title="Select Live Broadcast Channel"
            >
              <Mic2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            </button>
          </div>

          {/* Center: Live Time / Duration */}
          <div className="hidden md:flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-black/90 tracking-wider">
            <span>{formatTime(currentTime)}</span>
            <span className="mx-1 text-black/40">/</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Right: Channel Badge, Volume & Playlist / Menu */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Live Frequency Badge */}
            <button
              onClick={() => setIsChannelModalOpen(true)}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/10 hover:bg-black/20 text-black text-[11px] font-black uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>{currentChannel.frequency}</span>
            </button>

            {/* Volume Control */}
            <div className="relative flex items-center">
              <button
                onClick={toggleMute}
                onMouseEnter={() => setShowVolumeSlider(true)}
                className="p-2 text-black/80 hover:text-black hover:bg-black/10 rounded-full transition-colors cursor-pointer"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>

              {showVolumeSlider && (
                <div
                  onMouseLeave={() => setShowVolumeSlider(false)}
                  className="absolute bottom-12 right-0 bg-black text-white p-3 rounded-2xl shadow-xl flex flex-col items-center gap-2 border border-white/10"
                >
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => setVolumeLevel(parseFloat(e.target.value))}
                    className="w-20 accent-brand-yellow cursor-pointer"
                  />
                  <span className="text-[10px] font-mono font-bold text-gray-400">
                    {Math.round(volume * 100)}%
                  </span>
                </div>
              )}
            </div>

            {/* Stream Channels Modal Trigger */}
            <button
              onClick={() => setIsChannelModalOpen(true)}
              className="p-2 text-black/80 hover:text-black hover:bg-black/10 rounded-full transition-colors cursor-pointer"
              title="Stream Channels"
            >
              <ListMusic className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            </button>
          </div>
        </div>
      </div>

      <StreamSelectorModal
        isOpen={isChannelModalOpen}
        onClose={() => setIsChannelModalOpen(false)}
      />
    </>
  );
};
