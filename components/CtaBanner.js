import Link from "next/link";
import Reveal from "./Reveal";
import { company } from "@/lib/content";

/**
 * CtaBanner — closing call-to-action, reused on Home, Services, and Clients.
 */
export default function CtaBanner({
  title = "Ready to build your entire brand?",
  sub = "One team, one process, one point of contact — from empty space to grand opening. Let's talk about what you're building.",
}) {
  return (
    <section className="section section--dark">
      <div className="container cta">
        <Reveal>
          <h2 className="cta__title h2">{title}</h2>
          <p className="cta__sub">{sub}</p>
          <div className="cta__actions">
            <Link href="/contact" className="btn btn--light">
              {company.primaryCta.label}
            </Link>
            <a href={`tel:${company.phone.replace(/[^\d+]/g, "")}`} className="btn btn--ghost">
              Call {company.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
