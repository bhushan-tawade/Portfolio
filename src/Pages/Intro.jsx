import React from "react";
import ScrollReveal from "../utils/ScrollReveal";
import ScrollVelocity from "../utils/ScrollVelocity";

const Intro = () => {
  const introText = `—— Hi, I'm Bhushan Tawade a final-year B.Tech Computer Science student at Sanjay Ghodawat University with a strong passion for full-stack web development. 
  I specialize in creating responsive, intuitive, and performance-driven web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). 
  With a solid foundation in both frontend and backend technologies, I enjoy solving real-world problems through clean code, scalable architecture, and thoughtful user experiences. 
  I'm constantly exploring new tools, refining my skills, and building solutions that make a difference.`;

  return (
    <div className="w-full h-screen flex items-center justify-center px-70 text-2xl max-[1025px]:px-60  bg-black z-10 mb-[5rem] max-[1025px]:mb-[1rem] max-[769px]:px-20 max-[769px]:mb-[2rem] max-[426px]:text-xl max-[426px]:px-10 max-[425px]:mb-[1rem] max-[426px]:h-[80vh] max-[426px]:flex-col max-[426px]:justify-center max-[426px]:items-start max-[426px]:gap-5  max-[426px]:w-full max-[426px]:p-5 ">
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        {introText}
      </ScrollReveal>
    </div>
  );
};

export default Intro;
