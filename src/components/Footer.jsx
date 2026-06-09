import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="brand">
          <span className="mono">AF</span>
          <span>Antoine&nbsp;Fillaudeau</span>
        </div>
        <div className="copy">
          &copy; 2026 &middot; Software Engineer &middot; Automation &middot; Cloud &middot; AI
        </div>
        <div className="socials">
          <a href="https://github.com/antoinefld" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/antoine-fillaudeau-9428a3239/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3.5 8.5h3v12h-3zM9 8.5h2.87v1.64h.04A3.15 3.15 0 0 1 14.75 8.4c3.07 0 3.64 2.02 3.64 4.65v7.45h-3v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.71-2.53 3.48v6.72H9z" />
            </svg>
          </a>
          <a href="mailto:fillaudeau.antoine@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
