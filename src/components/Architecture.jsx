import React from "react";

const TOPICS = [
  "Context Engineering",
  "RAG Architectures",
  "Multi-Agent Systems",
  "Authentication Systems",
  "Cloud Architecture",
  "CI/CD Patterns",
  "Observability & Monitoring",
];

export default function Architecture() {
  return (
    <section className="section-pad" id="architecture">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Architecture</span>
          <h2>Architecture &amp; System Design</h2>
          <p>
            Beyond building software, I document architecture decisions and
            engineering trade-offs through System Design Notes.
          </p>
        </div>

        <div className="card arch-card reveal d1" style={{ padding: "36px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
            <div className="exp-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
                <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
              </svg>
            </div>
            <span className="exp-num">NOTES</span>
          </div>

          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: 27,
            fontWeight: 500,
            letterSpacing: "-0.01em",
            marginTop: 16,
          }}>
            System Design Notes
          </h3>

          <p style={{
            color: "var(--muted)",
            fontSize: "15.5px",
            lineHeight: 1.6,
            marginTop: 14,
            maxWidth: "56ch",
          }}>
            A growing collection of architecture notes, design patterns and
            engineering trade-offs — the thinking behind the systems I build.
          </p>

          <div className="exp-tags" style={{ marginTop: 20 }}>
            {TOPICS.map((topic) => (
              <span key={topic}>{topic}</span>
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <a
              className="btn btn-primary"
              href="https://github.com/antoinefld/system-design-notes"
              target="_blank"
              rel="noopener noreferrer"
            >
              View System Design Notes
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
