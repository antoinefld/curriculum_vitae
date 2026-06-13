import React from "react";

const FOCUS = [
  {
    title: "Building Orqea",
    desc: "An AI-native workflow orchestration platform — from request to reviewed pull request.",
  },
  {
    title: "Expanding cloud expertise",
    desc: "Going deeper on cloud architecture, Kubernetes and platform engineering.",
  },
  {
    title: "Google Cloud certification",
    desc: "Formalizing hands-on infrastructure and delivery work with a GCP credential.",
  },
  {
    title: "System Design Notes",
    desc: "Documenting architecture decisions, trade-offs and patterns I encounter in real systems.",
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function CurrentFocus() {
  return (
    <section className="section-pad" id="focus">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Current focus</span>
          <h2>What I'm working on right now.</h2>
          <p>
            A snapshot of where my engineering energy goes today — between
            enterprise delivery, building Orqea, and growing into cloud and AI systems.
          </p>
        </div>

        <div className="focus-grid">
          {FOCUS.map((item, idx) => (
            <div key={item.title} className={`card focus-card reveal d${Math.min(idx + 1, 4)}`}>
              <div className="focus-arrow"><ArrowIcon /></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
