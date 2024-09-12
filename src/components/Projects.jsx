import React from "react";
import { PROJECTS } from "../constants";
import {motion} from "framer-motion";

const Projects = () => {
  // Function to handle the live demo button click
  const handleLiveDemoClick = (url) => {
    window.open(url, "_blank");
  };

  // Function to handle the GitHub repo button click
  const handleGithubRepoClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
       className="my-20 text-center text-5xl">Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity:1, x:0}}  
            initial={{opacity:0, x:-100}} 
            transition={{duration:1}} 
            className="w-full lg:w-1/4 rounded">
              <img
                src={project.image}
                width={330}
                height={330}
                alt={project.title}
                className="mb-6 rounded-2xl mt-8 "  
              />
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            
            className="ml-4 w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              
              {/* Technologies */}
              <div className="mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons for Live Link and GitHub Repo */}
              <div className="flex space-x-4">
                <button
                  onClick={() => handleLiveDemoClick(project.liveLink)}
                  className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition duration-300"
                >
                  Live Demo
                </button>
                <button
                  onClick={() => handleGithubRepoClick(project.githubLink)}
                  className="cursor-pointer rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800 transition duration-300"
                >
                  GitHub Repo
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
