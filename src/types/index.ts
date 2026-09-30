export interface NavigationItem {
  name: string;
  href: string;
}

export interface ServiceTime {
  name: string;
  time: string;
  description: string;
}

export interface ChurchInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  logo?: {
    original: string;
    dark: string;
    white: string;
    emblemDark: string;
    emblemWhite: string;
  };
  address: {
    street: string;
    cityStateZip: string;
    googleMapsUrl: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  socials: {
    instagram: string;
    youtube: string;
    facebook: string;
    whatsapp: string;
    spotify?: string;
  };
  serviceTimes: ServiceTime[];
}

export interface Ministry {
  id: string;
  title: string;
  category?: string;
  ageGroup?: string;
  description: string;
  meetingTime?: string;
  image: string;
  href: string;
}

export interface Sermon {
  id: string;
  title: string;
  series: string;
  speaker: string;
  speakerRole: string;
  date: string;
  scripture: string;
  duration: string;
  image: string;
  videoUrl?: string;
  audioUrl?: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  time: string;
  location: string;
  category: string;
  description: string;
  href: string;
  image?: string;
  ministers?: string[];
  contactPhone?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface FaithPillar {
  number: string;
  title: string;
  description: string;
}

export interface FeaturedEventData {
  eyebrow: string;
  title: string;
  description: string;
  date: string;
  days: string;
  time: string;
  location: string;
  area: string;
  image: string;
  ministers?: string[];
  contactPhone?: string;
}
