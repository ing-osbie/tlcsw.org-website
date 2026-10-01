import {
  ChurchInfo,
  ChurchEvent,
  FaithPillar,
  FeaturedEventData,
  Ministry,
  NavigationItem,
  Sermon,
  StatItem,
} from "@/types";

export const navigationLinks: NavigationItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Ministries", href: "#ministries" },
  { name: "Sermons", href: "#sermons" },
  { name: "Events", href: "#events" },
];

export const socialLinks = {
  instagram:
    "https://www.instagram.com/thelordscovenantsanctuary?stkn=Yjc3M2cxMDI4NTFq&utm_source=qr",
  facebook: "https://www.facebook.com/share/1EoUNNhJ9r/?mibextid=wwXIfr",
  youtube: "https://youtube.com/@janglobalministries1?si=LWIrhm_E64Qk3Pjb",
  whatsapp: "https://wa.me/233207018121",
};

export const churchInfo: ChurchInfo = {
  name: "The Lord's Covenant Sanctuary",
  shortName: "The Lord's Covenant Sanctuary",
  tagline: "Faith. Community. Purpose.",
  description:
    "A place to encounter God, grow in faith, and build meaningful community. Welcoming all people in every season of life.",
  logo: {
    original: "/logo.jpg",
    dark: "/logo-dark.png",
    white: "/logo-white.png",
    emblemDark: "/logo-emblem-dark.png",
    emblemWhite: "/logo-emblem-white.png",
  },
  address: {
    street: "Hidden Treasures Events Center",
    cityStateZip: "East Legon, Accra, Ghana",
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Hidden+Treasures+Events+Center%2C+East+Legon%2C+Accra%2C+Ghana",
  },
  contact: {
    phone: "+233 20 701 8121",
    email: "info@tlcsw.org",
  },
  socials: socialLinks,
  serviceTimes: [
    {
      name: "Thursday · Prophetic Feast",
      time: "9:00 AM",
      description: "Prophetic worship, scripture teaching, prayer, and ministry.",
    },
    {
      name: "Sunday · The Transformation Service",
      time: "6:00 PM",
      description: "In-person worship encounter and transformative teaching.",
    },
  ],
};

export const heroContent = {
  kicker: "Welcome to The Lord's Covenant Sanctuary",
  headline: "Faith. Community. Purpose.",
  supportingCopy:
    "A place to encounter God, grow in faith, and build meaningful community.",
  serviceHighlight: "Thursday at 9:00 AM · Sunday at 6:00 PM",
  serviceNote: "In-Person Gathering",
  primaryCta: {
    label: "Join Us",
    href: "#service-info",
  },
  secondaryCta: {
    label: "Watch Sermons",
    href: "#sermons",
  },
  heroImage:
    "https://images.unsplash.com/photo-1548625361-19598284564c?auto=format&fit=crop&w=1600&q=80",
  heroImageAlt: "Warm light illuminating the sanctuary hall",
};

export const welcomeContent = {
  badge: "Welcome to Our Family",
  headline: "A Church for Every Season of Life",
  leadParagraph:
    "A ministry visioned with the five fold ministry to renew believers into their true image and identity, the mandate to equip and transform generations with a divine mandate from the Lord to liberate the world from evil oppression through prophecies, healing and teaching God's word empowered by the Holy Spirit to take over the world for the kingdom of God, And has a mission of spreading the goods news of our Lord Jesus Christ to the world and alleviating human suffering to providing the needs of people in the kingdom of Christ.",
  bodyParagraph: "",
  quote:
    "“For where two or three are gathered in my name, there am I among them.”",
  quoteReference: "Matthew 18:20",
  mainImage:
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
  mainImageAlt:
    "Members of The Lord's Covenant Sanctuary gathered in warm conversation",
  secondaryImage:
    "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
  secondaryImageAlt: "Sunlight shining through sanctuary windows",
  stats: [
    {
      value: "1+",
      label: "Years of Ministry",
      description: "Rooted in our local community",
    },
    {
      value: "10+",
      label: "Outreach Partners",
      description: "Serving vulnerable families locally and globally",
    },
    {
      value: "800+",
      label: "Active Members",
      description: "Growing together across our gatherings",
    },
  ] as StatItem[],
};

export const missionContent = {
  kicker: "Our Core Mission",
  headline:
    "To establish God's government on earth through the ministry of the Holy spirit",
  subheading: "",
  description: "",
  pillars: [] as FaithPillar[],
};

export const ministriesData: Ministry[] = [
  {
    id: "kids",
    title: "Covenant Kids",
    description:
      "A joyful, safe environment where children discover Bible stories, wonder, and the unconditional love of Jesus through creative play and worship.",
    image:
      "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=1000&q=80",
    href: "https://wa.me/233207018121",
  },
  {
    id: "youth",
    title: "The Collective Youth",
    description:
      "A vibrant community where students wrestle with life's big questions, build lifelong friendships, and develop an authentic faith.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1000&q=80",
    href: "https://wa.me/233207018121",
  },
  {
    id: "men",
    title: "Men’s Fellowship",
    description:
      "Brothers walking side-by-side in spiritual accountability, monthly breakfasts, outdoor retreats, and hands-on service projects.",
    image:
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=1000&q=80",
    href: "https://wa.me/233207018121",
  },
  {
    id: "women",
    title: "Covenant Women",
    description:
      "Fostering grace-filled fellowship, seasonal Bible studies, prayer circles, and mentorship that strengthens the soul.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
    href: "https://wa.me/233207018121",
  },
];

export const sermonsData: Sermon[] = [
  {
    id: "sermon-1",
    title: "OPENING SERVICE (THE LORD'S COVENANT SANCTUARY)",
    series: "Opening Service",
    speaker: "Joshua Addai Ntim",
    speakerRole: "Lead Pastor",
    date: "Sep 7, 2025",
    scripture: "Prophetic Service",
    duration: "Live Stream",
    image: "https://i.ytimg.com/vi/sc0q-iA1QW4/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/live/sc0q-iA1QW4?si=aNpYABMfwmuih_zb",
    audioUrl: "https://spotify.com",
  },
  {
    id: "sermon-2",
    title: "ATMOSPHERE OF PROPHECIES 2025",
    series: "Atmosphere of Prophecies",
    speaker: "Joshua Addai Ntim",
    speakerRole: "Lead Pastor",
    date: "May 4, 2025",
    scripture: "Prophetic Service",
    duration: "Live Stream",
    image: "https://i.ytimg.com/vi/f8lQSmbLgIQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/live/f8lQSmbLgIQ?si=QRItfRo0_M0LxvEj",
    audioUrl: "https://spotify.com",
  },
  {
    id: "sermon-3",
    title: "THE PROPHETIC RIDE",
    series: "The Prophetic Ride",
    speaker: "Joshua Addai Ntim",
    speakerRole: "Lead Pastor",
    date: "Oct 19, 2025",
    scripture: "Prophetic Service",
    duration: "Live Stream",
    image: "https://i.ytimg.com/vi/fh43qjwbmf8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/live/fh43qjwbmf8?si=fOk0AhdIJ4jyi7rQ",
    audioUrl: "https://spotify.com",
  },
];

export const eventsData: ChurchEvent[] = [
  {
    id: "shift-prophetic-encounter",
    title: "SHIFT · PROPHETIC ENCOUNTER",
    date: "Saturday, 31st October",
    month: "OCT",
    day: "31",
    time: "5:00 PM",
    location: "Hidden Treasures Events Center - East Legon",
    category: "Prophetic Encounter • Worship • Word",
    description:
      "Join us for SHIFT · Prophetic Encounter ministering with Joshua A. Ntim, Uncle Ato, and Becky Bonney.",
    href: "https://www.google.com/maps/dir/?api=1&destination=Hidden+Treasures+Events+Center%2C+East+Legon%2C+Accra%2C+Ghana",
    image: "/images/shift-web.jpg",
    ministers: ["Uncle Ato", "Joshua A. Ntim", "Becky Bonney"],
    contactPhone: "+233 20 701 8121",
  },
];

export const callToActionContent = {
  kicker: "You Are Always Welcome",
  headline: "Come As You Are.",
  supportingCopy:
    "No matter your story, your background, or where you find yourself today, there is a place reserved for you at our table. We would love to meet you this Sunday.",
  primaryButtonText: "Plan Your Visit",
  secondaryButtonText: "Contact Our Team",
  backgroundImage:
    "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1800&q=80",
};

export const featuredEvent: FeaturedEventData = {
  eyebrow: "UPCOMING EVENT",
  title: "3 Days Prophetic Service",
  theme: "Manifestation",
  description:
    "Join us for three powerful days of prophetic worship, prayer, teaching, and divine manifestation.",
  date: "28th — 30th October",
  days: "Wednesday — Friday",
  time: "6:30 PM each night",
  location: "Hidden Treasures Events Center",
  area: "East Legon",
  image: "/images/3-days-1.jpeg",
  ministers: ["Joshua A. Ntim"],
  contactPhone: "+233 20 701 8121",
};

export const givingDetails = {
  heading: "KINGDOM GIVING & PARTNERSHIP",
  subheading: "",
  mobileMoney: {
    title: "Mobile Money",
    accountName: "The Lord's Covenant Sanctuary Worldwide/Joshua Addai Ntim",
    number: "0543605402",
    merchantId: "948221",
    reference: "948221",
  },
  bank: {
    title: "Bank Transfer",
    accountName: "The Lord's Covenant Sanctuary Worldwide/Joshua Addai Ntim",
    name: "CBG",
    accountNumber: "2356543640001",
    swiftCode: "CBGHGHAC",
  },
};

