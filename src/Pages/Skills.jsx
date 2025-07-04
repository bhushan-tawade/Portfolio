import React from "react";
import TiltedCard from "../utils/TiltedCard";
import { motion } from "framer-motion";

const Skills = () => {
  const icons = [
    "React", "MongoDB", "Express", "js", "Html",
    "CSS", "Git", "Github", "Docker", "Npm",
    "Nodejs", "Python", "Figma", "Tailwind", "Bootstrap",
  ];

  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      className="w-full min-h-[100vh] py-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-black flex flex-col items-center justify-center min-[426px]:sticky top-[-50px]"
    >
      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-6 sm:gap-8 md:gap-10 
          w-full max-w-7xl
        "
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex justify-center items-center group"
          >
            <TiltedCard
              imageSrc={`/${icon}.png`}
              altText={icon}
              captionText={icon}
              containerHeight="150px"
              containerWidth="150px"
              imageHeight="80px"
              imageWidth="80px"
              rotateAmplitude={45}
              scaleOnHover={1.15}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              containerClassName="
                border-2 border-transparent bg-gray-800/50 backdrop-blur-sm
                group-hover:border-white/30 relative rounded-xl overflow-hidden shadow-lg
                before:absolute before:inset-0 before:rounded-xl before:border before:border-transparent
                before:bg-gradient-to-br before:from-white/10 before:to-white/0
                before:bg-origin-border before:[mask:linear-gradient(black,black)_padding-box,linear-gradient(black,black)_border-box]
                before:group-hover:border-white/20 transition-all duration-500
              "
              imageClassName="
                filter brightness-0 invert opacity-80 
                group-hover:opacity-100 transition-opacity duration-300
              "
              overlayContent={
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-sm rounded-xl">
                  <p className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wide sm:tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {icon}
                  </p>
                </div>
              }
              overlayClassName="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
