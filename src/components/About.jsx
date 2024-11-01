import React, { useState } from "react";
import aboutAtharva from "../assets/Atharva-removebg-preview.png";
import aboutAtharva2 from "../assets/Atharva-removablebg-2.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { services } from "../constants";

// Motion fadeIn effect for alternating left to right and right to left
const fadeInDirection = (direction) => {
  let x = 0;

  switch (direction) {
    case "left":
      x = -100;
      break;
    case "right":
      x = 100;
      break;
    default:
      break;
  }

  return {
    hidden: { opacity: 0, x },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 0.75 },
    },
  };
};

// ServiceCard Component with click-to-rotate functionality
const ServiceCard = ({ index, title, icon }) => {
  // Alternate direction for each card
  const direction = index % 2 === 0 ? "left" : "right";

  // State to manage card rotation on click
  const [isRotated, setIsRotated] = useState(false);

  const handleCardClick = () => {
    setIsRotated(!isRotated); // Toggle rotation state
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }} // Ensures animation triggers every time it comes into view
      variants={fadeInDirection(direction)}
      className="w-full max-w-[300px] xs:w-[250px] lg:w-[300px] p-[1px] card-gradient rounded-[20px] shadow-card"
      onClick={handleCardClick} // Rotate on click
      onHoverStart={() => setIsRotated(!isRotated)} // Rotate on hover
    >
      <motion.div
        className="bg-gradient-to-br from-[#10102e] to-[#292d54] rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
        animate={{ rotateY: isRotated ? 180 : 0 }} // Animate Y-axis rotation
        transition={{ duration: 0.6, type: "spring" }}
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[18px] font-bold text-center">
          {title}
        </h3>
      </motion.div>
    </motion.div>
  );
};

// About Component
const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-5xl">
        cd ~/groot34
        
      </h2>

      <div className="flex flex-wrap">
  {/* About Image */}
  <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }}
    className="w-full lg:w-1/2 lg:p-8"
  >
    <div className="flex items-center justify-center">
      <img
        className="w-52 h-52"
        src={aboutAtharva2}
        alt="Atharva Tikale"
      />
    </div>
  </motion.div>

  {/* About Text */}
  <motion.div
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: 100 }}
    transition={{ duration: 0.5 }}
    className="w-full lg:w-1/2"
  >
    <div className="flex justify-center lg:justify-start">
      <p
        className="my-2 max-w-xl py-6 text-lg"
        dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }}
      />
    </div>
  </motion.div>
</div>


      {/* Services Cards */}
      <motion.div
        className="mt-20 flex flex-wrap gap-6 justify-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }} // Animation when the cards come into view
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, staggerChildren: 0.1 },
          },
        }}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            icon={service.icon}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default About;
