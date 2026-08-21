import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  linkText?: string;
  linkHref?: string;
  align?: 'left' | 'center' | 'between';
  accentColor?: 'yellow' | 'cyan' | 'pink';
  className?: string;
  children?: ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  tagline,
  linkText,
  linkHref,
  align = 'between',
  accentColor = 'yellow',
  className,
  children,
}) => {
  const accentBorder = {
    yellow: 'from-brand-yellow',
    cyan: 'from-brand-cyan',
    pink: 'from-brand-pink',
  }[accentColor];

  return (
    <div
      className={clsx(
        'mb-8 md:mb-10',
        align === 'center' && 'text-center max-w-2xl mx-auto',
        align === 'between' && 'flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-4',
        align === 'left' && 'border-b border-border pb-4',
        className
      )}
    >
      <div>
        {tagline && (
          <div className="flex items-center gap-2 mb-2">
            <span className={clsx('w-2 h-2 rounded-full', {
              'bg-brand-yellow': accentColor === 'yellow',
              'bg-brand-cyan': accentColor === 'cyan',
              'bg-brand-pink': accentColor === 'pink',
            })} />
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-yellow">
              {tagline}
            </span>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
          <span>{title}</span>
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm md:text-base text-gray-400 font-normal">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex items-center gap-4 shrink-0">
        {children}
        {linkHref && linkText && (
          <Link
            to={linkHref}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-brand-yellow hover:text-white transition-colors group"
          >
            <span>{linkText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
};
