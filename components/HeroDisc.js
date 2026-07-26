"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { heroImages } from "@/lib/content";

/**
 * HeroDisc — three images orbiting a vertical axis like a slowly turning disc.
 *
 * Depth drives everything: an image's angle gives its position on the circle,
 * and the cosine of that angle (1 = nearest the viewer, -1 = furthest) sets its
 * scale, stacking order, opacity and blur. So whichever image swings to the
 * front is the biggest and sharpest, and the other two sit smaller behind it.
 *
 * The cards stay flat-on rather than rotating in 3D — a true rotateY would turn
 * them edge-on and reduce them to slivers at the sides, which reads as a bug
 * rather than as depth.
 *
 * The loop writes to element styles directly instead of going through state:
 * at 60fps a setState per frame would re-render the tree 60 times a second for
 * what is purely a visual transform.
 *
 * Edit the images in lib/content.js → heroImages.
 */

const CYCLE_MS = 21000; // one full revolution
const SCALE_BACK = 0.58; // scale of the furthest card
const SCALE_FRONT = 1; // scale of the nearest card
const RADIUS_RATIO = 0.27; // orbit radius as a fraction of container width
const LIFT = 10; // px of vertical rise at the front, for an elliptical orbit
const MAX_BLUR = 2.4; // px of blur on the furthest card

export default function HeroDisc() {
  const wrapRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const count = heroImages.length;
    let radius = wrap.getBoundingClientRect().width * RADIUS_RATIO;
    let angle = 0;
    let last = 0;
    let raf = 0;

    const paint = () => {
      for (let i = 0; i < count; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;

        const theta = angle + (i * Math.PI * 2) / count;
        const depth = Math.cos(theta); // 1 near, -1 far
        const t = (depth + 1) / 2; // 0…1

        const x = Math.sin(theta) * radius;
        const y = -depth * LIFT;
        const scale = SCALE_BACK + (SCALE_FRONT - SCALE_BACK) * t;

        el.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(
          2
        )}px, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
        el.style.zIndex = String(Math.round(t * 100));
        el.style.opacity = (0.45 + 0.55 * t).toFixed(3);
        el.style.filter = `blur(${((1 - t) * MAX_BLUR).toFixed(2)}px)`;
      }
    };

    const step = (now) => {
      if (!last) last = now;
      const dt = now - last;
      last = now;

      // Read hover state live rather than tracking it with enter/leave events.
      // If the element scrolls out from under a stationary cursor, the leave
      // event can go missing and a flag would latch on, freezing the disc.
      if (!wrap.matches(":hover")) {
        angle += (dt / CYCLE_MS) * Math.PI * 2;
        paint();
      }
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (raf) return;
      last = 0;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    paint(); // lay the cards out before the first frame lands

    const ro = new ResizeObserver(() => {
      radius = wrap.getBoundingClientRect().width * RADIUS_RATIO;
      paint();
    });
    ro.observe(wrap);

    // Don't spin while off screen or on a hidden tab.
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(wrap);

    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="disc" ref={wrapRef}>
      {heroImages.map((item, i) => (
        <div className="disc__item" key={i} ref={(el) => (itemRefs.current[i] = el)}>
          {/* Bold offset block behind the image */}
          <div className={`disc__fill disc__fill--${item.fill}`} aria-hidden="true" />

          <div className="disc__media">
            {item.src ? (
              <Image
                className="disc__img"
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 900px) 60vw, 420px"
                priority={i === 0}
              />
            ) : (
              <div className="ph" role="img" aria-label={item.label}>
                <span>{item.label}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
