import React from "react";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";
import illustration from "../assets/illustration.svg";
import headerimg from "../assets/header-img.svg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div id="hero" className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              <span className="font-semibold">H</span>ola{" "}
              <span className="text-[#FFFDD0] font-semibold">C</span>omrade🫡
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white bg-clip-text text-transparent whitespace-nowrap"
            >
              I'm <span className="italic">Atharva Tikale</span>
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-xl"
            >
              <TypingEffect />
            </motion.p>
          </div>
        </div>

        <div className=" w-full lg:w-1/2 lg:p-8">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }} 
            animate={{
              y: [0, -10, 0], 
            }}
            transition={{
              duration: 1, 
              delay: 0.2, 
              y: {
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            src={headerimg}
            alt="profile pic"
            className="w-9/12 sm:w-7/12 lg:w-6/12 xl:w-5/12 mx-auto sm:ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
