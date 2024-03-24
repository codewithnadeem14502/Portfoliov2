import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../utils/ThemeContext";

const skills = [
  "C / C++",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Redux",
  "MongoDB",
  "Git",
  "Tailwind",
  "Framer Motion",
];

const Skill = () => {
  const { isDarkMode } = useTheme();
  const skillRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const skillSection = skillRef.current;
    const handleScroll = () => {
      if (
        skillSection &&
        window.scrollY + window.innerHeight > skillSection.offsetTop
      ) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={skillRef}
      className={`flex flex-col items-center justify-center h-[850px] px-5 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
      id="skills"
    >
      <h1 className="mb-16 text-5xl font-semibold"> My Skills</h1>
      <div className="flex flex-wrap justify-center gap-4 mx-0 py-5 md:mx-38 lg:mx-48 md:py-0 ">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            whileHover={{ scale: 1.15 }}
            className={`rounded-lg px-2 py-2 md:px-4 md:py-4 text-lg md:text-2xl font-light text-center border border-gray-300 shadow-md cursor-pointer ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
