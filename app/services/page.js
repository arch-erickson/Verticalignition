import Reveal from "@/components/Reveal";
import SplitHeadline from "@/components/SplitHeadline";
import Placeholder from "@/components/Placeholder";
import PackageCard from "@/components/PackageCard";
import Marquee from "@/components/Marquee";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import { packages, serviceCategories } from "@/lib/content";

export const metadata = {
  title: "Services & Packages",
  description:
    "Every service under one roof — brand identity, interior design, renovation and buildout, websites, marketing, photo and video — plus five packages for NYC small businesses.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ===================== PAGE HEADER ===================== */}
      <section className="page-head">
        <div className="diagonals" aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <span className="eyebrow">Services &amp; packages</span>
          </Reveal>
          <SplitHeadline
            lines={["Everything you", "need. {One team}", "to call."]}
            className="d1 page-head__title"
            style={{ marginTop: "1.5rem" }}
          />
          <Reveal delay={380}>
            <p className="lead page-head__sub">
              Start with a package or pick off exactly what you need. Either way you&apos;re
              dealing with us, not five companies who&apos;ve never met.
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee speed={50} />

      {/* ===================== SECTION A — PACKAGES ===================== */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head" style={{ marginBottom: "clamp(2rem,4vw,3.25rem)" }}>
            <span className="eyebrow">Packages</span>
            <h2 className="d2" style={{ marginTop: "1.4rem" }}>
              Pick a starting point.
            </h2>
            <p className="lead">
              Open any card to see the full list. Nothing here is locked — we&apos;ll adjust it
              to what your project actually needs.
            </p>
          </Reveal>

          <div className="packages">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 70} style={{ height: "100%" }}>
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION B — EVERY SERVICE ===================== */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">The full menu</span>
            <h2 className="d2" style={{ marginTop: "1.4rem" }}>
              Every single thing we do.
            </h2>
            <p className="lead">
              Seven categories, one team. If it touches how your business looks or how people
              find it, it&apos;s on this list.
            </p>
          </Reveal>

          {serviceCategories.map((cat) => (
            <div className="svc-cat" key={cat.id} id={cat.id}>
              <Reveal className="svc-cat__head">
                <span className="svc-cat__n">{cat.n}</span>
                <h3 className="svc-cat__title">{cat.title}</h3>
                <p className="svc-cat__blurb">{cat.blurb}</p>
              </Reveal>

              <div className="svc-grid">
                {cat.services.map((svc, i) => (
                  <Reveal className="svc" key={svc.name} delay={i * 55}>
                    <div className="svc__media">
                      <Placeholder label={svc.imageLabel} />
                    </div>
                    <div className="svc__body">
                      <h4 className="svc__name">{svc.name}</h4>
                      <p className="svc__blurb">{svc.blurb}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head" style={{ marginBottom: "clamp(1.5rem,3vw,2.5rem)" }}>
            <span className="eyebrow">Straight answers</span>
            <h2 className="d2" style={{ marginTop: "1.4rem" }}>
              Questions we get a lot.
            </h2>
          </Reveal>
          <Faq />
        </div>
      </section>

      {/* ===================== SECTION C — CTA ===================== */}
      <CtaBanner
        title="Not sure which one fits?"
        sub="Tell us about the space and the timeline. We'll tell you what you actually need — including the parts you can skip."
      />
    </>
  );
}
