import Link from "next/link";
import { company } from "@/lib/content";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__brand">{company.name}</div>
            <p className="footer__blurb">
              {company.tagline} A full-branding studio for small businesses in{" "}
              {company.city} — design, buildout, digital, and marketing under one roof.
            </p>
            <div className="footer__social">
              {/* REPLACE social hrefs in lib/content.js */}
              {company.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href !== "#" ? "_blank" : undefined}
                  rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                >
                  {s.label.slice(0, 2).toUpperCase()}
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
                <p>{company.serviceArea}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {company.name}. All rights reserved.
          </span>
          <span>Serving {company.serviceArea}</span>
        </div>
      </div>
    </footer>
  );
}
