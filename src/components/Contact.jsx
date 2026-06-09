import React from "react";
import { content } from "../data/content";

export default function Contact() {
  const { contact } = content;

  return (
    <section className="section-pad contact" id="contact">
      <div className="wrap">
        <span className="eyebrow reveal" style={{ justifyContent: 'center' }}>Contact</span>
        <h2 className="big reveal d1">
          Let's automate something<br />
          worth <span className="serif-em">building</span>.
        </h2>
        <p className="reveal d2">{contact.subheading}</p>
        <div className="contact-actions reveal d2">
          <a className="btn btn-primary" href={contact.links.email}>
            Email me
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16v12H4z" />
              <path d="M4 7l8 6 8-6" />
            </svg>
          </a>
          <a className="btn btn-glass" href={contact.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={contact.links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <a className="mail-link reveal d3" href={contact.links.email}>
          {contact.email}
        </a>
      </div>
    </section>
  );
}
