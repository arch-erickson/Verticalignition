import Link from "next/link";
import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import {
  hero,
  oneTeam,
  whoFor,
  founders,
  serviceTeasers,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero__grid">
          <Reveal>
            <h1 className="hero__headline h1">{hero.headline}</h1>
            <p className="hero__sub">{hero.subline}</p>
            <div className="hero__actions">
              <Link href={hero.cta.href} className="btn btn--primary">
                {hero.cta.label}
              </Link>
              <Link href={hero.secondaryCta.href} className="btn btn--ghost">
                {hero.secondaryCta.label}
              </Link>
            </div>
          </Reveal>
          <Reveal className="hero__media" delay={120}>
            <Placeholder label={hero.imageLabel} />
          </Reveal>
        </div>
      </section>

      {/* ============ ONE-TEAM ADVANTAGE ============ */}
      <section className="section section--muted">
        <div className="container grid grid--2" style={{ alignItems: "center" }}>
          <Reveal>
            <span className="eyebrow">{oneTeam.eyebrow}</span>
            <h2 className="h2">{oneTeam.title}</h2>
            <p className="lead" style={{ marginTop: "1.25rem" }}>
              {oneTeam.body}
            </p>
            <ul className="points">
              {oneTeam.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <Placeholder label="PLACEHOLDER: one project — space + brand + screen together" variant="square" />
          </Reveal>
        </div>
      </section>

      {/* ============ WHO WE'RE FOR ============ */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">{whoFor.eyebrow}</span>
            <h2 className="h2">{whoFor.title}</h2>
            <p className="lead" style={{ marginTop: "1rem" }}>
              {whoFor.body}
            </p>
          </Reveal>
          <div className="audience">
            {whoFor.audiences.map((a, i) => (
              <Reveal className="audience__item" key={a.label} delay={i * 70}>
                <strong>{a.label}</strong>
                <span>{a.note}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FOUNDERS ============ */}
      <section className="section section--muted">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">{founders.eyebrow}</span>
            <h2 className="h2">{founders.title}</h2>
            <p className="lead" style={{ marginTop: "1rem" }}>
              {founders.intro}
            </p>
          </Reveal>
          <div className="founders">
            {founders.people.map((person, i) => (
              <Reveal className="card founder" key={person.role} delay={i * 100}>
                <div className="founder__media">
                  <Placeholder label={person.imageLabel} variant="tall" />
                </div>
                <div className="founder__role">{person.role}</div>
                <div className="founder__name h3">{person.name}</div>
                <p className="founder__bio">{person.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICE TEASERS ============ */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Everything we do</span>
            <h2 className="h2">Five disciplines, one team.</h2>
          </Reveal>
          <Reveal className="teasers">
            {serviceTeasers.map((t) => (
              <Link href="/services" className="teaser" key={t.label}>
                <div className="teaser__label">{t.label}</div>
                <div className="teaser__note">{t.note}</div>
              </Link>
            ))}
          </Reveal>
          <Reveal style={{ marginTop: "2rem" }}>
            <Link href="/services" className="btn btn--ghost">
              Explore all services & packages
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <ProcessSteps />

      {/* ============ TESTIMONIALS ============ */}
      <Testimonials />

      {/* ============ CLOSING CTA ============ */}
      <CtaBanner />
    </>
  );
}
