import Reveal from "@/components/Reveal";
import SplitHeadline from "@/components/SplitHeadline";
import WorkGrid from "@/components/WorkGrid";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Work",
  description:
    "Rebrands and refits for established New York businesses — restaurants, retail and service businesses brought back up to date, plus a few new openings.",
};

export default function WorkPage() {
  return (
    <>
      {/* ===================== PAGE HEADER ===================== */}
      <section className="page-head">
        <div className="diagonals" aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <span className="eyebrow">Selected work</span>
          </Reveal>
          <SplitHeadline
            lines={["Businesses that", "look {like themselves}", "again."]}
            className="d1 page-head__title"
            style={{ marginTop: "1.5rem" }}
          />
          <Reveal delay={340}>
            <p className="lead page-head__sub">
              Mostly rebrands — places that were already good and needed to look it. A few new
              openings too. Every one was the same deal: one contract, one team, one timeline.
              Tap any project for the before, the after, and what happened in between.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== FILTERABLE GRID ===================== */}
      <section className="section section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <WorkGrid />
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <Testimonials dark title="Owners describe it the same way." />

      {/* ===================== CTA ===================== */}
      <CtaBanner
        title="Yours could be the next one."
        sub="Whether it's a raw space or a tired storefront, tell us what you're working with and we'll walk it with you."
      />
    </>
  );
}
