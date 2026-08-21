import React from 'react';
import { Modal } from '../ui/Modal';
import { RADIO_CHANNELS } from '../../data/radio';
import { useAudio } from '../../context/AudioContext';
import { Radio, Users, Check, Volume2 } from 'lucide-react';
import { clsx } from 'clsx';

interface StreamSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StreamSelectorModal: React.FC<StreamSelectorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { currentChannel, setChannel, playLiveStream, isPlaying } = useAudio();

  const handleSelectChannel = (channel: typeof RADIO_CHANNELS[0]) => {
    setChannel(channel);
    playLiveStream(channel.id);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Select Radio Stream Channel"
      maxWidth="lg"
    >
      <div className="space-y-3">
        <p className="text-xs text-gray-400 mb-4">
          Choose from our live HD stream channels broadcasting in high fidelity 320kbps audio.
        </p>

        {RADIO_CHANNELS.map((ch) => {
          const isSelected = currentChannel.id === ch.id;

          return (
            <div
              key={ch.id}
              onClick={() => handleSelectChannel(ch)}
              className={clsx(
                'group flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer',
                isSelected
                  ? 'bg-brand-yellow/10 border-brand-yellow shadow-glow-yellow/10'
                  : 'bg-background-secondary border-border hover:border-brand-yellow/50 hover:bg-background-hover'
              )}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/10"
                  style={{ borderColor: ch.accentColor }}
                >
                  <img
                    src={ch.logo}
                    alt={ch.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors truncate">
                      {ch.name}
                    </h4>
                    <span
                      className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded"
                      style={{ backgroundColor: `${ch.accentColor}20`, color: ch.accentColor }}
                    >
                      {ch.frequency}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 truncate mt-0.5">
                    {ch.tagline}
                  </p>
                  <div className="flex items-center gap-3 text-[11px] text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-gray-400" />
                      {ch.listenersCount.toLocaleString()} Live
                    </span>
                    <span>•</span>
                    <span className="text-brand-yellow font-mono">{ch.bitrate}</span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 ml-3">
                {isSelected ? (
                  <div className="w-8 h-8 rounded-full bg-brand-yellow text-black flex items-center justify-center shadow-glow-yellow">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-white/5 text-gray-400 group-hover:bg-brand-yellow group-hover:text-black flex items-center justify-center transition-colors">
                    <Volume2 className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Modal>
  );
};
