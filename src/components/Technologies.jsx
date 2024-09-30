import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import reactIcon from "../assets/react-icon.svg";
import bootstrapIcon from "../assets/bootstrap-icon.svg";
import canvaIcon from "../assets/canva-icon.svg";
import cppIcon from "../assets/cpp-icon.svg";
import cssIcon from "../assets/css-icon.svg";
import firebaseIcon from "../assets/firebase-icon.svg";
import gitIcon from "../assets/git-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import htmlIcon from "../assets/html-icon.svg";
import jsIcon from "../assets/js-icon.svg";
import mongodbIcon from "../assets/mongodb-icon.svg";
import mysqlIcon from "../assets/mysql-icon.svg";
import netlifyIcon from "../assets/netlify-icon.svg";
import nodeIcon from "../assets/node-icon.svg";
import postgresqlIcon from "../assets/postgresql-icon.svg";
import postmanIcon from "../assets/postman-icon.svg";
import reduxIcon from "../assets/redux-icon.svg";
import tailwindcssIcon from "../assets/tailwindcss-icon.svg";
import typescriptIcon from "../assets/typescript-icon.svg";
import vscodeIcon from "../assets/vscode-icon.svg";
import jwtIcon from "../assets/jwt-icon.svg";
import viteIcon from "../assets/vite-icon.svg"; 
import figmaIcon from "../assets/figma-icon.svg"; 
import framerMotionIcon from "../assets/framer-motion-icon.svg";

import { SiNextdotjs } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiRender } from "react-icons/si";

const iconData = [
  { src: reactIcon, alt: "React ", duration: 2.5 },
  { src: bootstrapIcon, alt: "Bootstrap ", duration: 3 },
  { src: canvaIcon, alt: "Canva ", duration: 2.8 },
  { src: cppIcon, alt: "C++ ", duration: 3.2 },
  {
    icon: SiRender ,
    alt: "Render ",
    duration: 3.0,
    config: {
      size: "4em",
      color: "#ffffff",
    }
  },
  { src: cssIcon, alt: "CSS ", duration: 2.9 },
  { src: firebaseIcon, alt: "Firebase ", duration: 2.7 },
  { src: figmaIcon, alt: "Figma ", duration: 2.7 },
  { src: gitIcon, alt: "Git ", duration: 3 },
  { src: githubIcon, alt: "GitHub ", duration: 2.6 },
  { src: htmlIcon, alt: "HTML ", duration: 2.9 },
  { src: jsIcon, alt: "JavaScript ", duration: 3.3 },
  { src: mongodbIcon, alt: "MongoDB ", duration: 2.8 },
  { src: viteIcon, alt: "Vite ", duration: 2.9 },
  {
    icon: SiShadcnui,
    alt: "Shadcn/ui ",
    duration: 3.1,
    config: {
      size: "4em",
      color: "#ffffff",
    }
  },
  { src: mysqlIcon, alt: "MySQL ", duration: 3.2 },
  { src: netlifyIcon, alt: "Netlify ", duration: 2.7 },
  { src: nodeIcon, alt: "Node.js ", duration: 3.1 },
  { src: postgresqlIcon, alt: "PostgreSQL ", duration: 2.8 },
  { src: postmanIcon, alt: "Postman ", duration: 3.3 },
  { src: reduxIcon, alt: "Redux ", duration: 2.6 },
  { src: tailwindcssIcon, alt: "Tailwind CSS ", duration: 3 },
  { src: typescriptIcon, alt: "TypeScript ", duration: 3.2 },
  { src: vscodeIcon, alt: "VS Code ", duration: 3.1 },
  { src: jwtIcon, alt: "JWT ", duration: 3 },
  { src: framerMotionIcon, alt: "Framer Motion ", duration: 3.2 },
  {
    icon: SiNextdotjs,
    alt: "Next.js ",
    duration: 3.1,
    config: {
      size: "4em",
      color: "#ffffff",
    }
  },


  {
    icon: FaNpm,
    alt: "NPM ",
    duration: 3.1,
    config: {
      size: "4em",
      color: "#d63031",
    }
  },
  {
    icon: IoLogoVercel ,
    alt: "Vercel ",
    duration: 32.7,
    config: {
      size: "4em",
      color: "#ffffff",
    }
  },
];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.icon-container')) {
        setSelectedIcon(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl"
      >
        Technologies
      </motion.h1>


      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          {iconData.map((icon, index) => (
            <div key={index} className="icon-container relative">
              <AnimatePresence>
                {selectedIcon === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#FDDA0D] font-bold text-xl text-black px-2 py-1 rounded-md  whitespace-nowrap"
                  >
                    {icon.alt}
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                variants={iconVariants(icon.duration)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
                onHoverStart={() => setSelectedIcon(index)}
                onClick={() => setSelectedIcon(index)}
              >
                {icon.src ? (
                  <img className="w-16 h-16" src={icon.src} alt={icon.alt} />
                ) : icon.icon ? (
                  <icon.icon {...icon.config} />
                ) : (
                  <span>{icon.alt}</span>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;