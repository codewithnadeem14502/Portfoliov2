import React from "react";
import { useTheme } from "../utils/ThemeContext";
import { FaCode } from "react-icons/fa";
import { FaPager } from "react-icons/fa6";
import ProjectCard, { CardBody } from "./ProjectCard";

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex pt-28 relative flex-wrap w-full justify-evenly items-center px-5 md:px-10 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
      id="projects"
    >
      <h1 className="mb-10 text-5xl font-semibold flex justify-center items-center w-full">
        My Projects
      </h1>
      <ProjectCard containerClassName="my-container" className="ml-5">
        <CardBody
          className={`w-[350px] h-[550px] md:w-[500px] md:h-[640px] rounded-lg ${
            isDarkMode ? "bg-gray-800" : "bg-slate-50 hover:bg-slate-100"
          } border shadow-lg`}
        >
          <h1
            className={`font-bold text-2xl mb-5 p-4 ml-5 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Project Name
          </h1>
          {/* Replace image URL with your project image */}
          <img
            className="px-4"
            src="https://images.unsplash.com/photo-1682687980976-fec0915c6177?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
            alt="Project"
          />
          <div className="mt-14 px-4">
            <p
              className={`my-5 font-semibold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Project Description Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eaque tempore numquam veniam omnis labore rem?
            </p>
            <div className="flex justify-evenly items-center w-full">
              <button
                className={`flex justify-center items-center bg-slate-500 p-3 md:p-5 rounded-lg text-lg text-white hover:bg-black ${
                  isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-300"
                }`}
              >
                Github <FaCode className="ml-3" />
              </button>
              <button
                className={`flex justify-center items-center bg-green-400 p-3 md:p-5 rounded-lg text-lg hover:bg-green-500 ${
                  isDarkMode ? "hover:bg-green-600" : "hover:bg-green-300"
                }`}
              >
                Live-Site <FaPager className="ml-3" />
              </button>
            </div>
          </div>
        </CardBody>
      </ProjectCard>
      <ProjectCard containerClassName="my-container" className="ml-5">
        <CardBody
          className={`w-[350px] h-[550px] md:w-[500px] md:h-[640px] rounded-lg ${
            isDarkMode ? "bg-gray-800" : "bg-slate-50 hover:bg-slate-100"
          } border shadow-lg`}
        >
          <h1
            className={`font-bold text-2xl mb-5 p-4 ml-5 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Project Name
          </h1>
          {/* Replace image URL with your project image */}
          <img
            className="px-4"
            src="https://images.unsplash.com/photo-1682687980976-fec0915c6177?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
            alt="Project"
          />
          <div className="mt-14 px-4">
            <p
              className={`my-5 font-semibold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Project Description Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eaque tempore numquam veniam omnis labore rem?
            </p>
            <div className="flex justify-evenly items-center w-full">
              <button
                className={`flex justify-center items-center bg-slate-500 p-3 md:p-5 rounded-lg text-lg text-white hover:bg-black ${
                  isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-300"
                }`}
              >
                Github <FaCode className="ml-3" />
              </button>
              <button
                className={`flex justify-center items-center bg-green-400 p-3 md:p-5 rounded-lg text-lg hover:bg-green-500 ${
                  isDarkMode ? "hover:bg-green-600" : "hover:bg-green-300"
                }`}
              >
                Live-Site <FaPager className="ml-3" />
              </button>
            </div>
          </div>
        </CardBody>
      </ProjectCard>
      <ProjectCard containerClassName="my-container" className="ml-5">
        <CardBody
          className={`w-[350px] h-[550px] md:w-[500px] md:h-[640px] rounded-lg ${
            isDarkMode ? "bg-gray-800" : "bg-slate-50 hover:bg-slate-100"
          } border shadow-lg`}
        >
          <h1
            className={`font-bold text-2xl mb-5 p-4 ml-5 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Project Name
          </h1>
          {/* Replace image URL with your project image */}
          <img
            className="px-4"
            src="https://images.unsplash.com/photo-1682687980976-fec0915c6177?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
            alt="Project"
          />
          <div className="mt-14 px-4">
            <p
              className={`my-5 font-semibold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Project Description Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eaque tempore numquam veniam omnis labore rem?
            </p>
            <div className="flex justify-evenly items-center w-full">
              <button
                className={`flex justify-center items-center bg-slate-500 p-3 md:p-5 rounded-lg text-lg text-white hover:bg-black ${
                  isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-300"
                }`}
              >
                Github <FaCode className="ml-3" />
              </button>
              <button
                className={`flex justify-center items-center bg-green-400 p-3 md:p-5 rounded-lg text-lg hover:bg-green-500 ${
                  isDarkMode ? "hover:bg-green-600" : "hover:bg-green-300"
                }`}
              >
                Live-Site <FaPager className="ml-3" />
              </button>
            </div>
          </div>
        </CardBody>
      </ProjectCard>
      <ProjectCard containerClassName="my-container" className="ml-5">
        <CardBody
          className={`w-[350px] h-[550px] md:w-[500px] md:h-[640px] rounded-lg ${
            isDarkMode ? "bg-gray-800" : "bg-slate-50 hover:bg-slate-100"
          } border shadow-lg`}
        >
          <h1
            className={`font-bold text-2xl mb-5 p-4 ml-5 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Project Name
          </h1>
          {/* Replace image URL with your project image */}
          <img
            className="px-4"
            src="https://images.unsplash.com/photo-1682687980976-fec0915c6177?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
            alt="Project"
          />
          <div className="mt-14 px-4">
            <p
              className={`my-5 font-semibold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Project Description Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eaque tempore numquam veniam omnis labore rem?
            </p>
            <div className="flex justify-evenly items-center w-full">
              <button
                className={`flex justify-center items-center bg-slate-500 p-3 md:p-5 rounded-lg text-lg text-white hover:bg-black ${
                  isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-300"
                }`}
              >
                Github <FaCode className="ml-3" />
              </button>
              <button
                className={`flex justify-center items-center bg-green-400 p-3 md:p-5 rounded-lg text-lg hover:bg-green-500 ${
                  isDarkMode ? "hover:bg-green-600" : "hover:bg-green-300"
                }`}
              >
                Live-Site <FaPager className="ml-3" />
              </button>
            </div>
          </div>
        </CardBody>
      </ProjectCard>
    </div>
  );
};

export default Projects;
