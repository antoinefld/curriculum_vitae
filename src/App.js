import React, { useEffect } from "react";
import './App.css';
import './styles/portfolio.css';
import { useScrollReveal, useScrollNavigation, useCardGlow } from './hooks/useAnimations';

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Technologies from "./components/Technologies";
import FeaturedProject from "./components/FeaturedProject";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useScrollReveal();
  useScrollNavigation();
  useCardGlow();

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--hue', '285');
    root.setAttribute('data-fonts', 'editorial');
  }, []);

  return (
    <>
      <div className="bg-field" />
      <div className="bg-grid" />
      <div className="bg-noise" />

      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Expertise />
        <Technologies />
        <FeaturedProject />
        <Experience />
        <Certifications />
        <Languages />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
