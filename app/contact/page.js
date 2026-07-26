import Reveal from "@/components/Reveal";
import SplitHeadline from "@/components/SplitHeadline";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description:
    "Start a project with a full-service branding team in New York City. Free walkthrough and a straight answer on scope, timeline, and cost.",
};

export default function ContactPage() {
  return (
    <>
      {/* ===================== PAGE HEADER ===================== */}
      <section className="page-head">
        <div className="diagonals" aria-hidden="true" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <span className="eyebrow">Start a project</span>
          </Reveal>
          <SplitHeadline
            lines={["Let's take it", "{off your plate}."]}
            className="d1 page-head__title"
            style={{ marginTop: "1.5rem" }}
          />
          <Reveal delay={340}>
            <p className="lead page-head__sub">
              Tell us what you&apos;re opening, fixing, or rebranding. We&apos;ll come look at
              it, and you&apos;ll get a real number — not a range designed to get a meeting.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== FORM + DETAILS ===================== */}
      <section className="section" style={{ paddingTop: "clamp(2rem,4vw,3.5rem)" }}>
        <div className="container contact-grid">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={140}>
            <div className="contact-info">
              <div className="contact-info__item">
                <div className="lbl">Email</div>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
              <div className="contact-info__item">
                <div className="lbl">Phone</div>
                <a href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}>{company.phone}</a>
              </div>
              <div className="contact-info__item">
                <div className="lbl">Where we work</div>
                <p>
                  {company.city} — {company.serviceArea}
                </p>
              </div>
              <div className="contact-info__item">
                <div className="lbl">Rather just talk?</div>
                {/* REPLACE with a real booking link (Calendly, etc.) when you have one */}
                <a href={`mailto:${company.email}?subject=Walkthrough%20request`}>
                  Book a free walkthrough →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
