import React, { useState, useEffect } from "react";
import { PROJECTS } from "../constants";
import { motion, useAnimation } from "framer-motion";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollAnimation = {
    x: ["0%", "-100%"],
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
      const timeout = setTimeout(() => {
        controls.start(scrollAnimation);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isHovered, controls, isMobile]);

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
              className="flex flex-col items-center mb-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/10 rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 rounded-xl w-full max-w-xs"
                width={260}
                height={260}
              />
              <div className="text-center max-w-xs">
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

                <div className="flex justify-center space-x-4">
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
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex space-x-4"
          animate={controls}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {duplicatedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[260px] lg:min-w-[320px] bg-white/0 flex-shrink-0 mb-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/10 rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
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
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
