import React, { useEffect } from "react";

const Collabrate = ({  setToggleColor }) => {
  useEffect(() => {
    setToggleColor?.(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 pt-20 pb-10">
      {/* Green availability dot */}
      <div className="flex items-center gap-5 mb-6">
        <div className="w-2.5 h-2.5 bg-[#2cff2c] rounded-full shadow-[0_0_8px_3px_#2cff2c] animate-pulse" />
        <p className="text-gray-400 text-3xl max-[426px]:text-2xl">Available for opportunities</p>
      </div>

      {/* Heading */}
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-12">
        Say hello to your <br /> next collaboration
      </h1>

      {/* Mailto Button */}
      <a
        href="mailto:tawadebhushan25@gmail.com"
        className="inline-block mt-4 px-8 py-4 bg-white text-black text-lg font-semibold rounded-lg shadow hover:bg-gray-200 transition"
      >
        Contact Me
      </a>
    </div>
  );
};

export default Collabrate;
