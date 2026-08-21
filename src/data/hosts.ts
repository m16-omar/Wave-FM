import { RadioHost } from '../types/host';

export const RADIO_HOSTS: RadioHost[] = [
  {
    id: 'marcus-chloe',
    slug: 'marcus-and-chloe',
    name: 'Marcus Cole & Chloe Vance',
    onAirName: 'Marcus & Chloe',
    role: 'Morning Show Hosts & Brand Ambassadors',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
    bannerPhoto: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&auto=format&fit=crop&q=80',
    bio: 'The dynamic duo bringing unstoppable morning energy, comedic sketches, and global hits to millions every weekday.',
    fullBio: 'Marcus Cole and Chloe Vance have co-hosted The Morning Drive on WAVE 98.5 FM for over 5 award-winning years. Marcus brings a seasoned stand-up comedy and broadcast background, while Chloe is an acclaimed culture journalist and festival MC. Together, their chemistry sets the standard for breakfast radio.',
    shows: [
      { id: 'morning-drive', title: 'The Morning Drive', slug: 'the-morning-drive', schedule: 'Mon - Fri, 06:00 - 10:00 AM' }
    ],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      spotify: 'https://spotify.com',
    },
    favoriteTracks: ['Starry Night - Peggy Gou', 'Espresso - Sabrina Carpenter', 'Baddadan - Chase & Status'],
    isFeatured: true,
  },
  {
    id: 'dj-k-real',
    slug: 'dj-k-real',
    name: 'DJ K-Real',
    onAirName: 'DJ K-Real',
    role: 'Urban Music Director & Midday Host',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    bannerPhoto: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&auto=format&fit=crop&q=80',
    bio: 'Pioneering hip-hop turntablist, mixtape curator, and tastemaker championing underground street sounds.',
    fullBio: 'DJ K-Real is renowned for his rapid-fire scratching, impeccable track selection, and deep ties to the international hip-hop and grime circuits. Host of Urban Pulse, his sets are essential listening for genuine beat enthusiasts.',
    shows: [
      { id: 'urban-pulse', title: 'Urban Pulse: Midday Flow', slug: 'urban-pulse', schedule: 'Mon - Fri, 10:00 AM - 02:00 PM' }
    ],
    socials: {
      instagram: 'https://instagram.com',
      mixcloud: 'https://mixcloud.com',
      twitter: 'https://twitter.com',
    },
    favoriteTracks: ['Not Like Us - Kendrick Lamar', 'Sprinter - Dave & Central Cee'],
    isFeatured: true,
  },
  {
    id: 'dj-luna',
    slug: 'dj-luna',
    name: 'DJ Luna',
    onAirName: 'DJ Luna',
    role: 'Afternoon Drive Host & Club Specialist',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80',
    bannerPhoto: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&auto=format&fit=crop&q=80',
    bio: 'High-octane electronic dance and festival sound curator delivering peak energy for the evening commute.',
    fullBio: 'DJ Luna has headlined stages from Ultra Europe to EDC Vegas. On WAVE FM’s afternoon rush, she delivers nonstop energy and the finest club cuts.',
    shows: [
      { id: 'the-sound-session', title: 'The Sound Session: Afternoon Drive', slug: 'the-sound-session', schedule: 'Mon - Fri, 02:00 - 06:00 PM' }
    ],
    socials: {
      instagram: 'https://instagram.com',
      spotify: 'https://spotify.com',
    },
    isFeatured: true,
  },
  {
    id: 'maya-lin',
    slug: 'maya-lin',
    name: 'Maya Lin',
    onAirName: 'Maya Lin',
    role: 'Evening Host & Head of Artist Relations',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80',
    bannerPhoto: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&auto=format&fit=crop&q=80',
    bio: 'The trusted voice for global chart countdowns and intimate conversations with music titans.',
    fullBio: 'Maya Lin hosts Hitmakers Live and WAVE Deep Dive. Her journalistic integrity and easy-going charm have made her the go-to interviewer for the music industry’s biggest stars.',
    shows: [
      { id: 'hitmakers-live', title: 'Hitmakers Live: Evening Countdown', slug: 'hitmakers-live', schedule: 'Mon - Fri, 06:00 - 09:00 PM' }
    ],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
    isFeatured: true,
  },
  {
    id: 'leo-vance',
    slug: 'leo-vance',
    name: 'Leo Vance',
    onAirName: 'Leo Vance',
    role: 'Resident Producer & Underground Curator',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80',
    bannerPhoto: 'https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=1600&auto=format&fit=crop&q=80',
    bio: 'Late night sound selector, techno producer and host of After Hours Club.',
    fullBio: 'Leo Vance commands the midnight frequencies with deep melodic techno, progressive soundscapes, and international guest mixes.',
    shows: [
      { id: 'after-hours-club', title: 'After Hours Club: Night Sessions', slug: 'after-hours-club', schedule: 'Mon - Sun, 09:00 PM - 02:00 AM' }
    ],
    socials: {
      instagram: 'https://instagram.com',
      mixcloud: 'https://mixcloud.com',
    },
    isFeatured: false,
  },
  {
    id: 'dj-jax',
    slug: 'dj-jax',
    name: 'DJ Jax',
    onAirName: 'DJ Jax',
    role: 'Weekend Curator & Vinyl Specialist',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80',
    bannerPhoto: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1600&auto=format&fit=crop&q=80',
    bio: 'Vinyl collector and master of 90s/2000s throwbacks and soulful weekend sound journeys.',
    fullBio: 'DJ Jax is the soul of our weekend programming, weaving timeless nostalgia with classic groove sensibilities.',
    shows: [
      { id: 'weekend-rewind', title: 'Weekend Rewind & Chill', slug: 'weekend-rewind', schedule: 'Sat - Sun, 12:00 - 04:00 PM' }
    ],
    socials: {
      instagram: 'https://instagram.com',
    },
    isFeatured: false,
  }
];
