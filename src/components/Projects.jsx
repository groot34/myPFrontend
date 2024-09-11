import React from "react";
import { PROJECTS } from "../constants";

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
      <h2 className="my-20 text-center text-5xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4 rounded">
              <img
                src={project.image}
                width={340}
                height={200}
                alt={project.title}
                className="mb-6"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
