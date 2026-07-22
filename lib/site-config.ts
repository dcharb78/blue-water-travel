export const siteConfig = {
  name: "Blue Water Travel & Cruises",
  shortName: "Blue Water Travel",
  tagline: "Big Dreams. Better Vacations.",
  slogan: "We want you to travel blue!",
  description:
    "Personalized cruises, all-inclusive escapes, European adventures, and destination weddings — planned for you by travel experts with 30+ years of experience.",
  url: "https://www.bluewatertravelandcruises.com",
  locale: "en_US",
  email: "info@bluewatertravelandcruises.com",
  phone: "(816) 365-5978",
  instagram: "https://www.instagram.com/bluewatertrvl",
  facebook: "https://www.facebook.com/BlueWaterTravel",
  pinterest: "https://www.pinterest.com/BlueWaterTravel",
  bookOnlineUrl: "https://www.bluewatertravelandcruises.com/book-online.html",
  requestQuoteUrl:
    "https://app.tern.travel/public/forms/HFbO8tMy9G65mlarO0H8kg/responses/new",
  address: {
    street: "Lake Lotawana",
    city: "Lake Lotawana",
    state: "MO",
    zip: "64086",
    country: "US",
  },
  serviceAreas: [
    "Lake Lotawana, Missouri",
    "Kansas City, Missouri",
    "Lees Summit, Missouri",
    "Blue Springs, Missouri",
    "Nationwide",
  ],
  foundedYear: 1994,
  yearsExperience: 30,
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/types-of-travel",
    label: "Types of Travel",
    children: [
      { href: "/all-inclusive", label: "All Inclusive" },
      { href: "/ocean-cruises", label: "Ocean Cruises" },
      { href: "/river-cruises", label: "River Cruises" },
      { href: "/packages-tours", label: "Packages & Tours" },
    ],
  },
  { href: "/weddings-honeymoons", label: "Weddings & Honeymoons" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/meet-the-team", label: "Meet the Team" },
  { href: "/join-our-team", label: "Join Our Team" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
] as const;

export const ctaLinks = [
  {
    href: siteConfig.requestQuoteUrl,
    label: "Request a Quote",
    primary: true,
    external: true,
  },
  { href: "/contact", label: "Contact Us", primary: false, external: false },
  { href: siteConfig.bookOnlineUrl, label: "Book Online", primary: false, external: true },
] as const;

export const services = [
  {
    slug: "all-inclusive",
    title: "All-Inclusive Resorts",
    shortDescription:
      "Stress-free Caribbean and Mexico escapes with meals, drinks, and activities included.",
    description:
      "Discover handpicked all-inclusive resorts across the Caribbean, Mexico, and beyond. We match you with the perfect property for couples, families, or groups — handling flights, transfers, room categories, and special requests so you can simply arrive and unwind.",
    icon: "🏝️",
    highlights: [
      "Caribbean & Mexico favorites",
      "Family-friendly and adults-only options",
      "Group rates and room blocks",
      "Upgrade requests handled for you",
    ],
  },
  {
    slug: "ocean-cruises",
    title: "Ocean Cruises",
    shortDescription:
      "Explore the world by sea with personalized cruise planning and exclusive perks.",
    description:
      "From Alaska glaciers to Mediterranean ports, we help you choose the right cruise line, itinerary, cabin category, and pre/post extensions. Our industry partnerships unlock added value — from onboard credits to cabin upgrades when available.",
    icon: "🚢",
    highlights: [
      "All major cruise lines",
      "Alaska, Caribbean, Europe & beyond",
      "Cabin selection guidance",
      "Pre- and post-cruise hotel stays",
    ],
  },
  {
    slug: "river-cruises",
    title: "River Cruises",
    shortDescription:
      "Intimate river journeys through Europe, Asia, and America's heartland.",
    description:
      "River cruising offers a relaxed pace and immersive port experiences. We guide you through European classics like the Danube and Rhine, as well as emerging destinations — matching you with the right ship, season, and shore excursions.",
    icon: "⛵",
    highlights: [
      "European river classics",
      "Small-ship, immersive experiences",
      "Included excursions on many lines",
      "Perfect for multi-generational travel",
    ],
  },
  {
    slug: "packages-tours",
    title: "Packages & Tours",
    shortDescription:
      "Curated land packages and guided tours across Europe, the USA, and worldwide.",
    description:
      "Whether you dream of Tuscany, Ireland, national parks, or a custom multi-city itinerary, we build land packages that fit your pace and interests. Escorted tours, independent travel, and hybrid options — all planned with the same personal attention.",
    icon: "🗺️",
    highlights: [
      "European vacations & city breaks",
      "USA weekend getaways",
      "Escorted and independent tours",
      "Custom multi-destination itineraries",
    ],
  },
] as const;

export const teamMembers = [
  {
    name: "Terri Jobe",
    role: "Owner & Lead Advisor",
    bio: "As the owner of my travel agency, I'm passionate about helping others create unforgettable travel experiences. I live in the charming community of Lake Lotawana, Missouri, where I enjoy the peaceful lake life with my wonderful blended family. Being in the travel industry since 1994, opening my own agency in 2017 has been the most rewarding decision. Travel has always been my passion, and now I get to share that enthusiasm by turning my clients' dream vacations into reality.",
    photo: "/team/terri-jobe.jpg",
    phone: "(816) 365-5978",
  },
  {
    name: "Allison Dailey",
    role: "Travel Advisor",
    bio: "Born and raised in Lee's Summit, I've been with Blue Water Travel since 2022. Some of my favorite places are Cancun, London, and Sanibel, FL. In my free time I enjoy working out, reading, going to Chiefs games, and gardening. I have a Frenchie named Franklin who is my first-born son.",
    photo: "/team/allison-headshot.jpeg",
    phone: "(816) 217-4685",
  },
  {
    name: "Kristi Fate",
    role: "Travel Advisor",
    bio: "With over 30 years of personal travel experience, I've explored beautiful destinations across Mexico, the Caribbean, Hawaii, and the U.S. Through Blue Water Travel, I get to share my passion for travel by helping plan unforgettable vacations — easy and stress-free.",
    photo: "/team/kristi-headshot.jpg",
    phone: "(816) 719-2208",
  },
  {
    name: "Brian Kimmell",
    role: "Travel Advisor",
    bio: "I've lived in Blue Springs with my wife for 25 years. I have a serious love for sunshine, sandy beaches, and unforgettable escapes — from the turquoise waters of Mexico to the all-inclusive bliss of the Dominican Republic. I'm here to guide you with personalized service that fits your style and budget.",
    photo: "/team/brian-headshot.jpeg",
    phone: "(816) 813-3894",
  },
  {
    name: "Debbie Peterson",
    role: "Travel Advisor",
    bio: "My travel addiction began when my husband won a trip to Thailand many years ago. Since then I have sipped champagne at the top of the Eiffel Tower, ridden a camel at the base of the Pyramids, and cruised through the Panama Canal. I look forward to partnering and sharing my travel passion with you.",
    photo: "/team/deb-headshot.jpg",
    phone: "(816) 582-5933",
  },
  {
    name: "Johnna Thielbar",
    role: "Travel Advisor",
    bio: "Based in Oak Grove, Missouri, with five kids, four grandkids, and two lovable dogs. My favorite destinations are Ireland and Sandals Grande Antigua. As your travel agent, I handle all the details so you can truly enjoy every moment of your journey.",
    photo: "/team/johnna-thielbar.jpg",
    phone: "(816) 699-0419",
  },
  {
    name: "Joie Reardon",
    role: "Social Media / Advisor",
    bio: "Growing up with your mom as a Travel Advisor definitely has its perks! I earned my Bachelors Degree in Hospitality Leadership from Missouri State University. I love All-Inclusive travel in the Caribbean and have recently been inspired by European travel.",
    photo: "/team/joie-headshot.jpg",
    phone: "(816) 723-0407",
  },
  {
    name: "Erica Wild",
    role: "Travel Advisor",
    bio: "My first international vacation was in 2014 for my honeymoon and I have loved to travel ever since! When I'm not traveling, I'm spending time outdoors at the lake, with family and friends, and cheering on the Chiefs.",
    photo: "/team/erica-headshot.jpg",
    phone: "(913) 708-2234",
  },
] as const;

export const faqs = [
  {
    question: "Why use a travel advisor instead of booking online?",
    answer:
      "When you book with Blue Water Travel, you gain a real person who advocates for you before, during, and after your trip. We handle changes, solve problems, and often secure perks and pricing you won't find on your own — at no extra cost to you for most bookings.",
  },
  {
    question: "Do you charge planning fees?",
    answer:
      "Many of our cruise, resort, and tour bookings are compensated by our travel partners, so there is no fee to you. For complex custom itineraries, destination weddings, or extensive research projects, we discuss any planning fees upfront before work begins.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Lake Lotawana, Missouri and proudly serve Kansas City, Lees Summit, Blue Springs, and travelers nationwide. Consultations are available in person, by phone, and via video.",
  },
  {
    question: "Can you help with destination weddings and honeymoons?",
    answer:
      "Absolutely. We specialize in destination weddings, honeymoons, and vow renewals — coordinating guest travel, room blocks, group rates, and romantic add-ons at resorts and cruise lines worldwide.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For peak seasons, destination weddings, and popular cruise sailings, we recommend 9–12 months ahead. That said, we can often find great options on shorter notice — reach out and we'll advise based on your dates and destination.",
  },
] as const;

export { blogPosts } from "./content/blog";
