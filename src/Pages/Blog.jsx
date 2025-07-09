import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Blog = () => {
  const ref = useRef(null);

  // Scroll-based scale animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 50%", "end 150%"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.0]);
  const scale = useSpring(rawScale, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  });

  return (
    <motion.div
      style={{ scale }}
      ref={ref}
      className={`
        sticky top-0 max-[769px]:top-[-10vh]
        w-full h-[100vh]
        bg-black flex items-center justify-between
        px-15 py-10
        max-[426px]:px-4 
      `}
    >
      {/* Left Side */}
      <div className="w-[40%] h-full p-10 max-[426px]:hidden max-[426px]:w-full max-[1280px]:hidden">
        <img
          src="/doubleQuote.png"
          alt="quote"
          className="w-[10rem] h-[10rem]"
        />
        <h1 className="text-7xl text-white font-semibold mt-5">Blogs</h1>
        <p className="text-3xl text-zinc-500 mt-5">A warm cup of words.</p>
      </div>

      {/* Right Side */}
      <div className="w-[55%] h-full max-[426px]:w-full max-[769px]:w-full max-[1280px]:w-full">
        <div className="w-full h-21 flex items-center justify-between px-5 py-5">
          <div className="flex items-end gap-2">
            <div className="w-12 h-12 max-[426px]:w-9 max-[426px]:h-9 bg-[url(/blank-profile.png)] p-0 bg-cover bg-center rounded-full"></div>
            <div className="text-white leading-none">
              <h1 className="text-xl max-[426px]:text-sm">Bhushan</h1>
              <a href="https://medium.com/@tawadebhushan25" target="_blank">
                <p className="text-sm max-[426px]:text-[10px] text-zinc-500">
                  @tawadebhushan25
                </p>
              </a>
            </div>
          </div>
          <a
            href="https://medium.com/@tawadebhushan25/hello-world-ff4078a31ed3"
            target="_blank"
          >
            <img
              src="/medium logo.png"
              alt="medium"
              className="h-40 w-40 max-[426px]:w-25 max-[426px]:h-25"
            />
          </a>
        </div>

        <div className="w-full h-[0.07px] bg-zinc-400" />

        <div className="w-full h-full flex items-start justify-between px-5 py-5 mt-3">
          <p className="text-white text-2xl max-[426px]:text-[1rem] max-[426px]:leading-[2rem] leading-[3rem] max-[769px]:text-xl max-[769px]:leading-[2.5rem] max-[1281px]:text-xl max-[1281px]:leading-[2.5rem]">
            <span className="font-semibold">"Hello World!"</span>
            <br />
            two simple words that mark the beginning of something extraordinary.
            I still remember the mix of excitement, fear, and curiosity on my
            first day in Computer Science. I dreamed of building apps and
            solving problems like a digital detective. Sure, there were moments
            of doubt, bugs, errors, and endless debugging but each challenge
            made me stronger. Computer Science isn’t just about code; it’s about
            resilience, community, and turning "I can’t" into "I did." That
            first line of code is more than a start it’s a promise. A promise
            that with passion and persistence, we will build the future.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
