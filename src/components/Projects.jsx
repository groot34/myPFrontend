import React, { useState, useEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import { motion, useAnimation } from "framer-motion";

const ProjectCard = ({ project, handleClick }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
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
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      className="min-w-[260px] lg:min-w-[320px] bg-white/0 flex-shrink-0 mb-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/10 rounded-lg p-4 hover:shadow-2xl transition-all duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.1s ease-out' }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="mb-4 rounded-xl w-full max-w-xs"
        width={280}
        height={280}
      />
      <div className="ml-4 max-w-xs">
        <h6 className="mb-2 text-lg font-semibold text-gray-100">{project.title}</h6>
        <p className="mb-4 text-neutral-400">{project.description}</p>

        <div className="mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="mr-2 rounded bg-purple-800 px-2 py-1 text-sm font-medium text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => handleClick(project.liveLink)}
            className="cursor-pointer rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg"
          >
            Live Demo
          </button>
          <button
            onClick={() => handleClick(project.githubLink)}
            className="cursor-pointer rounded bg-gray-700 px-3 py-1 text-white hover:bg-gray-800 transition duration-300 shadow-md hover:shadow-lg"
          >
            GitHub Repo
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth / 2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollAnimation = {
    x: [-containerWidth, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: isMobile ? 15 : 20,
        ease: "linear",
      },
    },
  };

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start(scrollAnimation);
    }
  }, [isHovered, controls, containerWidth, isMobile]);

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
    <div id="projects" className="border-b border-neutral-900 pb-4 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-5xl font-semibold text-gray-200"
      >
        cd ~/Projects
      </motion.h2>

      {isMobile ? (
        <div className="space-y-4">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center mb-8"
            >
              <ProjectCard project={project} handleClick={handleClick} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="overflow-hidden">
          <motion.div
            ref={containerRef}
            className="flex space-x-4"
            animate={controls}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {duplicatedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} handleClick={handleClick} />
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;