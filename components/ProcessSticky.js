"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { process } from "@/lib/content";

/**
 * ProcessSticky — staged storytelling. The left column (title + big numeral +
 * progress bar) stays pinned while the steps scroll past on the right.
 *
 * Driven by one scroll → rAF loop reading the section's position, rather than an
 * IntersectionObserver per step. That gives a single smooth source of truth on
 * every device: the active step, the progress bar, and a gentle downward
 * parallax on the left column are all derived from the same 0→1 progress value.
 *
 * Edit steps in lib/content.js → process.
 */
const PARALLAX = 90; // px the left column drifts down across the section

export default function ProcessSticky() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const bar = barRef.current;
    if (!section) return;

    const len = process.steps.length;
    let raf = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // 0 when the section top hits the top of the viewport, 1 when its bottom
      // reaches the bottom — the span over which the steps are read.
      const total = Math.max(rect.height - vh, 1);
      const p = Math.min(1, Math.max(0, -rect.top / total));

      const idx = Math.min(len - 1, Math.floor(p * len));
      setActive((prev) => (prev === idx ? prev : idx));

      // Parallax: the whole left column eases downward as you scroll.
      if (sticky) sticky.style.transform = `translate3d(0, ${(p * PARALLAX).toFixed(1)}px, 0)`;
      // Continuous progress bar (never fully empty).
      if (bar) bar.style.width = `${(Math.max(p, 1 / len) * 100).toFixed(1)}%`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="proc" ref={sectionRef}>
      {/* Pinned side (parallax applied to the inner wrapper) */}
      <div>
        <div className="proc__sticky" ref={stickyRef}>
          <Reveal>
            <span className="eyebrow">{process.eyebrow}</span>
            <h2 className="d2 proc__title">{process.title}</h2>
          </Reveal>
          <div className="proc__counter" aria-hidden="true">
            {process.steps[active].n}
          </div>
          <div className="proc__bar" aria-hidden="true">
            <div className="proc__bar-fill" ref={barRef} />
          </div>
        </div>
      </div>

      {/* Scrolling steps */}
      <ol className="proc__steps">
        {process.steps.map((step, i) => (
          <li key={step.n} className={`proc__step ${i === active ? "is-active" : ""}`}>
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
