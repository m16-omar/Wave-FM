export interface VideoItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string; // YouTube embed URL or direct video stream
  duration: string; // e.g. "14:32"
  category: string;
  publishedAt: string;
  viewsCount: string;
  isFeatured?: boolean;
  featuredArtist?: string;
  tags?: string[];
}
