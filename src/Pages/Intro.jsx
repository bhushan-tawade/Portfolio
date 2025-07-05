import React from "react";
import ScrollReveal from "../utils/ScrollReveal";
import ScrollVelocity from "../utils/ScrollVelocity";

const Intro = () => {
  const introText = `—— Hi, I'm Bhushan Tawade, a final-year B.Tech Computer Science student at Sanjay Ghodawat University and a passionate full-stack web developer. I specialize in building responsive and user-friendly web applications using the MERN stack — MongoDB, Express.js, React, and Node.js. Some of my notable projects include CloudSense (a weather forecasting app), Wonderlust (a hotel and villa listing platform), and tools like usePopcorn.`;

  return (
    <div className="w-full h-screen flex items-center justify-center px-70 max-[1025px]:px-60  bg-black z-10 mb-[5rem] max-[1025px]:mb-[1rem] max-[769px]:px-20 max-[769px]:mb-[2rem] max-[426px]:text-xl max-[426px]:px-10 max-[425px]:mb-[1rem] max-[426px]:h-[80vh] max-[426px]:flex-col max-[426px]:justify-center max-[426px]:items-start max-[426px]:gap-5  max-[426px]:w-full max-[426px]:p-5 ">
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
