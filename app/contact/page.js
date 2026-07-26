import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description:
    "Start your brand with a full-service branding company in New York City. Get a quote or book a consultation — design, buildout, digital, and marketing under one roof.",
};

export default function ContactPage() {
  return (
    <>
      {/* ============ PAGE HEADER ============ */}
      <section className="page-head">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Start your brand</span>
            <h1 className="page-head__title">Let&apos;s build something worth walking into.</h1>
            <p className="page-head__sub lead">
              Tell us about your business and what you&apos;re planning. We&apos;ll get back to you
              with next steps — usually within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
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
                <div className="lbl">Service area</div>
                <p>{company.serviceArea}</p>
              </div>
              <div className="contact-info__item">
                <div className="lbl">Prefer to talk it through?</div>
                {/* REPLACE href with a real booking link (Calendly, etc.) */}
                <a href={`mailto:${company.email}?subject=Consultation%20request`}>
                  Book a free consultation →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
