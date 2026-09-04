export interface StationLeadership {
  name: string;
  role: string;
  title: string;
  bio: string;
  photo: string;
}

export interface StationInfo {
  name: string;
  frequency: string;
  tagline: string;
  motto: string;
  launchDate: string;
  address: string;
  city: string;
  state: string;
  country: string;
  hotline: string;
  email: string;
  shortBio: string;
  fullBio: string[];
  leadership: StationLeadership[];
  pillars: {
    title: string;
    description: string;
  }[];
}

export const STATION_INFO: StationInfo = {
  name: 'Imole 106.3 FM',
  frequency: '106.3 FM',
  tagline: "Lagos's Urban Indigenous Voice",
  motto: 'Inform • Inspire • Illuminate',
  launchDate: '21st November 2025',
  address: '20, Adetoro John Street, Fadeyi',
  city: 'Lagos',
  state: 'Lagos State',
  country: 'Nigeria',
  hotline: '+234 800 466 5336',
  email: 'info@imolefm.com',
  shortBio:
    "Imole 106.3FM is Lagos's urban indigenous voice — a commercial radio station born to inform, inspire, and illuminate. Launched on 21st November 2025, Imole (\"light\" in Yoruba) broadcasts to Lagos and its environs.",
  fullBio: [
    'Imole 106.3FM is Lagos’s urban indigenous voice — a commercial radio station born to inform, inspire, and illuminate. Launched on 21st November 2025, Imole (“light” in Yoruba) broadcasts to Lagos and its environs, reaching millions of listeners with programming rooted in culture, community, and conversation that matters.',
    'Under the leadership of Chairman Dr. Moses O. Bodunrin and Vice Chairman Mrs. Deborah O. Bodunrin, and driven day-to-day by General Manager Mrs. Peju Adekunle, Imole 106.3FM is more than a radio station — it is a movement to bring light to every home, every ward, and every heart it reaches.',
    'From news and lifestyle to faith-driven programming and civic engagement, Imole 106.3FM stands as a trusted companion for the people of Lagos — indigenous in spirit, urban in sound, and unwavering in its mission to shine.',
  ],
  leadership: [
    {
      name: 'Dr. Moses O. Bodunrin',
      role: 'Chairman',
      title: 'Station Chairman & Visionary Founder',
      bio: 'Providing visionary leadership and strategic direction for Imole 106.3 FM, championing cultural elevation, ethical broadcasting, and community illumination.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Mrs. Deborah O. Bodunrin',
      role: 'Vice Chairman',
      title: 'Station Vice Chairman & Executive Director',
      bio: 'Co-leading the organizational governance, institutional partnerships, and faith-centered community outreach across Lagos State.',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Mrs. Peju Adekunle',
      role: 'General Manager',
      title: 'General Manager & Head of Operations',
      bio: 'Steering daily station operations, commercial partnerships, on-air programming quality, and talent excellence at the Imole Broadcast Complex.',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
  ],
  pillars: [
    {
      title: 'INFORM',
      description:
        'Delivering authentic, up-to-the-minute local and national news, civic education, traffic updates, and grassroots reports.',
    },
    {
      title: 'INSPIRE',
      description:
        'Elevating hearts and minds through faith-driven programming, inspiring interviews, youth empowerment, and cultural pride.',
    },
    {
      title: 'ILLUMINATE',
      description:
        'Shining the light on community achievements, uncovering crucial conversations, and bringing truth and clarity to every household.',
    },
  ],
};
