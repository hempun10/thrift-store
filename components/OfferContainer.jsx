"use client";
import { useState } from "react";
import "../styles/offerContainer.css";
import Image from "next/image";

const OfferContainer = ({ saleName, saleHeading, saleDesc, imgSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="offer_container flex-1 bg-[#F4F5F4] p-5 rounded-xl flex justify-center items-center cursor-pointer shadow max-lg:flex-col max-lg:items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text_content flex-1 flex flex-col gap-9 max-lg:items-center max-lg:text-center">
        <div className="text_wrapper flex flex-col gap-4">
          <p className=" text-sm uppercase">{saleName}</p>
          <h2 className=" text-4xl font-[500] tracking-wider ">
            {saleHeading}
          </h2>
          <p className="font-custom text-[.95rem] ">{saleDesc}</p>
        </div>
        <div className="button_container bg-black w-[50%] text-white text-center px-5 py-3 rounded-full max-lg:w-full">
          <button className="">Shop Now</button>
        </div>
      </div>
      <div className={`img_content flex-1 ${isHovered ? "hovered" : ""}`}>
        <Image src={imgSrc} alt="" className="w-[100%] scale-[1.1]" />
      </div>
    </div>
  );
};

export default OfferContainer;
