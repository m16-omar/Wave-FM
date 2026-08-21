import React from 'react';
import { clsx } from 'clsx';

interface EqualizerVisualizerProps {
  isPlaying: boolean;
  barCount?: number;
  className?: string;
  color?: string;
}

export const EqualizerVisualizer: React.FC<EqualizerVisualizerProps> = ({
  isPlaying,
  barCount = 4,
  className,
  color = 'bg-brand-yellow',
}) => {
  return (
    <div className={clsx('flex items-end gap-1 h-5 select-none', className)}>
      {Array.from({ length: barCount }).map((_, i) => (
        <span
          key={i}
          className={clsx(
            'w-1 rounded-full transition-all duration-300',
            color,
            isPlaying ? 'sound-wave-bar' : 'h-1.5 opacity-40'
          )}
          style={{
            animationDuration: `${0.6 + (i % 3) * 0.3}s`,
            animationDelay: `${i * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
};
