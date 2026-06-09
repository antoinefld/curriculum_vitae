import React from "react";
import { content } from "../data/content";

export default function Technologies() {
  return (
    <section className="section-pad" id="technologies">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Technologies</span>
          <h2>What I work with.</h2>
          <p>The tools and technologies I use daily to build, ship and automate.</p>
        </div>

        <div className="tech-grid">
          {content.technologies.map((group, idx) => (
            <div key={group.category} className={`card tech-card reveal d${Math.min(idx + 1, 3)}`}>
              <h3>{group.category}</h3>
              <div className="exp-tags">
                {group.items.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
