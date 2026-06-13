import React from "react";
import { content } from "../data/content";

export default function About() {
  const { about } = content;

  return (
    <section className="section-pad" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <span className="eyebrow reveal">{about.eyebrow}</span>
            <p className="about-lede reveal d1" style={{ marginTop: 20 }}>
              A software engineer focused on the intersection of{" "}
              <span className="serif-em">AI systems</span>,{" "}
              <span className="serif-em">cloud architecture</span> and{" "}
              <span className="serif-em">software delivery</span>.
            </p>
            <p className="about-lede reveal d1" style={{ marginTop: 12, fontSize: '0.95em', opacity: 0.85 }}>
              My work explores a simple question: how can intelligent systems automate
              engineering workflows while remaining reliable, observable and scalable?
            </p>
            <div className="about-body">
              <p className="reveal d1">{about.body1}</p>
              <p className="reveal d2">{about.body2}</p>
            </div>
          </div>

          <div className="about-side">
            {about.highlights.map((h, i) => (
              <div key={i} className={`card stat-card reveal d${i + 1}`}>
                <div className="n">
                  {h.label}<span className="unit"> &middot;</span>
                </div>
                <div className="l">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
