import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={clsx('flex items-center justify-center gap-2 pt-8', className)}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-background-card border border-border text-gray-400 hover:text-white hover:border-brand-yellow disabled:opacity-30 disabled:pointer-events-none transition-colors"
        aria-label="Previous Page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={clsx(
            'w-10 h-10 flex items-center justify-center rounded-lg text-sm font-extrabold transition-all',
            currentPage === page
              ? 'bg-brand-yellow text-black shadow-glow-yellow/30'
              : 'bg-background-card border border-border text-gray-300 hover:text-white hover:bg-background-hover hover:border-border-light'
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-background-card border border-border text-gray-400 hover:text-white hover:border-brand-yellow disabled:opacity-30 disabled:pointer-events-none transition-colors"
        aria-label="Next Page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
