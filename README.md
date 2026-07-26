# Vertical Ignition — Full-Branding Company Website

A responsive, mobile-first portfolio site built with **Next.js (App Router)**. All
content lives in one config file so you can edit copy without touching layout code.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

Build for production with `npm run build` then `npm start`.

## Where to edit things

**Almost everything you'll want to change is in [`lib/content.js`](lib/content.js).**
Open that file and search for `REPLACE` or `PLACEHOLDER`.

| I want to change…            | Edit this                                                        |
| ---------------------------- | --------------------------------------------------------------- |
| Company name, email, phone, socials | `company` object in `lib/content.js`                     |
| Hero headline & buttons      | `hero` object in `lib/content.js`                                |
| Founders' names & bios       | `founders` in `lib/content.js`                                   |
| **The 5 packages**           | `packages` array in `lib/content.js`                             |
| **Every individual service** | `serviceCategories` array in `lib/content.js`                    |
| **Client case studies**      | `caseStudies` array in `lib/content.js`                          |
| Testimonials                 | `testimonials` array in `lib/content.js`                         |
| "Our process" steps          | `process` object in `lib/content.js`                             |
| Brand **colors & fonts**     | `:root` variables at the top of `app/globals.css`               |
| SEO title / description / OG  | `app/layout.js` (site-wide) + `metadata` in each page file      |

### Adding a new package
Add an object to the `packages` array. Set `featured: true` on the one you want
highlighted as "Most popular" (only one should be featured).

### Adding a new service
Add an object (`name`, `blurb`, `imageLabel`) to the relevant category's `services`
array in `serviceCategories`, or add a whole new category object.

### Adding a new client project
Add an object to the `caseStudies` array. The Clients page renders them automatically
and alternates the image side.

## Replacing placeholder images
Every image is a labeled `<Placeholder>` component (the striped boxes). To use a real
image, replace `<Placeholder label="…" />` with a Next.js `<Image>` or `<img>` in the
relevant file. Put image files in the `public/` folder.

For the social share image, drop a 1200×630 file at `public/og.jpg`.

## File structure

```
app/
  layout.js         Root layout: nav, footer, site-wide SEO/JSON-LD
  globals.css       All styling + design tokens (colors/fonts here)
  page.js           Home
  services/page.js  Services & Packages (packages + full gallery + CTA)
  clients/page.js   Client case studies
  contact/page.js   Contact form + details
components/
  Nav.js            Sticky nav + mobile menu (client)
  Footer.js         Footer
  Reveal.js         Scroll-triggered fade/slide animation (client)
  Placeholder.js    Labeled image placeholder
  PackageCard.js    Expandable package card (client)
  Service-related sections rendered inline in services/page.js
  ProcessSteps.js   Discover → Design → Build → Launch → Grow
  Testimonials.js   Quote cards
  CtaBanner.js      Reusable closing call-to-action
  ContactForm.js    Contact form (client; mailto by default — see notes below)
lib/
  content.js        ← ALL editable content
```

## Contact form
By default the form opens the visitor's email app (no backend needed). To collect
submissions on a server, see the notes in [`components/ContactForm.js`](components/ContactForm.js) —
wire `handleSubmit` to a route handler or a service like Formspree/Resend.
