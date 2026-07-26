"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { heroImages } from "@/lib/content";

/**
 * HeroStage — three independent framed cards: a wide 16:9 image in the centre
 * with a 1:1 image either side, every card the SAME height. Each card is its
 * own black rounded frame (no connected/organic shape).
 *
 * Rotation ("black hole"): on each tick the images advance one slot. The image
 * leaving the left is sucked into an invisible point — shrinking to nothing as
 * it skews and its colour shifts — then ejected from a point on the right,
 * un-distorting back to normal. The card that lands in the centre pops
 * (overshoot, then settle). The other glide moves are plain slot-to-slot.
 *
 * Cards are persistent and positioned imperatively so the wrapping card can be
 * absorbed and re-ejected on the same DOM node instead of flying across.
 *
 * Edit the images in lib/content.js → heroImages.
 */

const HOLD_MS = 4600; // dwell before the next rotation
const PAD = 22; // black frame thickness (must match .stage__card padding)
const R_CARD = 34; // outer frame radius (matches --r-lg)
const GLIDE = "cubic-bezier(0.65, 0, 0.2, 1)"; // slow-in, snap

export default function HeroStage() {
  const [active, setActive] = useState(0);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const geoRef = useRef([]);
  const prevActiveRef = useRef(0);
  const animsRef = useRef([]);

  // ---- geometry: all cards share one height; centre is wider (16:9) --------
  const metrics = (W) => {
    const narrow = W < 640;
    // outer height of every card
    const cardH = narrow
      ? (W - PAD * 2) * (9 / 16) + PAD * 2
      : Math.min(W * 0.3, 320);
    const imgH = cardH - PAD * 2;
    const centerW = imgH * (16 / 9) + PAD * 2; // 16:9 image
    const sideW = imgH + PAD * 2; // 1:1 image, same height
    const gap = Math.max(W * 0.02, 16);
    return { narrow, cardH, centerW, sideW, gap };
  };

  const boxFor = (slot, W, H) => {
    const m = metrics(W);
    const cy = H / 2;
    if (m.narrow) {
      if (slot === "center") return { w: W - 0, h: m.cardH, cx: W / 2, cy };
      return { w: m.sideW, h: m.cardH, cx: W / 2, cy, hidden: true };
    }
    const groupW = m.sideW * 2 + m.centerW + m.gap * 2;
    const startX = (W - groupW) / 2;
    if (slot === "left") {
      return { w: m.sideW, h: m.cardH, cx: startX + m.sideW / 2, cy };
    }
    if (slot === "center") {
      return { w: m.centerW, h: m.cardH, cx: startX + m.sideW + m.gap + m.centerW / 2, cy };
    }
    // right
    return {
      w: m.sideW,
      h: m.cardH,
      cx: startX + m.sideW + m.gap + m.centerW + m.gap + m.sideW / 2,
      cy,
    };
  };

  const stageHeight = (W) => Math.round(metrics(W).cardH + 40);

  const slotOf = (imageIndex, act) => {
    const rel = (imageIndex - act + heroImages.length) % heroImages.length;
    if (rel === 0) return "center";
    if (rel === 1) return "right";
    return "left";
  };

  const applyBox = (el, box) => {
    el.style.width = `${box.w}px`;
    el.style.height = `${box.h}px`;
    el.style.left = `${box.cx - box.w / 2}px`;
    el.style.top = `${box.cy - box.h / 2}px`;
    return box;
  };

  // A short overshoot on the card that just reached the centre.
  const popCenter = (el) => {
    const pop = el.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.06)" },
        { transform: "scale(1)" },
      ],
      { duration: 720, easing: "cubic-bezier(0.34, 1.3, 0.5, 1)" }
    );
    animsRef.current.push(pop);
  };

  const layout = (act, animate) => {
    const stage = stageRef.current;
    if (!stage) return;
    const { width: W, height: H } = stage.getBoundingClientRect();

    animsRef.current.forEach((a) => a && a.cancel());
    animsRef.current = [];

    heroImages.forEach((_, i) => {
      const el = cardRefs.current[i];
      if (!el) return;
      const slot = slotOf(i, act);
      const prevSlot = slotOf(i, prevActiveRef.current);
      const box = boxFor(slot, W, H);

      el.style.zIndex = slot === "center" ? "3" : "2";

      if (!animate) {
        el.style.transition = "none";
        el.style.transform = "none";
        el.style.filter = "none";
        el.style.opacity = box.hidden ? "0" : "1";
        el.style.borderRadius = `${R_CARD}px`;
        geoRef.current[i] = applyBox(el, box);
        return;
      }

      const isWrap = prevSlot === "left" && slot === "right";
      if (isWrap) {
        blackHole(el, geoRef.current[i], box);
      } else {
        el.style.transition = `left 0.75s ${GLIDE}, top 0.75s ${GLIDE}, width 0.75s ${GLIDE}, height 0.75s ${GLIDE}, opacity 0.5s ease`;
        el.style.transform = "none";
        el.style.filter = "none";
        el.style.opacity = box.hidden ? "0" : "1";
        el.style.borderRadius = `${R_CARD}px`;
        applyBox(el, box);
        if (slot === "center" && prevSlot !== "center") popCenter(el);
      }
      geoRef.current[i] = box;
    });
  };

  const blackHole = (el, from, to) => {
    el.style.transition = "none";
    if (from) applyBox(el, from);

    const absorb = el.animate(
      [
        { transform: "none", filter: "none", opacity: 1, borderRadius: `${R_CARD}px` },
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
      applyBox(el, to); // teleport to the right slot while invisible
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
        el.style.transform = "none";
        el.style.filter = "none";
        el.style.opacity = to.hidden ? "0" : "1";
        el.style.borderRadius = `${R_CARD}px`;
        eject.cancel();
      };
    };
  };

  // mount + resize
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const relayout = () => {
      stage.style.height = `${stageHeight(stage.getBoundingClientRect().width)}px`;
      layout(active, false);
    };
    relayout();
    const ro = new ResizeObserver(relayout);
    ro.observe(stage);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // run the transition on each active change
  useEffect(() => {
    layout(active, true);
    prevActiveRef.current = active;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // rotation timer
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    // Intentionally not gated on prefers-reduced-motion — see the cursor grid.
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

  return (
    <div className="stage" ref={stageRef}>
      {heroImages.map((item, i) => (
        <figure className="stage__card" key={i} ref={(el) => (cardRefs.current[i] = el)}>
          <div className="stage__media">
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
          </div>
        </figure>
      ))}
    </div>
  );
}
