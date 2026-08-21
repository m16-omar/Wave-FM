import React from 'react';
import { clsx } from 'clsx';

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  badge?: string;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
  variant?: 'pills' | 'underline' | 'buttons';
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
  variant = 'pills',
}) => {
  return (
    <div className={clsx('flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1', className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        if (variant === 'pills') {
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={clsx(
                'px-4 py-2 rounded-lg text-xs md:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap select-none flex items-center gap-2',
                isActive
                  ? 'bg-brand-yellow text-black shadow-glow-yellow/30'
                  : 'bg-background-card hover:bg-background-hover text-gray-300 hover:text-white border border-border'
              )}
            >
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span
                  className={clsx(
                    'text-[10px] px-1.5 py-0.5 rounded-full font-bold',
                    isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-gray-400'
                  )}
                >
                  {tab.count}
                </span>
              )}
              {tab.badge && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-red text-white font-extrabold animate-pulse">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        }

        if (variant === 'underline') {
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={clsx(
                'px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap',
                isActive
                  ? 'border-brand-yellow text-brand-yellow'
                  : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
              )}
            >
              {tab.label}
            </button>
          );
        }

        return null;
      })}
    </div>
  );
};
