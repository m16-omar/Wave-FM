export interface TagItem {
  id: string;
  name: string;
  slug: string;
  count?: number;
}

export const STATION_TAGS: TagItem[] = [
  { id: 'tag-1', name: 'Hit Music', slug: 'hit-music', count: 48 },
  { id: 'tag-2', name: 'Hip-Hop', slug: 'hip-hop', count: 35 },
  { id: 'tag-3', name: 'Electronic', slug: 'electronic', count: 42 },
  { id: 'tag-4', name: 'Interviews', slug: 'interviews', count: 28 },
  { id: 'tag-5', name: 'Live Sets', slug: 'live-sets', count: 19 },
  { id: 'tag-6', name: 'Festivals', slug: 'festivals', count: 16 },
  { id: 'tag-7', name: 'Top 20 Chart', slug: 'top-20-chart', count: 24 },
  { id: 'tag-8', name: 'Podcasts', slug: 'podcasts', count: 31 },
  { id: 'tag-9', name: 'Studio Gear', slug: 'studio-gear', count: 12 },
  { id: 'tag-10', name: 'Afrobeats', slug: 'afrobeats', count: 22 },
  { id: 'tag-11', name: 'Underground', slug: 'underground', count: 18 },
  { id: 'tag-12', name: 'Night Club', slug: 'night-club', count: 15 },
];

export const GENRE_CATEGORIES = [
  { name: 'All Categories', slug: 'all' },
  { name: 'Hip-Hop & Urban', slug: 'hip-hop' },
  { name: 'Electronic & Dance', slug: 'dance' },
  { name: 'Top 40 & Hits', slug: 'pop' },
  { name: 'Afrobeats & Amapiano', slug: 'afrobeats' },
  { name: 'Deep House & Techno', slug: 'techno' },
  { name: 'Talk & Breakfast', slug: 'talk' },
];
