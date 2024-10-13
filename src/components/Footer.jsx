import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import reactIcon from "../assets/react-icon.svg";
import framerMotionIcon from "../assets/framer-motion-icon.svg";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Scroll-to-top function
  const scrollToTop = () => {
    const heroSection = document.getElementById("navbar");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to toggle the visibility of the scroll-to-top button
  const toggleVisibility = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbarHeight = document.getElementById("navbar").offsetHeight;

    // Show the button only after scrolling past the navbar
    if (scrollTop > navbarHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Track scrolling and toggle button visibility
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="container relative mx-auto text-center mt-3 mb-3">
      <p className="text-2xl">
        Made with <span className="text-red-500">❤️</span> by Atharva using
        <motion.img
          src={reactIcon}
          alt="React"
          className="w-6 h-6 inline-block mx-2 align-middle"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
        and
        <motion.img
          src={framerMotionIcon}
          alt="Framer Motion"
          className="w-6 h-6 inline-block mx-2 align-middle"
          animate={{ rotateY: 360 }} // Infinite rotation along Y-axis
          transition={{
            repeat: Infinity,
            duration: 2, 
            ease: "linear",
          }}
        />
      </p>

      {/* Scroll-to-top button - visible only when isVisible is true */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Copyright text at the bottom with current year */}
      <p className="text-xs text-gray-500 mt-4">
        © {currentYear}, All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
