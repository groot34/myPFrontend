import React from "react";
import aboutAtharva from "../assets/Atharva-removebg-preview.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { services } from "../constants";

// Motion fadeIn effect for different directions
const fadeInDirection = (direction, delay = 0) => {
  let x = 0, y = 0;

  switch (direction) {
    case 'top':
      x = -100;
      break;
    case 'bottom':
      x = 100;
      break;
    case 'left':
      x = -100;
      break;
    case 'right':
      x = 100;
      break;
    default:
      break;
  }

  return {
    hidden: { opacity: 0, x, y },
    show: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', delay, duration: 0.75 } }
  };
};

const ServiceCard = ({ index, title, icon }) => {
  const directions = ['top', 'left', 'right', 'bottom'];
  const direction = directions[index % directions.length];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}  // Ensures animation triggers every time it comes into view
      variants={fadeInDirection(direction, 0.5 * index)}
      className="w-full max-w-[300px] xs:w-[250px] lg:w-[300px] p-[1px] card-gradient rounded-[20px] shadow-card">
      <div className="bg-gradient-to-br from-[#10102e] to-[#292d54] rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[18px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-5xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="w-48 h-48" src={aboutAtharva} alt="Atharva Tikale" />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-6 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.id} title={service.title} icon={service.icon} index={index} />
        ))}
      </div>
    </div>
  );
};

export default About;
