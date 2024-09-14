import React from "react";
import { motion } from "framer-motion";
import reactIcon from "../assets/react-icon.svg";
import framerMotionIcon from "../assets/framer-motion-icon.svg";

const Footer = () => {
  return (
    <div className="container mx-auto text-center mt-3 mb-3">
      <p className="text-2xl">
        Made with <span className="text-red-500">❤️</span> by Atharva using
        <motion.img
          src={reactIcon}
          alt="React"
          className="w-6 h-6 inline-block mx-1 align-middle"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2, 
            ease: "linear", 
          }}
        />{""}
        and 
        <img
          src={framerMotionIcon}
          alt="Framer Motion"
          className="w-6 h-6 inline-block mx-1 align-middle"
        />
      </p>
    </div>
  );
};

export default Footer;
