export interface Author {
  id: string;
  name: string;
  avatar: string;
  role: string;
  bio?: string;
  socials?: {
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or HTML formatted string
  featuredImage: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string; // e.g. "Oct 14, 2026"
  readTime: string; // e.g. "4 min read"
  viewsCount?: number;
  commentsCount?: number;
  isFeatured?: boolean;
  isTrending?: boolean;
}

export interface ArticleCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
  color?: string;
}
