import React, { useState } from "react";
import CardSwap, { Card } from "../utils/CardSwap";
import { FaAnglesDown } from "react-icons/fa6";
import MacbookMockup from "../utils/MacbookMockup";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projectDetails = [
    {
      title: "RIA",
      image: "/RIA.png",
      github: "https://github.com/bhushan-tawade/RIA.git",
      description: " An AI-powered chatbot that understands prompts, responds smartly, and stores full chat sessions using userId and conversationId in MongoDB.",
    },
    {
      title: "Wonderlust",
      image: "/wonderlust.png",
      github: "https://github.com/bhushan-tawade/Wonderlust.git",
      description: "Wonderlust is a MERN stack app for listing and managing hotels and villas with full CRUD functionality and user reviews.",
    },
    {
      title: "Cloudsense",
      image: "/Cloudsense.png",
      github: "https://github.com/bhushan-tawade/Cloudsense.git",
      description: "CloudSense is a React weather app that shows real-time forecasts and suggests clothing based on conditions.",
    },
    {
      title: "Expence Tracker",
      image: "/expenceTracker.png",
      github: "https://github.com/bhushan-tawade/Advanced-Expense-Tracker.git",
      description: " Expense Tracker is a web app that helps users manage their finances by tracking daily expenses, categorizing them, and visualizing spending habits through charts and graphs.",
    },
  ];

  const colorCodes = ["black", "#D1D8BE", "#020419", "#0C005A"];
  const textColorCodes = ["white", "black", "white", "white"];

  return (
    <>
      {/* 🔹 Top Section */}
      <div className="w-full h-[80vh] bg-[#161618] shadow1 mt-[10rem] relative overflow-hidden border-b-1 z-40">
        <div className="w-[60%] h-[80vh] flex flex-col items-center justify-center max-[426px]:w-full max-[425px]:text-center max-[769px]:w-[100%] max-[769px]:text-center ">
          <div className="text-white max-[426px]:w-[20rem] max-[426px]:text-center max-[769px]:w-full" >
            <h1 className="text-4xl">
              Projects
            </h1>
            <p className="text-lg opacity-70 mt-3">Built to solve real-world problems with simple solutions.</p>
          </div>
        </div>
        <div className="absolute w-full h-10 z-10 bottom-8 flex items-center justify-center text-[#212124]">
          <FaAnglesDown size={50} />
        </div>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          {projectDetails.slice(0, 3).map((project, i) => (
            <Card key={i}>
              <h3 className="m-5">{project.title}</h3>
              <img src={project.image} className="w-full h-full" alt="" />
            </Card>
          ))}
        </CardSwap>
      </div>

      {/* 🔹 Sticky Carousel Section */}
      <div
        className={`
          min-[769px]:sticky top-0 max-[769px]:relative
          w-full h-auto min-h-screen p-5 pt-10 
          flex flex-col justify-start items-center 
        `}
        style={{ backgroundColor: colorCodes[activeProject] }}
      >
        {/* Tab Section - scrollable on small screens */}
        <div
          className={`w-full flex py-5 border-b ${
            textColorCodes[activeProject] === "black"
              ? "border-black"
              : "border-gray-200"
          }`}
        >
          <div className="flex gap-6 px-2 justify-around w-full max-[426px]:overflow-x-scroll max-[426px]:overflow-y-hidden ">
            {projectDetails.map((project, index) => (
              <div
                key={index}
                className={`px-5 py-2 relative transition-all duration-300 text-2xl max-[426px]:text-lg shrink-0 max-[769px]:text-xl
                  ${
                    activeProject === index
                      ? `font-semibold text-${textColorCodes[index]}`
                      : "font-medium text-gray-500 hover:text-white"
                  }`}
                onClick={() => setActiveProject(index)}
              >
                {project.title}
                <div
                  className={`
                    absolute bottom-[-21px] left-0 right-0 h-1 transition-all duration-300
                    ${
                      activeProject === index
                        ? textColorCodes[index] === "black"
                          ? "bg-black scale-100"
                          : "bg-white scale-100"
                        : "scale-0"
                    }
                  `}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Project Content */}
        <div className="flex flex-col lg:flex-row justify-center items-center h-auto lg:h-[80vh] w-full bg-cover bg-center bg-no-repeat mt-8 gap-8">
          {/* Text Content */}
          <div
            className={`w-full lg:w-1/2 max-[769px]:items-center max-[769px]:text-center px-4 lg:px-20 flex flex-col justify-center items-start text-${textColorCodes[activeProject]}`}
          >
            <h2 className="text-9xl font-semibold mb-4 max-[1025px]:text-4xl max-[1441px]:text-6xl max-[769px]:text-5xl">
              {projectDetails[activeProject].title}
            </h2>
            <p className="text-2xl max-[1025px]:text-xl ">
              {projectDetails[activeProject].description }
            </p>
            <div className="mt-5">
              <a
                href={projectDetails[activeProject].github} target="_blank"
                className={`mt-5 flex gap-5 items-center justify-center text-2xl max-[769px]:text-lg max-[1025px]:text-xl bg-transparent border-2 border-${textColorCodes[activeProject]} 
                 text-${textColorCodes[activeProject]} px-8 py-8 max-[769px]:px-5 max-[769px]:py-5 rounded-[5rem] hover:bg-gray-800 transition-colors`}
              >
                <img
                  src={`/${
                    textColorCodes[activeProject] === "black"
                      ? "GithubBlack.png"
                      : "Github.png"
                  }`}
                  className="mr-2 w-12 h-12 max-[769px]:w-8 max-[769px]:h-8"
                  alt="github"
                />
                <span>View Project</span>
              </a>
            </div>
          </div>

          {/* MacbookMockup */}
          <div className="w-full lg:w-1/2 px-4 flex justify-center items-center">
            <MacbookMockup imageSrc={projectDetails[activeProject].image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
