import React from "react";
import { content } from "../data/content";

const ICONS = {
  accessibility: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  eco: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3a6 6 0 0 0-6 6c0 4 6 12 6 12s6-8 6-12a6 6 0 0 0-6-6z" />
      <path d="M9.5 9c1.5 1.5 3.5 1.5 5 0" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.5-1.5A4 4 0 0 0 6.5 19z" />
    </svg>
  ),
};

export default function Certifications() {
  return (
    <section className="section-pad" id="certifications">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Certifications</span>
          <h2>Credentials &amp; what's next.</h2>
          <p>
            Accessibility and digital sustainability aren't afterthoughts in my
            work — they're certified strengths I build in from the start.
          </p>
        </div>

        <div className="cert-grid">
          {content.certifications.map((cert, idx) => (
            <div key={idx} className={`card cert-card reveal d${idx + 1}`}>
              <div className="cert-top">
                <div className="ic">{ICONS[cert.icon]}</div>
                <span className={`badge ${cert.status === "Certified" ? "done" : "plan"}`}>
                  {cert.status}
                </span>
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              {cert.tags && (
                <div className="exp-tags">
                  {cert.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
