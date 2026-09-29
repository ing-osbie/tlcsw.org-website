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
      description: "Prophetic worship, scripture teaching, and ministry.",
    },
    {
      name: "Sunday · The Transformation Service",
      time: "6:00 PM",
      description: "In-person worship encounter and transformative teaching.",
    },
    {
      name: "Sunday · Live Streaming",
      time: "6:30 PM",
      description: "Live interactive online broadcast for our global sanctuary family.",
    },
  ],
};

export const heroContent = {
  kicker: "Welcome to The Lord's Covenant Sanctuary",
  headline: "Faith. Community. Purpose.",
  supportingCopy:
    "A place to encounter God, grow in faith, and build meaningful community.",
  serviceHighlight: "Thursday at 9:00 AM · Sunday at 6:00 PM",
  serviceNote: "In-Person & Streaming Online at 6:30 PM",
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
    "Whether you are walking through the doors of a church for the very first time, returning after years away, or seeking a deeper and more authentic walk of faith, we invite you to experience God's transformative love.",
  bodyParagraph:
    "We believe faith is best lived in honest relationships. We do not demand perfection—instead, we foster a space of grace, vulnerability, and genuine hospitality where people of all generations can discover Christ-centered purpose together.",
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
      value: "30+",
      label: "Years of Ministry",
      description: "Rooted in our local community since 1994",
    },
    {
      value: "50+",
      label: "Outreach Partners",
      description: "Serving vulnerable families locally and globally",
    },
    {
      value: "1,200+",
      label: "Active Members",
      description: "Growing together across three Sunday gatherings",
    },
  ] as StatItem[],
};

export const missionContent = {
  kicker: "Our Core Mission",
  headline: "Knowing God. Loving People. Changing Lives.",
  subheading:
    "Our rhythm of life is rooted in the timeless teachings of Jesus: devotion to prayer, unconditional love for our neighbors, and transformative service in our world.",
  description:
    "At The Lord's Covenant Sanctuary, everything we do stems from three unshakeable anchors. We believe spiritual growth is not a private endeavor, but an adventure lived out through community, generous hospitality, and active compassion for our city.",
  pillars: [
    {
      number: "01",
      title: "Knowing God",
      description:
        "Pursuing genuine intimacy with Christ through scripture, thoughtful worship, and deep contemplative prayer.",
    },
    {
      number: "02",
      title: "Loving People",
      description:
        "Building authentic multi-generational community where everyone is known, valued, supported, and welcomed.",
    },
    {
      number: "03",
      title: "Changing Lives",
      description:
        "Living out sacrificial generosity and justice, bringing restoration and hope to our city and beyond.",
    },
  ] as FaithPillar[],
};

export const ministriesData: Ministry[] = [
  {
    id: "kids",
    title: "Covenant Kids",
    category: "Ages 0 - 11",
    ageGroup: "Nursery - 5th Grade",
    description:
      "A joyful, safe environment where children discover Bible stories, wonder, and the unconditional love of Jesus through creative play and worship.",
    meetingTime: "Sundays at 6:00 PM",
    image:
      "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=1000&q=80",
    href: "https://wa.me/233207018121",
  },
  {
    id: "youth",
    title: "The Collective Youth",
    category: "Ages 12 - 18",
    ageGroup: "Middle & High School",
    description:
      "A vibrant community where students wrestle with life's big questions, build lifelong friendships, and develop an authentic faith.",
    meetingTime: "Wednesdays at 6:30 PM",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1000&q=80",
    href: "https://wa.me/233207018121",
  },
  {
    id: "young-adults",
    title: "Young Adults",
    category: "Ages 18 - 30",
    ageGroup: "College & Young Professionals",
    description:
      "Navigating career, purpose, and relationships with intentional community, weekly small groups, and monthly collective dinners.",
    meetingTime: "Bi-Weekly Gatherings",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80",
    href: "https://wa.me/233207018121",
  },
  {
    id: "men",
    title: "Men’s Fellowship",
    category: "Adult Men",
    ageGroup: "All Ages",
    description:
      "Brothers walking side-by-side in spiritual accountability, monthly breakfasts, outdoor retreats, and hands-on service projects.",
    meetingTime: "1st & 3rd Saturdays at 7:30 AM",
    image:
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=1000&q=80",
    href: "https://wa.me/233207018121",
  },
  {
    id: "women",
    title: "Covenant Women",
    category: "Adult Women",
    ageGroup: "All Ages",
    description:
      "Fostering grace-filled fellowship, seasonal Bible studies, prayer circles, and mentorship that strengthens the soul.",
    meetingTime: "Tuesdays at 9:30 AM & 6:30 PM",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
    href: "https://wa.me/233207018121",
  },
  {
    id: "outreach",
    title: "Local & Global Outreach",
    category: "Mission & Compassion",
    ageGroup: "Whole Church",
    description:
      "Extending Christ's hands and feet to our neighborhood food pantry, homeless shelters, refugee support, and global missions.",
    meetingTime: "Monthly Service Projects",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80",
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
    id: "prophetic-service",
    title: "3 DAYS OF PROPHETIC SERVICE",
    date: "1st — 4th October",
    month: "OCT",
    day: "1 — 4",
    time: "6:30 PM each night · Doors open at 6:00 PM",
    location: "Hidden Treasures Events Center, East Legon, Accra, Ghana",
    category: "Worship • Prayer • Teaching • Prophetic Ministry",
    description:
      "Join us for three powerful days of worship, prayer, teaching and prophetic ministry.",
    href: "https://www.google.com/maps/dir/?api=1&destination=Hidden+Treasures+Events+Center%2C+East+Legon%2C+Accra%2C+Ghana",
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
  title: "3 Days of Prophetic Service",
  description:
    "Join us for three powerful days of worship, prayer, teaching and prophetic ministry.",
  date: "1st — 4th October",
  days: "Thursday — Sunday",
  time: "6:30 PM each night",
  location: "Hidden Treasures Events Center",
  area: "East Legon",
  image: "/images/prophetic-service.png",
};

export const givingDetails = {
  heading: "Give Online",
  subheading:
    "Thank you for supporting the work of God. You can give using any of the payment options below.",
  mobileMoney: {
    title: "Mobile Money",
    number: "0543605402",
    merchantId: "948221",
    reference: "948221",
  },
  bank: {
    title: "Bank Transfer",
    name: "CBG",
    accountNumber: "2356543640001",
    swiftCode: "CBGHGHAC",
  },
};

