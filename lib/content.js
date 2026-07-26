// =============================================================================
//  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
// =============================================================================
//  Edit this file to change copy, packages, services, work, and testimonials.
//  You should almost never need to touch layout/component files to update text.
//  Search for "REPLACE" or "PLACEHOLDER" to find things to swap.
//
//  VOICE: humble, direct, practical. We take the load off the owner's back.
//  We are not precious about design — we are useful. Talk like a neighbor who
//  happens to be very good at this, not like an award-show agency.
// =============================================================================

// -----------------------------------------------------------------------------
//  COMPANY  — REPLACE with the real company details
// -----------------------------------------------------------------------------
export const company = {
  name: "Vertical Ignition",
  nameLines: ["Vertical", "Ignition"], // stacked logotype in the nav
  shortName: "VI",
  tagline: "One team for the whole thing.",
  city: "New York City",
  serviceArea: "All five boroughs",
  email: "hello@verticalignition.com", // REPLACE
  phone: "(212) 555-0100", // REPLACE
  social: [
    { label: "Instagram", short: "IG", href: "#" }, // REPLACE hrefs
    { label: "LinkedIn", short: "IN", href: "#" },
    { label: "TikTok", short: "TT", href: "#" },
  ],
  primaryCta: { label: "Let's talk", href: "/contact" },
};

// -----------------------------------------------------------------------------
//  HERO (home)
// -----------------------------------------------------------------------------
export const hero = {
  // The word wrapped in {} gets the fire gradient treatment.
  headlineLines: ["You run", "the business.", "We'll handle", "the {brand}."],
  subline:
    "Interior design, buildout, websites, marketing, photo and video — all of it, from one team in New York. No chasing five vendors. No falling through the cracks.",
  cta: { label: "Start your project", href: "/contact" },
  secondaryCta: { label: "See the work", href: "/work" },
  rotatedNote: "Built in New York",
  scrollCue: "Scroll",
  imageLabel: "PLACEHOLDER: hero — finished storefront or interior, wide shot",
};

// -----------------------------------------------------------------------------
//  MARQUEE — the scrolling ticker of capabilities
// -----------------------------------------------------------------------------
export const marqueeItems = [
  "Brand Identity",
  "Interior Design",
  "Renovation",
  "Buildout",
  "Websites",
  "Signage",
  "Social Media",
  "Photography",
  "Video",
  "Menus & Print",
  "Packaging",
  "Launch Campaigns",
];

// -----------------------------------------------------------------------------
//  STATS — numbers animate up when scrolled into view.
//  REPLACE with real numbers before launch.
// -----------------------------------------------------------------------------
export const stats = [
  { value: 40, suffix: "+", label: "New York businesses opened, rebranded, or refreshed" },
  { value: 1, suffix: "", label: "Team handling every piece of it, start to finish" },
  { value: 5, suffix: "", label: "Boroughs we show up in, on site, in person" },
];

// -----------------------------------------------------------------------------
//  ONE-TEAM ADVANTAGE
// -----------------------------------------------------------------------------
export const oneTeam = {
  eyebrow: "Why one team",
  title: "Five vendors is five problems.",
  body:
    "You've got an architect who doesn't talk to the contractor, a designer who doesn't talk to the web person, and a marketer who's never seen the space. Every gap between them becomes your job to manage. We close the gaps by being all of them.",
  points: [
    {
      title: "One number to call",
      note: "Something goes sideways at 7am, you call us. Not four different people.",
    },
    {
      title: "It actually matches",
      note: "The sign, the menu, the website, the room — designed together, so they look like one place.",
    },
    {
      title: "Nobody points fingers",
      note: "We own the whole outcome. There's no one else to blame, and we like it that way.",
    },
  ],
};

// -----------------------------------------------------------------------------
//  WHO WE'RE FOR
// -----------------------------------------------------------------------------
export const whoFor = {
  eyebrow: "Who we're for",
  title: "Small businesses that deserve to look bigger.",
  body:
    "If you're opening something, fixing something, or finally getting around to the rebrand you've been putting off — that's us.",
  audiences: [
    { label: "Restaurants & cafés", note: "New concepts, second locations, long-overdue refreshes" },
    { label: "Retail & boutiques", note: "Storefronts that need to stop people on the sidewalk" },
    { label: "Service businesses", note: "Salons, studios, clinics, offices" },
    { label: "First-time owners", note: "You've never done this. We've done it plenty." },
    { label: "Rebrands", note: "You've been around a while. Time to look like it." },
  ],
};

// -----------------------------------------------------------------------------
//  FOUNDERS — REPLACE names and photos
// -----------------------------------------------------------------------------
export const founders = {
  eyebrow: "Who you're working with",
  title: "Two brothers. One designs it, one delivers it.",
  intro:
    "You get both of us on your project. That's the whole pitch — the person drawing it and the person building it are at the same table, every week.",
  people: [
    {
      name: "[FOUNDER 1 NAME]", // REPLACE
      role: "Design & Interiors",
      bio:
        "Architecture and interior design background. Handles how it looks and how it feels to walk in — the logo, the layout, the light, the materials.",
      imageLabel: "PLACEHOLDER: founder 1 headshot",
    },
    {
      name: "[FOUNDER 2 NAME]", // REPLACE
      role: "Logistics & Delivery",
      bio:
        "Real estate background and a 2nd Lieutenant in the U.S. Army. Runs the schedule, the trades, and the paperwork. If we said a date, he's the reason it holds.",
      imageLabel: "PLACEHOLDER: founder 2 headshot",
    },
  ],
};

// -----------------------------------------------------------------------------
//  SERVICE TEASER (home) — links to /services
// -----------------------------------------------------------------------------
export const serviceTeasers = [
  { n: "01", label: "Identity", note: "Logos, naming, the whole brand system" },
  { n: "02", label: "Space", note: "Interiors, renovation, buildout" },
  { n: "03", label: "Digital", note: "Websites, booking, ordering" },
  { n: "04", label: "Marketing", note: "Social, ads, launch" },
  { n: "05", label: "Media", note: "Photo, video, content" },
];

// -----------------------------------------------------------------------------
//  PROCESS — sticky scroll section
// -----------------------------------------------------------------------------
export const process = {
  eyebrow: "How it goes",
  title: "Five steps. You're only busy for one of them.",
  steps: [
    {
      n: "01",
      label: "Discover",
      tags: ["Sit-down", "Walkthrough", "Budget"],
      note:
        "We come to you. We look at the space, listen to what you're trying to build, and tell you straight what it takes and what it costs.",
    },
    {
      n: "02",
      label: "Design",
      tags: ["Brand", "Layout", "Materials"],
      note:
        "You see the brand and the space together before anything gets built. No surprises later, no guessing what it'll look like.",
    },
    {
      n: "03",
      label: "Build",
      tags: ["Permits", "Trades", "Site management"],
      note:
        "This is the part that eats people alive. We handle the contractors, the deliveries, the inspections. You get a weekly update instead of a headache.",
    },
    {
      n: "04",
      label: "Launch",
      tags: ["Website", "Photos", "Opening"],
      note:
        "Website live, photos shot, signage up, socials running. Opening day is a day you get to enjoy.",
    },
    {
      n: "05",
      label: "Grow",
      tags: ["Content", "Ads", "Check-ins"],
      note:
        "We stick around if you want us to. Content, campaigns, and updates so the momentum doesn't die after week two.",
    },
  ],
};

// -----------------------------------------------------------------------------
//  PACKAGES — cards on /services. Set featured: true on ONE.
// -----------------------------------------------------------------------------
export const packages = [
  {
    id: "digital-presence",
    n: "01",
    name: "Digital Presence",
    tagline: "For when people can't find you, or find you and aren't impressed.",
    highlights: ["Website", "Google & maps", "Social setup"],
    featured: false,
    includes: [
      "Custom one-to-five page website",
      "Mobile-first, fast-loading build",
      "Domain & hosting setup, handled for you",
      "Google Business Profile setup & optimization",
      "Social media profile setup (Instagram, Facebook, TikTok)",
      "On-page SEO so you show up in local searches",
      "Contact, booking, or reservation integration",
      "Analytics so you can see what's working",
    ],
  },
  {
    id: "brand-identity",
    n: "02",
    name: "Brand Identity",
    tagline: "For when the business is good but the look doesn't say so.",
    highlights: ["Logo suite", "Color & type", "Guidelines"],
    featured: false,
    includes: [
      "Naming support, if you need it",
      "Primary logo, secondary marks, and a submark",
      "Color palette & typography system",
      "A plain-English brand guidelines document",
      "Business cards & core stationery",
      "Social media templates you can actually use",
      "Signage & storefront graphic concepts",
      "Menu, price list, and collateral design",
    ],
  },
  {
    id: "storefront-space",
    n: "03",
    name: "Storefront & Space",
    tagline: "For when the room needs to work as hard as you do.",
    highlights: ["Interior design", "Renovation", "Buildout"],
    featured: false,
    includes: [
      "Interior design concept & mood boards",
      "Space planning & layout for how you actually operate",
      "Material, finish & fixture selection",
      "Renovation & construction coordination",
      "Contractor & vendor management",
      "Permit & logistics coordination",
      "Signage & storefront design",
      "Furniture, lighting & décor sourcing",
      "On-site project management until the doors open",
    ],
  },
  {
    id: "full-launch",
    n: "04",
    name: "Full Launch",
    tagline: "Empty space to opening day. You sign the lease, we do the rest.",
    highlights: ["Everything", "One team", "One timeline"],
    featured: true, // FLAGSHIP
    includes: [
      "Everything in Brand Identity",
      "Everything in Storefront & Space",
      "Everything in Digital Presence",
      "Interior design, renovation & full buildout management",
      "Complete brand identity & printed collateral",
      "Website with booking, ordering, or e-commerce",
      "Launch campaign & social media setup",
      "Professional photography & a launch video",
      "Opening day coordination",
      "A dedicated project manager from day one",
    ],
  },
  {
    id: "growth-retainer",
    n: "05",
    name: "Growth Retainer",
    tagline: "For after you open, when the hard part is staying busy.",
    highlights: ["Monthly content", "Ads & social", "Reporting"],
    featured: false,
    includes: [
      "Monthly social media management",
      "Content creation (photo & short-form video)",
      "Paid social & search ad management",
      "Email and SMS campaigns",
      "Website updates & maintenance",
      "A monthly report in plain English",
      "Ongoing local SEO",
      "Quarterly sit-downs to adjust the plan",
    ],
  },
];

// -----------------------------------------------------------------------------
//  SERVICES — full gallery on /services, grouped by category.
// -----------------------------------------------------------------------------
export const serviceCategories = [
  {
    id: "brand-strategy",
    n: "01",
    title: "Brand Strategy & Identity",
    blurb: "Figuring out what you're actually selling, then making it look like it.",
    services: [
      {
        name: "Brand Strategy & Positioning",
        blurb:
          "Before we design anything, we work out who you're for and why they'd pick you. Everything after this is easier.",
        imageLabel: "PLACEHOLDER: strategy session / brand board",
      },
      {
        name: "Naming",
        blurb: "Names and taglines that sound good out loud and aren't already taken.",
        imageLabel: "PLACEHOLDER: naming concepts",
      },
      {
        name: "Logo & Mark Design",
        blurb:
          "A full set — the main logo, the small one for your cup, the one that fits a profile photo.",
        imageLabel: "PLACEHOLDER: logo suite",
      },
      {
        name: "Color & Typography",
        blurb: "A palette and typeface set so everything you make looks like it came from the same place.",
        imageLabel: "PLACEHOLDER: color & type system",
      },
      {
        name: "Brand Guidelines",
        blurb:
          "A short, readable document so the next person who touches your brand doesn't wreck it.",
        imageLabel: "PLACEHOLDER: brand guidelines",
      },
    ],
  },
  {
    id: "interior-space",
    n: "02",
    title: "Interior Design & Space",
    blurb: "Rooms that feel right and still work on a Friday night rush.",
    services: [
      {
        name: "Interior Design",
        blurb: "Concepts, materials, and lighting that turn a room into somewhere people want to sit.",
        imageLabel: "PLACEHOLDER: interior render or finished photo",
      },
      {
        name: "Space Planning & Layout",
        blurb: "Flow, seating, and back-of-house planned around how your business really runs.",
        imageLabel: "PLACEHOLDER: floor plan",
      },
      {
        name: "Materials & Finishes",
        blurb: "Floors, tile, lighting, and fixtures picked to fit the look and the budget.",
        imageLabel: "PLACEHOLDER: material samples",
      },
      {
        name: "Furniture & Décor Sourcing",
        blurb: "We find it, price it, and get it delivered. You approve it.",
        imageLabel: "PLACEHOLDER: furniture moodboard",
      },
    ],
  },
  {
    id: "buildout-logistics",
    n: "03",
    title: "Buildout & Logistics",
    blurb: "The part most designers hand off. We don't.",
    services: [
      {
        name: "Renovation & Construction",
        blurb: "We manage the build so what gets built is what you approved.",
        imageLabel: "PLACEHOLDER: renovation in progress",
      },
      {
        name: "Contractor & Vendor Management",
        blurb: "We hire them, schedule them, and stay on them. You don't have to.",
        imageLabel: "PLACEHOLDER: on-site coordination",
      },
      {
        name: "Permits & Scheduling",
        blurb: "Paperwork, inspections, and deliveries tracked so nothing stalls the opening.",
        imageLabel: "PLACEHOLDER: project timeline",
      },
      {
        name: "On-Site Project Management",
        blurb: "Someone from our team is physically there until you're open.",
        imageLabel: "PLACEHOLDER: finished space",
      },
    ],
  },
  {
    id: "web-digital",
    n: "04",
    title: "Web & Digital",
    blurb: "Where most people meet you before they ever walk in.",
    services: [
      {
        name: "Website Design & Build",
        blurb: "Fast, mobile-first sites that answer the three things people came to find out.",
        imageLabel: "PLACEHOLDER: website mockup",
      },
      {
        name: "Ordering & Reservations",
        blurb: "Booking, reservations, and online ordering wired in and working.",
        imageLabel: "PLACEHOLDER: booking flow",
      },
      {
        name: "E-Commerce",
        blurb: "An online store set up so you can sell without babysitting it.",
        imageLabel: "PLACEHOLDER: online store",
      },
      {
        name: "Local SEO",
        blurb: "Showing up on Google and Maps when someone nearby searches for what you sell.",
        imageLabel: "PLACEHOLDER: local search result",
      },
    ],
  },
  {
    id: "marketing-social",
    n: "05",
    title: "Marketing & Social",
    blurb: "Getting people through the door, then getting them back.",
    services: [
      {
        name: "Social Media Management",
        blurb: "We run the accounts — planning, posting, replying. It stops being your 11pm job.",
        imageLabel: "PLACEHOLDER: social grid",
      },
      {
        name: "Launch Campaigns",
        blurb: "A real opening push across social, email, and the neighborhood.",
        imageLabel: "PLACEHOLDER: launch creative",
      },
      {
        name: "Paid Ads",
        blurb: "Targeted local ads with a number attached, so you know if it worked.",
        imageLabel: "PLACEHOLDER: ad set",
      },
      {
        name: "Email & SMS",
        blurb: "Simple campaigns that turn a first visit into a regular.",
        imageLabel: "PLACEHOLDER: email campaign",
      },
    ],
  },
  {
    id: "photo-video",
    n: "06",
    title: "Photography & Video",
    blurb: "Because phone photos of good food still look like phone photos.",
    services: [
      {
        name: "Brand & Food Photography",
        blurb: "Proper shots of the space, the product, and the plates.",
        imageLabel: "PLACEHOLDER: brand photography",
      },
      {
        name: "Video Production",
        blurb: "Promo videos and brand films that don't feel like a commercial.",
        imageLabel: "PLACEHOLDER: video still",
      },
      {
        name: "Short-Form Content",
        blurb: "Reels and TikToks shot in batches so you're never scrambling for a post.",
        imageLabel: "PLACEHOLDER: short-form content",
      },
    ],
  },
  {
    id: "print-collateral",
    n: "07",
    title: "Print & Physical",
    blurb: "The pieces people actually hold.",
    services: [
      {
        name: "Signage & Storefront Graphics",
        blurb: "Exterior signs and window graphics that get noticed from across the street.",
        imageLabel: "PLACEHOLDER: signage",
      },
      {
        name: "Menus & Price Lists",
        blurb: "Printed and digital menus that are easy to read and easy to update.",
        imageLabel: "PLACEHOLDER: menu design",
      },
      {
        name: "Cards & Stationery",
        blurb: "The small everyday pieces that make you look established.",
        imageLabel: "PLACEHOLDER: stationery",
      },
      {
        name: "Packaging & Merch",
        blurb: "Bags, cups, boxes, and shirts that keep working after people leave.",
        imageLabel: "PLACEHOLDER: packaging & merch",
      },
    ],
  },
];

// -----------------------------------------------------------------------------
//  WORK / CASE STUDIES — /work page.
//  `categories` drive the filter tabs. Keep them consistent across projects.
// -----------------------------------------------------------------------------
export const workCategories = [
  "All Work",
  "Featured",
  "Branding",
  "Interiors",
  "Buildout",
  "Web",
  "Marketing",
];

export const caseStudies = [
  {
    id: "project-one",
    n: "01",
    client: "[CLIENT NAME]", // REPLACE
    type: "Restaurant — New Opening",
    featured: true,
    categories: ["Branding", "Interiors", "Buildout", "Web", "Marketing"],
    tags: ["Branding", "Interior Design", "Buildout", "Web Design", "Launch"],
    challenge:
      "A great menu, an empty white box on a busy corner, and a lease that had already started running.",
    delivered:
      "We designed the brand and the room together, managed the buildout, shot the food, and launched the site the week before opening.",
    result: "Opened on the date we promised. Booked solid the first weekend.",
    beforeLabel: "PLACEHOLDER: before — empty space",
    afterLabel: "PLACEHOLDER: after — finished restaurant",
  },
  {
    id: "project-two",
    n: "02",
    client: "[CLIENT NAME]", // REPLACE
    type: "Retail Boutique — Rebrand",
    featured: true,
    categories: ["Branding", "Interiors", "Web"],
    tags: ["Branding", "Storefront", "Signage", "E-Commerce", "Photography"],
    challenge:
      "Fifteen years of loyal customers and a storefront that looked like it had been ignored for ten of them.",
    delivered:
      "New identity, new signage, a refreshed interior, and an online store that finally matched the quality inside.",
    result: "More walk-ins, and online sales that stopped being an afterthought.",
    beforeLabel: "PLACEHOLDER: before — old storefront",
    afterLabel: "PLACEHOLDER: after — rebranded storefront",
  },
  {
    id: "project-three",
    n: "03",
    client: "[CLIENT NAME]", // REPLACE
    type: "Salon — Renovation & Booking",
    featured: false,
    categories: ["Interiors", "Buildout", "Web"],
    tags: ["Interior Design", "Renovation", "Booking Site", "Social"],
    challenge:
      "A team doing high-end work in a space that told customers to expect something cheaper.",
    delivered:
      "A full interior renovation and a booking site that let clients pick their stylist and prepay.",
    result: "A room that matches the work, and fewer no-shows.",
    beforeLabel: "PLACEHOLDER: before — salon interior",
    afterLabel: "PLACEHOLDER: after — renovated salon",
  },
  {
    id: "project-four",
    n: "04",
    client: "[CLIENT NAME]", // REPLACE
    type: "Café — Full Launch",
    featured: true,
    categories: ["Branding", "Interiors", "Buildout", "Web", "Marketing"],
    tags: ["Naming", "Branding", "Buildout", "Web Design", "Photography"],
    challenge:
      "A first-time owner with a good idea, a raw space, and no interest in managing six contractors.",
    delivered:
      "We named it, branded it, built it, photographed it, and opened it. One contract, one team.",
    result: "From lease signing to first cup poured without the owner chasing a single vendor.",
    beforeLabel: "PLACEHOLDER: before — raw café space",
    afterLabel: "PLACEHOLDER: after — finished café",
  },
];

// -----------------------------------------------------------------------------
//  TESTIMONIALS — REPLACE with real quotes.
// -----------------------------------------------------------------------------
export const testimonials = [
  {
    quote:
      "I was ready to hire four different companies. They did all of it, and it was the first time everything actually matched.",
    name: "[CLIENT NAME]", // REPLACE
    business: "[BUSINESS NAME], Manhattan",
  },
  {
    quote:
      "The buildout, the permits, the website, the opening — I just showed up. It came in on the date they gave me back in January.",
    name: "[CLIENT NAME]", // REPLACE
    business: "[BUSINESS NAME], Brooklyn",
  },
  {
    quote:
      "They never made me feel dumb for not knowing this stuff. They explained it, handled it, and kept me posted every week.",
    name: "[CLIENT NAME]", // REPLACE
    business: "[BUSINESS NAME], Queens",
  },
];

// -----------------------------------------------------------------------------
//  FAQ — /services page
// -----------------------------------------------------------------------------
export const faqs = [
  {
    q: "Do I have to buy a whole package?",
    a: "No. Plenty of people start with one thing — a logo, a website, a room that needs fixing. Packages are just the common combinations. Tell us what you need and we'll price that.",
  },
  {
    q: "What does this cost?",
    a: "It depends on the size of the space and how much of it you need. We'll give you a real number after a walkthrough, not a vague range on a website. No charge for that conversation.",
  },
  {
    q: "Do you actually do the construction?",
    a: "We manage it. We hire and coordinate the trades, handle permits and scheduling, and someone from our team is on site until you open.",
  },
  {
    q: "How long does a full launch take?",
    a: "Most projects run three to six months from first meeting to opening day, depending on permits and the condition of the space. We give you a timeline early and tell you straight if something changes.",
  },
  {
    q: "Do you work outside New York City?",
    a: "The five boroughs are home and that's where we're strongest. Ask us about anything nearby and we'll tell you honestly whether we're the right fit.",
  },
];

// -----------------------------------------------------------------------------
//  CONTACT — dropdown options, auto-built from packages.
// -----------------------------------------------------------------------------
export const contactServiceOptions = [
  ...packages.map((p) => p.name),
  "A few individual services",
  "Not sure yet",
];
