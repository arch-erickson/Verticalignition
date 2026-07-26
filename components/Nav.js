"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "@/lib/content";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a border to the nav once the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="container nav__inner">
        <Link href="/" className="nav__brand" aria-label={`${company.name} home`}>
          {/* REPLACE .nav__logo with a real logo image when available */}
          <span className="nav__logo" aria-hidden="true">
            {company.shortName}
          </span>
          <span>{company.name}</span>
        </Link>

        <nav aria-label="Primary">
          <ul id="nav-menu" className="nav__links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav__link"
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="nav__cta-mobile">
              <Link href={company.primaryCta.href} className="btn btn--primary">
                {company.primaryCta.label}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="nav__actions">
          <Link
            href={company.primaryCta.href}
            className="btn btn--primary nav__cta-desktop"
          >
            {company.primaryCta.label}
          </Link>
          <button
            type="button"
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
