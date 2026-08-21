import React, { useState } from 'react';
import { NowPlaying } from './NowPlaying';
import { PlayerControls } from './PlayerControls';
import { StreamSelectorModal } from './StreamSelectorModal';
import { Radio, Signal, Headphones } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';
import { clsx } from 'clsx';

interface AudioPlayerProps {
  className?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ className }) => {
  const [isChannelModalOpen, setIsChannelModalOpen] = useState(false);
  const { currentChannel, isPlaying } = useAudio();

  return (
    <>
      <div
        className={clsx(
          'w-full bg-background border-b border-border/80 text-white z-40 transition-colors py-2 px-4 sm:px-6 lg:px-8',
          className
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Station Identity & Live Frequency */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow">
                {currentChannel.name}
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-xs text-gray-400 border-l border-border pl-4">
              <Signal className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="font-mono">{currentChannel.bitrate}</span>
              <span>•</span>
              <span className="text-gray-400">{currentChannel.listenersCount.toLocaleString()} Listening</span>
            </div>
          </div>

          {/* Center: Live Track / Show Now Playing */}
          <div className="flex-1 max-w-xl mx-2 min-w-0">
            <NowPlaying />
          </div>

          {/* Right: Controls (Play, Volume, Channels) */}
          <div className="shrink-0 flex items-center gap-3">
            <PlayerControls onOpenChannels={() => setIsChannelModalOpen(true)} />
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
