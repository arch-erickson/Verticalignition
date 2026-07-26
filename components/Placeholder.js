/**
 * Placeholder — a labeled image placeholder.
 * REPLACE these with real <Image> / <img> tags when you have assets.
 * The `label` prop appears on screen so you know what to drop in.
 *
 * variant: "" | "wide" | "square" | "tall"
 */
export default function Placeholder({ label, variant = "", className = "" }) {
  const variantClass = variant ? `ph--${variant}` : "";
  return (
    <div className={`ph ${variantClass} ${className}`} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
