import React from "react";
import { content } from "../data/content";
import Flag from "./Flag";

export default function Hero() {
  const { hero } = content;

  return (
    <section className="hero" id="top">
      <div className="hero-orb" />
      <div className="wrap">
        <div className="hero-centered">
          <span className="eyebrow reveal">{hero.eyebrow}</span>

          <h1 className="reveal d1">
            I build systems that{" "}
            <span className="serif-em">automate work</span>.
          </h1>

          <p className="lead reveal d2">{hero.subheading}</p>

          <div className="hero-ctas reveal d3">
            <a className="btn btn-primary" href="#work">
              {hero.cta.primary}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a className="btn btn-ghost" href="#contact">{hero.cta.tertiary}</a>
          </div>

          <div className="avail reveal d3">
            <span className="dot" />
            {hero.status}
            <span className="pill">
              <Flag code="FR" />
              Lyon, France
            </span>
            <span className="pill">
              <Flag code="CH" />
              Open to Switzerland
            </span>
            <span className="pill">Cloud &bull; DevOps &bull; Automation &bull; AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
