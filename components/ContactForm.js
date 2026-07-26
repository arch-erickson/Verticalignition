"use client";

import { useState } from "react";
import { contactServiceOptions, company } from "@/lib/content";

/**
 * ContactForm — underlined fields plus a chip-style "I'm interested in" picker
 * (the DD.NYC pattern), which is easier to tap on a phone than a dropdown.
 * Options come from lib/content.js → contactServiceOptions.
 *
 * NOTE: submits via a mailto: link so the site works with no backend. To
 * collect submissions server-side, replace the block marked below with a POST
 * to a route handler (app/api/contact/route.js) or a service like Formspree.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [interests, setInterests] = useState([]);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    message: "",
  });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const toggle = (opt) =>
    setInterests((list) =>
      list.includes(opt) ? list.filter((x) => x !== opt) : [...list, opt]
    );

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- Default: open the visitor's mail client (no backend required) -------
    const subject = encodeURIComponent(
      `New project inquiry — ${form.business || form.name || "website"}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Business: ${form.business}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Interested in: ${interests.join(", ") || "Not specified"}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
    // ------------------------------------------------------------------------
    // Server-side alternative:
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify({ ...form, interests }) });
  };

  if (sent) {
    return (
      <div className="form__success" role="status">
        <h2 className="d3">Thanks — that&apos;s on its way.</h2>
        <p className="lead" style={{ marginTop: "1rem" }}>
          Your email app should have opened. If it didn&apos;t, reach us straight at{" "}
          <a href={`mailto:${company.email}`} className="tlink">
            {company.email}
          </a>
          . We usually reply within a business day.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">
            Your name <span className="req">*</span>
          </label>
          <input id="name" name="name" value={form.name} onChange={update} required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="business">Business name</label>
          <input
            id="business"
            name="business"
            value={form.business}
            onChange={update}
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="email">
            Email <span className="req">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={update}
            required
            autoComplete="email"
          />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" />
        </div>
      </div>

      {/* Chip picker — multi-select, no dropdown to fight with on mobile */}
      <fieldset className="field" style={{ border: 0, padding: 0, margin: 0 }}>
        <legend
          style={{
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--ink-45)",
            marginBottom: "0.85rem",
          }}
        >
          I&apos;m interested in
        </legend>
        <div className="chips">
          {contactServiceOptions.map((opt) => {
            const on = interests.includes(opt);
            return (
              <button
                type="button"
                key={opt}
                className={`chip ${on ? "is-on" : ""}`}
                aria-pressed={on}
                onClick={() => toggle(opt)}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="message">
          What are you working on? <span className="req">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={update}
          required
          placeholder="The space, the timeline, what's stressing you out about it…"
        />
      </div>

      <div>
        <button type="submit" className="btn btn--fire">
          Send it over
          <svg className="btn__arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p className="form__note" style={{ marginTop: "0.9rem" }}>
          We read every one of these ourselves. Usually a reply within a business day.
        </p>
      </div>
    </form>
  );
}
