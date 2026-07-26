"use client";

import { useEffect, useRef } from "react";

/**
 * CursorGrid — an interactive canvas background: an evenly spaced grid of thin
 * "+" marks that thicken and darken as the cursor approaches.
 *
 * How it feels alive:
 *  1. The pointer position itself is smoothed, so the field trails the cursor
 *     slightly instead of snapping to it.
 *  2. Each cross eases toward its own target strength rather than jumping, so
 *     marks swell in and relax out a beat behind the movement.
 *  3. Influence falls off with distance (smoothstep), so a cross right under
 *     the cursor is boldest and its neighbours taper off around it.
 *
 * Everything below is tunable — the constants are the whole design.
 */

// ---- TUNING -----------------------------------------------------------------
// Grid density by viewport — keeps the field airy on big desktop screens
// without it turning into a sparse scatter on a phone.
const SPACING_SM = 34; // narrow / mobile
const SPACING = 46; // laptop
const SPACING_LG = 54; // large desktop (>1600px)

const RADIUS = 200; // px — how far the cursor's influence reaches

const ARM_MIN = 3.5; // half-length of each arm at rest
const ARM_MAX = 6.5; // half-length at full strength

const WIDTH_MIN = 1; // stroke width at rest
const WIDTH_MAX = 2.6; // stroke width cap — keep this restrained

const ALPHA_MIN = 0.1; // opacity at rest (barely-there texture)
const ALPHA_MAX = 0.88; // opacity at full strength — reads as solid black

const EASE_CROSS = 0.11; // 0–1 per frame. Lower = more lag on each cross.
const EASE_POINTER = 0.14; // 0–1 per frame. Lower = the field trails further.

// The crosses darken to black — the fire orange is reserved for type and
// buttons, so the background stays quiet. Raise WARMTH toward 1 if you ever
// want the marks under the cursor to pick up the brand orange instead.
const WARMTH = 0;
const INK = [11, 11, 11]; // --ink
const FIRE = [255, 61, 0]; // --ember
// -----------------------------------------------------------------------------

/** Smoothstep — softens the falloff so the boost blooms instead of ramping. */
const smoothstep = (t) => t * t * (3 - 2 * t);

export default function CursorGrid({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const host = canvas.parentElement;

    // Nothing in this effect moves — only stroke weight and opacity change —
    // so it stays on under reduced motion. What we drop is the trailing lag,
    // which is the only part that reads as "animation".
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const easeCross = reduceMotion ? 1 : EASE_CROSS;
    const easePointer = reduceMotion ? 1 : EASE_POINTER;

    let cols = 0;
    let rows = 0;
    let spacing = SPACING;
    let offsetX = 0;
    let offsetY = 0;
    let strength = new Float32Array(0); // current, eased
    let target = new Float32Array(0); // where each cross is heading
    let width = 0;
    let height = 0;

    // Pointer: raw target vs. the smoothed position actually used for lighting.
    let pointerX = -9999;
    let pointerY = -9999;
    let smoothX = -9999;
    let smoothY = -9999;
    let pointerInside = false;

    let raf = 0;
    let running = false;

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

      // Center the grid so it doesn't clip awkwardly on one edge.
      offsetX = (width - (cols - 1) * spacing) / 2;
      offsetY = (height - (rows - 1) * spacing) / 2;

      strength = new Float32Array(cols * rows);
      target = new Float32Array(cols * rows);
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

          // Blend toward the brand orange only as a cross approaches full boost.
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

    const tick = () => {
      // Ease the pointer first — this is what makes the field trail the cursor.
      if (pointerInside) {
        smoothX += (pointerX - smoothX) * easePointer;
        smoothY += (pointerY - smoothY) * easePointer;
      }

      const r2 = RADIUS * RADIUS;
      let settled = true;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;

          // Target strength from distance to the smoothed pointer.
          let t = 0;
          if (pointerInside) {
            const dx = offsetX + c * spacing - smoothX;
            const dy = offsetY + r * spacing - smoothY;
            const d2 = dx * dx + dy * dy;
            if (d2 < r2) t = smoothstep(1 - Math.sqrt(d2) / RADIUS);
          }
          target[i] = t;

          // Ease the cross toward it — the second source of lag.
          const diff = t - strength[i];
          if (Math.abs(diff) > 0.001) {
            strength[i] += diff * easeCross;
            settled = false;
          } else {
            strength[i] = t;
          }
        }
      }

      draw();

      // Idle out once everything has relaxed and the cursor has left.
      if (settled && !pointerInside) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const onPointerMove = (e) => {
      const rect = host.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;

      // First entry: drop the smoothed point on the cursor so it doesn't
      // sweep across the whole grid to catch up.
      if (inside && !pointerInside) {
        smoothX = x;
        smoothY = y;
      }
      pointerInside = inside;
      pointerX = x;
      pointerY = y;
      start();
    };

    const onPointerLeave = () => {
      pointerInside = false;
      start(); // let everything ease back down
    };

    const onResize = () => {
      buildGrid();
      draw();
      start();
    };

    buildGrid();
    draw();

    // The grid must keep filling the hero at every width, so the observer is
    // attached in BOTH modes. (Skipping it under reduced motion left the canvas
    // frozen at its mount-time size and the grid stopped partway across.)
    const ro = new ResizeObserver(onResize);
    ro.observe(host);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("blur", onPointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={`cursor-grid ${className}`} aria-hidden="true" />;
}
