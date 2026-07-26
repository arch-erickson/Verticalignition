/**
 * GlassFilters — SVG filter definitions used by the glass panel.
 *
 * Renders nothing visible; it just parks <defs> in the document so CSS can
 * reference them via backdrop-filter: url(#…).
 *
 * The refraction and the chromatic aberration come from one filter: the red
 * channel is displaced further than green/blue by the same noise field, which
 * is exactly what real glass does at its edges — bend the light, and split it
 * into colours because each wavelength bends by a different amount.
 */
export default function GlassFilters() {
  return (
    <svg
      className="glass-defs"
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
    >
      <defs>
        <filter
          id="vi-glass-edge"
          x="-25%"
          y="-25%"
          width="150%"
          height="150%"
          colorInterpolationFilters="sRGB"
        >
          {/* Organic, low-frequency noise — the shape of the distortion */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.013"
            numOctaves="2"
            seed="9"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="4" result="softNoise" />

          {/* Same noise, two displacement strengths = wavelength dispersion */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="26"
            xChannelSelector="R"
            yChannelSelector="G"
            result="bentLong"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="13"
            xChannelSelector="R"
            yChannelSelector="G"
            result="bentShort"
          />

          {/* Keep red from the far-displaced pass, green+blue from the near */}
          <feColorMatrix
            in="bentLong"
            type="matrix"
            values="1 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0"
            result="redOnly"
          />
          <feColorMatrix
            in="bentShort"
            type="matrix"
            values="0 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 1 0"
            result="cyanOnly"
          />
          <feBlend in="redOnly" in2="cyanOnly" mode="screen" />
        </filter>
      </defs>
    </svg>
  );
}
