import React from "react";
import ProfileCard from "../utils/ProfileCard";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="bg-white relative w-full h-[90vh] flex justify-center items-center z-40 max-[426px]:h-[70vh]  ">
        <div className="w-[60%] p-10 h-[80vh] relative flex flex-col items-center justify-center text-black rounded-lg 
        max-[426px]:w-full  max-[769px]:text-center max-[769px]:w-xl">
          <h1 className="absolute left-10 max-[769px]:hidden text-[12rem] leading-60 font-bold max-[769px]:text-2xl  max-[426px]:text-[5rem] max-[426px]:leading-20 
          max-[1026px]:text-4xl max-[1026px]:leading-10 max-[1026px]:top-90 max-[1026px]:left-20 max-[1281px]:text-9xl max-[1281px]:leading-30 max-[1281px]:top-50 ">
            let's <br />
            connect!
          </h1>
          <div className="absolute right-0 max-[1026px]:left-20 max-[426px]:left-3 max-[426px]:top-36 max-[426px]:px-8 top-15 w-[25rem] h-[10rem] ">
            <p className="text-2xl max-[426px]:text-[1rem] text-zinc-500 mt-5">
              I am always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <p className="text-2xl max-[426px]:text-[1rem] text-zinc-500 mt-5">
              Feel free to reach out to me via the contact form or connect with
              me on social media.
            </p>
          </div>
            <Link to="/contact">
          <div className="min-[769px]:hidden w-[9rem] h-[3rem] absolute bottom-30 left-50  max-[426px]:left-35 bg-black text-white flex items-center justify-center mt-10">
              Let's Connect
          </div>
            </Link>
        </div>

        <div className="w-[40%] h-[80vh] flex flex-col items-center justify-center max-[426px]:hidden max-[769px]:hidden max-[426px]:w-full max-[1026px]:pr-20">
          <ProfileCard
            name="Bhushan Tawade"
            title="Software Engineer"
            handle="bhushan"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/profile1.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>
      <div className="w-full h-[10vh] bg-black z-40
       flex items-center justify-center ">
        <div className="w-full h-full bg-black z-10 flex items-center justify-center">

        <p className="text-white text-lg  max-[426px]:text-sm z-10 bg-black ">
          © 2023 Bhushan Tawade. All rights reserved.
        </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
