import React from "react";
import { content } from "../data/content";

export default function Experience() {
  return (
    <section className="section-pad" id="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Professional experience</span>
          <h2>Where I've delivered.</h2>
        </div>

        <div className="timeline">
          {content.experience.map((item, idx) => (
            <div key={idx} className={`tl-item reveal d${idx + 1}`}>
              <div className="tl-meta">
                <div className="period">{item.period}</div>
                <div className="place">{item.place}</div>
              </div>
              <div className="tl-body">
                <h3>{item.company}</h3>
                <div className="role">{item.role}</div>
                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
