import React from "react";
import { gsap } from "gsap";
import Marquee from "react-fast-marquee";

const FlowingMenu = ({ children }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">{children}</nav>
    </div>
  );
};

FlowingMenu.Item = function MenuItem({ link, start, bold, end, image }) {
  const itemRef = React.useRef(null);
  const marqueeRef = React.useRef(null);
  const marqueeInnerRef = React.useRef(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2;
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2;
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev) => {
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev) => {
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" });
  };

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="text-white uppercase font-normal text-[4vh] leading-[1.2] p-[1vh_1vw_0]">
        {start}
        <strong>{bold}</strong>
        {end}
      </span>
      <div
        className="w-[200px] h-[7vh] max-[769px]:h-[2vh] max-[426px]:h-[10vh] my-[2em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
    </React.Fragment>
  ));

  return (
    <div
      className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#9f9fa9] bg-z "
      ref={itemRef}
    >
      <p
        className="flex items-center h-full  px-20 relative no-underline font-semibold text-[9vh] max-[1025px]:text-[2.5rem] max-[1441px]:text-[8vh] max-[769px]:text-[1.5rem] max-[426px]:text-[1rem] max-[769px]:px-10 hover:text-[#060010]"
        
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {start && <span className="text-gray-400 ">{start}&nbsp;</span>}
        <span className="font-bold text-black">{bold}</span>
        {end && <span className="text-gray-400">&nbsp;{end}</span>}
      </p>

      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-black translate-y-[101%]"
        ref={marqueeRef}
      >
        <div className="h-full  w-[200%] flex" ref={marqueeInnerRef}>
          <Marquee speed={100}>
            <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
              {repeatedMarqueeContent}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
