import React from "react";
import { content } from "../data/content";
import Flag from "./Flag";

export default function Languages() {
  return (
    <section className="section-pad" id="languages">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Languages</span>
          <h2>Working across borders.</h2>
        </div>

        <div className="lang-grid">
          {content.languages.map((lang, idx) => (
            <div key={lang.code} className={`card lang-card reveal d${Math.min(idx + 1, 3)}`}>
              <Flag code={lang.code} />
              <div>
                <div className="name">{lang.name}</div>
                <div className="level">{lang.level}</div>
              </div>
              <div className="lvl-bar">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={i < lang.score ? "on" : undefined} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
