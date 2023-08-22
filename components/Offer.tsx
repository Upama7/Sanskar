import React from "react";
import { RiBookReadLine } from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import { CgToolbox } from "react-icons/cg";

// top div three card
function Offer() {
  const icons = [
    {
      icon: <CgToolbox />,
      label: "Digital Marketing",
      p: " We focus on ergonomics and meeting you where you work.",
    },
    {
      icon: <AiOutlineShop />,
      label: "National top 50 firms",
      p: "Just type what's on your mind and we'll get you there.",
    },
    {
      icon: <RiBookReadLine />,
      label: "Digital Marketing",
      p: "the quick fox jumps over the lazy dog",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row   md:justify-between items-center gap-8">
      {icons.map((item, index) => (
        <div
          key={index}
          className="w-[328px] h-[210px] bg-white  flex flex-col justify-center items-start gap-3 py-4 px-8 shadow-lg hover:bg-[#00A0C1]  hover:shadow-none group transition-all duration-1000"
        >
          <div className="text-[3rem] text-[#00A0C1] group-hover:text-white">
            {item.icon}
          </div>
          <h3 className="text-[24px] font-bold leading-8 group-hover:text-white">
            {item.label}
          </h3>
          <p className="text-[14px] font-medium leading-5 text-[#737373] pr-4 group-hover:text-white">
            {item.p}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Offer;
