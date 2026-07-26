import Reveal from "@/components/Reveal";
import SplitHeadline from "@/components/SplitHeadline";
import WorkGrid from "@/components/WorkGrid";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Work",
  description:
    "Real New York projects — restaurants, retail, and service businesses taken from empty space to opening day, plus rebrands and storefront refreshes.",
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
            lines={["Places we", "helped {open}."]}
            className="d1 page-head__title"
            style={{ marginTop: "1.5rem" }}
          />
          <Reveal delay={340}>
            <p className="lead page-head__sub">
              Every one of these was the same deal: one contract, one team, one timeline. Tap
              any project to see the before, the after, and what actually happened in between.
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
