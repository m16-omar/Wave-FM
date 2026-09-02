import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface StationLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  asLink?: boolean;
  showText?: boolean;
}

export const StationLogo: React.FC<StationLogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  asLink = true,
  showText = true,
}) => {
  const content = (
    <div className={clsx('relative inline-flex items-center gap-2 select-none group', className)}>
      {/* Real Sun Logo Image */}
      <img
        src="/imole-logo.png"
        alt="Imole 106.3 FM Logo"
        className={clsx(
          'object-contain shrink-0 transition-transform duration-300 group-hover:scale-105',
          size === 'sm' && 'h-8 sm:h-9 w-auto',
          size === 'md' && 'h-10 sm:h-12 w-auto',
          size === 'lg' && 'h-14 sm:h-16 w-auto',
          size === 'hero' && 'h-20 sm:h-24 md:h-28 w-auto'
        )}
      />

      {showText && (
        <div className="flex flex-col leading-none justify-center">
          <span
            className={clsx(
              'font-black tracking-tight uppercase font-display leading-none flex items-baseline',
              variant === 'light' ? 'text-black' : 'text-white',
              size === 'sm' && 'text-lg sm:text-xl',
              size === 'md' && 'text-2xl sm:text-3xl',
              size === 'lg' && 'text-3xl sm:text-4xl',
              size === 'hero' && 'text-5xl sm:text-6xl md:text-7xl'
            )}
          >
            <span>IMOLE</span>
            <span className="text-brand-yellow ml-1">FM</span>
          </span>
          <span
            className={clsx(
              'text-[9px] font-bold tracking-widest text-brand-yellow uppercase font-mono mt-0.5',
              size === 'hero' && 'text-xs'
            )}
          >
            106.3 MHZ
          </span>
        </div>
      )}
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
