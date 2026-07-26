"use client";

import { useState } from "react";
import { contactServiceOptions, company } from "@/lib/content";

/**
 * ContactForm — client-side contact form.
 *
 * NOTE: This currently opens the visitor's email client via a mailto: link so
 * the site works with zero backend. To collect submissions properly, wire the
 * handleSubmit below to a real endpoint (e.g. a Next.js route handler at
 * app/api/contact/route.js, Formspree, or a service like Resend/SendGrid).
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- Default behavior: open the user's mail client (no backend needed) ---
    const subject = encodeURIComponent(
      `New inquiry from ${form.name || "website"}${form.business ? ` — ${form.business}` : ""}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Business: ${form.business}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Interested in: ${form.service}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
    // -----------------------------------------------------------------------
    // To send server-side instead, replace the block above with e.g.:
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
  };

  if (sent) {
    return (
      <div className="form__success" role="status">
        <strong>Thanks — your email is ready to send.</strong>
        <p style={{ marginTop: "0.5rem" }}>
          If your mail app didn&apos;t open, reach us directly at{" "}
          <a href={`mailto:${company.email}`} style={{ color: "var(--color-accent)" }}>
            {company.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__row">
        <div className="field">
          <label htmlFor="name">
            Name <span className="req">*</span>
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
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={update}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="service">What are you interested in?</label>
        <select id="service" name="service" value={form.service} onChange={update}>
          <option value="">Select an option…</option>
          {contactServiceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">
          Tell us about your project <span className="req">*</span>
        </label>
        <textarea id="message" name="message" value={form.message} onChange={update} required />
      </div>

      <div>
        <button type="submit" className="btn btn--primary">
          Send message
        </button>
        <p className="form__note" style={{ marginTop: "0.75rem" }}>
          We usually respond within one business day.
        </p>
      </div>
    </form>
  );
}
