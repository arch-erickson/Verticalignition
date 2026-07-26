import Link from "next/link";
import Reveal from "@/components/Reveal";
import SplitHeadline from "@/components/SplitHeadline";
import Placeholder from "@/components/Placeholder";
import CursorGrid from "@/components/CursorGrid";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import ProcessSticky from "@/components/ProcessSticky";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import { hero, oneTeam, whoFor, founders, serviceTeasers } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero">
        {/* Interactive grid of thin "+" marks that thicken toward the cursor.
            Tune the feel via the constants at the top of CursorGrid.js. */}
        <CursorGrid />

        <div className="container hero__inner">
          <SplitHeadline lines={hero.headlineLines} className="d1 hero__title" />

          <div className="hero__bottom">
            <Reveal delay={420}>
              <p className="hero__sub">{hero.subline}</p>
              <div className="hero__actions">
                <Link href={hero.cta.href} className="btn btn--fire">
                  {hero.cta.label}
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
                <Link href={hero.secondaryCta.href} className="btn btn--outline">
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={560} className="scroll-cue">
              <span className="scroll-cue__line" aria-hidden="true" />
              {hero.scrollCue}
            </Reveal>
          </div>

          {/* Apple-style full-bleed rounded hero card */}
          <Reveal variant="scale" delay={200} className="hero__media">
            <Placeholder label={hero.imageLabel} />
          </Reveal>
        </div>
      </section>

      {/* ===================== MARQUEE ===================== */}
      <Marquee />

      {/* ===================== STATS (black block) ===================== */}
      <section className="section section--tight">
        <div className="container">
          <div className="block-black" style={{ padding: "clamp(2.25rem,5vw,4.5rem)" }}>
            <div className="diagonals" aria-hidden="true" />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Stats />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ONE-TEAM ADVANTAGE ===================== */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gap: "clamp(2rem, 5vw, 4.5rem)",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
              alignItems: "start",
            }}
          >
            <Reveal>
              <span className="eyebrow">{oneTeam.eyebrow}</span>
              <h2 className="d2" style={{ marginTop: "1.4rem", maxWidth: "11ch" }}>
                {oneTeam.title}
              </h2>
              <p className="lead" style={{ marginTop: "1.5rem" }}>
                {oneTeam.body}
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="points">
                {oneTeam.points.map((p) => (
                  <li key={p.title}>
                    <span className="points__spark" aria-hidden="true" />
                    <div>
                      <div className="points__title">{p.title}</div>
                      <p className="points__note">{p.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== WHO WE'RE FOR ===================== */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head" style={{ marginBottom: "clamp(2rem,4vw,3.5rem)" }}>
            <span className="eyebrow">{whoFor.eyebrow}</span>
            <h2 className="d2" style={{ marginTop: "1.4rem" }}>
              {whoFor.title}
            </h2>
            <p className="lead">{whoFor.body}</p>
          </Reveal>

          <div className="audience">
            {whoFor.audiences.map((a, i) => (
              <Reveal className="audience__item" key={a.label} delay={i * 60}>
                <div className="audience__label">{a.label}</div>
                <p className="audience__note">{a.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SERVICE TEASER LIST ===================== */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head" style={{ marginBottom: "clamp(2rem,4vw,3rem)" }}>
            <span className="eyebrow">Everything we do</span>
            <h2 className="d2" style={{ marginTop: "1.4rem" }}>
              Five disciplines. One invoice.
            </h2>
          </Reveal>

          <div className="tlist">
            {serviceTeasers.map((t, i) => (
              <Reveal key={t.label} delay={i * 55}>
                <Link href="/services" className="tlist__row">
                  <span className="tlist__n">{t.n}</span>
                  <span className="tlist__label">{t.label}</span>
                  <span className="tlist__note">{t.note}</span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal style={{ marginTop: "2.5rem" }}>
            <Link href="/services" className="btn btn--outline">
              See services &amp; packages
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
          </Reveal>
        </div>
      </section>

      {/* ===================== PROCESS (black, sticky) ===================== */}
      <section className="section section--tight">
        <div className="container">
          <div className="block-black" style={{ padding: "clamp(2.25rem,5vw,4.5rem)" }}>
            <ProcessSticky />
          </div>
        </div>
      </section>

      {/* ===================== FOUNDERS ===================== */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head" style={{ marginBottom: "clamp(2rem,4vw,3.5rem)" }}>
            <span className="eyebrow">{founders.eyebrow}</span>
            <h2 className="d2" style={{ marginTop: "1.4rem" }}>
              {founders.title}
            </h2>
            <p className="lead">{founders.intro}</p>
          </Reveal>

          <div className="founders">
            {founders.people.map((person, i) => (
              <Reveal className="founder" key={person.role} delay={i * 110}>
                <div className="founder__media">
                  <Placeholder label={person.imageLabel} variant="tall" />
                </div>
                <span className="founder__role">{person.role}</span>
                <h3 className="founder__name">{person.name}</h3>
                <p className="founder__bio">{person.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <Testimonials dark />

      {/* ===================== CLOSING CTA ===================== */}
      <CtaBanner />
    </>
  );
}
