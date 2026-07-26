import Link from "next/link";
import Reveal from "./Reveal";
import { company } from "@/lib/content";

/**
 * CtaBanner — closing call-to-action rendered as a black block with fire
 * accents. Reused on Home, Services, and Work.
 */
export default function CtaBanner({
  title = "Tell us what you're building.",
  sub = "A walkthrough and a straight answer on what it takes and what it costs. No charge, no pitch deck.",
}) {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="block-black">
          <div className="diagonals" aria-hidden="true" />
          <div className="cta">
            <Reveal>
              <span className="eyebrow">Let&apos;s get into it</span>
              <h2 className="d2 cta__title" style={{ marginTop: "1.5rem" }}>
                {title}
              </h2>
              <p className="cta__sub">{sub}</p>
              <div className="cta__actions">
                <Link href="/contact" className="btn btn--fire">
                  {company.primaryCta.label}
                  <svg className="btn__arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <a
                  href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                  className="btn btn--on-black-outline"
                >
                  {company.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
