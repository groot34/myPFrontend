import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCES } from '../constants';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(29, 24, 54, 0.3)", // More translucent background
        color: "#fff",
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(5px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        padding: '2rem',
      }}
      contentArrowStyle={{ borderRight: '7px solid rgba(29, 24, 54, 0.3)' }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: 'none'
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {experience.icon && (
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="rounded-full object-contain"
            />
          )}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience.title}
        </h3>
        <p className="text-blue-400 text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-300 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="font-semibold text-5xl my-20 text-white mb-4">
          cd ~/Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col relative">
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;