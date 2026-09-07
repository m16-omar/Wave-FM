import { ScheduleSlot, DayOfWeek } from '../types/schedule';
import { ASSET_IMAGES } from '../assets/images';

export const WEEKLY_SCHEDULE: Record<DayOfWeek, ScheduleSlot[]> = {
  monday: [
    {
      id: 'mon-01',
      showId: 'gudugbe',
      showTitle: 'Gudugbe Inu Iwe Iroyin',
      showSlug: 'gudugbe',
      category: 'Daily Newspaper Review',
      // Note: Amwoni and crew are not the ones in charge of Gudugbe
      hostName: 'Imole Editorial & News Crew',
      hostAvatar: ASSET_IMAGES.staff,
      image: ASSET_IMAGES.shows.gudugbe,
      day: 'monday',
      startTime: '09:00 AM',
      endTime: '10:00 AM',
      timeSlot: '09:00 – 10:00 AM',
      description: 'Your daily dose of headlines, insights, and perspectives that matter across major national dailies.',
      isLiveNow: false,
    },
    {
      id: 'mon-02',
      showId: 'olomon-leto',
      showTitle: "O'lomori Leto (Olomon Leto)",
      showSlug: 'olomon-leto',
      category: 'Indigenous Culture',
      hostName: 'Akintoye Tosin (aka E GET COVER)',
      hostAvatar: ASSET_IMAGES.staff,
      image: ASSET_IMAGES.shows.olomonLeto,
      day: 'monday',
      startTime: '02:00 PM',
      endTime: '03:00 PM',
      timeSlot: '02:00 – 03:00 PM (WAT)',
      description: 'Deeply rooted Yoruba culture, family values, indigenous highlife melodies, folklore, and heritage discourse.',
      isLiveNow: false,
    },
  ],
  tuesday: [
    {
      id: 'tue-01',
      showId: 'gudugbe',
      showTitle: 'Gudugbe Inu Iwe Iroyin',
      showSlug: 'gudugbe',
      category: 'Daily Newspaper Review',
      // Note: Amwoni and crew are not the ones in charge of Gudugbe
      hostName: 'Imole Editorial & News Crew',
      hostAvatar: ASSET_IMAGES.staff,
      image: ASSET_IMAGES.shows.gudugbe,
      day: 'tuesday',
      startTime: '09:00 AM',
      endTime: '10:00 AM',
      timeSlot: '09:00 – 10:00 AM',
      description: 'Your daily dose of headlines, insights, and perspectives that matter across major national dailies.',
      isLiveNow: false,
    },
  ],
  wednesday: [
    {
      id: 'wed-01',
      showId: 'gudugbe',
      showTitle: 'Gudugbe Inu Iwe Iroyin',
      showSlug: 'gudugbe',
      category: 'Daily Newspaper Review',
      // Note: Amwoni and crew are not the ones in charge of Gudugbe
      hostName: 'Imole Editorial & News Crew',
      hostAvatar: ASSET_IMAGES.staff,
      image: ASSET_IMAGES.shows.gudugbe,
      day: 'wednesday',
      startTime: '09:00 AM',
      endTime: '10:00 AM',
      timeSlot: '09:00 – 10:00 AM',
      description: 'Your daily dose of headlines, insights, and perspectives that matter across major national dailies.',
      isLiveNow: false,
    },
    {
      id: 'wed-02',
      showId: 'to-ba-se-wo-ni',
      showTitle: 'To Ba Se Wo Ni',
      showSlug: 'to-ba-se-wo-ni',
      category: 'Civic Dialogue',
      hostName: 'Adeola Fate',
      hostAvatar: ASSET_IMAGES.staff,
      image: ASSET_IMAGES.shows.toBaSeWoNi,
      day: 'wednesday',
      startTime: '02:00 PM',
      endTime: '03:00 PM',
      timeSlot: '02:00 – 03:00 PM (WAT)',
      description: 'Hard-hitting community dialogue, public affairs analysis, citizen accountability, and civic advocacy for Lagos.',
      isLiveNow: false,
    },
  ],
  thursday: [
    {
      id: 'thu-01',
      showId: 'gudugbe',
      showTitle: 'Gudugbe Inu Iwe Iroyin',
      showSlug: 'gudugbe',
      category: 'Daily Newspaper Review',
      // Note: Amwoni and crew are not the ones in charge of Gudugbe
      hostName: 'Imole Editorial & News Crew',
      hostAvatar: ASSET_IMAGES.staff,
      image: ASSET_IMAGES.shows.gudugbe,
      day: 'thursday',
      startTime: '09:00 AM',
      endTime: '10:00 AM',
      timeSlot: '09:00 – 10:00 AM',
      description: 'Your daily dose of headlines, insights, and perspectives that matter across major national dailies.',
      isLiveNow: false,
    },
    {
      id: 'thu-02',
      showId: 'irin-ajo-eda',
      showTitle: 'Irin Ajo Eda',
      showSlug: 'irin-ajo-eda',
      category: 'Late Night Stories',
      hostName: 'Adeshina Baba Omo',
      hostAvatar: ASSET_IMAGES.staff,
      image: ASSET_IMAGES.shows.irinAjoEda,
      day: 'thursday',
      startTime: '09:00 PM',
      endTime: '10:00 PM',
      timeSlot: '09:00 – 10:00 PM (WAT)',
      description: 'Thoughtful midnight life reflections, human drama, moral lessons, bedtime soothing melodies, and serene companionship.',
      isLiveNow: false,
    },
  ],
  friday: [
    {
      id: 'fri-01',
      showId: 'gudugbe',
      showTitle: 'Gudugbe Inu Iwe Iroyin',
      showSlug: 'gudugbe',
      category: 'Daily Newspaper Review',
      // Note: Amwoni and crew are not the ones in charge of Gudugbe
      hostName: 'Imole Editorial & News Crew',
      hostAvatar: ASSET_IMAGES.staff,
      image: ASSET_IMAGES.shows.gudugbe,
      day: 'friday',
      startTime: '09:00 AM',
      endTime: '10:00 AM',
      timeSlot: '09:00 – 10:00 AM',
      description: 'Your daily dose of headlines, insights, and perspectives that matter across major national dailies.',
      isLiveNow: false,
    },
    {
      id: 'fri-02',
      showId: 'comedy-splash',
      showTitle: 'Comedy Splash',
      showSlug: 'comedy-splash',
      category: 'Humor & Entertainment',
      hostName: 'MC Toothbrush (and Mosquito)',
      hostAvatar: ASSET_IMAGES.hero,
      image: ASSET_IMAGES.shows.comedySplash,
      day: 'friday',
      startTime: '07:00 PM',
      endTime: '08:00 PM',
      timeSlot: '07:00 – 08:00 PM',
      description: 'Laugh out loud. Live every moment. Splashing your Friday with non-stop laughter and humor!',
      isLiveNow: false,
    },
  ],
  saturday: [
    {
      id: 'sat-01',
      showId: 'request-time',
      showTitle: 'Request Time and Shoutouts',
      showSlug: 'request-time',
      category: 'Interactive Requests',
      hostName: 'Oluwafavour',
      hostAvatar: ASSET_IMAGES.hero3,
      image: ASSET_IMAGES.shows.requestTime,
      day: 'saturday',
      startTime: '05:30 PM',
      endTime: '06:00 PM',
      timeSlot: '05:30 – 06:00 PM',
      description: 'Direct listener dedication hotline, WhatsApp voice notes, song requests, love messages, and shoutouts.',
      isLiveNow: false,
    },
    {
      id: 'sat-02',
      showId: 'gist-hangout',
      showTitle: 'Gist Hangout Show',
      showSlug: 'gist-hangout-show',
      category: 'Morning Magazine',
      hostName: 'Big Val',
      hostAvatar: ASSET_IMAGES.staff,
      image: ASSET_IMAGES.shows.gistHangout,
      day: 'saturday',
      startTime: '06:00 PM',
      endTime: '07:00 PM',
      timeSlot: '06:00 – 07:00 PM',
      description: "Saturday's biggest entertainment gist hangout: trending stories, celebrity buzz, music, movies & more!",
      isLiveNow: false,
    },
  ],
  sunday: [
    {
      id: 'sun-01',
      showId: 'reggae-hour',
      showTitle: 'Reggae Hour',
      showSlug: 'reggae-hour',
      category: 'Roots & Reggae',
      hostName: 'Pablo Lafrica, Balogun of Reggae Music',
      hostAvatar: ASSET_IMAGES.hero2,
      image: ASSET_IMAGES.shows.reggaeHour,
      day: 'sunday',
      startTime: '05:00 PM',
      endTime: '06:00 PM',
      timeSlot: '05:00 – 06:00 PM (WAT)',
      description: 'Roots rock reggae, classic dub selections, consciousness vibes, dancehall rhythms, and Afro-reggae jams.',
      isLiveNow: false,
    },
    {
      id: 'sun-02',
      showId: 'gospel-light',
      showTitle: 'Gospel Light',
      showSlug: 'gospel-light',
      category: 'Faith & Devotion',
      hostName: 'Big Val',
      hostAvatar: ASSET_IMAGES.staff,
      image: ASSET_IMAGES.shows.gospelLight,
      day: 'sunday',
      startTime: '06:00 PM',
      endTime: '07:00 PM',
      timeSlot: '06:00 – 07:00 PM',
      description: 'Real worship. Real words. Real impact. Uplifting your soul, illuminating your faith, and inspiring your life.',
      isLiveNow: false,
    },
  ],
};

const DEFAULT_FALLBACK_SHOW: ScheduleSlot = {
  id: 'daily-live-broadcast',
  showId: 'gudugbe',
  showTitle: 'Gudugbe Inu Iwe Iroyin',
  showSlug: 'gudugbe',
  category: 'Daily Newspaper Review',
  // Note: Amwoni and crew are not the ones in charge of Gudugbe
  hostName: 'Imole Editorial & News Crew',
  hostAvatar: ASSET_IMAGES.staff,
  image: ASSET_IMAGES.shows.gudugbe,
  day: 'monday',
  startTime: '09:00 AM',
  endTime: '10:00 AM',
  timeSlot: '09:00 – 10:00 AM',
  description: 'Your daily dose of headlines, insights, and perspectives that matter across major national dailies.',
  isLiveNow: true,
};

export const getCurrentLiveShow = (now: Date = new Date()): ScheduleSlot => {
  const dayIndexMap: DayOfWeek[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const currentDay = dayIndexMap[now.getDay()] || 'monday';
  const slots = WEEKLY_SCHEDULE[currentDay] || [];

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const parseTimeToMinutes = (timeStr: string): number => {
    const match = timeStr.trim().match(/(\d+):(\d+)\s*(AM|PM)?/i);
    if (!match) return 0;
    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const ampm = match[3]?.toUpperCase();
    if (ampm === 'PM' && hours < 12) hours += 12;
    if (ampm === 'AM' && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  for (const slot of slots) {
    const startMin = parseTimeToMinutes(slot.startTime);
    let endMin = parseTimeToMinutes(slot.endTime);
    // If show spans midnight
    if (endMin <= startMin) {
      if (currentMinutes >= startMin || currentMinutes < endMin) {
        return { ...slot, isLiveNow: true };
      }
    } else {
      if (currentMinutes >= startMin && currentMinutes < endMin) {
        return { ...slot, isLiveNow: true };
      }
    }
  }

  // If currently outside show hours, return the closest upcoming or first show of today
  if (slots.length > 0) {
    const upcoming = slots.find(
      (slot) => parseTimeToMinutes(slot.startTime) > currentMinutes
    );
    return upcoming ? { ...upcoming, isLiveNow: false } : { ...slots[0], isLiveNow: false };
  }

  return DEFAULT_FALLBACK_SHOW;
};

export const getNextLiveShow = (now: Date = new Date()): ScheduleSlot => {
  const dayIndexMap: DayOfWeek[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const currentDay = dayIndexMap[now.getDay()] || 'monday';
  const slots = WEEKLY_SCHEDULE[currentDay] || [];
  const current = getCurrentLiveShow(now);
  const currentIndex = slots.findIndex((s) => s.id === current.id);
  
  if (currentIndex >= 0 && currentIndex + 1 < slots.length) {
    return slots[currentIndex + 1];
  }

  // Rollover to the next day with shows
  for (let i = 1; i <= 7; i++) {
    const nextDay = dayIndexMap[(now.getDay() + i) % 7];
    const nextSlots = WEEKLY_SCHEDULE[nextDay];
    if (nextSlots && nextSlots.length > 0) {
      return nextSlots[0];
    }
  }

  return DEFAULT_FALLBACK_SHOW;
};

export interface ConsecutiveShowItem {
  id: string;
  slug: string;
  title: string;
  host: string;
  hostAvatar: string;
  schedule: string;
  dayLabel: string;
  timeSlot: string;
  coverArt: string;
  votes: number;
}

export const getUpcomingConsecutiveShows = (
  count: number = 4,
  now: Date = new Date()
): ConsecutiveShowItem[] => {
  const dayIndexMap: DayOfWeek[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const currentDayIndex = now.getDay();

  const parseTimeToMinutes = (timeStr: string): number => {
    const match = timeStr.trim().match(/(\d+):(\d+)\s*(AM|PM)?/i);
    if (!match) return 0;
    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const ampm = match[3]?.toUpperCase();
    if (ampm === 'PM' && hours < 12) hours += 12;
    if (ampm === 'AM' && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  const results: ConsecutiveShowItem[] = [];

  const votesMap: Record<string, number> = {
    'gospel-light': 3840,
    'comedy-splash': 3410,
    'gudugbe': 2950,
    'irin-ajo-eda': 2720,
    'olomon-leto': 2610,
    'to-ba-se-wo-ni': 2490,
    'request-time': 2380,
    'gist-hangout': 2250,
    'reggae-hour': 2190,
  };

  const formatDayLabel = (day: DayOfWeek): string => {
    return day.charAt(0).toUpperCase() + day.slice(1);
  };

  // Loop through upcoming days across the broadcast calendar (up to 2 full weeks)
  for (let offset = 0; offset < 14 && results.length < count; offset++) {
    const day = dayIndexMap[(currentDayIndex + offset) % 7];
    const slots = WEEKLY_SCHEDULE[day] || [];

    for (const slot of slots) {
      if (results.length >= count) break;

      const startMin = parseTimeToMinutes(slot.startTime);
      // If evaluating today, only take upcoming or currently playing shows
      if (offset === 0 && startMin + 60 < currentMinutes) {
        continue;
      }

      const dayName = formatDayLabel(day);
      const scheduleString = `${dayName}s, ${slot.timeSlot}`;

      results.push({
        id: `${slot.id}-${offset}`,
        slug: slot.showSlug,
        title: slot.showTitle,
        host: slot.hostName,
        hostAvatar: slot.hostAvatar,
        schedule: scheduleString,
        dayLabel: dayName,
        timeSlot: slot.timeSlot,
        coverArt: slot.image,
        votes: votesMap[slot.showSlug] || 2500,
      });
    }
  }

  // Fallback: If still under count, cycle through all scheduled shows so it is NEVER empty
  if (results.length < count) {
    const allSlots = Object.values(WEEKLY_SCHEDULE).flat();
    for (const slot of allSlots) {
      if (results.length >= count) break;
      results.push({
        id: `fallback-${slot.id}-${results.length}`,
        slug: slot.showSlug,
        title: slot.showTitle,
        host: slot.hostName,
        hostAvatar: slot.hostAvatar,
        schedule: `${formatDayLabel(slot.day)}s, ${slot.timeSlot}`,
        dayLabel: formatDayLabel(slot.day),
        timeSlot: slot.timeSlot,
        coverArt: slot.image,
        votes: votesMap[slot.showSlug] || 2500,
      });
    }
  }

  return results.slice(0, count);
};

