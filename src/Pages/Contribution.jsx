import { div } from "framer-motion/client";
import React from "react";

const Contribution = () => {
  return (
    <div className="sticky max-[769px]:top-[-15rem] max-[769px]:pt-[10rem] top-0  w-full h-screen max-[769px]:h-[150vh] bg-[white]   overflow-hidden border-b-1">

    <div className="w-full h-[100vh] py-10 bg-white font-black text-9xl relative flex flex-col items-center justify-center  ">
      <img src="./royal.png" alt="absolute " className="w-70 max-[426px]:w-50 transform scale-y-[-1]" />
      <h1 className="text-4xl max-[426px]:text-[1rem] font-semibold text-black tracking-[0.5rem] uppercase">
        Certifications
      </h1>
      <img src="./royal.png" alt="absolute " className="w-70 max-[426px]:w-50" />

      <div className="w-full py-10 bg-white">
        <div className="flex flex-wrap justify-center gap-10">
          {/* Certificate Card */}
          {[
            
            {
              title: "HackerRank Certified\nReact Developer",
              issuer: "HackerRank",
            },
            {
              title: "Postman API Fundamentals\nStudent Expert",
              issuer: "Postman",
            },
            {
              title: "HackerRank Certified\nFrontend Developer",
              issuer: "HackerRank",
            },
            {
              title: "Introduction to Programming\nUsing Python",
              issuer: "HCL GUVI",
            },
          ].map((cert, index) => (
            <div
            key={index}
            className="flex items-center rounded-xl px-4 py-6 "
            >
              <img src="./leaf1.png" alt="left leaf " className="w-14 h-22 max-[426px]:w-10 max-[426px]:h-16" />
              <div className="mx-5 text-center">
                <h1 className="text-black text-lg font-semibold whitespace-pre-line max-[426px]:text-[0.8rem]">
                  {cert.title}
                </h1>
                <p className="text-zinc-600 text-sm font-semibold max-[426px]:text-[0.7rem]">
                  {cert.issuer}
                </p>
              </div>
              <img src="./leaf2.png" alt="right leaf" className="w-14 h-22 max-[426px]:w-10 max-[426px]:h-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
          </div>
  );
};

export default Contribution;
