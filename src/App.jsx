import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Expirence from "./components/Expirence";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Fixed background layers */}
      <div className="fixed top-0 left-0 w-full h-full -z-20">
        {/* Radial Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-[-2]"></div>
    
        <ParticleBackground />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-8 z-10">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Expirence />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
