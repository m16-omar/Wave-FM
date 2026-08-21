import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../../types/common';
import { clsx } from 'clsx';

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Radio Shows', href: '/shows' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Podcasts', href: '/podcasts' },
  { label: 'Charts', href: '/charts', badge: 'TOP 20' },
  { label: 'News & Blog', href: '/blog' },
  { label: 'Videos', href: '/videos' },
  { label: 'Events', href: '/events' },
  { label: 'DJs & Hosts', href: '/hosts' },
  { label: 'Advertise', href: '/promote' },
  { label: 'Contact', href: '/contact' },
];

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <nav className={clsx('flex items-center gap-1 xl:gap-2', className)}>
      {MAIN_NAV_ITEMS.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            clsx(
              'relative px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider transition-colors rounded-lg select-none whitespace-nowrap group',
              isActive
                ? 'text-brand-yellow font-extrabold'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            )
          }
        >
          {({ isActive }) => (
            <>
              <span className="flex items-center gap-1.5">
                {item.label}
                {item.badge && (
                  <span className="text-[9px] px-1 py-0.2 rounded bg-brand-yellow text-black font-black">
                    {item.badge}
                  </span>
                )}
              </span>
              {isActive && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-yellow rounded-full shadow-glow-yellow" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};
