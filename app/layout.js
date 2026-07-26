import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { company } from "@/lib/content";

// -----------------------------------------------------------------------------
//  SITE-WIDE SEO / METADATA
//  REPLACE metadataBase with your real domain before launch.
//  To add a real social share image, drop /public/og.jpg and it will be used.
// -----------------------------------------------------------------------------
const SITE_URL = "https://verticalignition.com"; // REPLACE with real domain

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} — Full-Service Branding for Small Business in NYC`,
    template: `%s — ${company.name}`,
  },
  description:
    "A full-branding company in New York City. Interior design, renovation, buildout, websites, marketing, social, logos, photo and video — all under one roof, from one team.",
  keywords: [
    "branding company NYC",
    "full-service branding for small business",
    "brand identity New York",
    "interior design and buildout NYC",
    "restaurant branding New York",
    "storefront design NYC",
    "small business marketing New York",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: company.name,
    title: `${company.name} — Full-Service Branding for Small Business in NYC`,
    description:
      "Interior design, buildout, websites, and marketing under one roof. One team for your entire brand — built for New York small businesses.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — Full-Service Branding in NYC`,
    description:
      "One team for your entire brand: design, buildout, digital, and marketing for NYC small businesses.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport = {
  themeColor: "#14140f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  // JSON-LD structured data for local business SEO.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    description:
      "Full-service branding company in New York City: interior design, buildout, websites, and marketing under one roof.",
    areaServed: company.serviceArea,
    email: company.email,
    telephone: company.phone,
    url: SITE_URL,
    address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY" },
  };

  return (
    <html lang="en">
      <body>
        <a href="#main" className="btn btn--primary skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
