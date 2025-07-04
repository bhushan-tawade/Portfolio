import React from "react";

const MacbookMockup = ({ imageSrc, alt = "Website Screenshot" }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Website Screenshot inside the laptop screen */}
      <img
        src={imageSrc}
        alt={alt}
        className={`absolute ${
          imageSrc === "/wonderlust.png"
            ? "top-[18%] left-[15.5%] w-[29rem] h-[18rem] max-[769px]:w-[29rem] max-[769px]:left-[15.5%] max-[769px]:h-[18rem] max-[1026px]:w-[19rem] max-[1026px]:h-[12rem] max-[426px]:w-[15.29rem] max-[426px]:h-[9.4rem] max-[426px]:left-[15.4%] max-[426px]:top-[18%] max-[1441px]:w-[27.9rem] max-[1441px]:h-[17.4rem] max-[1441px]:left-[15.6%] max-[1441px]:top-[18%] max-[1281px]:w-[24.5rem] max-[1281px]:h-[15.2rem] max-[1281px]:left-[15.7%] max-[1281px]:top-[18%] "
            : "top-[23%] left-[16%] w-[28.5rem] h-[15rem] max-[769px]:w-[29rem] max-[769px]:left-[15.5%] max-[769px]:h-[15rem] max-[1025px]:w-[19rem] max-[1025px]:h-[10rem] max-[1025px]:left-[15%] max-[1025px]:top-[22%] max-[426px]:w-[15.29rem] max-[426px]:h-[8rem] max-[426px]:left-[15.4%] max-[426px]:top-[20%] max-[1441px]:w-[27.5rem] max-[1441px]:h-[14rem] max-[1441px]:left-[15.5%] max-[1441px]:top-[22%] max-[1281px]:w-[24.5rem] max-[1281px]:h-[12rem] max-[1281px]:left-[15.5%] max-[1281px]:top-[24%] "
        } object-cover   z-20 `}
      />

      {/* Laptop Frame */}
      <img
        src="/laptopMockup.png"
        alt="Laptop Frame"
        className="w-full h-auto relative z-10 drop-shadow-xl/50"
      />
    </div>
  );
};

export default MacbookMockup;
