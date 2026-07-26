"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

/** Faq — accordion of common questions. Edit them in lib/content.js → faqs. */
export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="faq__item" key={item.q}>
            <h3>
              <button
                className="faq__q"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={`faq-${i}`} className={`faq__panel ${isOpen ? "is-open" : ""}`}>
              <div>
                <p className="faq__a">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
