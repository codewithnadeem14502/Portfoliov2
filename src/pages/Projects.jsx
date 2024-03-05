import React from "react";
import { useTheme } from "../utils/ThemeContext";
import { FaCode } from "react-icons/fa";
import { FaPager } from "react-icons/fa6";
import ProjectCard, { CardBody, CardItem } from "./ProjectCard";
import { projectsData } from "../utils/ProjectData";

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
          className="ml-5 w-full"
        >
          <CardBody
            className={`w-[350px] h-[350px] md:w-[750px] md:h-[350px] flex justify-center items-center text-center rounded-lg ${
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
                      className="w-[450px] h-[300px] rounded-lg shadow-lg "
                      src={project.imageUrl}
                      alt={`Project ${index + 1}`}
                    />
                  </CardItem>
                </div>
                <div className="mt-4 px-4 w-full md:w-[50%]">
                  <div className="flex w-full justify-between items-center text-center">
                    <h1
                      className={`font-bold text-2xl mb-5  ml-5 ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {project.name}
                    </h1>
                    <div className="flex justify-evenly items-center w-[40%]">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex justify-center items-center bg-slate-500 p-3 md:p-3 rounded-lg text-lg text-white hover:bg-black ${
                          isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-300"
                        }`}
                      >
                        <FaCode className="" />
                      </a>
                      <a
                        href={project.liveSiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex justify-center items-center bg-green-400 p-3 md:p-3 rounded-lg text-lg hover:bg-green-500 ${
                          isDarkMode
                            ? "hover:bg-green-600"
                            : "hover:bg-green-300"
                        }`}
                      >
                        <FaPager className="" />
                      </a>
                    </div>
                  </div>

                  <p
                    className={`my-5 font-semibold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="w-full">
                    {project.skills.map((skill, index) => (
                      <button
                        key={index}
                        className={`m-2 p-2 rounded-full ${
                          isDarkMode
                            ? "bg-slate-300 text-black"
                            : "bg-gray-500 text-white"
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mt-4 px-4 w-full md:w-[50%]">
                  <div className="flex w-full justify-between items-center text-center">
                    <h1
                      className={`font-bold text-2xl mb-5  ml-5 ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {project.name}
                    </h1>
                    <div className="flex justify-evenly items-center w-[40%]">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex justify-center items-center bg-slate-500 p-3 md:p-3 rounded-lg text-lg text-white hover:bg-black ${
                          isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-300"
                        }`}
                      >
                        <FaCode className="" />
                      </a>
                      <a
                        href={project.liveSiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex justify-center items-center bg-green-400 p-3 md:p-3 rounded-lg text-lg hover:bg-green-500 ${
                          isDarkMode
                            ? "hover:bg-green-600"
                            : "hover:bg-green-300"
                        }`}
                      >
                        <FaPager className="" />
                      </a>
                    </div>
                  </div>

                  <p
                    className={`my-5 font-semibold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="w-full">
                    {project.skills.map((skill, index) => (
                      <button
                        key={index}
                        className={`m-2 p-2 rounded-full ${
                          isDarkMode
                            ? "bg-white text-black"
                            : "bg-gray-700 text-white"
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
                      className="w-[450px] h-[300px] rounded-lg "
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
