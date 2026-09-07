import React from 'react';
import { clsx } from 'clsx';

interface LiveNowBadgeProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  label?: string;
}

export const LiveNowBadge: React.FC<LiveNowBadgeProps> = ({
  className,
  size = 'sm',
  label = 'LIVE NOW',
}) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full bg-red-600 text-white font-black uppercase tracking-wider select-none shadow-md backdrop-blur-sm border border-red-400/30',
        size === 'xs' && 'px-2 py-0.5 text-[8.5px]',
        size === 'sm' && 'px-2.5 py-0.5 text-[9.5px]',
        size === 'md' && 'px-3 py-1 text-[11px]',
        size === 'lg' && 'px-4 py-1.5 text-xs sm:text-sm',
        className
      )}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
      </span>
      <span className="leading-none">{label}</span>
    </span>
  );
};
