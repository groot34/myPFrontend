import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Expirence from "./components/Expirence";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import LoadingSpinner3D from "./components/loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingSpinner3D />;

  return (
    <div className="text-neutral-300 antialiased selection:bg-amber-300 selection:text-amber-900">
      <div className="fixed top-0 left-0 w-full h-full -z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[#050208] z-[-2]" style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(180,100,40,0.12), transparent),
            radial-gradient(ellipse 60% 60% at 50% -10%, rgba(40,80,140,0.15), transparent)
          `
        }}></div>

        <ParticleBackground />
      </div>

      {/* Navbar — floats over the Hero canvas */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <div className="container mx-auto px-8">
          <Navbar />
        </div>
      </div>

      {/* Hero — full-width, starts at top of page (canvas goes edge-to-edge) */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Rest of sections inside container */}
      <div className="relative container mx-auto px-8 z-10">
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
