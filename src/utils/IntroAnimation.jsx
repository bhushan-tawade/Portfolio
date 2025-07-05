import { useEffect, useState } from "react";

const IntroAnimation = () => {
  const [exit, setExit] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setExit(true), 2500); // Start exit
    const timer2 = setTimeout(() => setHide(true), 3500); // Fully hide

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className={`absolute top-0 left-0 w-full h-1/2 bg-black flex items-end justify-center transition-all duration-1000 ${
          exit ? "animate-split-top" : ""
        }`}
      >
        <h1 className="text-white text-3xl md:text-5xl ">
          Hello, Welcome 
        </h1>
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full h-1/2 bg-black flex items-start justify-center transition-all duration-1000 ${
          exit ? "animate-split-bottom" : ""
        }`}
      >
        <h1 className="text-white text-3xl md:text-5xl ">
          to My Portfolio!
        </h1>
      </div>
    </div>
  );
};

export default IntroAnimation;
