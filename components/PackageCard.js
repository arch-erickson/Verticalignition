"use client";

import { useId, useState } from "react";

/**
 * PackageCard — package card with an animated expand panel listing everything
 * included. The featured package renders as a black block with a fire edge.
 * Data comes from lib/content.js → packages.
 */
export default function PackageCard({ pkg }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article
      className={`pkg ${pkg.featured ? "pkg--featured" : ""} ${
        pkg.recommended ? "pkg--recommended" : ""
      }`}
    >
      {pkg.featured && <span className="pkg__badge">Most popular</span>}
      {pkg.recommended && (
        <span className="pkg__badge pkg__badge--rec">Recommended</span>
      )}

      <span className="pkg__n">{pkg.n}</span>
      <h3 className="pkg__name">{pkg.name}</h3>
      <p className="pkg__tagline">{pkg.tagline}</p>

      <ul className="pkg__highlights">
        {pkg.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <button
        type="button"
        className="pkg__expand"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{open ? "Hide the details" : "See everything included"}</span>
        <svg className="pkg__chev" width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div id={panelId} className={`pkg__panel ${open ? "is-open" : ""}`}>
        <div className="pkg__panel-inner">
          <ul className="pkg__list">
            {pkg.includes.map((item) => (
              <li key={item}>
                <span className="pkg__tick" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
