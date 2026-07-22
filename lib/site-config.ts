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
  phone: "(816) 555-0199",
  instagram: "https://www.instagram.com/bluewatertrvl",
  facebook: "https://www.facebook.com/bluewatertrvl",
  bookOnlineUrl: "https://www.bluewatertravelandcruises.com/book-online",
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
  { href: "/request-a-quote", label: "Request a Quote", primary: true, external: false },
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
    name: "Your Travel Advisor",
    role: "Lead Travel Consultant",
    bio: "With decades of industry experience, our lead advisor listens first — then crafts itineraries that match how you actually want to travel.",
    photo: "/gallery/team.svg",
  },
  {
    name: "Destination Specialist",
    role: "Cruise & Resort Expert",
    bio: "Specializing in ocean and river cruises plus all-inclusive resorts, our destination specialist stays current on the latest ships, properties, and promotions.",
    photo: "/gallery/caribbean.svg",
  },
  {
    name: "Wedding & Group Coordinator",
    role: "Celebrations & Groups",
    bio: "From destination weddings to multi-generational family reunions, we coordinate every detail so your group travels together seamlessly.",
    photo: "/gallery/wedding.svg",
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

export const blogPosts = [
  {
    slug: "why-book-with-a-travel-advisor",
    title: "Why Book With a Travel Advisor in 2026",
    excerpt:
      "The internet has endless options — but a trusted advisor saves time, money, and stress when plans change.",
    date: "2026-01-15",
  },
  {
    slug: "top-all-inclusive-resorts-for-families",
    title: "Top All-Inclusive Resorts for Families",
    excerpt:
      "Our favorite properties for multi-generational trips where everyone from toddlers to grandparents has a great time.",
    date: "2025-11-20",
  },
  {
    slug: "planning-a-destination-wedding",
    title: "Planning a Destination Wedding: Where to Start",
    excerpt:
      "From choosing the right resort to coordinating guest travel — a step-by-step guide from our wedding specialists.",
    date: "2025-09-08",
  },
] as const;
