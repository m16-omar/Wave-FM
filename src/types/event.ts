export interface StationEvent {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDetails: string;
  image: string;
  bannerImage: string;
  date: string; // e.g. "Nov 15, 2026"
  time: string; // e.g. "8:00 PM - 2:00 AM"
  venue: string;
  address: string;
  city: string;
  category: string;
  ticketPrice: string; // e.g. "$25 - $75" or "Free Admission"
  ticketUrl?: string;
  isFeatured?: boolean;
  isPast?: boolean;
  lineup?: string[];
  organizer: string;
}
