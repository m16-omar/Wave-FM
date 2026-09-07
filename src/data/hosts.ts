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
    id: 'ridwan-olawale',
    slug: 'ridwan-olawale',
    name: 'Ridwan Olawale (Amin Oloun)',
    roleTag: 'Host',
    photo: ASSET_IMAGES.amwoni,
    bannerPhoto: ASSET_IMAGES.studio,
    bio: 'Host of Amiwoni, delivering vibrant indigenous talk, great company, and cultural melodies.',
    fullBio: 'Ridwan Olawale Issa Sowthu (aka Amin Oloun) is the charismatic voice behind Amiwoni on Imole 106.3 FM. Known for his warmth, wisdom, and deep connection with Lagos grassroots listeners, he brings uplifting conversations and authentic Yoruba broadcast excellence.',
    rating: 5,
    showTitle: 'Amiwoni',
    showSchedule: 'Every Tuesday, 01:00 – 02:00 PM',
    favoriteTracks: [
      'Remember - Asake',
      'Synchro System - King Sunny Ade',
      'Board Members - Chief Commander Ebenezer Obey',
      'Olorun Agbaye - Nathaniel Bassey',
      'Egwu - Chike & Mohbad',
    ],
    socials: {
      instagram: 'https://instagram.com/imolefmlagos',
      twitter: 'https://twitter.com/imolefmlagos',
      spotify: 'https://spotify.com',
    },
  },
  {
    id: 'mc-toothbrush',
    slug: 'mc-toothbrush',
    name: 'MC Toothbrush',
    roleTag: 'Host',
    photo: ASSET_IMAGES.hero,
    bannerPhoto: ASSET_IMAGES.building,
    bio: 'High-energy on-air comedian and entertainer bringing laughter and weekend energy.',
    fullBio: 'MC Toothbrush (and Mosquito) commands the microphone on Comedy Splash every Friday evening. Combining street wit, hilarious comedy drops, and viral banter, he kicks off the Lagos weekend with pure joy and laughter.',
    rating: 5,
    showTitle: 'Comedy Splash',
    showSchedule: 'Every Friday, 07:00 – 08:00 PM',
    favoriteTracks: [
      'Twe Twe - Kizz Daniel ft. Davido',
      'Ogechi (Remix) - BoyPee, Hyce, Brown Joel',
      'Unavailable - Davido',
      'City Boys - Burna Boy',
    ],
    socials: {
      instagram: 'https://instagram.com/imolefmlagos',
      twitter: 'https://twitter.com/imolefmlagos',
      youtube: 'https://youtube.com',
    },
  },
  {
    id: 'adeola-fate',
    slug: 'adeola-fate',
    name: 'Adeola Fate',
    roleTag: 'Host',
    photo: ASSET_IMAGES.hero2,
    bannerPhoto: ASSET_IMAGES.studio,
    bio: 'Veteran broadcaster leading hard-hitting civic dialogue, community affairs, and advocacy.',
    fullBio: 'Adeola Fate is a seasoned broadcast journalist and host of To Ba Se Wo Ni. With uncompromising dedication to grassroots truth, civic rights, and community welfare, she provides an open platform for citizens across Lagos State.',
    rating: 5,
    showTitle: 'To Ba Se Wo Ni',
    showSchedule: 'Every Wednesday, 02:00 – 03:00 PM',
    favoriteTracks: [
      'Mr President - African China',
      'Monster You Made - Burna Boy',
      'Ayo - Simi',
      'Essence - Wizkid ft. Tems',
    ],
    socials: {
      instagram: 'https://instagram.com/imolefmlagos',
      twitter: 'https://twitter.com/imolefmlagos',
      spotify: 'https://spotify.com',
    },
  },
  {
    id: 'oluwafavour',
    slug: 'oluwafavour',
    name: 'Oluwafavour',
    roleTag: 'Host',
    photo: ASSET_IMAGES.hero3,
    bannerPhoto: ASSET_IMAGES.building,
    bio: 'The listener dedication darling hosting live shoutouts and song requests.',
    fullBio: 'Oluwafavour brings heart, melody, and connection to Request Time and Shoutouts every Saturday. She connects family, friends, and lovers across Lagos through song dedications and heartfelt on-air shoutouts.',
    rating: 5,
    showTitle: 'Request Time and Shoutouts',
    showSchedule: 'Every Saturday, 05:30 – 06:00 PM',
    favoriteTracks: [
      'Essence - Wizkid ft. Tems',
      'Duduke - Simi',
      'Tobechukwu - Nathaniel Bassey ft. Mercy Chinwo',
      'Ayo - Simi',
    ],
    socials: {
      instagram: 'https://instagram.com/imolefmlagos',
      twitter: 'https://twitter.com/imolefmlagos',
    },
  },
  {
    id: 'akintoye-tosin',
    slug: 'akintoye-tosin',
    name: 'Akintoye Tosin (E GET COVER)',
    roleTag: 'Host',
    photo: ASSET_IMAGES.shows.olomonLeto,
    bannerPhoto: ASSET_IMAGES.studio,
    bio: 'Cultural icon and Yoruba heritage custodian behind O’lomori Leto.',
    fullBio: 'Akintoye Tosin (aka E GET COVER) hosts O’lomori Leto (Olomon Leto) every Monday on Imole 106.3 FM, championing Yoruba proverbs, family values, child discipline, and native wisdom.',
    rating: 5,
    showTitle: "O'lomori Leto",
    showSchedule: 'Every Monday, 02:00 – 03:00 PM',
    favoriteTracks: [
      'Synchro System - King Sunny Ade',
      'Board Members - Chief Commander Ebenezer Obey',
      'Joromi - Sir Victor Uwaifo',
    ],
    socials: {
      instagram: 'https://instagram.com/imolefmlagos',
    },
  },
  {
    id: 'pablo-lafrica',
    slug: 'pablo-lafrica',
    name: 'Pablo Lafrica',
    roleTag: 'DJ',
    photo: ASSET_IMAGES.shows.reggaeHour,
    bannerPhoto: ASSET_IMAGES.building,
    bio: 'The Balogun of Reggae Music curating conscious roots and dub vibes.',
    fullBio: 'Pablo Lafrica delivers positive vibrations, deep consciousness, and classic dub records on Reggae Hour every Sunday evening. A legendary voice in Nigeria’s roots-reggae movement.',
    rating: 5,
    showTitle: 'Reggae Hour',
    showSchedule: 'Every Sunday, 05:00 – 06:00 PM',
    favoriteTracks: [
      'Could You Be Loved - Bob Marley & The Wailers',
      'Send Down The Rain - Majek Fashek',
      'Three Little Birds - Bob Marley',
    ],
    socials: {
      instagram: 'https://instagram.com/imolefmlagos',
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
