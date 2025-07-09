import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import SmoothScroll from "../utils/SmoothScroll";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";

import { Link } from "react-router-dom";
import SmoothCursor from "../utils/SmoothCursor";

const About = ({ setToggleColor }) => {
  useEffect(() => {
    setToggleColor(false);
  }, []);

  const links = [ "https://github.com/bhushan-tawade", "https://www.linkedin.com/in/bhushan-tawade/", "https://x.com/Bhushan_t2504", "https://www.instagram.com/bhushan_t.25/", "https://medium.com/@tawadebhushan25" ];

  return (
    <>
      <div className="bg-white w-full text-black">
        <SmoothCursor />
        <SmoothScroll />

        {/* Intro Section */}
        <div className="pt-10 px-30 max-[769px]:px-20 h-screen flex flex-col items-start font-bold text-[3rem] leading-none justify-center">
          <h1 className="opacity-50 text-[4rem] mb-3 max-[769px]:text-[3rem] max-[426px]:text-[2rem]">
            Hi, I am
          </h1>
          <h1 className="mb-4 text-7xl max-[769px]:text-[4rem] max-[426px]:text-[3rem]">
            Bhushan Tawade
          </h1>
          <h1 className="text-5xl max-[769px]:text-[3rem] max-[426px]:text-[1rem] font-semibold">
            Software Developer
          </h1>
        </div>

        {/* About Section */}
        <div className="w-full min-h-[150vh] bg-black flex items-start justify-center text-white py-40 min-[426px]:sticky top-[-30rem]">
          <div
            className="w-[90%] flex gap-10 
            max-[1025px]:flex-col max-[1025px]:w-[95%] 
            
            max-[769px]:px-10  "
          >
            <div className="w-[40%] max-[1025px]:w-full transition-all duration-300">
              <h1 className="text-3xl text-center md:text-left">About</h1>
            </div>
            <div className="w-[60%] max-[1025px]:w-full text-lg opacity-70 leading-relaxed max-[426px]:text-center">
              I am a final-year B.Tech Computer Science and Engineering student
              at Sanjay Ghodawat University with a strong passion for full-stack
              web development. Specializing in the MERN stack (MongoDB,
              Express.js, React, Node.js), I have built several hands-on
              projects including an expense tracker, quiz application, hotel
              listing platform, and a weather forecasting app. These experiences
              have not only strengthened my technical skills but also honed my
              ability to design user-centric interfaces and integrate APIs
              effectively.
              <br />
              <br />
              In addition to development, I actively focus on mastering Data
              Structures and Algorithms, primarily using C++. I am following a
              structured roadmap covering basic to advanced topics like
              recursion, trees, graphs, and dynamic programming. I consistently
              participate in coding challenges and post my progress on LinkedIn
              to stay accountable and inspire others. My problem-solving mindset
              and foundational knowledge in C, C++, and Python enable me to
              approach challenges from multiple angles.
              <br />
              <br />
              I’m also exploring AI integration within web applications through
              a project called “RIA,”. My portfolio reflects a balance between
              technical depth and user-focused design, with certifications in
              React, Postman, and Python further validating my expertise. I
              thrive in fast-paced, collaborative environments and am
              continuously learning to build impactful digital solutions that
              solve real-world problems.
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="w-full min-h-[90vh] bg-black flex items-start justify-center text-white py-40 sticky top-0 z-10">
          <div
            className="w-[90%] flex gap-10 
            max-[1025px]:flex-col max-[1025px]:w-[95%]
            max-[769px]:w-[96%] max-[426px]:w-[98%] max-[769px]:px-10"
          >
            <div className="w-[40%] max-[1025px]:w-full transition-all duration-300">
              <h1 className="text-3xl text-center md:text-left">Vision</h1>
            </div>
            <div className="w-[60%] max-[1025px]:w-full text-lg opacity-70 leading-relaxed max-[426px]:text-center ">
              My vision is to become a well-rounded software engineer capable of
              building intelligent, scalable, and user-friendly web applications
              that make a real-world impact. I aim to contribute to open-source
              projects, collaborate with innovative teams, and eventually lead
              initiatives that blend AI with frontend development to create
              smarter user interfaces.
              <br />
              <br />
              I believe in continuous learning, and my roadmap includes diving
              deeper into system design, cloud architecture, and AI model
              integration. With every project, I strive not just to build but to
              innovate ensuring my work remains relevant and valuable in a
              rapidly evolving tech landscape.
              <br />
              <br />
              Ultimately, I want to use technology to empower individuals and
              communities by developing solutions that are both accessible and
              impactful.
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="w-full h-[45rem] bg-white text-black z-50 text-center p-0">
        <div
          className="h-[40rem] bg-white w-full flex 
          max-[1025px]:flex-col-reverse "
        >
          <div className="h-full w-[10%] max-[1025px]:w-full flex flex-col max-[1025px]:flex-row justify-around items-center py-10">
            {[IoLogoGithub, FaLinkedinIn, FaXTwitter, FaInstagram, SiMedium].map(
              (Icon, idx) => (
                <div
                  key={idx}
                  className="hover:scale-[1.5] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                >
                  <a href={links[idx]} target="_blank" rel="noopener noreferrer">
                    <Icon size={50} />
                  </a>
                </div>
              )
            )}
          </div>

          <div className="h-full w-[40%] max-[1025px]:w-full max-[426px]:text-lg max-[426px]:text-center max-[1025px]:text-center flex items-center justify-center text-2xl text-start px-8">
            <p>
              I’m always open to collaborating on meaningful and challenging
              projects that drive learning and innovation. With a strong
              foundation in web development and a continuous learning mindset, I
              bring reliability, dedication, and a team-oriented approach to any
              collaboration. I enjoy brainstorming ideas, solving problems
              efficiently, and contributing to clean, scalable code. If you're
              looking for a motivated and dependable collaborator who values
              clear communication and shared growth, I’d be glad to work
              together and make a positive impact.
            </p>
          </div>

          <div className="h-full w-[50%] max-[1025px]:w-full">
            <div className="flex items-center justify-center h-full">
              <Link
                to="/contact"
                className="text-3xl md:text-5xl lg:text-7xl font-semibold text-black hover:text-zinc-600 transition duration"
              >
                Let's Talk 👋
              </Link>
            </div>
          </div>
        </div>

        <div className="h-[5rem] bg-black w-full text-center flex items-center justify-center">
          <p className="text-white text-md md:text-xl lg:text-2xl ">
            © 2025 Bhushan Tawade. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
