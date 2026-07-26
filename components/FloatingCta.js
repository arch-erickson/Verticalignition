"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * FloatingCta — the persistent pill button that appears bottom-right once the
 * user scrolls past the hero (DD.NYC pattern). Hidden on the contact page,
 * where it would be redundant, and on mobile via CSS.
 */
export default function FloatingCta() {
  const pathname = usePathname();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      className={`btn btn--sm float-cta ${shown ? "is-shown" : ""}`}
      tabIndex={shown ? 0 : -1}
      aria-hidden={!shown}
    >
      Start a project
      <svg className="btn__arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
