import Reveal from "./Reveal";
import { testimonials } from "@/lib/content";

/**
 * Testimonials — placeholder quotes. Edit them in lib/content.js.
 * `dark` renders on a dark section background.
 */
export default function Testimonials({ dark = false }) {
  return (
    <section className={`section ${dark ? "section--dark" : "section--muted"}`}>
      <div className="container">
        <Reveal className="section-head text-center mx-auto">
          <span className="eyebrow">What clients say</span>
          <h2 className="h2">Owners who stopped juggling vendors.</h2>
        </Reveal>

        <div className="quotes">
          {testimonials.map((t, i) => (
            <Reveal as="figure" className="quote" key={i} delay={i * 90}>
              <span className="quote__mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="quote__text">{t.quote}</blockquote>
              <figcaption className="quote__by">
                <div className="quote__name">{t.name}</div>
                <div className="quote__biz">{t.business}</div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
