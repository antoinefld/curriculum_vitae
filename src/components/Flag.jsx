import React from "react";

/**
 * Inline SVG flags — pixel-perfect, no dependencies, works everywhere.
 * Each flag is a 21x15 SVG matching the .flag-chip dimensions.
 */
const FLAGS = {
  FR: (
    <svg viewBox="0 0 21 15" xmlns="http://www.w3.org/2000/svg">
      <rect width="7" height="15" fill="#002395" />
      <rect x="7" width="7" height="15" fill="#fff" />
      <rect x="14" width="7" height="15" fill="#ED2939" />
    </svg>
  ),
  CH: (
    <svg viewBox="0 0 21 15" xmlns="http://www.w3.org/2000/svg">
      <rect width="21" height="15" fill="#D52B1E" />
      <rect x="9" y="3" width="3" height="9" fill="#fff" />
      <rect x="6" y="6" width="9" height="3" fill="#fff" />
    </svg>
  ),
  EN: (
    <svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0L60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0L60 30M60 0L0 30" stroke="#C8102E" strokeWidth="4" clipPath="url(#ukclip)" />
      <clipPath id="ukclip">
        <path d="M30 15H60V0zM30 15H0V30zM30 15V0H0zM30 15V30H60z" />
      </clipPath>
      <path d="M30 0V30M0 15H60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0V30M0 15H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  ),
  DE: (
    <svg viewBox="0 0 21 15" xmlns="http://www.w3.org/2000/svg">
      <rect width="21" height="5" fill="#000" />
      <rect y="5" width="21" height="5" fill="#DD0000" />
      <rect y="10" width="21" height="5" fill="#FFCE00" />
    </svg>
  ),
  LT: (
    <svg viewBox="0 0 21 15" xmlns="http://www.w3.org/2000/svg">
      <rect width="21" height="5" fill="#FDB913" />
      <rect y="5" width="21" height="5" fill="#006A44" />
      <rect y="10" width="21" height="5" fill="#C1272D" />
    </svg>
  ),
  RU: (
    <svg viewBox="0 0 21 15" xmlns="http://www.w3.org/2000/svg">
      <rect width="21" height="5" fill="#fff" />
      <rect y="5" width="21" height="5" fill="#0039A6" />
      <rect y="10" width="21" height="5" fill="#D52B1E" />
    </svg>
  ),
};

export default function Flag({ code }) {
  const flag = FLAGS[code];
  if (!flag) return null;

  return (
    <span className="flag-svg" aria-hidden="true">
      {flag}
    </span>
  );
}
