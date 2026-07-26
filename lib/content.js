// =============================================================================
//  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
// =============================================================================
//  Edit this file to change copy, packages, services, work, and testimonials.
//  You should almost never need to touch layout/component files to update text.
//  Search for "REPLACE" or "PLACEHOLDER" to find things to swap.
//
//  VOICE: humble, direct, practical. We take the load off the owner's back.
//  Talk like a neighbour who happens to be very good at this, not like an
//  award-show agency.
//
//  POSITIONING: rebranding existing businesses is the lead offer. New openings
//  are welcome and covered, but the emphasis throughout is on businesses that
//  are already trading and no longer look the part.
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
    "We rebrand New York businesses — the space, the identity, the website, the marketing — with one team handling all of it. Open for fifteen years or not open yet, it's the same process.",
  cta: { label: "Start your project", href: "/contact" },
  secondaryCta: { label: "See the work", href: "/work" },
  scrollCue: "Scroll",
};

// -----------------------------------------------------------------------------
//  HERO DISC — the three images that orbit in the hero.
//  Add a file to /public and set `src` to swap a placeholder for a real photo.
//  `fill` picks the colour of the bold block offset behind each card:
//  "ink" (near-black) or "fire" (the brand gradient).
// -----------------------------------------------------------------------------
export const heroImages = [
  {
    src: "/hero.jpg", // source PNG lives in /Assets; this is the optimised JPEG
    width: 2048,
    height: 1056,
    alt: "Dining room of a restaurant rebranded by Vertical Ignition — dark oak panelling, leather banquettes and a suspended floral installation",
    fill: "ink",
  },
  {
    src: "", // REPLACE with e.g. "/work-storefront.jpg"
    label: "PLACEHOLDER: storefront rebrand",
    alt: "Storefront rebranded by Vertical Ignition",
    fill: "fire",
  },
  {
    src: "", // REPLACE with e.g. "/work-retail.jpg"
    label: "PLACEHOLDER: retail interior",
    alt: "Retail interior designed by Vertical Ignition",
    fill: "ink",
  },
];

// -----------------------------------------------------------------------------
//  MARQUEE — the scrolling ticker of capabilities
// -----------------------------------------------------------------------------
export const marqueeItems = [
  "Rebrands",
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
];

// -----------------------------------------------------------------------------
//  STATS — numbers animate up when scrolled into view.
//  REPLACE with real numbers before launch.
// -----------------------------------------------------------------------------
// `roman: true` renders the figure as a Roman numeral. The last two are
// ordered V then I on purpose — read across, they spell the monogram.
export const stats = [
  { value: 40, suffix: "+", label: "New York businesses rebranded, rebuilt, or opened" },
  { value: 5, suffix: "", roman: true, label: "Boroughs we show up in, on site, in person" },
  { value: 1, suffix: "", roman: true, label: "Team handling every piece of it, start to finish" },
];

// -----------------------------------------------------------------------------
//  ONE-TEAM ADVANTAGE
// -----------------------------------------------------------------------------
export const oneTeam = {
  eyebrow: "Why one team",
  title: "A brand assembled by strangers looks like it.",
  body:
    "The usual way is an architect, a contractor, a designer, a web person and a marketer who have never spoken to each other. Every gap between them quietly becomes your job to manage — and you can see the result on the finished job. A room that doesn't match the logo. A website that doesn't match the room. We close those gaps by being the whole team.",
  points: [
    {
      title: "One number to call",
      note: "Something goes sideways at 7am, you call us. Not four different people who each blame the others.",
    },
    {
      title: "Designed together, so it matches",
      note: "The sign, the menu, the website and the room are drawn by the same people, in the same week.",
    },
    {
      title: "We own the whole outcome",
      note: "There's nobody else to point at. That's the arrangement, and it's why the details hold up.",
    },
  ],
};

// -----------------------------------------------------------------------------
//  WHO WE'RE FOR — rebranding-led
// -----------------------------------------------------------------------------
export const whoFor = {
  eyebrow: "Who we're for",
  title: "Most of our work is on businesses that already exist.",
  body:
    "You've been open for years. The food, the service, the work is good — but the space, the logo and the website are telling people something older and cheaper than the truth. That's the job we do best. New openings too, and we love those, but the rebrand is where we do the most good.",
  audiences: [
    {
      label: "Established rebrands",
      note: "A look that stopped keeping up",
      lead: true,
    },
    {
      label: "Restaurants & cafés",
      note: "Refreshes, second locations, new concepts",
      lead: true,
    },
    { label: "Retail & boutiques", note: "Storefronts that stop foot traffic" },
    { label: "Service businesses", note: "Salons, studios, clinics, offices" },
    { label: "Under new ownership", note: "You bought it. Now make it yours." },
    { label: "First-time openings", note: "We've done it plenty" },
  ],
};

// -----------------------------------------------------------------------------
//  ORG / CAPABILITY DIAGRAM (home) — replaces the old founders section.
//  Shows how work branches from one point of contact out to every trade.
// -----------------------------------------------------------------------------
export const orgChart = {
  eyebrow: "How we're built",
  title: "One point of contact. Every trade behind it.",
  intro:
    "You deal with us. Behind that sit the two leads who run every project, and the crews, studios and specialists they direct on your behalf.",
  root: {
    label: "Vertical Ignition",
    note: "Your single point of contact",
  },
  branches: [
    {
      id: "design",
      lead: "Design Lead",
      note: "Owns how it looks and how it works",
      nodes: [
        "Interior Design",
        "Space Planning",
        "Millwork & Fabrication",
        "Lighting & Finishes",
        "Brand & Identity Studio",
        "Web & Digital",
        "Photography & Video",
        "Print & Packaging",
      ],
    },
    {
      id: "logistics",
      lead: "Logistics Lead",
      note: "Owns the schedule, the trades and the paperwork",
      nodes: [
        "General Contractors",
        "Electrical & Plumbing",
        "Permits & Expediting",
        "Signage & Installation",
        "Procurement & Freight",
        "Site Management",
        "Inspections & Sign-off",
        "Vendor Contracts",
      ],
    },
  ],
  // Everything above converges here — the point of the whole diagram.
  outcome: {
    label: "Your Brand",
    note: "One coherent result",
  },
  footnote:
    "You never have to hire, brief, chase or referee any of it. Every piece lands in the same place, and it lands looking like it belongs together.",
};

// -----------------------------------------------------------------------------
//  SERVICE TEASER (home) — links to /services
// -----------------------------------------------------------------------------
export const serviceTeasers = [
  { n: "I", label: "Identity", note: "Logos, naming, the whole brand system" },
  { n: "II", label: "Space", note: "Interiors, renovation, buildout" },
  { n: "III", label: "Digital", note: "Websites, booking, ordering" },
  { n: "IV", label: "Marketing", note: "Social, ads, launch" },
  { n: "V", label: "Media", note: "Photo, video, content" },
];

// -----------------------------------------------------------------------------
//  PROCESS — sticky scroll section
// -----------------------------------------------------------------------------
export const process = {
  eyebrow: "How it goes",
  title: "Five stages. Each one is something you stop carrying.",
  steps: [
    {
      n: "I",
      label: "Discover",
      tags: ["Sit-down", "Walkthrough", "Budget"],
      note:
        "We come to you. We look at what you've got, listen to what isn't working, and come back with a straight number and a timeline. There's nothing for you to prepare.",
    },
    {
      n: "II",
      label: "Design",
      tags: ["Brand", "Layout", "Materials"],
      note:
        "You see the new brand and the new space together before anything gets built or printed. Your only job is to say yes, or tell us what to change.",
    },
    {
      n: "III",
      label: "Build",
      tags: ["Permits", "Trades", "Site management"],
      note:
        "This is the part that eats people alive. Contractors, deliveries, inspections — all of it sits with us. You get a weekly update and nothing else lands on your desk.",
    },
    {
      n: "IV",
      label: "Relaunch",
      tags: ["Website", "Photos", "Announcement"],
      note:
        "Website live, photos shot, signage up, socials running. Whether it's an opening or a reintroduction, the day is handled around you.",
    },
    {
      n: "V",
      label: "Grow",
      tags: ["Content", "Ads", "Check-ins"],
      note:
        "Most owners keep us on. Content, campaigns and updates stay with us, so the momentum doesn't quietly die in week two.",
    },
  ],
};

// -----------------------------------------------------------------------------
//  PACKAGES — cards on /services.
//    featured: true    → black card with a fire border ("Most popular")
//    recommended: true → light card with an orange outline pill ("Recommended")
//  Only set one of each.
// -----------------------------------------------------------------------------
export const packages = [
  {
    id: "digital-presence",
    n: "I",
    name: "Digital Presence",
    tagline: "For when people can't find you, or find you and aren't impressed.",
    highlights: ["Website", "Google & maps", "Social setup"],
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
    n: "II",
    name: "Brand Identity",
    tagline: "For when the business is good but the look hasn't caught up.",
    highlights: ["Logo suite", "Color & type", "Guidelines"],
    includes: [
      "Naming or renaming support, if you need it",
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
    n: "III",
    name: "Storefront & Space",
    tagline: "For when the room no longer matches the work you do in it.",
    highlights: ["Interior design", "Renovation", "Buildout"],
    includes: [
      "Interior design concept & mood boards",
      "Space planning & layout for how you actually operate",
      "Material, finish & fixture selection",
      "Renovation & construction coordination",
      "Contractor & vendor management",
      "Permit & logistics coordination",
      "Signage & storefront design",
      "Furniture, lighting & décor sourcing",
      "On-site project management until you reopen",
    ],
  },
  {
    id: "full-relaunch",
    n: "IV",
    name: "Full Relaunch",
    tagline: "The whole business, reintroduced. Space, brand, website, launch.",
    highlights: ["Everything", "One team", "One timeline"],
    featured: true, // FLAGSHIP — black card, "Most popular"
    includes: [
      "Everything in Brand Identity",
      "Everything in Storefront & Space",
      "Everything in Digital Presence",
      "Interior design, renovation & full buildout management",
      "Complete brand identity & printed collateral",
      "Website with booking, ordering, or e-commerce",
      "Relaunch campaign & social media setup",
      "Professional photography & a launch video",
      "Reopening or opening day coordination",
      "A dedicated project manager from day one",
    ],
  },
  {
    id: "built-around-you",
    n: "V",
    name: "Built Around You",
    tagline: "For when none of the above is quite the shape of your problem.",
    highlights: ["Your scope", "Your budget", "Your pace"],
    recommended: true, // orange outline pill, light card
    includes: [
      "We start with a walkthrough, not a price list",
      "Take any pieces from any package, leave the rest",
      "Phase the work across months if cash flow needs it",
      "Slot in alongside contractors you've already hired",
      "Pick up a job someone else started and stalled on",
      "Single services if that's genuinely all you need",
      "Straight advice on what you can skip for now",
      "One quote, one timeline, however it's assembled",
    ],
  },
  {
    id: "growth-retainer",
    n: "VI",
    name: "Growth Retainer",
    tagline: "For after the relaunch, when the hard part is staying busy.",
    highlights: ["Monthly content", "Ads & social", "Reporting"],
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
    n: "I",
    title: "Brand Strategy & Identity",
    blurb: "Working out what you're actually selling, then making it look like it.",
    services: [
      {
        name: "Rebrand Strategy",
        blurb:
          "For businesses with history. We work out what's worth keeping, what's holding you back, and how to change without losing the regulars.",
        imageLabel: "PLACEHOLDER: before/after brand board",
      },
      {
        name: "Brand Positioning",
        blurb:
          "Who you're for and why they'd pick you over the place two blocks down. Everything after this gets easier.",
        imageLabel: "PLACEHOLDER: strategy session",
      },
      {
        name: "Naming & Renaming",
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
    n: "II",
    title: "Interior Design & Space",
    blurb: "Rooms that feel right and still work on a Friday night rush.",
    services: [
      {
        name: "Interior Redesign",
        blurb:
          "Reworking a space you're already trading in — often in phases, so you don't have to close for months.",
        imageLabel: "PLACEHOLDER: interior before/after",
      },
      {
        name: "Space Planning & Layout",
        blurb: "Flow, seating and back-of-house planned around how your business really runs.",
        imageLabel: "PLACEHOLDER: floor plan",
      },
      {
        name: "Materials & Finishes",
        blurb: "Floors, tile, lighting and fixtures picked to fit the look and the budget.",
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
    n: "III",
    title: "Buildout & Logistics",
    blurb: "The part most designers hand off. We don't.",
    services: [
      {
        name: "Renovation & Construction",
        blurb: "We manage the build so what gets built is what you approved.",
        imageLabel: "PLACEHOLDER: renovation in progress",
      },
      {
        name: "Phased Work Around Trading Hours",
        blurb:
          "Where we can, we schedule the noisy work so you keep serving. Closing for a month isn't always necessary.",
        imageLabel: "PLACEHOLDER: overnight/phased work",
      },
      {
        name: "Contractor & Vendor Management",
        blurb: "We hire them, schedule them, and stay on them. You don't have to.",
        imageLabel: "PLACEHOLDER: on-site coordination",
      },
      {
        name: "Permits & Scheduling",
        blurb: "Paperwork, inspections and deliveries tracked so nothing stalls the reopening.",
        imageLabel: "PLACEHOLDER: project timeline",
      },
      {
        name: "On-Site Project Management",
        blurb: "Someone from our team is physically there until you're back open.",
        imageLabel: "PLACEHOLDER: finished space",
      },
    ],
  },
  {
    id: "web-digital",
    n: "IV",
    title: "Web & Digital",
    blurb: "Where most people meet you before they ever walk in.",
    services: [
      {
        name: "Website Redesign",
        blurb:
          "Replacing the site you've been apologising for. Fast, mobile-first, and it answers the three things people came to find out.",
        imageLabel: "PLACEHOLDER: website before/after",
      },
      {
        name: "Ordering & Reservations",
        blurb: "Booking, reservations and online ordering wired in and working.",
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
    n: "V",
    title: "Marketing & Social",
    blurb: "Getting people through the door, then getting them back.",
    services: [
      {
        name: "Relaunch Campaigns",
        blurb:
          "Telling the neighbourhood you've changed — without making loyal regulars feel like you left them behind.",
        imageLabel: "PLACEHOLDER: relaunch creative",
      },
      {
        name: "Social Media Management",
        blurb: "We run the accounts — planning, posting, replying. It stops being your 11pm job.",
        imageLabel: "PLACEHOLDER: social grid",
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
    n: "VI",
    title: "Photography & Video",
    blurb: "Because phone photos of good food still look like phone photos.",
    services: [
      {
        name: "Brand & Food Photography",
        blurb: "Proper shots of the space, the product and the plates.",
        imageLabel: "PLACEHOLDER: brand photography",
      },
      {
        name: "Before & After Documentation",
        blurb:
          "We shoot the old space before we touch it. It makes the reveal land, and it's good marketing on its own.",
        imageLabel: "PLACEHOLDER: before/after pair",
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
    n: "VII",
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
        blurb: "Bags, cups, boxes and shirts that keep working after people leave.",
        imageLabel: "PLACEHOLDER: packaging & merch",
      },
    ],
  },
];

// -----------------------------------------------------------------------------
//  WORK / CASE STUDIES — /work page.
//  `categories` drive the filter tabs.
// -----------------------------------------------------------------------------
export const workCategories = [
  "All Work",
  "Rebrands",
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
    n: "I",
    client: "[CLIENT NAME]", // REPLACE
    type: "Restaurant — Rebrand & Refit",
    featured: true,
    categories: ["Rebrands", "Branding", "Interiors", "Buildout", "Web", "Marketing"],
    tags: ["Rebrand", "Interior Design", "Buildout", "Web Design", "Relaunch"],
    challenge:
      "Eleven years on the same corner, a loyal lunch crowd, and a dining room that hadn't been touched since they opened.",
    delivered:
      "A new identity and a reworked room designed together, the buildout phased so they only closed for nine days, then new photography and a relaunch campaign aimed at the regulars first.",
    result: "Reopened without losing the lunch crowd, and started pulling a dinner crowd they never had.",
    beforeLabel: "PLACEHOLDER: before — dated dining room",
    afterLabel: "PLACEHOLDER: after — rebranded restaurant",
  },
  {
    id: "project-two",
    n: "II",
    client: "[CLIENT NAME]", // REPLACE
    type: "Retail Boutique — Rebrand",
    featured: true,
    categories: ["Rebrands", "Branding", "Interiors", "Web"],
    tags: ["Rebrand", "Storefront", "Signage", "E-Commerce", "Photography"],
    challenge:
      "Fifteen years of loyal customers and a storefront that had quietly stopped representing the quality inside.",
    delivered:
      "New identity, new signage, a refreshed interior, and an online store that finally matched the shop.",
    result: "More walk-ins, and online sales that stopped being an afterthought.",
    beforeLabel: "PLACEHOLDER: before — old storefront",
    afterLabel: "PLACEHOLDER: after — rebranded storefront",
  },
  {
    id: "project-three",
    n: "III",
    client: "[CLIENT NAME]", // REPLACE
    type: "Salon — Renovation & Booking",
    featured: false,
    categories: ["Rebrands", "Interiors", "Buildout", "Web"],
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
    n: "IV",
    client: "[CLIENT NAME]", // REPLACE
    type: "Café — New Opening",
    featured: true,
    categories: ["Featured", "Branding", "Interiors", "Buildout", "Web", "Marketing"],
    tags: ["Naming", "Branding", "Buildout", "Web Design", "Photography"],
    challenge:
      "A first-time owner with a good idea, a raw space, and no interest in managing six contractors.",
    delivered:
      "We named it, branded it, built it, photographed it and opened it. One contract, one team.",
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
      "We'd been open nine years and looked it. They changed the room, the logo and the website together, and it finally reads like one place.",
    name: "[CLIENT NAME]", // REPLACE
    business: "[BUSINESS NAME], Manhattan",
  },
  {
    quote:
      "I was terrified a rebrand would scare off the regulars. They phased the work, kept us trading, and the regulars brought friends.",
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
    q: "Do I have to close while you work?",
    a: "Usually not for the whole job. Most rebrands we run in phases — brand and website first, then the noisy construction scheduled around your trading hours or into a short shutdown. We'll tell you upfront exactly how many days you'd lose, if any.",
  },
  {
    q: "Will a rebrand cost me my regulars?",
    a: "It's the first thing owners worry about and it's a fair worry. We plan the change so it reads as an upgrade rather than a new business — carrying over what people already recognise you by, and announcing it to your existing customers before anyone else.",
  },
  {
    q: "Do I have to buy a whole package?",
    a: "No. Plenty of people start with one thing — a logo, a website, a room that needs fixing. Packages are just the common combinations, and Built Around You exists precisely for the jobs that don't fit them.",
  },
  {
    q: "What does this cost?",
    a: "It depends on the size of the space and how much of it you need. We'll give you a real number after a walkthrough, not a vague range on a website. No charge for that conversation.",
  },
  {
    q: "Do you actually do the construction?",
    a: "We manage it. We hire and coordinate the trades, handle permits and scheduling, and someone from our team is on site until you're open.",
  },
  {
    q: "How long does a full relaunch take?",
    a: "Most run three to six months from first meeting to reopening, depending on permits and the condition of the space. We give you a timeline early and tell you straight if something changes.",
  },
  {
    q: "Do you work outside New York City?",
    a: "The five boroughs are home and that's where we're strongest. Ask us about anything nearby and we'll tell you honestly whether we're the right fit.",
  },
];

// -----------------------------------------------------------------------------
//  CONTACT — chip options, auto-built from packages.
// -----------------------------------------------------------------------------
export const contactServiceOptions = [
  ...packages.map((p) => p.name),
  "Not sure yet",
];
