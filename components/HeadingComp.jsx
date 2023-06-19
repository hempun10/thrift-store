import React from "react";

const HeadingComp = ({
  firstText,
  spanText,
  secondText = "",
  subText = "",
}) => {
  return (
    <div className="header_wrapper text-center mb-8">
      <h1 className=" text-5xl ">
        {firstText}{" "}
        <span className=" text-pink-500 font-custom">{spanText}</span>{" "}
        {secondText}
      </h1>
      <p className=" text-gray-500 mt-2">{subText}</p>
    </div>
  );
};

export default HeadingComp;
