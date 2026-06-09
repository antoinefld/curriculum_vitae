import React from "react";
import { content } from "../data/content";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function FeaturedProject() {
  const { orqea } = content;

  return (
    <section className="section-pad" id="work">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">{orqea.eyebrow}</span>
          <h2>Orqea</h2>
          <p>{orqea.tagline}</p>
        </div>

        <div className="project reveal d1">
          <div className="project-top">
            <div className="project-lead">
              <div className="project-logo">
                <img
                  className="mark"
                  src={`${process.env.PUBLIC_URL}/orqea-mark.png`}
                  alt="Orqea logo"
                />
                <span className="name">Orqea</span>
                <span className="status">{orqea.status}</span>
              </div>

              <h3>Workflow orchestration for engineering teams</h3>
              <p className="tagline">// Ship code, not tasks.</p>
              <p>{orqea.description}</p>

              <div className="hero-ctas" style={{ marginTop: 4 }}>
                <a
                  className="btn btn-primary"
                  href={orqea.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit orqea.dev
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="project-side">
              <ul className="project-feats">
                {orqea.features.map((feat, i) => (
                  <li key={i}>
                    <CheckIcon />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="project-shot-wrap">
            <div className="browser-bar">
              <span className="dots"><i /><i /><i /></span>
              <span className="url">orqea.dev</span>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/orqea-product.png`}
              alt="Orqea — an AI agent turning a task into a reviewed, deployable pull request"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
