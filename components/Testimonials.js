import Reveal from "./Reveal";
import { testimonials } from "@/lib/content";

/**
 * Testimonials — quote cards. Edit them in lib/content.js → testimonials.
 * `dark` renders them inside a black block.
 */
export default function Testimonials({
  eyebrow = "What owners say",
  title = "The part they mention first is not the design.",
  dark = false,
}) {
  return (
    <section className="section">
      <div className="container">
        <div className={dark ? "block-black" : ""} style={dark ? { padding: "clamp(2rem,5vw,4.5rem)" } : undefined}>
          <Reveal className="section-head" style={{ marginBottom: "clamp(2rem,4vw,3.5rem)" }}>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="d2" style={{ marginTop: "1.25rem" }}>
              {title}
            </h2>
          </Reveal>

          <div className="quotes">
            {testimonials.map((t, i) => (
              <Reveal as="figure" className="quote" key={i} delay={i * 90}>
                <span className="quote__spark" aria-hidden="true" />
                <blockquote className="quote__text">{t.quote}</blockquote>
                <figcaption className="quote__by">
                  <div className="quote__name">{t.name}</div>
                  <div className="quote__biz">{t.business}</div>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
