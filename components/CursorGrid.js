"use client";

import { useEffect, useRef } from "react";

/**
 * CursorGrid — an interactive canvas background: a grid of thin "+" marks that
 * thicken and darken toward black as the cursor approaches.
 *
 * What keeps it from feeling like a circle following the mouse:
 *  1. Each cross gets a fixed random seed, so its reach, its sensitivity and
 *     its timing all differ slightly from its neighbours. The boundary reads as
 *     the grid reacting rather than a disc passing over it.
 *  2. The influence radius is warped by angle and drifts over time, so the
 *     edge is lumpy and never repeats exactly.
 *  3. A slow ambient wave travels across the whole field, so the grid keeps
 *     breathing even when the mouse is completely still.
 *  4. Marks fade out far slower than they light up, so the cursor leaves a
 *     trail that lingers and settles instead of snapping off.
 */

// ---- GRID -------------------------------------------------------------------
const SPACING_SM = 34; // narrow / mobile
const SPACING = 46; // laptop
const SPACING_LG = 54; // large desktop (>1600px)

// ---- CURSOR INFLUENCE -------------------------------------------------------
const RADIUS = 210; // base reach of the cursor, in px
const RADIUS_JITTER = 0.28; // ±28% per-cross variation in reach
const LOBE_DEPTH = 0.2; // how lumpy the boundary is (0 = perfect circle)
const LOBE_COUNT = 3; // number of lobes around the edge
const LOBE_DRIFT = 0.35; // how fast the lumps rotate
const SENSITIVITY_JITTER = 0.3; // ±30% per-cross variation in peak intensity

// ---- AMBIENT LIFE (runs with no cursor at all) ------------------------------
const AMBIENT = 0.09; // peak strength of the idle shimmer (keep it subtle)
const AMBIENT_SPEED = 0.45; // how fast the wave travels
const AMBIENT_SCALE = 0.0055; // spatial frequency of the wave
const BREATH = 0.14; // per-cross flicker layered on the cursor response
const BREATH_SPEED = 1.1;

// ---- APPEARANCE -------------------------------------------------------------
const ARM_MIN = 3.5; // half-length of each arm at rest
const ARM_MAX = 6.5; // half-length at full strength
const WIDTH_MIN = 1; // stroke width at rest
const WIDTH_MAX = 2.6; // stroke width cap — keep this restrained
const ALPHA_MIN = 0.1; // opacity at rest
const ALPHA_MAX = 0.88; // opacity at full strength — reads as solid black

// ---- TIMING -----------------------------------------------------------------
const EASE_ATTACK = 0.14; // how fast a cross lights up
const EASE_RELEASE = 0.022; // how slowly it lets go — much lower = longer trail
const EASE_POINTER = 0.14; // how much the field trails the cursor

// The crosses darken to black; the fire orange is reserved for type and
// buttons. Raise toward 1 to tint the marks under the cursor brand-orange.
const WARMTH = 0;
const INK = [11, 11, 11];
const FIRE = [255, 61, 0];

// Nothing here changes position — only stroke weight and opacity — so the
// effect stays on by default. Flip to true to fall back to a static grid for
// visitors who ask for reduced motion.
const RESPECT_REDUCED_MOTION = false;
// -----------------------------------------------------------------------------

const smoothstep = (t) => t * t * (3 - 2 * t);

export default function CursorGrid({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const host = canvas.parentElement;

    const still =
      RESPECT_REDUCED_MOTION &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cols = 0;
    let rows = 0;
    let spacing = SPACING;
    let offsetX = 0;
    let offsetY = 0;
    let width = 0;
    let height = 0;

    let strength = new Float32Array(0); // current, eased
    let seedA = new Float32Array(0); // radius multiplier per cross
    let seedB = new Float32Array(0); // sensitivity multiplier per cross
    let seedC = new Float32Array(0); // phase offset per cross

    let pointerX = -9999;
    let pointerY = -9999;
    let smoothX = -9999;
    let smoothY = -9999;
    let pointerInside = false;

    let raf = 0;
    let running = false;
    let onScreen = true;
    let startTime = performance.now();

    const buildGrid = () => {
      const rect = host.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width === 0 || height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      spacing = width < 640 ? SPACING_SM : width > 1600 ? SPACING_LG : SPACING;
      cols = Math.floor(width / spacing) + 1;
      rows = Math.floor(height / spacing) + 1;
      offsetX = (width - (cols - 1) * spacing) / 2;
      offsetY = (height - (rows - 1) * spacing) / 2;

      const n = cols * rows;
      strength = new Float32Array(n);
      seedA = new Float32Array(n);
      seedB = new Float32Array(n);
      seedC = new Float32Array(n);

      // Fixed per-cross randomness. Generated once so a given cross always
      // behaves the same way — the variation is spatial, not flickery.
      for (let i = 0; i < n; i++) {
        seedA[i] = 1 + (Math.random() * 2 - 1) * RADIUS_JITTER;
        seedB[i] = 1 + (Math.random() * 2 - 1) * SENSITIVITY_JITTER;
        seedC[i] = Math.random() * Math.PI * 2;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineCap = "round";

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const s = strength[i];

          const arm = ARM_MIN + (ARM_MAX - ARM_MIN) * s;
          const lw = WIDTH_MIN + (WIDTH_MAX - WIDTH_MIN) * s;
          const alpha = ALPHA_MIN + (ALPHA_MAX - ALPHA_MIN) * s;

          const warm = WARMTH * s;
          const cr = Math.round(INK[0] + (FIRE[0] - INK[0]) * warm);
          const cg = Math.round(INK[1] + (FIRE[1] - INK[1]) * warm);
          const cb = Math.round(INK[2] + (FIRE[2] - INK[2]) * warm);

          const x = offsetX + c * spacing;
          const y = offsetY + r * spacing;

          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${alpha})`;
          ctx.lineWidth = lw;
          ctx.beginPath();
          ctx.moveTo(x - arm, y);
          ctx.lineTo(x + arm, y);
          ctx.moveTo(x, y - arm);
          ctx.lineTo(x, y + arm);
          ctx.stroke();
        }
      }
    };

    const tick = (now) => {
      const t = (now - startTime) / 1000;

      if (pointerInside) {
        smoothX += (pointerX - smoothX) * EASE_POINTER;
        smoothY += (pointerY - smoothY) * EASE_POINTER;
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const x = offsetX + c * spacing;
          const y = offsetY + r * spacing;

          // --- ambient wave: keeps the grid alive with no cursor at all ---
          const wave =
            Math.sin(x * AMBIENT_SCALE + t * AMBIENT_SPEED) *
            Math.sin(y * AMBIENT_SCALE * 1.3 - t * AMBIENT_SPEED * 0.8);
          let target = AMBIENT * (0.5 + 0.5 * wave);

          // --- cursor influence, with a warped, per-cross boundary ---
          if (pointerInside || strength[i] > 0.002) {
            const dx = x - smoothX;
            const dy = y - smoothY;
            const dist = Math.hypot(dx, dy);

            // Angle-dependent lobes make the edge lumpy instead of circular,
            // and they rotate slowly so it never looks like a fixed shape.
            const angle = Math.atan2(dy, dx);
            const lobe = 1 + LOBE_DEPTH * Math.sin(angle * LOBE_COUNT + t * LOBE_DRIFT);
            const reach = RADIUS * seedA[i] * lobe;

            if (pointerInside && dist < reach) {
              const falloff = smoothstep(1 - dist / reach);
              // Per-cross sensitivity + a slow flicker so neighbours at the
              // same distance never land on exactly the same value.
              const breath = 1 - BREATH + BREATH * Math.sin(t * BREATH_SPEED + seedC[i]);
              target = Math.max(target, falloff * seedB[i] * breath);
            }
          }

          if (target > 1) target = 1;
          if (target < 0) target = 0;

          // Light up quickly, let go slowly — this is what leaves the trail.
          const diff = target - strength[i];
          const ease = diff > 0 ? EASE_ATTACK : EASE_RELEASE;
          strength[i] += diff * ease;
        }
      }

      draw();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || still || !onScreen || document.hidden) return;
      running = true;
      startTime = performance.now() - 1000; // keep the wave phase continuous
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onPointerMove = (e) => {
      const rect = host.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;

      // On first entry, drop the smoothed point onto the cursor so it doesn't
      // sweep across the whole grid to catch up.
      if (inside && !pointerInside) {
        smoothX = x;
        smoothY = y;
      }
      pointerInside = inside;
      pointerX = x;
      pointerY = y;
    };

    const onPointerLeave = () => {
      pointerInside = false;
    };

    const onResize = () => {
      buildGrid();
      draw();
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    buildGrid();
    draw();

    const ro = new ResizeObserver(onResize);
    ro.observe(host);

    if (still) {
      // Static texture: it still resizes, it just doesn't animate or track.
      return () => ro.disconnect();
    }

    // Only burn frames while the hero is actually on screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        onScreen ? start() : stop();
      },
      { threshold: 0 }
    );
    io.observe(host);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("blur", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);

    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={`cursor-grid ${className}`} aria-hidden="true" />;
}
