import { RadioHost } from '../types/host';
import { ASSET_IMAGES } from '../assets/images';

export interface PresenterItem {
  id: string;
  slug: string;
  name: string;
  roleTag: 'DJ' | 'Host' | 'Owner' | 'Producer';
  photo: string;
  bannerPhoto: string;
  bio: string;
  fullBio: string;
  rating: number;
  showTitle: string;
  showSchedule: string;
  favoriteTracks: string[];
  socials: {
    instagram?: string;
    twitter?: string;
    spotify?: string;
    youtube?: string;
    mixcloud?: string;
  };
}

export const PRESENTERS_DATA: PresenterItem[] = [
  {
    id: 'mia-johnson',
    slug: 'mia-johnson',
    name: 'Mia Johnson',
    roleTag: 'DJ',
    photo: ASSET_IMAGES.hero2,
    bannerPhoto: ASSET_IMAGES.studio,
    bio: 'Tastemaker delivering deep urban rhythms, house grooves, and prime-time energy.',
    fullBio: 'Mia Johnson is Imole 106.3 FM’s resident tastemaker and the magnetic voice behind Hitmakers Live. With a decade of club and festival appearances across London, Ibiza, and Berlin, Mia seamlessly blends chart-topping urban anthems with exclusive underground white labels.',
    rating: 5,
    showTitle: 'Hitmakers Live',
    showSchedule: 'Mon - Fri, 06:00 - 09:00 PM',
    favoriteTracks: [
      'Starry Night (Club Mix) - Peggy Gou',
      'Espresso - Sabrina Carpenter',
      'Not Like Us - Kendrick Lamar',
      'Who - Jimin',
      'Timeless - The Weeknd & Playboi Carti',
    ],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      spotify: 'https://spotify.com',
      youtube: 'https://youtube.com',
    },
  },
  {
    id: 'jordan-carter',
    slug: 'jordan-carter',
    name: 'Jordan Carter',
    roleTag: 'Host',
    photo: ASSET_IMAGES.hero,
    bannerPhoto: ASSET_IMAGES.hero2,
    bio: 'Host of the morning flagship and voice of the listener countdown.',
    fullBio: 'Jordan Carter brings infectious optimism, sharp wit, and deep music trivia to the microphone every single day. As the curator of The Fan Zone and The Rap Radar chart, Jordan connects directly with callers and global streamers.',
    rating: 5,
    showTitle: 'The Fan Zone',
    showSchedule: 'Mon - Fri, 04:00 - 07:00 PM',
    favoriteTracks: [
      'Who - Jimin',
      'Timeless - The Weeknd & Playboi Carti',
      "Don't Bother Us - Samie Bower",
      'The Life - SAINT PARIS BABY',
    ],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      spotify: 'https://spotify.com',
    },
  },
  {
    id: 'chloe-nguyen',
    slug: 'chloe-nguyen',
    name: 'Chloe Nguyen',
    roleTag: 'Host',
    photo: ASSET_IMAGES.amwoni,
    bannerPhoto: ASSET_IMAGES.building,
    bio: 'Late night sound selector, techno producer, and host of The Sound Session.',
    fullBio: 'Chloe Nguyen commands the airwaves from midnight to dawn with atmospheric soundscapes, melodic techno, and deep dub sessions.',
    rating: 5,
    showTitle: 'The Sound Session',
    showSchedule: 'Daily, 01:00 - 07:00 AM',
    favoriteTracks: [
      'Starry Night (Club Mix) - Peggy Gou',
      'Baddadan - Chase & Status',
      'Outside Season - Sleepy',
    ],
    socials: {
      instagram: 'https://instagram.com',
      mixcloud: 'https://mixcloud.com',
      spotify: 'https://spotify.com',
    },
  },
  {
    id: 'ryan-taylor',
    slug: 'ryan-taylor',
    name: 'Ryan Taylor',
    roleTag: 'Owner',
    photo: ASSET_IMAGES.staff,
    bannerPhoto: ASSET_IMAGES.hero3,
    bio: 'Pioneering turntablist and music director shaping the sound of Imole 106.3 FM.',
    fullBio: 'Ryan Taylor is a veteran DJ and executive producer with over 15 years at the bleeding edge of broadcast audio and urban music cultivation.',
    rating: 5,
    showTitle: 'After Hours Mix',
    showSchedule: 'Weekdays, 01:00 - 03:00 PM',
    favoriteTracks: [
      'Not Like Us - Kendrick Lamar',
      'Back Outside - Sleepy',
      'Million Dollar Baby - Tommy Richman',
    ],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      spotify: 'https://spotify.com',
    },
  },
  {
    id: 'samantha-lopez',
    slug: 'samantha-lopez',
    name: 'Samantha Lopez',
    roleTag: 'DJ',
    photo: ASSET_IMAGES.amwoni,
    bannerPhoto: ASSET_IMAGES.hero,
    bio: 'High-octane electronic dance and festival sound curator delivering peak energy.',
    fullBio: 'Samantha Lopez brings festival main-stage energy straight into your headphones with unstoppable remixes and high-speed BPM blends.',
    rating: 5,
    showTitle: 'Vibe Check',
    showSchedule: 'Weekdays, 04:00 - 07:00 PM',
    favoriteTracks: [
      'Espresso - Sabrina Carpenter',
      'Who - Jimin',
      'Starry Night - Peggy Gou',
    ],
    socials: {
      instagram: 'https://instagram.com',
      spotify: 'https://spotify.com',
      youtube: 'https://youtube.com',
    },
  },
  {
    id: 'alex-rivera',
    slug: 'alex-rivera',
    name: 'Alex Rivera',
    roleTag: 'DJ',
    photo: ASSET_IMAGES.hero3,
    bannerPhoto: ASSET_IMAGES.studio,
    bio: 'The wonderful founder and resident DJ behind the station vibe.',
    fullBio: 'Alex Rivera founded Imole 106.3 FM with a singular mission: pure music authenticity, live community engagement, and celebrating the power of radio.',
    rating: 5,
    showTitle: 'Throwback Jam',
    showSchedule: 'Weekdays, 05:00 - 08:00 PM',
    favoriteTracks: [
      'Throwback Classic Jam - Alex Rivera',
      'Starry Night - Peggy Gou',
      "Don't Bother Us - Samie Bower",
    ],
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
      spotify: 'https://spotify.com',
    },
  },
];

export const RADIO_HOSTS: RadioHost[] = PRESENTERS_DATA.map((p) => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  onAirName: p.name,
  role: p.bio,
  photo: p.photo,
  bannerPhoto: p.bannerPhoto,
  bio: p.bio,
  fullBio: p.fullBio,
  shows: [
    {
      id: p.showTitle.toLowerCase().replace(/ /g, '-'),
      title: p.showTitle,
      slug: p.showTitle.toLowerCase().replace(/ /g, '-'),
      schedule: p.showSchedule,
    },
  ],
  socials: p.socials,
  favoriteTracks: p.favoriteTracks,
  isFeatured: true,
}));
