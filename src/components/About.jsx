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
              A software engineer whose common thread is{" "}
              <span className="serif-em">automation</span> &mdash; building
              systems that take repetitive work off people&rsquo;s plates,
              across software delivery and AI-powered workflows.
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
