import { PodcastEpisode, PodcastShow } from '../types/podcast';
import { ASSET_IMAGES } from '../assets/images';

export interface PodcastItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  views: number;
  duration: string;
  audioUrl: string;
}

export const ALL_PODCASTS_DATA: PodcastItem[] = [
  {
    id: 'pod-01',
    slug: 'beat-breakdown',
    title: 'Beat Breakdown',
    category: 'Music',
    date: 'January 8, 2026',
    views: 42,
    duration: '42:15',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 'pod-02',
    slug: 'hitplay-stories',
    title: 'HitPlay Stories',
    category: 'Stories',
    date: 'January 8, 2026',
    views: 45,
    duration: '38:40',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 'pod-03',
    slug: 'rhythm-roundtable',
    title: 'Rhythm Roundtable',
    category: 'Trends',
    date: 'January 8, 2026',
    views: 39,
    duration: '50:20',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 'pod-04',
    slug: 'mic-drop',
    title: 'Mic Drop',
    category: 'Stories',
    date: 'January 8, 2026',
    views: 56,
    duration: '34:10',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
  {
    id: 'pod-05',
    slug: 'underground-soundscapes',
    title: 'Underground Soundscapes',
    category: 'Electronic',
    date: 'January 8, 2026',
    views: 84,
    duration: '58:00',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 'pod-06',
    slug: 'the-lyric-lab',
    title: 'The Lyric Lab',
    category: 'Interviews',
    date: 'January 8, 2026',
    views: 63,
    duration: '29:50',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 'pod-07',
    slug: 'festival-chronicles',
    title: 'Festival Chronicles',
    category: 'Culture',
    date: 'January 8, 2026',
    views: 51,
    duration: '44:30',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 'pod-08',
    slug: 'afrobeats-to-the-world',
    title: 'Afrobeats to the World',
    category: 'Global Beats',
    date: 'January 8, 2026',
    views: 92,
    duration: '49:45',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
];

export const PODCAST_EPISODES: PodcastEpisode[] = ALL_PODCASTS_DATA.map((p, idx) => ({
  id: p.id,
  slug: p.slug,
  podcastId: p.slug,
  podcastTitle: p.title,
  title: `${p.title}: Episode ${idx + 1}`,
  episodeNumber: idx + 1,
  seasonNumber: 1,
  description: 'Deep dive podcast session broadcasted on Imole 106.3 FM.',
  duration: p.duration,
  durationSeconds: 2400,
  publishedAt: p.date,
  audioUrl: p.audioUrl,
  coverImage: ASSET_IMAGES.shows.gospelLight,
  hostName: 'Maya Lin',
  category: p.category,
  tags: [p.category, 'Podcast', 'Imole 106.3'],
  playsCount: p.views * 100,
}));

export const PODCAST_SHOWS: PodcastShow[] = [
  {
    id: 'beat-breakdown',
    slug: 'beat-breakdown',
    title: 'Beat Breakdown',
    description: 'Inside the studio with the producers behind global chart anthems.',
    coverImage: ASSET_IMAGES.shows.comedySplash,
    hostName: 'Maya Lin',
    hostAvatar: ASSET_IMAGES.hero2,
    category: 'Music Production',
    totalEpisodes: 24,
  },
  {
    id: 'hitplay-stories',
    slug: 'hitplay-stories',
    title: 'HitPlay Stories',
    description: 'Unfiltered stories from the world of music festivals, touring, and studio life.',
    coverImage: ASSET_IMAGES.shows.gudugbe,
    hostName: 'Alex Rivera',
    hostAvatar: ASSET_IMAGES.hero3,
    category: 'Stories',
    totalEpisodes: 18,
  },
  {
    id: 'rhythm-roundtable',
    slug: 'rhythm-roundtable',
    title: 'Rhythm Roundtable',
    description: 'Weekly roundtable dissecting viral music trends, dance culture, and club tracks.',
    coverImage: ASSET_IMAGES.shows.reggaeHour,
    hostName: 'Jordan Carter',
    hostAvatar: ASSET_IMAGES.hero,
    category: 'Trends',
    totalEpisodes: 32,
  },
];
