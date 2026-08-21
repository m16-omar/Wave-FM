import React from 'react';
import { clsx } from 'clsx';

interface SocialLinksProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'pills' | 'solid';
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className,
  size = 'md',
  variant = 'ghost',
}) => {
  const socialItems = [
    {
      label: 'Instagram',
      href: 'https://instagram.com',
      color: 'hover:text-brand-pink hover:border-brand-pink',
      svg: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    {
      label: 'Twitter / X',
      href: 'https://twitter.com',
      color: 'hover:text-brand-cyan hover:border-brand-cyan',
      svg: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m3.464-3.464L20 4"/>
        </svg>
      )
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com',
      color: 'hover:text-blue-500 hover:border-blue-500',
      svg: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      )
    },
    {
      label: 'YouTube',
      href: 'https://youtube.com',
      color: 'hover:text-brand-red hover:border-brand-red',
      svg: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
          <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
        </svg>
      )
    },
    {
      label: 'Spotify',
      href: 'https://spotify.com',
      color: 'hover:text-brand-lime hover:border-brand-lime',
      svg: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 11.5c3.5-1 6.5-.5 9 1.5"/>
          <path d="M9 14.5c2.5-.7 5-.3 7 1"/>
          <path d="M7 8.5c4.5-1.5 9-1 12 2"/>
        </svg>
      )
    },
  ];

  const sizeClasses = {
    sm: 'w-7 h-7 p-1.5',
    md: 'w-9 h-9 p-2',
    lg: 'w-11 h-11 p-2.5',
  }[size];

  return (
    <div className={clsx('flex items-center gap-2', className)}>
      {socialItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={clsx(
            sizeClasses,
            'inline-flex items-center justify-center rounded-lg transition-all duration-200 text-gray-400',
            variant === 'ghost' && `hover:bg-white/10 ${item.color}`,
            variant === 'pills' && `bg-background-tertiary border border-border ${item.color} hover:bg-background-hover`,
            variant === 'solid' && 'bg-white/10 text-white hover:bg-brand-yellow hover:text-black shadow-sm'
          )}
        >
          {item.svg}
        </a>
      ))}
    </div>
  );
};
