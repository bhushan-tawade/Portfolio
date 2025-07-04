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
      <ScrollVelocity
        texts={[
          "Powered by Coffee & Code • A Pixel-Perfect Perfectionist • ",
          " Brew. Code. Repeat. • Debugging with a Cup of JavaScript •",
        ]}
        velocity={75}
        className="custom-scroll-text text-5xl max-[426px]:text-2xl"
      />
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
