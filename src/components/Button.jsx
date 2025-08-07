import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({text}) => {
  return (
    <button className="group relative overflow-hidden px-[25px] py-[10px] rounded-full bg-[#f0f0f0] text-black text-[18px] flex items-center gap-2 text-nowrap transition-all duration-300 hover:cursor-pointer">
      {/* Background transition layer */}
      <span className="absolute inset-0 bg-[#c8d7de] w-0 group-hover:w-full transition-all duration-500 ease-in-out right-0 z-0"></span>

      {/* Content (text + icon) */}
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
        {text}
        <FaArrowRightLong />
      </span>
    </button>
  );
};

export default Button;
