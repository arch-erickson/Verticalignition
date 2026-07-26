import { marqueeItems } from "@/lib/content";

/**
 * Marquee — infinite horizontal ticker of capabilities (DD.NYC style).
 * The item list is duplicated so the CSS translateX(-50%) loop is seamless.
 * Pauses on hover. Edit the words in lib/content.js → marqueeItems.
 */
export default function Marquee({ dark = false, items = marqueeItems, speed = 42 }) {
  const group = (
    <div className="marquee__group" aria-hidden="true">
      {items.map((item, i) => (
        <span className="marquee__item" key={i}>
          {item}
          <span className="marquee__dot" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee ${dark ? "marquee--black" : ""}`}
      style={{ "--speed": `${speed}s` }}
    >
      {/* Screen readers get a single readable list instead of the duplicated loop */}
      <span className="sr-only" style={{ position: "absolute", left: "-9999px" }}>
        Our services: {items.join(", ")}
      </span>
      <div className="marquee__track">
        {group}
        {group}
      </div>
    </div>
  );
}
