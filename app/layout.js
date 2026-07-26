import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import { company } from "@/lib/content";

// -----------------------------------------------------------------------------
//  FONTS — self-hosted by next/font (no external requests at runtime).
//  To change the brand typefaces, swap these imports and the variable names
//  stay the same, so globals.css needs no edits.
//    --font-space  → display / headlines (tight geometric grotesque)
//    --font-inter  → body copy
// -----------------------------------------------------------------------------
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// -----------------------------------------------------------------------------
//  SITE-WIDE SEO — REPLACE SITE_URL with the real domain before launch.
//  Drop a 1200×630 image at /public/og.jpg for social sharing.
// -----------------------------------------------------------------------------
const SITE_URL = "https://verticalignition.com"; // REPLACE

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} — Full-Service Branding for NYC Small Business`,
    template: `%s — ${company.name}`,
  },
  description:
    "One team for your whole brand. Interior design, renovation, buildout, websites, marketing, photo and video for small businesses and restaurants across New York City.",
  keywords: [
    "branding company NYC",
    "full-service branding for small business",
    "restaurant branding New York",
    "storefront design NYC",
    "interior design and buildout NYC",
    "brand identity New York",
    "small business marketing NYC",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: company.name,
    title: `${company.name} — Full-Service Branding for NYC Small Business`,
    description:
      "You run the business. We'll handle the brand. Design, buildout, websites and marketing from one team in New York City.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — Full-Service Branding in NYC`,
    description:
      "One team for your whole brand: design, buildout, digital and marketing for New York small businesses.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport = {
  themeColor: "#0b0b0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    description:
      "Full-service branding company in New York City: interior design, buildout, websites and marketing under one roof.",
    areaServed: "New York City",
    email: company.email,
    telephone: company.phone,
    url: SITE_URL,
    address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY" },
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="btn skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <FloatingCta />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
