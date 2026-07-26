"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { orgChart } from "@/lib/content";

/**
 * OrgDiagram — shows how work branches from one point of contact out to every
 * trade: Vertical Ignition → two leads → the crews and studios they direct.
 *
 * The connectors are real SVG curves measured from the rendered pill positions,
 * so they stay exact at any width instead of being faked with borders. Below
 * the desktop breakpoint the diagram collapses to a stacked list and the
 * connector layer is dropped.
 *
 * Edit the labels in lib/content.js → orgChart.
 */
export default function OrgDiagram() {
  const wrapRef = useRef(null);
  const rootRef = useRef(null);
  const leadRefs = useRef([]);
  const nodeRefs = useRef([]); // nodeRefs.current[branchIndex][nodeIndex]
  const outcomeRef = useRef(null);
  const [paths, setPaths] = useState([]);
  const [box, setBox] = useState({ w: 0, h: 0 });

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    const root = rootRef.current;
    if (!wrap || !root) return;

    // Connectors are desktop-only; the stacked layout doesn't use them.
    if (window.innerWidth < 900) {
      setPaths([]);
      return;
    }

    const base = wrap.getBoundingClientRect();
    setBox({ w: base.width, h: base.height });

    // Right-middle of an element, in wrapper-local coordinates.
    const rightOf = (el) => {
      const r = el.getBoundingClientRect();
      return [r.right - base.left, r.top - base.top + r.height / 2];
    };
    const leftOf = (el) => {
      const r = el.getBoundingClientRect();
      return [r.left - base.left, r.top - base.top + r.height / 2];
    };

    // Horizontal-tangent cubic — reads as a flow diagram rather than an elbow.
    const curve = ([x1, y1], [x2, y2]) => {
      const k = Math.max((x2 - x1) * 0.5, 18);
      return `M ${x1} ${y1} C ${x1 + k} ${y1}, ${x2 - k} ${y2}, ${x2} ${y2}`;
    };

    const next = [];
    const from = rightOf(root);
    const outEl = outcomeRef.current;
    const outIn = outEl ? leftOf(outEl) : null;

    orgChart.branches.forEach((branch, b) => {
      const lead = leadRefs.current[b];
      if (!lead) return;

      // root → lead
      next.push({ d: curve(from, leftOf(lead)), kind: "trunk" });

      // lead → each node it directs, then node → the finished brand
      const leadOut = rightOf(lead);
      (nodeRefs.current[b] || []).forEach((node) => {
        if (!node) return;
        next.push({ d: curve(leadOut, leftOf(node)), kind: "branch" });
        if (outIn) next.push({ d: curve(rightOf(node), outIn), kind: "out" });
      });
    });

    setPaths(next);
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // Observe the pills as well as the wrapper: an internal reflow (a CSS
    // change, a font swap, text rewrapping) can move them without the
    // wrapper's own size changing at all.
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    if (rootRef.current) ro.observe(rootRef.current);
    if (outcomeRef.current) ro.observe(outcomeRef.current);
    leadRefs.current.forEach((el) => el && ro.observe(el));
    nodeRefs.current.forEach((group) => group?.[0] && ro.observe(group[0]));

    window.addEventListener("resize", measure);

    // Fonts landing late shift the pills, so re-measure once they're ready.
    if (document.fonts?.ready) document.fonts.ready.then(measure).catch(() => {});

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <div className="org" ref={wrapRef}>
      {/* Connector layer — decorative, the structure is conveyed by the markup */}
      {paths.length > 0 && (
        <svg
          className="org__wires"
          width={box.w}
          height={box.h}
          viewBox={`0 0 ${box.w} ${box.h}`}
          aria-hidden="true"
          focusable="false"
        >
          {paths.map((p, i) => (
            <path key={i} d={p.d} className={`org__wire org__wire--${p.kind}`} />
          ))}
        </svg>
      )}

      {/* Root */}
      <div className="org__rootCell">
        <div className="org__root" ref={rootRef}>
          <span className="org__spark" aria-hidden="true" />
          <span>
            <strong>{orgChart.root.label}</strong>
            <small>{orgChart.root.note}</small>
          </span>
        </div>
      </div>

      {/* Branches */}
      {orgChart.branches.map((branch, b) => (
        <div className="org__branch" key={branch.id} data-branch={branch.id}>
          <div className="org__leadCell">
            <div className="org__lead" ref={(el) => (leadRefs.current[b] = el)}>
              <strong>{branch.lead}</strong>
              <small>{branch.note}</small>
            </div>
          </div>

          <ul className="org__nodes">
            {branch.nodes.map((node, n) => (
              <li
                className="org__node"
                key={node}
                ref={(el) => {
                  if (!nodeRefs.current[b]) nodeRefs.current[b] = [];
                  nodeRefs.current[b][n] = el;
                }}
              >
                {node}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Everything converges here */}
      <div className="org__outcomeCell">
        <div className="org__outcome" ref={outcomeRef}>
          <strong>{orgChart.outcome.label}</strong>
          <small>{orgChart.outcome.note}</small>
        </div>
      </div>
    </div>
  );
}
