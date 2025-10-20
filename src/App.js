import React from "react";
import './App.css';
import './index.css'

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills_hard from "./components/Skills_hard";
import Skills_soft from "./components/Skills_soft";

function App() {
    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
          <section className="snap-start min-h-screen bg-[#0A0F1C] flex items-center justify-center">
            <Hero />
          </section>

          <section className="snap-start min-h-screen bg-[#10162B] flex items-center justify-center">
            <Skills_hard/>
          </section>

          <section className="snap-start min-h-screen bg-[#10162B] flex items-center justify-center">
            <Skills_soft/>
          </section>
        </div>
    );
}

export default App;
