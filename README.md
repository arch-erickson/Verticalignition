# Vertical Ignition

Website for a full-branding company in New York City. Built with **Next.js (App
Router)**. All content lives in one file so copy can be edited without touching
layout code.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production: `npm run build` then `npm start`.

## Design language

A blend of three references:

| Reference | What we took |
| --- | --- |
| **dd.nyc** | Oversized tight display type, huge whitespace, diagonal hairlines with rotated micro-text, scrolling marquee tickers, staggered work grid with numbered badges and slash tags, floating pill CTA |
| **apple.com/airpods** | Full-bleed rounded cards stacked on a soft canvas, sticky staged scroll storytelling, paired pill CTAs, short confident statements |
| **starfishco.com** | Stacked logotype, pill CTA in the header, orange-forward confidence |

**Palette:** mainly white canvas, **black reserved for key blocks only** (stats,
process, testimonials, CTA, footer), and a **fire gradient** — `#FF3D00 →
#FF6A00 → #FF9E00` — for accents.

**Voice:** humble and direct. We take the load off the owner's back. Written for
NYC small business and restaurant owners, not for design awards.

## Where to edit things

**Almost everything is in [`lib/content.js`](lib/content.js).** Search for
`REPLACE` or `PLACEHOLDER`.

| I want to change… | Edit |
| --- | --- |
| Company name, email, phone, socials | `company` |
| Hero headline (`{braces}` = fire gradient) | `hero.headlineLines` |
| Scrolling ticker words | `marqueeItems` |
| The big animated numbers | `stats` |
| Founders' names & bios | `founders` |
| **The 5 packages** | `packages` — set `featured: true` on one |
| **Every individual service** | `serviceCategories` |
| **Client projects** | `caseStudies` + `workCategories` for filter tabs |
| Testimonials | `testimonials` |
| Process steps | `process` |
| FAQ | `faqs` |
| **Brand colors** | `:root` in [`app/globals.css`](app/globals.css) |
| **Fonts** | the `next/font` imports in [`app/layout.js`](app/layout.js) |
| SEO / OG tags | `metadata` in `app/layout.js` + each page |

### Adding a project to Work
Add an object to `caseStudies`. Its `categories` array decides which filter tabs
it appears under; `featured: true` puts it in the Featured tab. The grid
staggers and numbers itself automatically.

### Adding a service or package
Add an object to the relevant `serviceCategories[].services` array, or to
`packages`. Both render automatically.

## Replacing placeholder images
Every image is a `<Placeholder>` component (the striped boxes with labels). Swap
each for a Next.js `<Image>` or `<img>`; put files in `public/`. For the social
share card, add a 1200×630 image at `public/og.jpg`.

## File structure

```
app/
  layout.js          Root layout: fonts, nav, footer, SEO + JSON-LD
  globals.css        Entire design system (colors, type, components, animation)
  page.js            Home
  services/page.js   Packages + full service gallery + FAQ
  work/page.js       Filterable project grid
  contact/page.js    Form + details
components/
  Nav.js             Sticky nav, stacked logotype, mobile menu
  Footer.js          Footer with oversized outlined wordmark
  FloatingCta.js     Pill CTA that appears after scrolling
  Reveal.js          Scroll-triggered reveal (fade / clip / scale)
  SplitHeadline.js   Line-by-line masked headline reveal, {fire} highlighting
  Marquee.js         Infinite ticker
  Stats.js           Count-up numbers
  ProcessSticky.js   Pinned-number staged process scroll
  WorkGrid.js        Filterable staggered project grid
  PackageCard.js     Expandable package card
  Faq.js             Accordion
  Testimonials.js    Quote cards
  CtaBanner.js       Black-block closing CTA
  ContactForm.js     Form with chip-style interest picker
  Placeholder.js     Labeled image placeholder
lib/
  content.js         ← ALL editable content
```

## Contact form
Submits via `mailto:` so the site needs no backend. To collect submissions
server-side, see the marked block in
[`components/ContactForm.js`](components/ContactForm.js).

## Notes
- `/clients` permanently redirects to `/work` (see `next.config.mjs`).
- Fonts are self-hosted by `next/font` — no external requests at runtime.
- Respects `prefers-reduced-motion`; all animation is disabled for those users.
