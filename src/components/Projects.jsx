import React, { useState, useEffect } from "react";
import { PROJECTS } from "../constants";
import { motion, useAnimation } from "framer-motion";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view
  const controls = useAnimation(); // Controls for the animation

  // Detect if the screen is mobile size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust mobile width breakpoint
    };

    handleResize(); // Call once on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Infinite scroll animation with hover effect for larger screens
  const scrollAnimation = {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: isMobile ? 15 : 20, // Faster animation on mobile
        ease: "linear",
      },
    },
  };

  // Effect to handle pause/resume of animation based on hover state
  useEffect(() => {
    if (isHovered) {
      controls.stop(); // Stop scrolling when hovered
    } else {
      const timeout = setTimeout(() => {
        controls.start(scrollAnimation); // Resume scrolling after delay
      }, 1000); // Delay for 1 second after mouse leaves

      return () => clearTimeout(timeout); // Clean up timeout
    }
  }, [isHovered, controls, isMobile]);

  // Duplicating the project list for seamless infinite scrolling on larger screens
  const duplicatedProjects = [...PROJECTS, ...PROJECTS]; // Double the array for smooth looping

  // Redirect function to open links in a new tab
  const redirect = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      console.error("URL is not provided.");
    }
  };

  // Handle click for buttons
  const handleClick = (url) => {
    redirect(url);
  };

  return (
    <div className="border-b border-neutral-900 pb-4 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl"
      >
        Projects
      </motion.h2>

      {isMobile ? (
        // Mobile view: Display projects in columns with alternating animations
        <div className="space-y-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center mb-10"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded-2xl w-full max-w-xs"
                width={280} // Adjusted width for mobile
                height={280} // Adjusted height for mobile
              />
              <div className="text-center max-w-xs">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons for Live Link and GitHub Repo */}
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => handleClick(project.liveLink)}
                    className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition duration-300"
                  >
                    Live Demo
                  </button>
                  <button
                    onClick={() => handleClick(project.githubLink)}
                    className="cursor-pointer rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800 transition duration-300"
                  >
                    GitHub Repo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // Larger screens: Infinite scrolling animation
        <motion.div
          className="flex space-x-6"
          animate={controls} // Control the animation with Framer Motion's controls
          onMouseEnter={() => setIsHovered(true)} // Pause when mouse enters
          onMouseLeave={() => setIsHovered(false)} // Resume after delay when mouse leaves
        >
          {duplicatedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] lg:min-w-[400px] flex-shrink-0 mb-10"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mb-6 rounded-2xl w-full max-w-xs"
                width={300} // Adjusted width for larger screens
                height={300} // Adjusted height for larger screens
              />
              <div className="ml-4 max-w-xs">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons for Live Link and GitHub Repo */}
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleClick(project.liveLink)}
                    className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition duration-300"
                  >
                    Live Demo
                  </button>
                  <button
                    onClick={() => handleClick(project.githubLink)}
                    className="cursor-pointer rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800 transition duration-300"
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
