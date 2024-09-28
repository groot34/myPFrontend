import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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


const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const iconsArray = [
    reactIcon, bootstrapIcon, canvaIcon, cppIcon, cssIcon, expressIcon,
    firebaseIcon, gitIcon, githubIcon, htmlIcon, jsIcon, mongodbIcon,
    mysqlIcon, netlifyIcon, nextjsIcon, nodeIcon, postgresqlIcon,
    postmanIcon, reduxIcon, tailwindcssIcon, typescriptIcon, vercelIcon,
    vscodeIcon, jwtIcon
  ];

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1
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
              duration: 20,
              opacity: 0.8,
              size: 2,
            },
            push: {
              quantity: 1
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
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            value: iconsArray.length, // Set the number of particles to match the number of icons
            density: {
              enable: true,
              area: 800
            }
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.2,
              speed: 1,
              sync: false
            },
            random: true,
            value: 1
          },
          rotate: {
            animation: {
              enable: true,
              speed: 5,
              sync: false
            },
            direction: "random",
            random: true,
            value: 0
          },
          shape: {
            type: "image",
            image: iconsArray.map((icon) => ({
              src: icon,
              width: 30,
              height: 30
            }))
          },
          size: {
            random: false,
            value: 15
          }
        },
        background: {
          color: {
            value: "transparent",
          },
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
      }}
    />
  );
};

export default ParticleBackground;