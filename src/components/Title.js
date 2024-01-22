import React from "react";

function Title({ title, bgColor, titleColor }) {
  return (
    <div className="flex justify-center items-center place-content-start py-20 w-4/5 mx-auto">
      <div
        className=" h-1 w-10 md:w-48"
        style={{ backgroundColor: bgColor }}
      ></div>
      <h3
        className="text-center text-lg md:text-2xl font-bold w-4/6 md:w-2/5 mx-5 md:mx-10"
        style={{ color: titleColor }}
      >
        {title}
      </h3>
      <div
        className=" h-1 w-10 md:w-48"
        style={{ backgroundColor: bgColor }}
      ></div>
    </div>
  );
}

export default Title;
