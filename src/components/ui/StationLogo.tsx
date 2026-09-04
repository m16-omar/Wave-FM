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
    <div
      className={clsx(
        'relative inline-flex items-center select-none group',
        className
      )}
    >
      {/* Base "WAVE 98" Text */}
      <span
        className={clsx(
          'font-black tracking-tighter uppercase font-display leading-none flex items-baseline',
          variant === 'light' ? 'text-black' : 'text-white',
          size === 'sm' && 'text-2xl sm:text-[27px]',
          size === 'md' && 'text-3xl sm:text-4xl',
          size === 'lg' && 'text-4xl sm:text-5xl',
          size === 'hero' && 'text-6xl sm:text-7xl md:text-8xl'
        )}
      >
        <span>WAVE</span>
        <span className="relative inline-block ml-0.5">
          98
          {/* Floating cursive "gold" Script Badge */}
          <span
            className={clsx(
              'font-script text-brand-yellow font-bold lowercase absolute leading-none tracking-normal rotate-[-8deg] pointer-events-none select-none drop-shadow-xs',
              size === 'sm' && 'text-[13px] sm:text-[14px] -top-3 left-0',
              size === 'md' && 'text-base sm:text-lg -top-4 -left-0.5',
              size === 'lg' && 'text-xl sm:text-2xl -top-5.5 -left-1',
              size === 'hero' && 'text-3xl sm:text-4xl md:text-5xl -top-8 sm:-top-10 -left-2'
            )}
          >
            gold
          </span>
        </span>
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

