import React from "react";
import { content } from "../data/content";

const ICONS = {
  "01": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 6l-4 12" />
    </svg>
  ),
  "02": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.5-1.5A4 4 0 0 0 6.5 19z" />
      <path d="M12 12v4M10 14h4" />
    </svg>
  ),
  "03": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </svg>
  ),
  "04": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="5" y="8" width="14" height="11" rx="2" />
      <path d="M12 8V4M9 4h6M9 13h.01M15 13h.01M9 16h6" />
    </svg>
  ),
};

export default function Expertise() {
  return (
    <section className="section-pad" id="expertise">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Expertise</span>
          <h2>Four disciplines, one delivery pipeline.</h2>
          <p>From clean application code to the infrastructure, security and automation that carry it safely to production.</p>
        </div>

        <div className="expertise-grid">
          {content.expertise.map((exp) => (
            <div key={exp.num} className={`card exp-card reveal d${parseInt(exp.num) % 2 === 1 ? 1 : 2}`}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="exp-icon">{ICONS[exp.num]}</div>
                <span className="exp-num">{exp.num}</span>
              </div>
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
              <div className="exp-tags">
                {exp.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
