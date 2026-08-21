export interface RadioHost {
  id: string;
  slug: string;
  name: string;
  onAirName?: string;
  role: string; // e.g. "Morning Show Host & Music Director"
  photo: string;
  bannerPhoto: string;
  bio: string;
  fullBio: string;
  shows: {
    id: string;
    title: string;
    slug: string;
    schedule: string;
  }[];
  socials: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
    mixcloud?: string;
    spotify?: string;
    email?: string;
  };
  favoriteTracks?: string[];
  isFeatured?: boolean;
}
