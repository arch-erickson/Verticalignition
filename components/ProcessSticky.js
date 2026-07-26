"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { process } from "@/lib/content";

/**
 * ProcessSticky — Apple-style staged storytelling. The big number on the left
 * stays pinned while the steps scroll past on the right; the active step
 * brightens and the number/progress bar follow along.
 * Edit steps in lib/content.js → process.
 */
export default function ProcessSticky() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the middle of the viewport.
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        const best = visible.reduce((a, b) =>
          Math.abs(a.boundingClientRect.top - window.innerHeight / 2) <
          Math.abs(b.boundingClientRect.top - window.innerHeight / 2)
            ? a
            : b
        );
        const idx = stepRefs.current.indexOf(best.target);
        if (idx !== -1) setActive(idx);
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );

    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const pct = ((active + 1) / process.steps.length) * 100;

  return (
    <div className="proc">
      {/* Pinned side */}
      <div>
        <div className="proc__sticky">
          <Reveal>
            <span className="eyebrow">{process.eyebrow}</span>
            <h2 className="d2" style={{ marginTop: "1.25rem", maxWidth: "12ch" }}>
              {process.title}
            </h2>
          </Reveal>
          <div className="proc__counter" aria-hidden="true">
            {process.steps[active].n}
          </div>
          <div className="proc__bar" aria-hidden="true">
            <div className="proc__bar-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      {/* Scrolling steps */}
      <ol className="proc__steps">
        {process.steps.map((step, i) => (
          <li
            key={step.n}
            ref={(el) => (stepRefs.current[i] = el)}
            className={`proc__step ${i === active ? "is-active" : ""}`}
          >
            <h3 className="proc__label">
              {step.label}
              <small>{step.n}</small>
            </h3>
            <ul className="proc__tags">
              {step.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="proc__note">{step.note}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
