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
        'relative inline-flex items-center justify-center select-none group',
        variant === 'light'
          ? 'bg-[#0C0D10] px-3.5 py-1.5 rounded-xl shadow-xs border border-neutral-800/80'
          : '',
        className
      )}
    >
      {/* Official Imole 106.3 FM Logo (ÌMỌ́LẸ̀ with Sun) */}
      <img
        src="/imole-logo.png"
        alt="Imole 106.3 FM - We Are The Light"
        className={clsx(
          'object-contain shrink-0 transition-transform duration-300 group-hover:scale-105',
          size === 'sm' && 'h-8 sm:h-9 w-auto min-w-[110px] sm:min-w-[125px]',
          size === 'md' && 'h-11 sm:h-13 w-auto min-w-[150px]',
          size === 'lg' && 'h-16 sm:h-20 w-auto min-w-[220px]',
          size === 'hero' && 'h-24 sm:h-32 md:h-44 w-auto max-w-full'
        )}
      />
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
