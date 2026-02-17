import React, { useState, useEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const ProjectCard = ({ project, handleClick, isMobile }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isMobile) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  if (isMobile) {
    return (
      <div className="w-[200px] min-h-[450px] bg-white/0 flex-shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/10 rounded-lg p-4 hover:shadow-2xl transition-all duration-300">
        <div className="flex flex-col h-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover rounded-xl mb-4"
            width={250}
            height={160}
          />
          <div className="flex-grow">
            <h6 className="mb-3 text-xl font-semibold text-gray-100">
              {project.title}
            </h6>
            <p className="mb-6 text-neutral-400 text-base leading-relaxed">
              {project.description}
            </p>

            <div className="mb-6">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 mb-2 inline-block rounded bg-amber-700/80 px-2 py-1 text-sm font-medium text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleClick(project.liveLink)}
                className="w-full cursor-pointer rounded bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700 transition duration-300 shadow-md hover:shadow-lg text-sm"
              >
                Live Demo
              </button>
              <button
                onClick={() => handleClick(project.githubLink)}
                className="w-full cursor-pointer rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-lg text-sm"
              >
                GitHub Repo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className="min-w-[230px] lg:min-w-[280px] bg-white/0 flex-shrink-0 mb-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/10 rounded-lg p-4 hover:shadow-2xl transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.1s ease-out" }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="mb-4 rounded-xl w-full max-w-xs"
        width={250}
        height={250}
      />
      <div className="ml-4 max-w-xs">
        <h6 className="mb-2 text-xl font-semibold text-gray-100">
          {project.title}
        </h6>
        <p className="mb-4 text-neutral-400 text-base">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="rounded bg-amber-700/80 px-2 py-1 text-sm font-medium text-white whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {project?.liveLink && project.liveLink.trim() !== "" && (
            <button
              onClick={() => handleClick(project.liveLink)}
              className="cursor-pointer rounded bg-cyan-600 px-3 py-1 text-white hover:bg-cyan-700 transition duration-300 shadow-md hover:shadow-lg text-sm"
            >
              Live Demo
            </button>
          )}

          <button
            onClick={() => handleClick(project.githubLink)}
            className="cursor-pointer rounded bg-gray-700 px-3 py-1 text-white hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-lg text-sm"
          >
            GitHub Repo
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (containerRef.current) {
        // Calculate total width of one set of items (half the total scrollWidth since we duplicate)
        const totalWidth = containerRef.current.scrollWidth / 2;
        const speed = 75; // pixels per second - INCREASED SPEED slightly
        setDuration(totalWidth / speed);
      }
    };

    // Initial calculation needs a small delay to ensure rendering is complete
    const timer = setTimeout(handleResize, 100);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const duplicatedProjects = [...PROJECTS, ...PROJECTS];

  const redirect = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      console.error("URL is not provided.");
    }
  };

  const handleClick = (url) => {
    redirect(url);
  };

  return (
    <div
      id="projects"
      className="border-b border-neutral-900 pb-4 overflow-hidden"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-5xl font-semibold text-gray-200"
      >
        $ ls -la projects/
      </motion.h2>

      <div className="overflow-hidden w-full">
        {/* We use a single container div for the marquee. 
            hover:pause is handled by utility or arbitrary class. 
            If tailwind config doesn't have 'pause', we use arbitrary.
        */}
        <div
          ref={containerRef}
          className="flex space-x-4 animate-marquee hover:[animation-play-state:paused]"
          style={{
            animationDuration: `${duration}s`,
            width: "max-content" // Ensure the div takes up full width of children
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              handleClick={handleClick}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
