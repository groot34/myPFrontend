import React from "react";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";
import illustration from "../assets/illustration.svg";

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
            {/* Heading */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              <span className="font-semibold">H</span>ola{" "}
              <span className="text-[#FFFDD0] font-semibold">C</span>omrade🫡
            </motion.h1>

            {/* Fancy styled span */}
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold   text-white bg-clip-text text-transparent "
            >
              I'm <span className="italic">Atharva Tikale</span>
            </motion.span>

            {/* Typing effect */}
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

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 lg:p-8">
  <div className="flex justify-center">
    <motion.img
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      src={illustration}
      alt="profile pic"
      className="w-10/12 lg:w-10/12"  // Adjust the width for different screen sizes
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default Hero;
