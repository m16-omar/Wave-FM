import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface StationLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  asLink?: boolean;
}

export const StationLogo: React.FC<StationLogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  asLink = true,
}) => {
  const content = (
    <div className={clsx('relative inline-flex items-center select-none group', className)}>
      {/* Base "WAVE 98" Text */}
      <span
        className={clsx(
          'font-black tracking-tighter uppercase font-display leading-none flex items-baseline',
          variant === 'light' ? 'text-black' : 'text-white',
          size === 'sm' && 'text-2xl sm:text-[26px]',
          size === 'md' && 'text-3xl sm:text-4xl',
          size === 'lg' && 'text-4xl sm:text-5xl',
          size === 'hero' && 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl'
        )}
      >
        <span>WAVE</span>
        <span className="ml-0.5">98</span>
      </span>

      {/* Floating cursive "RADIO" Script Badge */}
      <span
        className={clsx(
          'font-marker text-brand-yellow absolute leading-none tracking-normal rotate-[-8deg] pointer-events-none drop-shadow-sm',
          size === 'sm' && 'text-[9px] sm:text-[10px] -top-2 right-0.5',
          size === 'md' && 'text-xs sm:text-sm -top-3.5 right-0',
          size === 'lg' && 'text-lg sm:text-xl -top-5 right-1',
          size === 'hero' && 'text-2xl sm:text-3xl md:text-4xl -top-6 sm:-top-8 md:-top-10 right-2 sm:right-4'
        )}
      >
        RADIO
      </span>
    </div>
  );

  if (asLink) {
    return (
      <Link to="/" className="inline-block transition-transform group-hover:scale-[1.02]">
        {content}
      </Link>
    );
  }

  return content;
};
