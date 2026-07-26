/**
 * Placeholder — a labeled image placeholder.
 * REPLACE these with real <Image> / <img> tags once you have assets in /public.
 *
 * variant: "" | "wide" | "square" | "tall" | "hero"
 * onBlack: use inside black blocks so the placeholder doesn't glare
 */
export default function Placeholder({ label, variant = "", onBlack = false, className = "" }) {
  const variantClass = variant ? `ph--${variant}` : "";
  return (
    <div
      className={`ph ${variantClass} ${onBlack ? "ph--on-black" : ""} ${className}`}
      role="img"
      aria-label={label}
    >
      <span>{label}</span>
    </div>
  );
}
