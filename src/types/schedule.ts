export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export interface ScheduleSlot {
  id: string;
  showId: string;
  showTitle: string;
  showSlug: string;
  category: string;
  hostName: string;
  hostAvatar: string;
  image: string;
  day: DayOfWeek;
  startTime: string; // "08:00 AM"
  endTime: string;   // "11:00 AM"
  timeSlot: string;  // "08:00 - 11:00 AM"
  description: string;
  isLiveNow?: boolean;
}
