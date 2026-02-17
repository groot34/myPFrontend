import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollyCanvas from "./ScrollyCanvas";

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ── Phase 1 (0%–25%): No text — just the animation plays ──

  // ── Phase 2 (15%–45%): "Atharva / Fresher Full-Stack Developer" ──
  const overlay1Opacity = useTransform(scrollYProgress, [0.12, 0.18, 0.38, 0.45], [0, 1, 1, 0]);
  const overlay1Y = useTransform(scrollYProgress, [0.12, 0.45], [30, -30]);

  // ── Phase 3 (45%–70%): "Backend Developer • Reader" ──
  const overlay2Opacity = useTransform(scrollYProgress, [0.42, 0.48, 0.63, 0.70], [0, 1, 1, 0]);
  const overlay2Y = useTransform(scrollYProgress, [0.42, 0.70], [30, -30]);

  // ── Phase 4 (70%–92%): "Innovating with AI" ──
  const overlay3Opacity = useTransform(scrollYProgress, [0.67, 0.73, 0.85, 0.92], [0, 1, 1, 0]);
  const overlay3Y = useTransform(scrollYProgress, [0.67, 0.92], [30, -30]);

  // ── Fade-out: smooth dissolve into the next section ──
  const fadeOutOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  return (
    <div
      id="hero"
      ref={containerRef}
      className="relative"
      style={{ height: "300vh" }}
    >
      {/* Sticky canvas — stays fullscreen while scrolling through the 400vh */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {/* Canvas layer */}
        <ScrollyCanvas containerRef={containerRef} />

        {/* ——— Overlay 1: Name + Role (centered) ——— */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
          style={{ opacity: overlay1Opacity, y: overlay1Y }}
        >
          <h1
            className="text-5xl sm:text-7xl lg:text-9xl font-display font-bold text-white leading-none tracking-tight"
            style={{ textShadow: "0 2px 40px rgba(0,0,0,0.6), 0 0px 8px rgba(0,0,0,0.4)" }}
          >
            Atharva
          </h1>
          {/* Decorative line */}
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400/70 to-transparent my-4" />
          <p
            className="text-base sm:text-xl lg:text-2xl text-neutral-200/90 font-light tracking-[0.2em] sm:tracking-[0.25em] uppercase"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.5)" }}
          >
            Full Stack Developer
          </p>
        </motion.div>

        {/* ——— Overlay 2: Tech Stack (left-aligned) ——— */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-start justify-center px-6 sm:px-16 lg:px-24 pointer-events-none"
          style={{ opacity: overlay2Opacity, y: overlay2Y }}
        >
          <p
            className="text-sm sm:text-base lg:text-lg text-amber-400/80 font-mono tracking-widest uppercase mb-3"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
          >
            tech_stack
          </p>
          <p
            className="text-xl sm:text-3xl lg:text-5xl font-display font-bold text-white tracking-tight"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}
          >
            React • Node.js • Go
          </p>
          <p
            className="mt-2 text-base sm:text-xl lg:text-2xl text-neutral-300/70 font-light tracking-wide"
            style={{ textShadow: "0 1px 15px rgba(0,0,0,0.5)" }}
          >
            Next.js • PostgreSQL • MongoDB
          </p>
        </motion.div>

        {/* ——— Overlay 3: Focus Areas (right-aligned) ——— */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-end justify-center px-6 sm:px-16 lg:px-24 pointer-events-none"
          style={{ opacity: overlay3Opacity, y: overlay3Y }}
        >
          <p
            className="text-sm sm:text-base lg:text-lg text-cyan-400/80 font-mono tracking-widest uppercase mb-3 text-right"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
          >
            current_focus
          </p>
          <p
            className="text-xl sm:text-3xl lg:text-5xl font-display font-bold text-white tracking-tight text-right"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}
          >
            Scalable Systems
          </p>
          <p
            className="mt-2 text-base sm:text-xl lg:text-2xl text-neutral-300/70 font-light tracking-wide text-right"
            style={{ textShadow: "0 1px 15px rgba(0,0,0,0.5)" }}
          >
            GenAI • System Design • Microservices
          </p>
        </motion.div>

        {/* Smooth fade-to-black overlay — dissolves canvas into the dark bg */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{ opacity: fadeOutOpacity, backgroundColor: '#050208' }}
        />
      </div>
    </div>
  );
};

export default Hero;
