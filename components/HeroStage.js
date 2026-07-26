"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroImages } from "@/lib/content";

/**
 * HeroStage — three images held together by one organic black pill.
 *
 * Layout: a large 16:9 image in the centre with a 1:1 image either side. All
 * three sit on a single black pill made with an SVG gooey filter (blur + hard
 * alpha threshold), so the black blocks behind the cards fuse into one shape
 * with smooth necks — the same pill language as the "40+ V I" block. A rAF loop
 * pins each block to its card's live rectangle, so the pill re-flows as cards
 * move, resize, and distort.
 *
 * Rotation ("black hole"): on each tick the images advance one slot. The image
 * leaving the left is sucked into an invisible point — shrinking to nothing
 * while its shape skews and its colour shifts — then ejected from a point on
 * the right, un-distorting back to normal as it grows into place. The other two
 * simply glide to their new slots. The pill, tracking every card, retracts as
 * the image is swallowed and swells as it re-emerges.
 *
 * Edit the images in lib/content.js → heroImages.
 */

const HOLD_MS = 4600; // dwell before the next rotation
const PAD = 22; // black frame around each image (px) — uniform on all sides
const R_CARD = 18; // image corner radius (matches --r-md)
const GLIDE = "cubic-bezier(0.65, 0, 0.2, 1)"; // slow-in, snap for the gliders

export default function HeroStage() {
  const [active, setActive] = useState(0);
  const stageRef = useRef(null);
  const cardRefs = useRef([]); // persistent, one per image
  const blobRefs = useRef([]); // persistent, one per image
  const geoRef = useRef([]); // last-applied geometry per image
  const prevActiveRef = useRef(0);
  const animsRef = useRef([]); // in-flight WAAPI handles, for cancellation

  // ---- geometry ------------------------------------------------------------
  // Returns the box for a given slot at the current stage size.
  const boxFor = (slot, W, H) => {
    const narrow = W < 640;
    const centerW = narrow ? W - PAD * 2 : Math.min(W * 0.48, 540);
    const centerH = centerW * (9 / 16); // 16:9 centre
    const sideH = centerH * 0.82; // 1:1 sides, clearly smaller than the centre
    const sideW = sideH;
    const cy = H / 2;

    if (slot === "center") {
      return { w: centerW, h: centerH, cx: W / 2, cy };
    }
    if (narrow) {
      // No room for the sides — tuck them behind the centre, invisible.
      return { w: sideW, h: sideH, cx: W / 2, cy, hidden: true };
    }
    const cx = slot === "left" ? PAD + sideW / 2 : W - PAD - sideW / 2;
    return { w: sideW, h: sideH, cx, cy };
  };

  const stageHeight = (W) => {
    const centerW = W < 640 ? W - PAD * 2 : Math.min(W * 0.48, 540);
    const centerH = centerW * (9 / 16); // centre is now the tallest card
    return Math.round(centerH + PAD * 2 + 28);
  };

  const slotOf = (imageIndex, act) => {
    const rel = (imageIndex - act + heroImages.length) % heroImages.length;
    if (rel === 0) return "center";
    if (rel === 1) return "right";
    return "left"; // rel === 2 (only exists for 3 images)
  };

  // Apply a card's box via left/top/width/height; transform stays free for the
  // distortion. Returns the geometry used.
  const applyBox = (el, box, W, H) => {
    const left = box.cx - box.w / 2;
    const top = box.cy - box.h / 2;
    el.style.width = `${box.w}px`;
    el.style.height = `${box.h}px`;
    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
    return box;
  };

  // Lay every card out. `animate` false = snap (mount / resize).
  const layout = (act, animate) => {
    const stage = stageRef.current;
    if (!stage) return;
    const { width: W, height: H } = stage.getBoundingClientRect();

    // cancel anything still running from a previous tick
    animsRef.current.forEach((a) => a && a.cancel());
    animsRef.current = [];

    heroImages.forEach((_, i) => {
      const el = cardRefs.current[i];
      if (!el) return;
      const slot = slotOf(i, act);
      const prevSlot = slotOf(i, prevActiveRef.current);
      const box = boxFor(slot, W, H);
      const isWrap = animate && prevSlot === "left" && slot === "right";

      // Centre always sits in front of the two sides.
      el.style.zIndex = slot === "center" ? "3" : "2";

      if (!animate) {
        el.style.transition = "none";
        el.style.transform = "none";
        el.style.filter = "none";
        el.style.opacity = box.hidden ? "0" : "1";
        el.style.borderRadius = `${R_CARD}px`;
        geoRef.current[i] = applyBox(el, box, W, H);
        return;
      }

      if (isWrap) {
        blackHole(el, geoRef.current[i], box, W, H);
      } else {
        // glide to the new slot
        el.style.transition = `left 0.75s ${GLIDE}, top 0.75s ${GLIDE}, width 0.75s ${GLIDE}, height 0.75s ${GLIDE}, opacity 0.5s ease`;
        el.style.transform = "none";
        el.style.filter = "none";
        el.style.opacity = box.hidden ? "0" : "1";
        el.style.borderRadius = `${R_CARD}px`;
        applyBox(el, box, W, H);
      }
      geoRef.current[i] = box;
    });
  };

  // The absorb → eject sequence for the wrapping card.
  const blackHole = (el, from, to, W, H) => {
    el.style.transition = "none";
    // make sure it starts at its current (left) box
    if (from) applyBox(el, from, W, H);

    const absorb = el.animate(
      [
        { transform: "none", filter: "none", opacity: 0.9, borderRadius: `${R_CARD}px` },
        {
          transform: "rotate(28deg) skewX(24deg) scale(0.06)",
          filter: "hue-rotate(90deg) saturate(3.2) blur(4px) brightness(1.5)",
          opacity: 0,
          borderRadius: "50%",
        },
      ],
      { duration: 520, easing: "cubic-bezier(0.7, 0, 0.85, 0.2)", fill: "forwards" }
    );
    animsRef.current.push(absorb);

    absorb.onfinish = () => {
      // teleport to the right slot while invisible
      applyBox(el, to, W, H);
      const eject = el.animate(
        [
          {
            transform: "rotate(-22deg) skewX(-20deg) scale(0.06)",
            filter: "hue-rotate(-70deg) saturate(3.2) blur(4px) brightness(1.5)",
            opacity: 0,
            borderRadius: "50%",
          },
          { transform: "none", filter: "none", opacity: to.hidden ? 0 : 1, borderRadius: `${R_CARD}px` },
        ],
        { duration: 640, easing: "cubic-bezier(0.12, 0.7, 0.2, 1)", fill: "forwards" }
      );
      animsRef.current.push(eject);
      eject.onfinish = () => {
        // hand control back to inline styles, then drop the animation
        el.style.transform = "none";
        el.style.filter = "none";
        el.style.opacity = to.hidden ? "0" : "1";
        el.style.borderRadius = `${R_CARD}px`;
        eject.cancel();
      };
    };
  };

  // ---- mount: initial layout + resize --------------------------------------
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const relayout = () => {
      const { width: W } = stage.getBoundingClientRect();
      stage.style.height = `${stageHeight(W)}px`;
      layout(active, false); // snap on resize
    };
    relayout();

    const ro = new ResizeObserver(relayout);
    ro.observe(stage);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---- run the transition whenever `active` changes ------------------------
  useEffect(() => {
    layout(active, true);
    prevActiveRef.current = active;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // ---- rotation timer (gated to on-screen + visible + not hovered) ---------
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    // Intentionally not gated on prefers-reduced-motion — see note in the
    // cursor grid. Flip this to bail on the media query for strict a11y.
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

  // ---- pin each black block to its card's live rectangle -------------------
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let raf = 0;
    let running = false;

    const sync = () => {
      const base = stage.getBoundingClientRect();
      for (let i = 0; i < heroImages.length; i++) {
        const card = cardRefs.current[i];
        const blob = blobRefs.current[i];
        if (!card || !blob) continue;
        const r = card.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) {
          blob.style.opacity = "0"; // swallowed — no neck to draw
          continue;
        }
        blob.style.opacity = "1";
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
    sync();
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

  return (
    <div className="stage" ref={stageRef}>
      {/* Gooey filter — fuses the black blocks into one pill */}
      <svg className="stage__defs" aria-hidden="true" focusable="false">
        <defs>
          <filter id="vi-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="b" />
            <feColorMatrix
              in="b"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 26 -11"
            />
          </filter>
        </defs>
      </svg>

      {/* The pill: black blocks under the goo filter, pinned to the cards */}
      <div className="stage__pill" aria-hidden="true">
        {heroImages.map((_, i) => (
          <span className="stage__blob" key={i} ref={(el) => (blobRefs.current[i] = el)} />
        ))}
      </div>

      {/* Persistent cards — positioned imperatively by layout() */}
      {heroImages.map((item, i) => (
        <figure className="stage__card" key={i} ref={(el) => (cardRefs.current[i] = el)}>
          {item.src ? (
            <Image
              className="stage__img"
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 700px) 90vw, 520px"
              priority={i === 0}
            />
          ) : (
            <div className="ph" role="img" aria-label={item.label}>
              <span>{item.label}</span>
            </div>
          )}
        </figure>
      ))}
    </div>
  );
}
