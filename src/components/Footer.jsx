import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import reactIcon from "../assets/react-icon.svg";
import framerMotionIcon from "../assets/framer-motion-icon.svg";

const Footer = () => {
  const scrollToTop = () => {
    const heroSection = document.getElementById("navbar");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container relative mx-auto text-center mt-3 mb-3">
      <p className="text-2xl">
        Made with <span className="text-red-500">❤️</span> by Atharva using
        <motion.img
          src={reactIcon}
          alt="React"
          className="w-6 h-6 inline-block mx-2 align-middle" // Added mx-2 for spacing
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
        and
        <img
          src={framerMotionIcon}
          alt="Framer Motion"
          className="w-6 h-6 inline-block mx-2 align-middle" // Added mx-2 for spacing
        />
      </p>

      {/* Upper Arrow Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-0 bottom-0 mb-8 mr-8 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition "
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Footer;
