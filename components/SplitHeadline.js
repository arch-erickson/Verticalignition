"use client";

import { useEffect, useRef, useState } from "react";

/**
 * SplitHeadline — renders a headline line-by-line, each line sliding up from
 * behind a mask with a stagger. Any word wrapped in {curly braces} in the
 * source string gets the fire-gradient treatment.
 *
 *   lines={["You run", "the {brand}."]}
 */
export default function SplitHeadline({
  lines = [],
  as: Tag = "h1",
  className = "",
  stagger = 90,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Split a line into plain text and {highlighted} runs.
  const renderLine = (line) =>
    line.split(/(\{[^}]+\})/g).map((part, i) =>
      part.startsWith("{") && part.endsWith("}") ? (
        <span className="fire" key={i}>
          {part.slice(1, -1)}
        </span>
      ) : (
        part
      )
    );

  return (
    <Tag ref={ref} className={`${visible ? "is-visible" : ""} ${className}`} {...rest}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <span style={{ transitionDelay: `${i * stagger}ms` }}>{renderLine(line)}</span>
        </span>
      ))}
    </Tag>
  );
}
