import React, { useEffect, useState } from "react";
import Hero from "./Pages/Hero";
import SmoothCursor from "./utils/SmoothCursor";
import Intro from "./Pages/Intro";
import Projects from "./Pages/Projects";
import ScrollVelocity from "./utils/ScrollVelocity";
import WhoIam from "./Pages/WhoIam";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Contribution from "./Pages/Contribution";
import SmoothScroll from "./utils/SmoothScroll";
import HamburgerMenu from "./Components/HamburgerMenu";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import IntroAnimation from "./utils/IntroAnimation";

const Home = ({isOpen, setOpen, setToggleColor}) => {
  
  useEffect(() => {
    setToggleColor(false);
  }, []);

  return (
    <div>
      <SmoothScroll />
      
      
      <Hero isOpen={isOpen} setOpen={setOpen} />
      <SmoothCursor />
      <Intro />
     
      <Skills />
      <Projects />
      <WhoIam />
      <Contribution />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
