import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({text, bg = "#f0f0f0", txt = "#000000", border= "#fff"}) => {
  return (
<button style={{ backgroundColor: bg, color: txt, borderColor: border }} className="group relative overflow-hidden px-[25px] h-[3rem] rounded-full bg-[#f0f0f0] text-black text-[16px] md:text-[18px] flex items-center gap-2 text-nowrap transition-all duration-300 hover:cursor-pointer  border-2">
  {/* Background transition layer */}
  <span className="absolute top-0 bottom-0 right-0 w-12 h-full bg-[#c8d7de] rounded-full group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>

  {/* Content (text + icon) */}
  <span className="relative z-10 flex items-center gap-6 font-xxthin transition-colors duration-300 group-hover:text-black">
    {text}
    <FaArrowRightLong className="text-black mr-[-10px]"/>
  </span>
</button>
  );
};

export default Button;
