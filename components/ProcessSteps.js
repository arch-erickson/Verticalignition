import Reveal from "./Reveal";
import { process } from "@/lib/content";

/**
 * ProcessSteps — the Discover → Design → Build → Launch → Grow journey.
 * `dark` renders on a dark section background.
 */
export default function ProcessSteps({ dark = false }) {
  return (
    <section className={`section ${dark ? "section--dark" : ""}`}>
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{process.eyebrow}</span>
          <h2 className="h2">{process.title}</h2>
        </Reveal>

        <div className="process">
          {process.steps.map((step, i) => (
            <Reveal className="process__step" key={step.n} delay={i * 80}>
              <div className="process__n">{step.n}</div>
              <div className="process__label">{step.label}</div>
              <p className="process__note">{step.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
