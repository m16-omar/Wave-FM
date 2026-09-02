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
          ? 'bg-[#0C0D10] px-3.5 py-1.5 rounded-2xl shadow-md border border-neutral-800'
          : '',
        className
      )}
    >
      {/* Real Imole 106.3 FM Logo (ÌMỌ́LẸ̀ with Sun) */}
      <img
        src="/imole-logo.png"
        alt="Imole 106.3 FM - We Are The Light"
        className={clsx(
          'object-contain shrink-0 transition-transform duration-300 group-hover:scale-105',
          size === 'sm' && 'h-8 sm:h-9 md:h-10 w-auto min-w-[110px] sm:min-w-[130px]',
          size === 'md' && 'h-12 sm:h-14 w-auto min-w-[160px]',
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
