import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/Letter A.svg";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Prevent scrolling when the mobile menu is open
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <nav id="navbar" className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
      <motion.img
  className="mx-2 w-20 cursor-pointer"
  src={logo}
  alt="logo"
  onClick={() => window.location.reload()}
  animate={{ rotateY: 360 }}  
  transition={{ 
    repeat: Infinity,         
    duration: 2,              
    ease: "linear"            
  }}
/>

      </div>

      <div className="hidden md:flex items-center gap-8 text-3xl">
        <a href="#about" className="cursor-pointer font-bold hover:text-gray-500">
          About
        </a>
        <a href="#projects" className="cursor-pointer font-bold hover:text-gray-500">
          Projects
        </a>
        <a href="#contact" className="cursor-pointer font-bold hover:text-gray-500">
          Contact
        </a>
      </div>

      {/* Hamburger Menu for mobile view */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black md:hidden flex flex-col items-center justify-center text-xl text-white">
          {/* Cross Icon */}
          <button className="absolute top-5 right-5 text-3xl" onClick={toggleMenu}>
            <FaTimes />
          </button>
          <a href="#about" className="cursor-pointer font-bold text-5xl mb-8 hover:text-gray-500" onClick={toggleMenu}>
            About
          </a>
          <a href="#projects" className="cursor-pointer text-5xl font-bold mb-8 hover:text-gray-500" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" className="cursor-pointer  text-5xl font-bold hover:text-gray-500" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
