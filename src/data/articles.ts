import { Article, ArticleCategory } from '../types/article';

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  { id: 'cat-1', name: 'Events', slug: 'events', count: 18, color: '#FFE600' },
  { id: 'cat-2', name: 'Artists', slug: 'artists', count: 24, color: '#00F0FF' },
  { id: 'cat-3', name: 'Concerts', slug: 'concerts', count: 15, color: '#FF007F' },
  { id: 'cat-4', name: 'Featured', slug: 'featured', count: 22, color: '#8B5CF6' },
  { id: 'cat-5', name: 'Highlights', slug: 'highlights', count: 12, color: '#10B981' },
  { id: 'cat-6', name: 'Interviews', slug: 'interviews', count: 16, color: '#F59E0B' },
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-01',
    slug: 'listeners-choice-awards-top-picks-music-icons',
    title: "Listener's Choice Awards: Your Top Picks for This Year's Music Icons",
    excerpt: 'The global community voted, and the results are officially in. Discover who took home the crown on WAVE 98.',
    content: `
# The People Have Spoken: 2026 Music Icons

Every year, WAVE 98 hands the voting power directly to our listeners worldwide. Over 250,000 ballots were cast across electronic, hip-hop, pop, and global beats categories.

## Dominating the Charts
From explosive world tours to genre-defining studio albums, this year proved that listener power is stronger than ever.

### Top Winners This Year:
- **Best Global Act:** Peggy Gou & Maya Jane Coles
- **Album of the Year:** Short n' Sweet
- **Breakthrough Record:** "Who" — Jimin
- **Underground DJ of the Year:** Ryan Taylor (After Hours Mix)
    `,
    featuredImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    category: 'Events',
    tags: ['ARTISTS', 'CHARTS', 'COUNTDOWN', 'CULTURE', 'FESTIVALS'],
    author: {
      id: 'maya-lin',
      name: 'Maya Lin',
      role: 'Music Editor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'January 8, 2026',
    readTime: '4 min read',
    viewsCount: 32,
    commentsCount: 156,
    isFeatured: true,
  },
  {
    id: 'art-02',
    slug: 'from-viral-dance-challenges-to-radio-play',
    title: 'From Viral Dance Challenges to Radio Play: How Trap Songs Go Mainstream',
    excerpt: 'A deep dive into how short-form video hooks transition into global rotation records on radio stations across the world.',
    content: `
# The Modern Pipeline to Radio Rotation

How does an 8-bar loop uploaded from a bedroom producer become the #1 most-requested song on WAVE 98? We analyze the sonic formula behind viral hits.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    category: 'Artists',
    tags: ['HITS', 'INDUSTRY', 'POP', 'SOUND', 'TRENDS'],
    author: {
      id: 'ryan-taylor',
      name: 'Ryan Taylor',
      role: 'Resident DJ & Writer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'January 8, 2026',
    readTime: '5 min read',
    viewsCount: 28,
    commentsCount: 94,
    isFeatured: true,
  },
  {
    id: 'art-03',
    slug: 'the-2025-urban-music-festival-you-cant-miss',
    title: "The 2025 Urban Music Festival You Can't Miss",
    excerpt: 'Full lineup announcement, stage schedules, secret VIP sets, and camping tickets for the largest urban music weekend.',
    content: `
# Ready for the Ultimate Urban Music Experience?

WAVE 98 is the official broadcast partner for the 2025 Urban Music Festival, streaming live DJ sets and exclusive backstage artist chats all weekend.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    category: 'Concerts',
    tags: ['CONCERTS', 'FESTIVALS', 'LIVE', 'RADIO LIVE'],
    author: {
      id: 'maya-lin',
      name: 'Maya Lin',
      role: 'Music Editor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'January 8, 2026',
    readTime: '3 min read',
    viewsCount: 45,
    commentsCount: 112,
  },
  {
    id: 'art-04',
    slug: 'the-best-of-both-worlds-commercial-and-rap-music',
    title: 'The Best of Both Worlds: How Commercial and Rap Music Are Coming Together',
    excerpt: 'Genre borders are dissolving as rap producers engineer stadium anthems with high-energy house kicks.',
    content: `
# Cross-Genre Hybrid Sound

Analyzing the explosive growth of rap tracks engineered for club dancefloors and prime-time radio airplay.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    category: 'Featured',
    tags: ['FEATURED', 'DJ', 'STUDIO', 'PRO RADIO'],
    author: {
      id: 'dj-k-real',
      name: 'DJ K-Real',
      role: 'Director',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'January 8, 2026',
    readTime: '4 min read',
    viewsCount: 52,
    commentsCount: 88,
  },
  {
    id: 'art-05',
    slug: 'what-goes-into-creating-a-hit-single-production',
    title: 'What Goes into Creating a Hit Single? A Deep Dive into Music Production',
    excerpt: 'Step inside the mastering suite to understand analog summing, drum layering, and dynamic vocal tuning.',
    content: `
# Inside the Hitmaking Studio

Great songs do not happen by accident. Top mixing engineers break down the anatomy of a #1 billboard smash.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    category: 'Artists',
    tags: ['STUDIO', 'SYNTH', 'TECHNO', 'SOUND'],
    author: {
      id: 'ryan-taylor',
      name: 'Ryan Taylor',
      role: 'Resident DJ',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'January 8, 2026',
    readTime: '6 min read',
    viewsCount: 34,
    commentsCount: 71,
  },
  {
    id: 'art-06',
    slug: 'trap-stars-you-should-be-following-right-now',
    title: 'Trap Stars You Should Be Following Right Now',
    excerpt: 'The underground acts building loyal followings before major labels even discover their sound.',
    content: `
# The Next Wave of Underground Stars

Meet the 5 producers and lyricists reshaping the sonic landscape from Atlanta, London, and Toronto.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    category: 'Featured',
    tags: ['ARTISTS', 'DISCOVERY', 'ONLINE', 'RELEASES'],
    author: {
      id: 'maya-lin',
      name: 'Maya Lin',
      role: 'Music Editor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'January 8, 2026',
    readTime: '4 min read',
    viewsCount: 67,
    commentsCount: 104,
  },
  {
    id: 'art-07',
    slug: 'radio-revolution-shaping-future-of-music',
    title: 'Radio Revolution: How Our Station Is Shaping the Future of Music',
    excerpt: 'Live human curation, dynamic DJ mixing, and community voting vs algorithmic playback.',
    content: `
# Why Live Radio Is Still King

In a world of sterile playlists, WAVE 98 proves that energy, human connection, and real-time enthusiasm can never be replaced.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    category: 'Highlights',
    tags: ['ON AIR', 'PRO RADIO', 'RADIO LIVE', 'CULTURE'],
    author: {
      id: 'ryan-taylor',
      name: 'Ryan Taylor',
      role: 'Resident DJ',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'January 8, 2026',
    readTime: '5 min read',
    viewsCount: 76,
    commentsCount: 140,
  },
  {
    id: 'art-08',
    slug: 'up-and-coming-artists-to-watch-hip-hop',
    title: 'Up-and-Coming Artists to Watch: The Next Big Names in Hip-Hop',
    excerpt: 'Ten rising voices with distinctive delivery, innovative production choices, and viral momentum.',
    content: `
# Fresh Faces on the Block

Spotlighting the boldest new talents on WAVE 98’s Fresh Picks playlist.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    category: 'Featured',
    tags: ['FEATURED', 'ARTISTS', 'TRENDS', 'DISCOVERY'],
    author: {
      id: 'maya-lin',
      name: 'Maya Lin',
      role: 'Music Editor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'January 8, 2026',
    readTime: '4 min read',
    viewsCount: 92,
    commentsCount: 185,
  },
  {
    id: 'art-09',
    slug: 'urban-music-vs-streaming-services-whos-winning',
    title: "Urban Music vs. Streaming Services: Who's Really Winning?",
    excerpt: 'An investigation into licensing, payouts, radio royalty revenues, and direct listener patronage.',
    content: `
# The Economics of Modern Audio

Analyzing where artist revenue truly comes from in the streaming and broadcast era.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    category: 'Artists',
    tags: ['INDUSTRY', 'ONLINE', 'POP', 'HITS'],
    author: {
      id: 'ryan-taylor',
      name: 'Ryan Taylor',
      role: 'Resident DJ',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'January 8, 2026',
    readTime: '5 min read',
    viewsCount: 48,
    commentsCount: 92,
  },
  {
    id: 'art-10',
    slug: 'chart-breakdown-what-makes-a-song-the-one',
    title: "Chart Breakdown: What Makes a Song 'The One'?",
    excerpt: 'Deconstructing tempo, key changes, memorable taglines, and emotional resonance across the Top 20.',
    content: `
# Anatomy of a Number One Hit

What separates a pleasant background track from an undeniable worldwide anthem? We break down the harmonic components.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    category: 'Concerts',
    tags: ['CHARTS', 'COUNTDOWN', 'ROCK', 'POP', 'HITS'],
    author: {
      id: 'maya-lin',
      name: 'Maya Lin',
      role: 'Music Editor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'January 8, 2026',
    readTime: '4 min read',
    viewsCount: 63,
    commentsCount: 110,
  },
];
