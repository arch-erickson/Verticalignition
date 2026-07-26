"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal — fades/slides content in when it scrolls into view.
 * Respects prefers-reduced-motion (handled in globals.css).
 *
 * Props:
 *  - as:      element/tag to render (default "div")
 *  - variant: "" | "clip" | "scale"
 *  - delay:   stagger delay in ms
 */
export default function Reveal({
  as: Tag = "div",
  variant = "",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantClass = variant ? `reveal--${variant}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
