import Reveal from "@/components/Reveal";
import Placeholder from "@/components/Placeholder";
import PackageCard from "@/components/PackageCard";
import ProcessSteps from "@/components/ProcessSteps";
import CtaBanner from "@/components/CtaBanner";
import { packages, serviceCategories } from "@/lib/content";

export const metadata = {
  title: "Services & Packages",
  description:
    "Explore every service under one roof: brand identity, interior design, buildout, websites, marketing, photography and video — plus five packages from digital-only to a full launch.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ============ PAGE HEADER ============ */}
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Services & Packages</span>
            <h1 className="page-head__title">Everything your brand needs, in one place.</h1>
            <p className="page-head__sub lead">
              Start with a package or pick individual services. Either way, it&apos;s one team
              handling the whole thing — from the logo to the layout to the launch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION A — PACKAGES ============ */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Packages</span>
            <h2 className="h2">Pick your starting point.</h2>
            <p className="lead" style={{ marginTop: "1rem" }}>
              Tap <strong>See everything included</strong> on any package to view the full list.
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

      {/* ============ SECTION B — EVERY SERVICE ============ */}
      <section className="section section--muted">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">The full menu</span>
            <h2 className="h2">Every service we offer.</h2>
            <p className="lead" style={{ marginTop: "1rem" }}>
              This is the whole toolkit. Mix and match, or let us handle all of it.
            </p>
          </Reveal>

          {serviceCategories.map((cat) => (
            <div className="svc-cat" key={cat.id} id={cat.id}>
              <Reveal className="svc-cat__head">
                <h3 className="svc-cat__title">{cat.title}</h3>
                <p className="svc-cat__blurb">{cat.blurb}</p>
              </Reveal>

              <div className="svc-grid">
                {cat.services.map((svc, i) => (
                  <Reveal className="svc" key={svc.name} delay={i * 60}>
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

      {/* ============ PROCESS ============ */}
      <ProcessSteps dark />

      {/* ============ SECTION C — CTA ============ */}
      <CtaBanner
        title="Not sure which package fits?"
        sub="Tell us what you're building and we'll map out the right mix of services for your goals and budget."
      />
    </>
  );
}
