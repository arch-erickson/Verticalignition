// =============================================================================
//  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
// =============================================================================
//  Edit this file to change copy, packages, services, case studies, and
//  testimonials. You should almost never need to touch the layout/component
//  files to update text. Search for "REPLACE" to find things to swap.
// =============================================================================

// -----------------------------------------------------------------------------
//  COMPANY  — REPLACE with the real company details
// -----------------------------------------------------------------------------
export const company = {
  name: "Vertical Ignition", // REPLACE: company name (used in nav, footer, SEO)
  shortName: "VI", // REPLACE: initials/logo fallback
  tagline: "One team for your entire brand.",
  city: "New York City",
  serviceArea: "New York City & the five boroughs",
  email: "hello@verticalignition.com", // REPLACE
  phone: "(212) 555-0100", // REPLACE
  // Social links — REPLACE hrefs. Leave "#" to render a disabled placeholder.
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "TikTok", href: "#" },
  ],
  primaryCta: { label: "Start your brand", href: "/contact" },
};

// -----------------------------------------------------------------------------
//  HERO  (home page)  — REPLACE copy
// -----------------------------------------------------------------------------
export const hero = {
  headline: "We build your entire brand under one roof.",
  subline:
    "Interior design, buildout, websites, marketing, and everything in between — handled by a single team, so you can focus on running your business.",
  cta: { label: "Start your brand", href: "/contact" },
  secondaryCta: { label: "See what we do", href: "/services" },
  imageLabel: "PLACEHOLDER: wide hero shot — finished storefront or interior",
};

// -----------------------------------------------------------------------------
//  "WHAT IS FULL-BRANDING" intro section — REPLACE copy
// -----------------------------------------------------------------------------
export const oneTeam = {
  eyebrow: "The one-team advantage",
  title: "Hiring five vendors is how brands fall apart.",
  body:
    "Most business owners end up juggling an architect, a contractor, a designer, a web person, and a marketer — none of whom talk to each other. We are all of them, in one team. Your space, your logo, your website, and your marketing come out of the same room, so everything actually matches and nothing falls through the cracks.",
  points: [
    "One point of contact from first sketch to opening day",
    "A single, consistent brand across your space and your screens",
    "No finger-pointing between vendors — we own the whole outcome",
  ],
};

// -----------------------------------------------------------------------------
//  "WHO WE ARE FOR" section — REPLACE copy
// -----------------------------------------------------------------------------
export const whoFor = {
  eyebrow: "Who we're for",
  title: "Built for New York small businesses.",
  body:
    "We work best with owners who are opening something new or leveling up something that's been around a while.",
  audiences: [
    { label: "Restaurants & cafés", note: "New concepts, second locations, refreshes" },
    { label: "Retail & boutiques", note: "Storefronts that need to stop foot traffic" },
    { label: "Service businesses", note: "Salons, studios, clinics, offices" },
    { label: "New openings", note: "Everything from empty space to grand opening" },
    { label: "Rebrands", note: "Established businesses ready for a new chapter" },
  ],
};

// -----------------------------------------------------------------------------
//  FOUNDERS section — REPLACE names, photos, bios
// -----------------------------------------------------------------------------
export const founders = {
  eyebrow: "Who we are",
  title: "Two brothers. Design and execution.",
  intro:
    "One of us obsesses over how it looks and feels. The other makes sure it gets built on time and exactly as promised. Together, that's a brand that's both beautiful and actually delivered.",
  people: [
    {
      name: "[FOUNDER 1 NAME]", // REPLACE
      role: "Design & Interiors",
      bio:
        "A background in architecture and interior design. Leads the look, feel, and spatial experience of every project — from the logo to the layout of the room.",
      imageLabel: "PLACEHOLDER: founder 1 headshot",
    },
    {
      name: "[FOUNDER 2 NAME]", // REPLACE
      role: "Logistics & Project Management",
      bio:
        "A background in real estate and a 2nd Lieutenant in the U.S. Army. Runs logistics, timelines, and execution — the discipline that keeps every project on schedule and on spec.",
      imageLabel: "PLACEHOLDER: founder 2 headshot",
    },
  ],
};

// -----------------------------------------------------------------------------
//  SERVICE CATEGORY TEASER (home) — links to /services
// -----------------------------------------------------------------------------
export const serviceTeasers = [
  { label: "Identity", note: "Logos, naming, brand systems" },
  { label: "Space", note: "Interiors, renovation, buildout" },
  { label: "Digital", note: "Websites, booking, e-commerce" },
  { label: "Marketing", note: "Social, ads, launch campaigns" },
  { label: "Media", note: "Photography, video, content" },
];

// -----------------------------------------------------------------------------
//  OUR PROCESS — REPLACE copy if desired
// -----------------------------------------------------------------------------
export const process = {
  eyebrow: "How it works",
  title: "One journey, start to finish.",
  steps: [
    { n: "01", label: "Discover", note: "We learn your business, your goals, and your budget." },
    { n: "02", label: "Design", note: "Brand, space, and digital designed together as one." },
    { n: "03", label: "Build", note: "We manage the buildout, vendors, and every detail." },
    { n: "04", label: "Launch", note: "Website, marketing, and grand opening — coordinated." },
    { n: "05", label: "Grow", note: "Ongoing support to keep momentum after you open." },
  ],
};

// -----------------------------------------------------------------------------
//  PACKAGES  — the 5 cards on /services (Section A)
//  Mark ONE package featured: true to highlight it.
// -----------------------------------------------------------------------------
export const packages = [
  {
    id: "digital-presence",
    name: "Digital Presence Package",
    tagline: "Get found and look legit online.",
    highlights: ["Website", "Google & maps setup", "Social profiles"],
    featured: false,
    includes: [
      "Custom one-to-five page website",
      "Mobile-optimized, fast-loading build",
      "Domain & hosting setup guidance",
      "Google Business Profile setup & optimization",
      "Social media profile setup (Instagram, Facebook, TikTok)",
      "Basic on-page SEO",
      "Contact / booking / reservation integration",
      "Analytics setup",
    ],
  },
  {
    id: "brand-identity",
    name: "Brand Identity Package",
    tagline: "A look that's unmistakably yours.",
    highlights: ["Logo suite", "Color & type", "Brand guidelines"],
    featured: false,
    includes: [
      "Naming support (optional)",
      "Primary logo + secondary marks + submark",
      "Color palette & typography system",
      "Brand guidelines document",
      "Business cards & core stationery design",
      "Social media templates",
      "Signage design concepts",
      "Menu / price list / collateral design",
    ],
  },
  {
    id: "storefront-space",
    name: "Storefront & Space Package",
    tagline: "A physical space people remember.",
    highlights: ["Interior design", "Renovation", "Buildout PM"],
    featured: false,
    includes: [
      "Interior design concept & mood boards",
      "Space planning & layout",
      "Material, finish & fixture selection",
      "Renovation & construction coordination",
      "Contractor & vendor management",
      "Permit & logistics coordination",
      "Signage & storefront design",
      "Furniture, lighting & décor sourcing",
      "On-site project management through completion",
    ],
  },
  {
    id: "full-launch",
    name: "Full Launch Package",
    tagline: "Empty space to grand opening. All of it.",
    highlights: ["Everything, coordinated", "One team", "Best value"],
    featured: true, // FLAGSHIP — visually highlighted
    includes: [
      "Everything in Brand Identity",
      "Everything in Storefront & Space",
      "Everything in Digital Presence",
      "Interior design, renovation & full buildout management",
      "Complete brand identity & collateral",
      "Website + booking / ordering / e-commerce",
      "Launch marketing campaign & social setup",
      "Professional photography & launch video",
      "Grand opening coordination",
      "Dedicated project manager from day one",
    ],
  },
  {
    id: "growth-retainer",
    name: "Growth Retainer Package",
    tagline: "Ongoing momentum after you open.",
    highlights: ["Monthly content", "Ads & social", "Reporting"],
    featured: false,
    includes: [
      "Monthly social media management",
      "Content creation (photo & short-form video)",
      "Paid social & search ad management",
      "Email / SMS marketing campaigns",
      "Website updates & maintenance",
      "Monthly performance reporting",
      "Ongoing SEO",
      "Quarterly brand strategy check-ins",
    ],
  },
];

// -----------------------------------------------------------------------------
//  SERVICES — full gallery on /services (Section B), grouped by category.
//  Add/remove services freely. Each needs: name, blurb, imageLabel.
// -----------------------------------------------------------------------------
export const serviceCategories = [
  {
    id: "brand-strategy",
    title: "Brand Strategy & Identity",
    blurb: "Who you are, said clearly and consistently.",
    services: [
      {
        name: "Brand Strategy & Positioning",
        blurb:
          "We define what makes you different and who you're for, so every design decision has a reason behind it.",
        imageLabel: "PLACEHOLDER: strategy workshop / brand board",
      },
      {
        name: "Naming",
        blurb: "Business names, taglines, and product names that are memorable and available.",
        imageLabel: "PLACEHOLDER: naming concepts",
      },
      {
        name: "Logo & Mark Design",
        blurb: "A full logo suite — primary, secondary, and submark — for every place your brand shows up.",
        imageLabel: "PLACEHOLDER: logo suite",
      },
      {
        name: "Color & Typography Systems",
        blurb: "A defined palette and type hierarchy so your brand looks intentional everywhere.",
        imageLabel: "PLACEHOLDER: color & type system",
      },
      {
        name: "Brand Guidelines",
        blurb: "A simple rulebook so your brand stays consistent no matter who's using it.",
        imageLabel: "PLACEHOLDER: brand guidelines document",
      },
    ],
  },
  {
    id: "interior-space",
    title: "Interior Design & Physical Space",
    blurb: "Spaces that reflect the brand and work for the business.",
    services: [
      {
        name: "Interior Design",
        blurb: "Concepts, mood boards, and finishes that turn a room into an experience.",
        imageLabel: "PLACEHOLDER: interior design render or photo",
      },
      {
        name: "Space Planning & Layout",
        blurb: "Layouts that maximize flow, seating, and workspace for how you actually operate.",
        imageLabel: "PLACEHOLDER: floor plan / layout",
      },
      {
        name: "Material & Finish Selection",
        blurb: "Flooring, lighting, fixtures, and finishes chosen to match the brand and the budget.",
        imageLabel: "PLACEHOLDER: material & finish samples",
      },
      {
        name: "Furniture, Lighting & Décor Sourcing",
        blurb: "We source and specify everything that fills the space.",
        imageLabel: "PLACEHOLDER: furniture & décor moodboard",
      },
    ],
  },
  {
    id: "buildout-logistics",
    title: "Buildout & Logistics",
    blurb: "The part most designers hand off — we manage it ourselves.",
    services: [
      {
        name: "Renovation & Construction Coordination",
        blurb: "We manage the buildout end to end, so the finished space matches the design exactly.",
        imageLabel: "PLACEHOLDER: renovation in progress (before)",
      },
      {
        name: "Contractor & Vendor Management",
        blurb: "We hire, schedule, and hold accountable every trade on the project.",
        imageLabel: "PLACEHOLDER: on-site coordination",
      },
      {
        name: "Permit & Logistics Coordination",
        blurb: "Timelines, deliveries, and paperwork handled with military-grade discipline.",
        imageLabel: "PLACEHOLDER: project timeline / logistics",
      },
      {
        name: "On-Site Project Management",
        blurb: "A dedicated project manager on the ground until the doors open.",
        imageLabel: "PLACEHOLDER: finished space (after)",
      },
    ],
  },
  {
    id: "web-digital",
    title: "Web & Digital",
    blurb: "The digital front door to your business.",
    services: [
      {
        name: "Website Design & Development",
        blurb: "Fast, mobile-first websites built to convert visitors into customers.",
        imageLabel: "PLACEHOLDER: website mockup",
      },
      {
        name: "Online Ordering & Reservations",
        blurb: "Booking, reservations, and ordering wired directly into your site.",
        imageLabel: "PLACEHOLDER: booking / ordering flow",
      },
      {
        name: "E-Commerce",
        blurb: "Online stores set up to sell products and manage inventory.",
        imageLabel: "PLACEHOLDER: e-commerce store",
      },
      {
        name: "SEO & Local Search",
        blurb: "Get found on Google and maps when locals search for what you offer.",
        imageLabel: "PLACEHOLDER: local search results",
      },
    ],
  },
  {
    id: "marketing-social",
    title: "Marketing & Social Media",
    blurb: "Getting the right people through your door.",
    services: [
      {
        name: "Social Media Management",
        blurb: "We run your channels — strategy, posting, and community, done for you.",
        imageLabel: "PLACEHOLDER: social feed grid",
      },
      {
        name: "Launch Campaigns",
        blurb: "Coordinated grand-opening pushes across social, email, and local buzz.",
        imageLabel: "PLACEHOLDER: launch campaign creative",
      },
      {
        name: "Paid Ads",
        blurb: "Targeted social and search ads that bring in measurable results.",
        imageLabel: "PLACEHOLDER: ad creative set",
      },
      {
        name: "Email & SMS Marketing",
        blurb: "Campaigns that turn first-time customers into regulars.",
        imageLabel: "PLACEHOLDER: email campaign",
      },
    ],
  },
  {
    id: "photo-video",
    title: "Photography & Video",
    blurb: "Content that makes your brand look as good as it is.",
    services: [
      {
        name: "Brand & Product Photography",
        blurb: "Professional imagery of your space, products, and food.",
        imageLabel: "PLACEHOLDER: brand photography",
      },
      {
        name: "Video Production",
        blurb: "Promo videos, brand films, and behind-the-scenes content.",
        imageLabel: "PLACEHOLDER: video still",
      },
      {
        name: "Short-Form Content",
        blurb: "Reels and TikToks built for reach, produced on a schedule.",
        imageLabel: "PLACEHOLDER: short-form content",
      },
    ],
  },
  {
    id: "print-collateral",
    title: "Print & Physical Collateral",
    blurb: "The tangible pieces of your brand.",
    services: [
      {
        name: "Signage & Storefront Graphics",
        blurb: "Exterior signage and window graphics that stop foot traffic.",
        imageLabel: "PLACEHOLDER: signage design",
      },
      {
        name: "Menus & Price Lists",
        blurb: "Printed and digital menus designed to match the brand.",
        imageLabel: "PLACEHOLDER: menu design",
      },
      {
        name: "Business Cards & Stationery",
        blurb: "The everyday pieces that make you look established.",
        imageLabel: "PLACEHOLDER: stationery set",
      },
      {
        name: "Packaging & Branded Merch",
        blurb: "Bags, cups, packaging, and merch that extend the brand.",
        imageLabel: "PLACEHOLDER: packaging & merch",
      },
    ],
  },
];

// -----------------------------------------------------------------------------
//  CLIENT CASE STUDIES — /clients page. Add new projects here.
// -----------------------------------------------------------------------------
export const caseStudies = [
  {
    id: "project-one",
    client: "[CLIENT NAME]", // REPLACE
    type: "Restaurant — New Opening",
    challenge:
      "An empty retail space and a great menu, but no brand, no buildout, and no opening date in sight.",
    delivered: ["Interior Design", "Buildout", "Brand Identity", "Website", "Launch Marketing"],
    result: "Opened on schedule with a fully booked first weekend.",
    beforeLabel: "PLACEHOLDER: before — empty space",
    afterLabel: "PLACEHOLDER: after — finished restaurant",
  },
  {
    id: "project-two",
    client: "[CLIENT NAME]", // REPLACE
    type: "Retail Boutique — Rebrand",
    challenge:
      "An established shop with loyal customers but a dated look that no longer matched its quality.",
    delivered: ["Brand Identity", "Storefront Redesign", "Signage", "E-Commerce", "Photography"],
    result: "A refreshed brand that lifted both foot traffic and online sales.",
    beforeLabel: "PLACEHOLDER: before — old storefront",
    afterLabel: "PLACEHOLDER: after — rebranded storefront",
  },
  {
    id: "project-three",
    client: "[CLIENT NAME]", // REPLACE
    type: "Service Business — Salon",
    challenge:
      "A talented team working out of a space that didn't reflect the level of service inside.",
    delivered: ["Interior Design", "Renovation", "Booking Website", "Social Media"],
    result: "A premium space and booking system that raised average ticket value.",
    beforeLabel: "PLACEHOLDER: before — salon interior",
    afterLabel: "PLACEHOLDER: after — renovated salon",
  },
  {
    id: "project-four",
    client: "[CLIENT NAME]", // REPLACE
    type: "Café — Full Launch",
    challenge: "A first-time owner who needed one team to handle absolutely everything.",
    delivered: ["Naming", "Brand Identity", "Buildout", "Website", "Photography", "Launch"],
    result: "From lease signing to grand opening in a single managed process.",
    beforeLabel: "PLACEHOLDER: before — raw café space",
    afterLabel: "PLACEHOLDER: after — finished café",
  },
];

// -----------------------------------------------------------------------------
//  TESTIMONIALS — REPLACE with real quotes when available.
// -----------------------------------------------------------------------------
export const testimonials = [
  {
    quote:
      "We hired one team instead of five, and for the first time everything actually matched. The space, the logo, the website — all of it felt like one brand.",
    name: "[CLIENT NAME]", // REPLACE
    business: "[BUSINESS NAME], NYC",
  },
  {
    quote:
      "They handled the buildout, the permits, the website, the launch — I just showed up to my own grand opening. It came in on time and on spec.",
    name: "[CLIENT NAME]", // REPLACE
    business: "[BUSINESS NAME], Brooklyn",
  },
  {
    quote:
      "The discipline behind the scenes is what sold me. Nothing slipped, everything was communicated, and the result speaks for itself.",
    name: "[CLIENT NAME]", // REPLACE
    business: "[BUSINESS NAME], Queens",
  },
];

// -----------------------------------------------------------------------------
//  CONTACT PAGE options for the "service interested in" dropdown.
//  Auto-built from packages + "Not sure yet".
// -----------------------------------------------------------------------------
export const contactServiceOptions = [
  ...packages.map((p) => p.name),
  "Not sure yet",
];
