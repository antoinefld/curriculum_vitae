import React, { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Technologies", href: "#technologies" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Languages", href: "#languages" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="nav" id="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <span className="mono">AF</span>
          <span className="brand-name">Antoine&nbsp;Fillaudeau</span>
        </a>

        <nav className="nav-links">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="nav-cta">
          <a className="btn btn-primary" href="#contact">Get in touch</a>
        </div>

        <button
          className="nav-burger"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen
              ? <path d="M6 18L18 6M6 6l12 12" />
              : <path d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-nav">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary" href="#contact" onClick={() => setMobileOpen(false)}>
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
