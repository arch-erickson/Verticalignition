"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company } from "@/lib/content";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="container nav__inner">
        {/* Stacked logotype + pulsing ember (REPLACE with a real logo if you have one) */}
        <Link href="/" className="nav__brand" aria-label={`${company.name} home`}>
          <span className="nav__spark" aria-hidden="true" />
          <span className="nav__word">
            {company.nameLines[0]}
            <br />
            {company.nameLines[1]}
          </span>
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
              <Link href={company.primaryCta.href} className="btn btn--fire">
                {company.primaryCta.label}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="nav__actions">
          <Link href={company.primaryCta.href} className="btn btn--sm nav__cta-desktop">
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
            <i aria-hidden="true" />
            <i aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
