import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import BlurText from "../utils/BlurText";
import BubbleCanvas from "../utils/BubbleCanvas";
import SmoothCursor from "../utils/SmoothCursor";
import Marquee from "react-fast-marquee";

import { motion, useScroll, useTransform } from "framer-motion";

const Hero = ({ isOpen, setOpen }) => {
  const icons = [
    "CSS",
    "Express",
    "MongoDB",
    "js",
    "React",
    "Git",
    "Github",
    "Docker",
    "Npm",
    "Nodejs",
    "MySQL",
    "Python",
    "Figma",
    "Tailwind",
    "Bootstrap",
    "Html",
  ];

  const heroRef = useRef(null);

  // Faster scroll-based effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.7], [0, 500]);

  return (
    <>
      <motion.div
        ref={heroRef}
        className="h-[90vh] flex flex-col items-center relative overflow-hidden"
      >
        <div className="relative w-full h-[78vh] bg-white">
          <div className="absolute top-0 w-full">
            <BubbleCanvas />
          </div>

          <SmoothCursor />

          {/* Scroll-based animated text */}
          <motion.div
            style={{ opacity, y }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full noto-sans mt-5 flex flex-col items-center justify-center z-10"
          >
            <BlurText
              text="Code that breathes."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[8rem] max-[1025px]:text-6xl max-[426px]:text-3xl max-[1281px]:text-8xl font-bold mb-0 text-black"
            />
            <br />
            <BlurText
              text="Design that speaks."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[7rem] max-[1025px]:text-6xl max-[426px]:text-3xl max-[1281px]:text-8xl font-bold mb-0 text-black"
            />
          </motion.div>
        </div>
        <motion.h1
          style={{ opacity, y }}
          className="text-black text-lg max-[426px]:text-sm z-20 relative bottom-4 max-[1025px]:bottom-10"
        >
          Bhushan Tawade, Software Developer.
        </motion.h1>
        <div className="absolute bottom-10 w-[110%] h-[22vh] bg-white border-0 rounded-[100%] z-[-1] flex items-center justify-center"></div>
      </motion.div>

      <div className="relative bottom-6 w-full h-19 flex items-center justify-center mt-3 p-0 opacity-80">
        {/* left fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

        {/* right fade */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <Marquee speed={200}>
          {icons.map((element, index) => (
            <img
              key={index}
              className="h-12 w-12 mx-10"
              src={`/${element}_icon.png`}
              alt={element}
            />
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Hero;
