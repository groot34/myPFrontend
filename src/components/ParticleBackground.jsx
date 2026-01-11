import React from "react";
import { loadFull } from "tsparticles";
import { Particles } from "react-tsparticles";

// Import your SVG icons
import reactIcon from "../assets/react-icon.svg";
import bootstrapIcon from "../assets/bootstrap-icon.svg";
import canvaIcon from "../assets/canva-icon.svg";
import cppIcon from "../assets/cpp-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import expressIcon from "../assets/express-icon.svg";
import firebaseIcon from "../assets/firebase-icon.svg";
import gitIcon from "../assets/git-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import htmlIcon from "../assets/html-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import mongodbIcon from "../assets/mongodb-icon.svg";
import mysqlIcon from "../assets/mysql-icon.svg";
import netlifyIcon from "../assets/netlify-icon.svg";
import nextjsIcon from "../assets/nextjs-icon.svg";
import nodeIcon from "../assets/node-icon.svg";
import postgresqlIcon from "../assets/postgresql-icon.svg";
import postmanIcon from "../assets/postman-icon.svg";
import reduxIcon from "../assets/redux-icon.svg";
import tailwindcssIcon from "../assets/tailwindcss-icon.svg";
import typescriptIcon from "../assets/typescript-icon.svg";
import vercelIcon from "../assets/vercel-icon.svg";
import vscodeIcon from "../assets/vscode-icon.svg";
import jwtIcon from "../assets/jwt-icon.svg";
import viteIcon from "../assets/vite-icon.svg";
import goIcon from "../assets/go.svg";
import neonIcon from "../assets/neonIcon.svg";
import supabaseIcon from "../assets/supabaseIcon.svg";

const ParticleBackground = () => {
  const iconsArray = [
    reactIcon, bootstrapIcon, canvaIcon, cppIcon, cssIcon, expressIcon,
    firebaseIcon, viteIcon, gitIcon, githubIcon, htmlIcon, jsIcon, mongodbIcon,
    mysqlIcon, netlifyIcon, nextjsIcon, nodeIcon, postgresqlIcon,
    postmanIcon, reduxIcon, tailwindcssIcon, typescriptIcon, vercelIcon,
    vscodeIcon, jwtIcon, goIcon, neonIcon, supabaseIcon
  ];

  const particlesInit = async (engine) => {
    await loadFull(engine); // Ensure all features load
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0 // Set particles behind other content
        },
        detectRetina: true,
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10
              }
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 2,
            },
            push: {
              quantity: 2
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: "#ffffff"
          },
          move: {
            enable: true,
            speed: 2,
            outMode: "out",
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            limit: 25,
            value: 20,
          },
          opacity: {
            random: true,
            value: 1,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.2,
              sync: false
            }
          },
          rotate: {
            animation: {
              enable: true,
              speed: 5,
              sync: false
            },
            direction: "random",
            random: true
          },
          shape: {
            type: "image", // Render images as particles
            image: iconsArray.map((icon) => ({
              src: icon,
              width: 20,
              height: 20
            })),
          },
          size: {
            value: 16
          }
        },
        background: {
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
      }}
    />
  );
};

export default ParticleBackground;
