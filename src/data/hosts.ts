import { RadioHost } from '../types/host';

export interface PresenterItem {
  id: string;
  slug: string;
  name: string;
  roleTag: 'DJ' | 'Host' | 'Owner' | 'Producer';
  photo: string;
  bio: string;
  rating: number;
  showTitle: string;
}

export const PRESENTERS_DATA: PresenterItem[] = [
  {
    id: 'p-01',
    slug: 'mia-johnson',
    name: 'Mia Johnson',
    roleTag: 'DJ',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Tastemaker delivering deep urban rhythms, house grooves, and prime-time energy.',
    rating: 5,
    showTitle: 'Hitmakers Live',
  },
  {
    id: 'p-02',
    slug: 'jordan-carter',
    name: 'Jordan Carter',
    roleTag: 'Host',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    bio: 'Host of the morning flagship and voice of the listener countdown.',
    rating: 5,
    showTitle: 'The Fan Zone',
  },
  {
    id: 'p-03',
    slug: 'chloe-nguyen',
    name: 'Chloe Nguyen',
    roleTag: 'Host',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Late night sound selector, techno producer, and host of The Sound Session.',
    rating: 5,
    showTitle: 'The Sound Session',
  },
  {
    id: 'p-04',
    slug: 'ryan-taylor',
    name: 'Ryan Taylor',
    roleTag: 'Owner',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    bio: 'Pioneering turntablist and music director shaping the sound of WAVE 98.',
    rating: 5,
    showTitle: 'After Hours Mix',
  },
  {
    id: 'p-05',
    slug: 'samantha-lopez',
    name: 'Samantha Lopez',
    roleTag: 'DJ',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    bio: 'High-octane electronic dance and festival sound curator delivering peak energy.',
    rating: 5,
    showTitle: 'Vibe Check',
  },
  {
    id: 'p-06',
    slug: 'alex-rivera',
    name: 'Alex Rivera',
    roleTag: 'DJ',
    photo: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80',
    bio: 'The wonderful founder and resident DJ behind the station vibe.',
    rating: 5,
    showTitle: 'Throwback Jam',
  },
];

export const RADIO_HOSTS: RadioHost[] = [
  {
    id: 'alex-rivera',
    slug: 'alex-rivera',
    name: 'Alex Rivera',
    onAirName: 'Alex Rivera',
    role: 'Founder & Resident DJ',
    photo: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=80',
    bannerPhoto: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&auto=format&fit=crop&q=80',
    bio: 'The wonderful founder, and the reason for all the fun and games on WAVE 98 FM.',
    fullBio: 'Alex Rivera founded WAVE 98 with a dream to bring unfiltered music energy, live human curation, and dynamic DJ mixing back to the airwaves.',
    shows: [
      { id: 'throwback-jam', title: 'Throwback Jam', slug: 'throwback-jam', schedule: 'Weekdays, 05:00 - 08:00 PM' }
    ],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      spotify: 'https://spotify.com',
    },
    favoriteTracks: ['Starry Night - Peggy Gou', 'Espresso - Sabrina Carpenter'],
    isFeatured: true,
  },
  {
    id: 'jordan-carter',
    slug: 'jordan-carter',
    name: 'Jordan Carter',
    onAirName: 'Jordan Carter',
    role: 'Host Star & Broadcast Lead',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=80',
    bannerPhoto: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&auto=format&fit=crop&q=80',
    bio: 'Meet Jordan Carter, the beloved host and voice of the listener countdown.',
    fullBio: 'Jordan Carter brings infectious energy and unmatched charisma to the airwaves every day.',
    shows: [
      { id: 'the-fan-zone', title: 'The Fan Zone', slug: 'the-fan-zone', schedule: 'Mon - Fri, 04:00 - 07:00 PM' }
    ],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
    favoriteTracks: ['Who - Jimin', 'Timeless - The Weeknd'],
    isFeatured: true,
  },
  {
    id: 'chloe-nguyen',
    slug: 'chloe-nguyen',
    name: 'Chloe Nguyen',
    onAirName: 'Chloe Nguyen',
    role: 'Late Night Sound Selector',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    bannerPhoto: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&auto=format&fit=crop&q=80',
    bio: 'Host of The Sound Session: Midnight to Dawn.',
    fullBio: 'Chloe Nguyen curates deep electronic journeys and late-night underground anthems.',
    shows: [
      { id: 'the-sound-session', title: 'The Sound Session', slug: 'the-sound-session', schedule: 'Daily, 01:00 - 07:00 AM' }
    ],
    socials: {
      instagram: 'https://instagram.com',
      mixcloud: 'https://mixcloud.com',
    },
    isFeatured: true,
  },
];
