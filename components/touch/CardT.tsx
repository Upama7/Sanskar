"use client";

import React, { useState } from "react";
import { BiPhone, BiMap } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

// get in touch card
function CardT() {
  const [value, setValue] = useState(1);

  const icons = [
    {
      icon: <BiPhone />,
    },
    {
      icon: <BiMap />,
    },
    {
      icon: <FiSend />,
    },
  ];

  return (
    <div className=" flex flex-col md:flex-row justify-center items-center md:h-[393px] gap-6 md:gap-0">
      {icons.map((item, index) => (
        <div
          key={index}
          onClick={() => setValue(index)}
          className={` flex flex-col justify-center items-center  gap-4  ${
            value === index
              ? "w-[328px] h-[393px]  bg-[#252B42] text-white"
              : "w-[328px] h-[333px] bg-white group"
          }`}
        >
          <div
            className={` ${
              value === index
                ? "text-white text-[70px]"
                : "text-[#00A0C1] text-[70px]"
            }`}
          >
            {item.icon}
          </div>
          <div className="">
            <h6 className="text-[14px] font-semibold leading-6">
              georgia.young@example.com
            </h6>
            <h6 className="text-[14px] font-semibold leading-6">
              georgia.young@ple.com
            </h6>
          </div>
          <h5 className="text-[16px] font-bold leading-6 group:text-white">
            Get Support
          </h5>
          <button
            className={`border-[1px] text-[14px] font-semibold leading-6 rounded-md px-6 py-2 ${
              value === index
                ? "border-white text-white"
                : "border-[#FFA62B] text-[#FFA62B]"
            }`}
          >
            Submit Request
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardT;
