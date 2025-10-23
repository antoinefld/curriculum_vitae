import React from "react";
import './App.css';
import './index.css'

import Introducing from "./components/Introducing";
import SkillsHard from "./components/Skills_hard";
import SkillsSoft from "./components/Skills_soft";
import Projects from "./components/Projects";
import ExpPro from "./components/ProXP";

function App() {
    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
          <section className="snap-start min-h-screen bg-gradient-to-b from-[#0A0F1C] via-[#1B1F3B] to-[#0A0F1C] flex items-center justify-center">
            <Introducing />
          </section>

          <section className="snap-start min-h-screen bg-[#0B1225] flex items-center justify-center">
            <SkillsSoft/>
          </section>

          <section className="snap-start min-h-screen bg-[#0B1225] flex items-center justify-center">
            <ExpPro/>
          </section>

          <section className="snap-start min-h-screen bg-[#0B1225] flex items-center justify-center">
            <SkillsHard/>
          </section>

          <section className="snap-start min-h-screen bg-[#0B1225] flex items-center justify-center">
            <Projects/>
          </section>
        </div>
    );
}

export default App;
