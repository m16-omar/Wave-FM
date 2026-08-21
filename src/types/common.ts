export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface SearchResultItem {
  id: string;
  type: 'article' | 'show' | 'host' | 'podcast' | 'event' | 'video' | 'song';
  title: string;
  subtitle: string;
  url: string;
  image: string;
  category?: string;
  date?: string;
}
