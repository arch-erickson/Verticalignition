import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import { caseStudies } from "@/lib/content";

export const metadata = {
  title: "Clients & Case Studies",
  description:
    "Real projects from a full-branding company in NYC — restaurants, retail, and service businesses taken from empty space to grand opening, plus rebrands and refreshes.",
};

export default function ClientsPage() {
  return (
    <>
      {/* ============ PAGE HEADER ============ */}
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Our work</span>
            <h1 className="page-head__title">Brands we&apos;ve built end to end.</h1>
            <p className="page-head__sub lead">
              A look at what happens when the space, the brand, and the marketing all come from
              one team. New case studies are added as projects wrap.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CASE STUDIES ============ */}
      <section className="section">
        <div className="container">
          <div className="cases">
            {caseStudies.map((cs) => (
              <Reveal className="case" key={cs.id}>
                <div className="case__body">
                  <div className="case__type">{cs.type}</div>
                  <h2 className="case__client">{cs.client}</h2>

                  <div className="case__label">The challenge</div>
                  <p className="case__text">{cs.challenge}</p>

                  <div className="case__label">What we delivered</div>
                  <ul className="case__services">
                    {cs.delivered.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>

                  <div className="case__label">The result</div>
                  <p className="case__text">{cs.result}</p>
                </div>

                <div className="case__media">
                  <div className="case__ba">
                    <div>
                      <div className="case__ba-tag">Before</div>
                      <Placeholder label={cs.beforeLabel} variant="square" />
                    </div>
                    <div>
                      <div className="case__ba-tag">After</div>
                      <Placeholder label={cs.afterLabel} variant="square" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <Testimonials dark />

      {/* ============ CTA ============ */}
      <CtaBanner
        title="Your project could be next."
        sub="Tell us what you're opening or rebranding, and we'll show you how one team makes it simpler."
      />
    </>
  );
}
