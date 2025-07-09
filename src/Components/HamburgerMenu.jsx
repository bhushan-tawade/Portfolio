import React from "react";
import { motion } from "framer-motion";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";

const menuVariants = {
  hidden: {
    y: "-100%",
    opacity: 1,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeIn",
    },
  },
  exit: {
    y: "-100%", // Exit upwards
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const HamburgerMenu = ({ setOpen, toggleColor, setToggleColor }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen glass z-[9999] overflow-hidden "
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex flex-col w-full justify-center items-center h-[80%] text-3xl text-white font-bold pt-15">
        <hr className="h-5 w-full text-white" />
        <Link to="/" onClick={() => setOpen(false)}>
          <h1 className="text-[7rem] max-[1025px]:text-[6rem] max-[426px]:text-[4rem]  font-semibold mb-5 hover:text-zinc-400 transition:duration-300 transition:ease-in-out w-full text-center">
            Home
          </h1>
        </Link>
        <hr className="h-5 w-full text-white" />
        <Link to="/about" onClick={() => setOpen(false)}>
          <h1 className="text-[7rem] max-[1025px]:text-[6rem] max-[426px]:text-[4rem] font-semibold mb-5 hover:text-zinc-400 transition:duration-300 transition:ease-in-out  w-full text-center">
            About
          </h1>
        </Link>
        <hr className="h-5 w-full text-white" />
        <Link
          to="/contact"
          onClick={() => {
            setOpen(false);
            setToggleColor(true);
          }}
        >
          <h1 className="text-[7rem] max-[1025px]:text-[6rem] max-[426px]:text-[4rem] font-semibold mb-5 hover:text-zinc-400 transition:duration-300 transition:ease-in-out  w-full text-center">
            Let's Talk
          </h1>
        </Link>
      </div>
      <div className="h-[20%] border-t-2 border-white glass1 flex flex-wrap justify-center items-center gap-10 sm:gap-20 md:gap-30 text-white py-6 sm:py-10 text-[2.5rem] sm:text-5xl md:text-6xl">
        <div className="hover:scale-[1.5] hover:-translate-y-3 sm:hover:-translate-y-5 transition-all duration-300 ease-in-out">
          <a
            href="https://github.com/bhushan-tawade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub />
          </a>
        </div>
        <div className="hover:scale-[1.5] hover:-translate-y-3 sm:hover:-translate-y-5 transition-all duration-300 ease-in-out">
          <a
            href="https://www.linkedin.com/in/bhushan-tawade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <div className="hover:scale-[1.5] hover:-translate-y-3 sm:hover:-translate-y-5 transition-all duration-300 ease-in-out">
          <a
            href="https://x.com/Bhushan_t2504"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
        </div>
        <div className="hover:scale-[1.5] hover:-translate-y-3 sm:hover:-translate-y-5 transition-all duration-300 ease-in-out">
          <a
            href="https://www.instagram.com/bhushan_t.25/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="hover:scale-[1.5] hover:-translate-y-3 sm:hover:-translate-y-5 transition-all duration-300 ease-in-out">
          <a
            href="https://medium.com/@tawadebhushan25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMedium />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default HamburgerMenu;
