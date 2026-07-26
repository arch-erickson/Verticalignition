"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import Placeholder from "./Placeholder";
import { caseStudies, workCategories } from "@/lib/content";

/**
 * WorkGrid — filterable, staggered project grid (dd.nyc/work structure).
 * Tiles carry a numbered badge and slash-separated service tags. Clicking a
 * tile expands the case study detail inline.
 *
 * Add projects in lib/content.js → caseStudies. Filter tabs come from
 * workCategories; each project's `categories` array decides where it shows.
 */
export default function WorkGrid() {
  const [filter, setFilter] = useState(workCategories[0]);
  const [openId, setOpenId] = useState(null);

  const visible = useMemo(() => {
    if (filter === "All Work") return caseStudies;
    if (filter === "Featured") return caseStudies.filter((c) => c.featured);
    return caseStudies.filter((c) => c.categories.includes(filter));
  }, [filter]);

  return (
    <>
      {/* Filter tabs */}
      <div className="filters" role="tablist" aria-label="Filter projects">
        {workCategories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={filter === cat}
            className={`filter ${filter === cat ? "is-active" : ""}`}
            onClick={() => {
              setFilter(cat);
              setOpenId(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Staggered grid */}
      <div className="work-grid">
        {visible.map((cs, i) => {
          const isOpen = openId === cs.id;
          return (
            <Reveal key={cs.id} delay={(i % 2) * 100}>
              <article className="work">
                <button
                  className="work__media"
                  style={{ display: "block", width: "100%", padding: 0, textAlign: "left" }}
                  aria-expanded={isOpen}
                  aria-controls={`case-${cs.id}`}
                  onClick={() => setOpenId(isOpen ? null : cs.id)}
                >
                  <Placeholder label={cs.afterLabel} />
                  <span className="work__veil" aria-hidden="true" />
                  <span className="btn btn--sm work__view" aria-hidden="true">
                    {isOpen ? "Close" : "View project"}
                  </span>
                </button>

                <div className="work__n" aria-hidden="true">
                  {cs.n}
                </div>
                <h3 className="work__title">
                  {cs.client} — {cs.type}
                </h3>
                <p className="work__tags">{cs.tags.join(" / ")}</p>

                {/* Expanded detail */}
                <div
                  id={`case-${cs.id}`}
                  className={`pkg__panel ${isOpen ? "is-open" : ""}`}
                >
                  <div className="pkg__panel-inner">
                    <div className="case-detail">
                      <div>
                        <div className="case-detail__tag">Before</div>
                        <div className="case-detail__ba">
                          <Placeholder label={cs.beforeLabel} variant="square" />
                        </div>
                      </div>
                      <div>
                        <div className="case-detail__tag">After</div>
                        <div className="case-detail__ba">
                          <Placeholder label={cs.afterLabel} variant="square" />
                        </div>
                      </div>
                    </div>

                    <div className="case-block">
                      <div className="case-block__label">The problem</div>
                      <p className="case-block__text">{cs.challenge}</p>
                    </div>
                    <div className="case-block">
                      <div className="case-block__label">What we did</div>
                      <p className="case-block__text">{cs.delivered}</p>
                    </div>
                    <div className="case-block">
                      <div className="case-block__label">Where it landed</div>
                      <p className="case-block__text">{cs.result}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {visible.length === 0 && (
        <p className="lead" style={{ paddingBlock: "3rem" }}>
          No projects in this category yet — check back soon.
        </p>
      )}
    </>
  );
}
