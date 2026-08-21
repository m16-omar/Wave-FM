import { Article, ArticleCategory } from '../types/article';

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  { id: 'cat-1', name: 'Music News', slug: 'music-news', count: 24, color: '#FFE600' },
  { id: 'cat-2', name: 'Interviews', slug: 'interviews', count: 18, color: '#00F0FF' },
  { id: 'cat-3', name: 'DJ & Production', slug: 'dj-production', count: 12, color: '#FF007F' },
  { id: 'cat-4', name: 'Festivals & Events', slug: 'festivals-events', count: 15, color: '#8B5CF6' },
  { id: 'cat-5', name: 'Culture & Trends', slug: 'culture-trends', count: 9, color: '#10B981' },
  { id: 'cat-6', name: 'Album Reviews', slug: 'album-reviews', count: 14, color: '#F59E0B' },
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-01',
    slug: 'peggy-gou-unveils-groundbreaking-world-tour-and-club-album',
    title: 'Peggy Gou Unveils Groundbreaking 2026 World Tour & Headline Festival Dates',
    excerpt: 'The global dance powerhouse opens up in an exclusive WAVE FM interview about sound design, vintage synthesizers, and creating the summer anthem.',
    content: `
# Peggy Gou Takes Over Global Dancefloors

In a candid, exclusive conversation with WAVE 98.5 FM’s Maya Lin, international DJ, producer, and fashion icon **Peggy Gou** broke down the creative journey behind her latest chart-topping single, *Starry Night (Club Mix)*, and shared high-voltage details about her upcoming 40-city world tour.

## "The Energy in the Studio Was Electric"

*"We spent nearly two months testing variations of the 909 kick drum in small underground clubs before releasing the master track,"* Gou explained. *"Radio listeners crave something that feels both nostalgically 90s house and sharp with modern low-end punch."*

### What to Expect on Tour:
- Custom 360-degree LED visual stage architecture
- Live guest vocal appearances from top UK and European underground acts
- Secret b2b club pop-ups in select cities announced 2 hours before midnight

> "Music is pure frequency. When the crowd and the sound system hit that resonant wavelength together, there is no feeling like it on Earth."

Peggy Gou’s headline tour kicks off next month in London, Paris, Tokyo, and New York. Stay locked into **WAVE 98.5 FM** for VIP backstage passes and exclusive ticket giveaways!
    `,
    featuredImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80',
    category: 'Interviews',
    tags: ['Peggy Gou', 'House Music', 'Festivals', 'Tour', 'Electronic'],
    author: {
      id: 'maya-lin',
      name: 'Maya Lin',
      role: 'Music Editor & On-Air Host',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80',
      bio: 'Maya Lin leads music journalism at WAVE FM, tracking global charts and conducting backstage artist dialogues.',
    },
    publishedAt: 'Aug 19, 2026',
    readTime: '4 min read',
    viewsCount: 14280,
    commentsCount: 34,
    isFeatured: true,
    isTrending: true,
  },
  {
    id: 'art-02',
    slug: 'the-revolution-of-modern-drill-and-afrobeats-fusion',
    title: 'The Sound Evolution: How UK Drill and Afrobeats Are Redefining Global Radio',
    excerpt: 'From London basement studios to global stadium tours, cross-continental collaborations are driving the most energetic wave in radio history.',
    content: `
# The New Global Rhythm

The sonic landscape of contemporary radio has experienced a monumental transformation. Blending 808 slides with syncopated Afrobeats polyrhythms, producers across London, Lagos, Paris, and Toronto are reshaping mainstream radio playlists.

## Breaking Down the Cross-Genre Phenomenon

On our midday show **Urban Pulse**, DJ K-Real regularly spins new underground tracks that combine West African percussive grooves with heavy melodic drill basslines. 

### Key Elements of the Movement:
1. **Syncopated Log Drums:** Borrowed from Amapiano and injected with aggressive trap snares.
2. **Dual-Language Hooks:** Seamless switches between English, Yoruba, French, and local street slang.
3. **High-Definition Spatial Mixing:** Tuned specifically for stadium sound systems and high-end automotive audio.

Stay tuned to WAVE 98.5 FM every weekday at 10 AM for the freshest unreleased dubplates.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&auto=format&fit=crop&q=80',
    category: 'Music News',
    tags: ['Afrobeats', 'UK Drill', 'Hip-Hop', 'Urban Culture', 'Trends'],
    author: {
      id: 'dj-k-real',
      name: 'DJ K-Real',
      role: 'Urban Music Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Aug 18, 2026',
    readTime: '6 min read',
    viewsCount: 9820,
    commentsCount: 21,
    isFeatured: true,
  },
  {
    id: 'art-03',
    slug: 'inside-the-analog-synth-renaissance-in-studio-sound',
    title: 'Inside the Studio: Why Top Chart Producers Are Ditching Plugins for Analog Rigs',
    excerpt: 'We step inside Berlin and Los Angeles recording facilities to see how legendary hardware synthesizers are powering the 2026 hit singles.',
    content: `
# The Warmth of Voltage

Despite countless digital audio workstations and software emulations, chart-topping producers are returning in droves to bulky patch cables, analog filters, and vintage tape machines.

## Why Real Silicon Still Wins

Producer and WAVE FM resident host **Leo Vance** explains:

> "There is a non-linear imperfection to true analog circuitry. When you push a Moog filter or a Roland Juno into red saturation, it produces harmonic overtones that digital algorithms simply approximate."

Listen to the difference during **After Hours Club** every midnight on WAVE 98.5 FM.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&auto=format&fit=crop&q=80',
    category: 'DJ & Production',
    tags: ['Synthesizers', 'Studio Gear', 'Production', 'Audio Engineering'],
    author: {
      id: 'leo-vance',
      name: 'Leo Vance',
      role: 'Resident Producer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Aug 16, 2026',
    readTime: '5 min read',
    viewsCount: 7540,
    commentsCount: 15,
  },
  {
    id: 'art-04',
    slug: 'wave-festival-2026-lineup-announcement',
    title: 'WAVE Live Summer Festival 2026: Official Headliners & Early Bird Access',
    excerpt: '3 Stages, 45 Artists, 30,000 Fans. The annual WAVE FM flagship summer music celebration returns bigger than ever.',
    content: `
# The Ultimate Summer Gathering

WAVE 98.5 FM is thrilled to announce the official phase 1 artist roster for the **WAVE Summer Music Festival 2026**. 

Taking place across Waterfront Park on September 12-14, this year's lineup features international headliners alongside local breakout stars.

### Stage Breakdown:
- **The Main Wave Stage:** Global Pop, Hip-Hop, and Chart Leaders
- **The Bass Arena:** Drum & Bass, Dubstep, and High-BPM Energy
- **The Oasis Lounge:** Melodic Deep House, Soul, and Sunset Sessions

Early bird tickets go on sale this Friday at 10 AM. WAVE FM mobile app members get instant 24-hour presale privileges.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80',
    category: 'Festivals & Events',
    tags: ['WAVE Fest', 'Summer 2026', 'Concerts', 'Live Music', 'Tickets'],
    author: {
      id: 'marcus-chloe',
      name: 'Chloe Vance',
      role: 'Events Host & Correspondent',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Aug 14, 2026',
    readTime: '3 min read',
    viewsCount: 18900,
    commentsCount: 88,
    isTrending: true,
  },
  {
    id: 'art-05',
    slug: 'review-billie-eilish-hit-me-hard-and-soft-deluxe',
    title: 'Album Breakdown: Why Billie Eilish’s Latest Project Is a Masterclass in Dynamic Range',
    excerpt: 'An in-depth sonic inspection of acoustic intimacy transitioning into heavy bass explosions.',
    content: `
# Intimacy Meets Sub-Bass Power

From whispering acoustic vocals to seismic synthesizer drops, *HIT ME HARD AND SOFT* proves that radio pop can maintain supreme dynamic range and emotional depth simultaneously.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1200&auto=format&fit=crop&q=80',
    category: 'Album Reviews',
    tags: ['Billie Eilish', 'Pop', 'Album Review', 'Acoustic', 'Finneas'],
    author: {
      id: 'maya-lin',
      name: 'Maya Lin',
      role: 'Music Editor & On-Air Host',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Aug 12, 2026',
    readTime: '5 min read',
    viewsCount: 8430,
    commentsCount: 19,
  },
  {
    id: 'art-06',
    slug: '10-breakout-independent-artists-you-need-on-your-radar',
    title: '10 Breakout Indie & Underground Artists You Need on Your Radar This Month',
    excerpt: 'WAVE FM’s music discovery team curates the ten rising artists disrupting streaming algorithms and dominating radio airwaves.',
    content: `
# Fresh Blood in the Airwaves

Every week our curation staff listens through hundreds of demo submissions and independent releases. Here are ten names setting the underground on fire.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&auto=format&fit=crop&q=80',
    category: 'Culture & Trends',
    tags: ['Indie', 'New Music', 'Discovery', 'Underground', 'Spotlight'],
    author: {
      id: 'dj-luna',
      name: 'DJ Luna',
      role: 'Music Curator',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Aug 10, 2026',
    readTime: '7 min read',
    viewsCount: 11200,
    commentsCount: 29,
  }
];
