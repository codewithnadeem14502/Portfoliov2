import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { useTheme } from "../utils/ThemeContext";

const Hero = ({ imageSrc, altText }) => {
  const { isDarkMode } = useTheme(); // Using the theme context to access the current mode

  return (
    <>
      <div
        className={`py-5 z-0 ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700            "
            : "bg-gradient-to-br from-purple-200 to-white"
        }`}
        id="home"
      >
        <div className="flex flex-col items-center justify-center h-[550px] mt-24 md:mt-10">
          <motion.img
            src={imageSrc}
            alt={altText}
            className="w-36 h-36 rounded-full mb-4 border-solid border-8 border-white border-opacity-100"
            whileHover={{ scale: 1.1 }}
          />

          <motion.p
            className={`text-lg md:text-3xl md:space-y-4 font-medium text-center mx-2 md:w-[60%] mt-10 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hey, <strong>I'm Nadeem!</strong> A passionate{" "}
            <strong>full-stack developer </strong>
            immersed in crafting <strong>robust web applications </strong>. My
            main focus revolves around{" "}
            <span className="underline">React (Next.js), </span>where I channel
            my creativity to build engaging digital experiences.
          </motion.p>
        </div>
        <div className="flex-col md:flex md:flex-row justify-center items-center">
          <div className="min-h-[50px] pr-5 pb-5 md:pb-0 flex items-center justify-center">
            <button
              className={`flex px-10 py-5 font-medium rounded-lg w-fit text-lg md:text-xl ${
                isDarkMode
                  ? "bg-gray-600 text-white"
                  : "bg-indigo-500 text-white"
              } transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]`}
            >
              Contact me here
              <FaArrowRight
                size={24}
                style={{ marginLeft: "8px", marginTop: "3px" }}
              />
            </button>
          </div>
          <div className=" min-h-[50px]  pr-5 flex items-center justify-center">
            <button
              className={`flex px-10 py-5 font-medium bg-white rounded-lg text-black w-fit text-lg md:text-xl transition-all shadow-[3px_3px_0px_gray] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]`}
            >
              Download resume
              <FaArrowRight
                size={24}
                style={{ marginLeft: "8px", marginTop: "3px" }}
              />
            </button>
          </div>
          <div className="flex items-center justify-center mt-5">
            <motion.div
              whileHover={{ scale: 1.1, color: "black" }}
              initial={{ scale: 1, color: "gray" }}
              className={`flex items-center justify-center m-2 p-5 rounded-full bg-white shadow-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              }`}
            >
              <FaGithub size={24} />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, color: "black" }}
              initial={{ scale: 1, color: "gray" }}
              className={`flex items-center justify-center m-2 p-5 text-3xl rounded-full bg-white shadow-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              }`}
            >
              <FaLinkedin size={24} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
