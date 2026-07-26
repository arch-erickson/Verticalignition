import Link from "next/link";
import { company } from "@/lib/content";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__lead">
            <p className="footer__tagline">
              You run the business.
              <br />
              <span className="fire">We&apos;ll handle the brand.</span>
            </p>
            <div className="footer__social">
              {/* REPLACE social hrefs in lib/content.js → company.social */}
              {company.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href !== "#" ? "_blank" : undefined}
                  rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Get in touch</h4>
            <ul>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <a href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}>{company.phone}</a>
              </li>
              <li>
                <p>
                  {company.city}
                  <br />
                  {company.serviceArea}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Oversized outlined wordmark watermark */}
        <div className="footer__mark" aria-hidden="true">
          {company.nameLines[0]}
          <br />
          {company.nameLines[1]}
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {company.name}. All rights reserved.
          </span>
          <span>Designed and built in New York.</span>
        </div>
      </div>
    </footer>
  );
}
