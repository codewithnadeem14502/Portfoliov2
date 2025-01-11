import React from "react";
import { useTheme } from "../utils/ThemeContext";
import { FaCode } from "react-icons/fa";
import { FaPager } from "react-icons/fa6";
import ProjectCard, { CardBody, CardItem } from "./ProjectCard";
import { projectsData } from "../utils/ProjectData";
import { SiGithub } from "react-icons/si";

const Projects = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex pt-28 relative flex-wrap w-full justify-evenly items-center px-5 md:px-10 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
      id="projects"
    >
      <h1 className="mb-10 text-5xl font-semibold flex justify-center items-center w-full">
        My Projects
      </h1>

      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          containerClassName="my-container"
          className=" w-full"
        >
          <CardBody
            className={`w-[350px] h-[400px] md:w-[750px] md:h-[350px] flex justify-center items-center text-center rounded-lg ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-slate-50 hover:bg-slate-100"
            }  shadow-lg`}
          >
            {index % 2 === 0 ? (
              <>
                <div className="w-[70%] px-3 hidden md:block">
                  <CardItem
                    translateZ="100"
                    rotateZ={5}
                    rotateY={10}
                    className=" "
                  >
                    <img
                      className="w-[450px] h-[300px] rounded-lg shadow-lg border"
                      src={project.imageUrl}
                      alt={`Project ${index + 1}`}
                    />
                  </CardItem>
                </div>
                <div className="mt-2 px-2 w-full md:w-[60%] gap-5">
                  <div className="flex w-full justify-start items-center text-center">
                    <h1
                      className={`font-bold text-2xl mb-2  ml-1 text-nowrap ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {project.name}
                    </h1>
                    <div className="flex items-start">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-2 p-2 rounded-lg transition-all duration-300
          transform hover:scale-110 hover:-translate-y-1
          ${isDarkMode ? "text-white" : "text-gray-700"}`}
                        aria-label="View GitHub Repository"
                      >
                        <SiGithub className="text-2xl transition-transform duration-300 group-hover:rotate-12" />
                        <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Code
                        </span>
                      </a>

                      <a
                        href={project.liveSiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-2 p-2 rounded-lg transition-all duration-300
          transform hover:scale-110 hover:-translate-y-1
          ${isDarkMode ? "text-green-400" : "text-green-600"}`}
                        aria-label="View Live Site"
                      >
                        <FaPager className="text-2xl transition-transform duration-300 group-hover:rotate-12" />
                        <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Live
                        </span>
                      </a>
                    </div>
                  </div>

                  <p
                    className={`mt-3 mb-2 font-semibold text-start ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="w-full">
                    <div className="flex flex-wrap gap-3 justify-start">
                      {project.skills.map((skill, index) => (
                        <button
                          key={index}
                          className={`rounded-lg px-3 py-2 text-lg font-light border border-gray-300 
              shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap
              ${
                isDarkMode
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-100"
              }`}
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mt-2 px-3 w-full md:w-[60%]">
                  <div className="flex w-full gap-5 justify-start items-center text-center">
                    <h1
                      className={`font-bold text-2xl mb-1  ml-5 ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {project.name}
                    </h1>
                    <div className="flex justify-start items-center w-[40%]">
                      <a
                        href={project.liveSiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-2 p-2 rounded-lg transition-all duration-300
          transform hover:scale-110 hover:-translate-y-1
          ${isDarkMode ? "text-green-400" : "text-green-600"}`}
                        aria-label="View Live Site"
                      >
                        <FaPager className="text-2xl transition-transform duration-300 group-hover:rotate-12" />
                        <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Live
                        </span>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-2 p-2 rounded-lg transition-all duration-300
          transform hover:scale-110 hover:-translate-y-1
          ${isDarkMode ? "text-white" : "text-gray-700"}`}
                        aria-label="View GitHub Repository"
                      >
                        <SiGithub className="text-2xl transition-transform duration-300 group-hover:rotate-12" />
                        <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Code
                        </span>
                      </a>
                    </div>
                  </div>

                  <p
                    className={`mt-2 font-semibold text-start ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-start">
                    {project.skills.map((skill, index) => (
                      <button
                        key={index}
                        className={`rounded-lg px-3 py-2 text-lg font-light border border-gray-300 
              shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap
              ${
                isDarkMode
                  ? "text-white hover:bg-gray-700"
                  : "text-black hover:bg-gray-100"
              }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="w-[50%] px-3 hidden md:block">
                  <CardItem
                    translateZ="100"
                    rotateZ={-5}
                    rotateY={-10}
                    className=" "
                  >
                    <img
                      className="w-[450px] h-[300px] rounded-lg shadow-lg border"
                      src={project.imageUrl}
                      alt={`Project ${index + 1}`}
                    />
                  </CardItem>
                </div>
              </>
            )}
          </CardBody>
        </ProjectCard>
      ))}
    </div>
  );
};

export default Projects;
