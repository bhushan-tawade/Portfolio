import React, { useEffect, useState } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import HamburgerMenu from "./Components/HamburgerMenu";
import { AnimatePresence } from "framer-motion";
import Collabrate from "./Pages/Collabrate";
import SmoothCursor from "./utils/SmoothCursor";
import IntroAnimation from "./utils/IntroAnimation";
const App = () => {
  const [isOpen, setOpen] = useState(false);
  const [toggleColor, setToggleColor] = useState(false);


  return (
    <Router>
      <IntroAnimation/>
      <Navbar
        isOpen={isOpen}
        setOpen={setOpen}
        toggleColor={toggleColor}
        setToggleColor={setToggleColor}
      />
      
      <AnimatePresence>
        {isOpen && (
          <HamburgerMenu
            isOpen={isOpen}
            setOpen={setOpen}
            toggleColor={toggleColor}
            setToggleColor={setToggleColor}
          />
        )}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<Home isOpen={isOpen} setOpen={setOpen} toggleColor={toggleColor}
        setToggleColor={setToggleColor}/>} />
        <Route
          path="/about"
          element={<About isOpen={isOpen} setOpen={setOpen} toggleColor={toggleColor}
            setToggleColor={setToggleColor} />}
        />
        <Route
          path="/contact"
          element={<Collabrate isOpen={isOpen} setOpen={setOpen} toggleColor={toggleColor}
        setToggleColor={setToggleColor}/>}
        />
      </Routes>
    </Router>
  );
};

export default App;
