import React from "react";
import { motion } from "framer-motion";

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

// Define an array of icon data with random durations
const iconData = [
  { src: reactIcon, alt: "React Icon", duration: 2.5 },
  { src: bootstrapIcon, alt: "Bootstrap Icon", duration: 3 },
  { src: canvaIcon, alt: "Canva Icon", duration: 2.8 },
  { src: cppIcon, alt: "C++ Icon", duration: 3.2 },
  { src: cssIcon, alt: "CSS Icon", duration: 2.9 },
  { src: expressIcon, alt: "Express Icon", duration: 3.1 },
  { src: firebaseIcon, alt: "Firebase Icon", duration: 2.7 },
  { src: gitIcon, alt: "Git Icon", duration: 3 },
  { src: githubIcon, alt: "GitHub Icon", duration: 2.6 },
  { src: htmlIcon, alt: "HTML Icon", duration: 2.9 },
  { src: jsIcon, alt: "JavaScript Icon", duration: 3.3 },
  { src: mongodbIcon, alt: "MongoDB Icon", duration: 2.8 },
  { src: mysqlIcon, alt: "MySQL Icon", duration: 3.2 },
  { src: netlifyIcon, alt: "Netlify Icon", duration: 2.7 },
  { src: nextjsIcon, alt: "Next.js Icon", duration: 3 },
  { src: nodeIcon, alt: "Node.js Icon", duration: 3.1 },
  { src: postgresqlIcon, alt: "PostgreSQL Icon", duration: 2.8 },
  { src: postmanIcon, alt: "Postman Icon", duration: 3.3 },
  { src: reduxIcon, alt: "Redux Icon", duration: 2.6 },
  { src: tailwindcssIcon, alt: "Tailwind CSS Icon", duration: 3 },
  { src: typescriptIcon, alt: "TypeScript Icon", duration: 3.2 },
  { src: vercelIcon, alt: "Vercel Icon", duration: 2.7 },
  { src: vscodeIcon, alt: "VS Code Icon", duration: 3.1 },
  { src: jwtIcon, alt: "JWT Icon", duration: 3 },
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
            <motion.div
              key={index}
              variants={iconVariants(icon.duration)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <img className="w-16 h-16" src={icon.src} alt={icon.alt} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
