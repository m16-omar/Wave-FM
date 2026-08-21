import React, { ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: ReactNode;
  variant?: 'yellow' | 'cyan' | 'pink' | 'purple' | 'live' | 'dark' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'yellow',
  size = 'md',
  className,
  dot = false,
}) => {
  const baseStyles = 'inline-flex items-center font-bold tracking-wider uppercase rounded-md whitespace-nowrap select-none';

  const variants = {
    yellow: 'bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/30',
    cyan: 'bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30',
    pink: 'bg-brand-pink/15 text-brand-pink border border-brand-pink/30',
    purple: 'bg-brand-purple/15 text-brand-purple border border-brand-purple/30',
    live: 'bg-brand-red text-white font-extrabold shadow-lg shadow-brand-red/40 animate-pulse',
    dark: 'bg-white/10 text-gray-300 border border-white/10',
    outline: 'border border-gray-600 text-gray-400',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
  };

  return (
    <span className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}>
      {dot && (
        <span className={clsx('w-1.5 h-1.5 rounded-full', {
          'bg-brand-yellow': variant === 'yellow',
          'bg-brand-cyan': variant === 'cyan',
          'bg-brand-pink': variant === 'pink',
          'bg-white animate-ping': variant === 'live',
          'bg-gray-400': variant === 'dark' || variant === 'outline',
        })} />
      )}
      {children}
    </span>
  );
};
