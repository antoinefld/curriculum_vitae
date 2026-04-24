import React, { useState, useRef, useEffect } from "react";
import './App.css';
import './index.css';

import Navbar from "./components/Navbar";
import Introducing from "./components/Introducing";
import SkillsHard from "./components/Skills_hard";
import SkillsSoft from "./components/Skills_soft";
import Projects from "./components/Projects";
import ExpPro from "./components/ProXP";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const mainRef = useRef(null);

  // Move focus to main content on page change (WCAG 2.4.3)
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.focus();
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Skip-to-content link for keyboard users (WCAG 2.4.1) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0e7490] focus:text-white focus:rounded-md focus:font-medium focus:text-sm"
      >
        Aller au contenu principal
      </a>

      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      <main
        id="main-content"
        ref={mainRef}
        tabIndex={-1}
        className="outline-none"
      >
        {currentPage === "home" && (
          <>
            <Introducing />
            <SkillsSoft />
            <SkillsHard />
          </>
        )}
        {currentPage === "portfolio" && <Projects />}
        {currentPage === "experience" && <ExpPro />}
      </main>
    </div>
  );
}

export default App;
