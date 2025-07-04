import React from "react";
import FlowingMenu from "../utils/FlowingMenu";
import { div } from "framer-motion/client";

const WhoIam = () => {
  return (
    <div className="bg-black z-10">
      <div
        className="bg-white pt-[9rem] max-[769px]:pt-[2rem] max-[426px]:pt-[5rem]  max-[1025px]:pt-[5rem] py-5 px-5 pb-10 h-[110vh] max-[769px]:h-[70vh] max-[426px]:h-[50vh] max-[769px]:py-0.5 relative"
      >
        <FlowingMenu>
          <FlowingMenu.Item
            link="#"
            start="I am a "
            bold="MERN Stack"
            end=" Developer"
            image="https://picsum.photos/600/400?random=1"
          />
          <FlowingMenu.Item
            link="#"
            start="I craft "
            bold="Responsive Web"
            end=" Interfaces"
            image="https://picsum.photos/600/400?random=2"
          />
          <FlowingMenu.Item
            link="#"
            start=""
            bold="React.js"
            end=" is my creative tool"
            image="https://picsum.photos/600/400?random=3"
          />
          <FlowingMenu.Item
            link="#"
            start=""
            bold="Code"
            end=" is my second language"
            image="https://picsum.photos/600/400?random=4"
          />
          <FlowingMenu.Item
            link="#"
            start=""
            bold="Project"
            end=" is my playground"
            image="https://picsum.photos/600/400?random=5"
          />
        </FlowingMenu>
      </div>
    </div>
  );
};

export default WhoIam;
