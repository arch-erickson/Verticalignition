"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroImages } from "@/lib/content";

/**
 * HeroStage — three images held together by one organic black pill.
 *
 * Layout: three slots, a large centre flanked by two smaller ones. On each tick
 * the images rotate a slot, so a new one takes the centre.
 *
 * The pill: a set of black blocks (one behind each card) live in a layer under
 * an SVG gooey filter — blur, then a hard alpha threshold — so neighbouring
 * blocks fuse into a single shape with organic "necks" between them, exactly
 * like the 40+ V I pill but wrapping three images of different sizes. A rAF loop
 * pins each block to its card's live rectangle, so the pill re-flows as the
 * centre pops and the images resize. It behaves like skin over the three cards.
 *
 * The centre pop (overshoot then settle) plus the eased slot transition give the
 * "slow, then snap" motion. Edit the images in lib/content.js → heroImages.
 */

const HOLD_MS = 4200; // how long each image holds the centre
const PAD = 22; // black frame thickness around each image, in px

export default function HeroStage() {
  const [active, setActive] = useState(0);
  const stageRef = useRef(null);
  const cardRefs = useRef([]); // the three visible cards (by slot)
  const blobRefs = useRef([]); // the three black blocks (by slot)

  // Rotation timer — gated to on-screen + visible + not hovered.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    // NOTE: intentionally not gated on prefers-reduced-motion. This is the
    // brand's centrepiece and needs to run everywhere (many machines quietly
    // have reduced-motion on). To make it accessibility-strict instead, bail
    // here when the query matches, and restore the reduced-motion rule in CSS.

    let timer = 0;
    const start = () => {
      if (timer) return;
      timer = window.setInterval(() => {
        if (!stage.matches(":hover") && !document.hidden) {
          setActive((a) => (a + 1) % heroImages.length);
        }
      }, HOLD_MS);
    };
    const stop = () => {
      clearInterval(timer);
      timer = 0;
    };

    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(stage);
    return () => {
      stop();
      io.disconnect();
    };
  }, []);

  // Keep each black block pinned to its card's live rectangle so the pill
  // follows the cards through their transitions and the centre pop.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let raf = 0;
    let running = false;

    const sync = () => {
      const base = stage.getBoundingClientRect();
      for (let i = 0; i < 3; i++) {
        const card = cardRefs.current[i];
        const blob = blobRefs.current[i];
        if (!card || !blob) continue;
        const r = card.getBoundingClientRect();
        blob.style.width = `${r.width + PAD * 2}px`;
        blob.style.height = `${r.height + PAD * 2}px`;
        blob.style.transform = `translate(${r.left - base.left - PAD}px, ${
          r.top - base.top - PAD
        }px)`;
      }
    };

    const loop = () => {
      sync();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running) return;
      running = true;
      loop();
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    sync(); // place them before the first frame

    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(stage);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const count = heroImages.length;
  const slots = [
    { name: "left", index: (active + count - 1) % count },
    { name: "center", index: active },
    { name: "right", index: (active + 1) % count },
  ];

  return (
    <div className="stage" ref={stageRef}>
      {/* Gooey filter — merges the black blocks into one organic pill */}
      <svg className="stage__defs" aria-hidden="true" focusable="false">
        <defs>
          <filter id="vi-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="13" result="b" />
            <feColorMatrix
              in="b"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 20 -9"
            />
          </filter>
        </defs>
      </svg>

      {/* The pill: black blocks under the goo filter, pinned to the cards */}
      <div className="stage__pill" aria-hidden="true">
        {slots.map((slot, i) => (
          <span
            className="stage__blob"
            key={slot.name}
            ref={(el) => (blobRefs.current[i] = el)}
          />
        ))}
      </div>

      {/* The images */}
      {slots.map((slot, i) => {
        const item = heroImages[slot.index];
        return (
          <div className={`stage__slot stage__slot--${slot.name}`} key={slot.name}>
            {/* keyed by image index → remounts on change → replays the pop */}
            <figure
              className="stage__card"
              key={slot.index}
              ref={(el) => (cardRefs.current[i] = el)}
            >
              {item.src ? (
                <Image
                  className="stage__img"
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 520px"
                  priority={slot.index === 0}
                />
              ) : (
                <div className="ph" role="img" aria-label={item.label}>
                  <span>{item.label}</span>
                </div>
              )}
            </figure>
          </div>
        );
      })}
    </div>
  );
}
