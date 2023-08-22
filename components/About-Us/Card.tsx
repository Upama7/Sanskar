import React from "react";
import { BsFillCalendarDateFill, BsBagPlusFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { SiBoost } from "react-icons/si";

// about us card
function Card() {
  const card = [
    {
      src: <BsFillCalendarDateFill />,
      h3: "Financial Planning",
      p: "Sapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.",
    },
    {
      src: <BsBagPlusFill />,
      h3: "Wealth Management",
      p: "Sapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.",
    },
    {
      src: <MdGroups />,
      h3: "Finance Optimization",
      p: "Sapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.",
    },
    {
      src: <IoIosPeople />,
      h3: "Audit and Optimization",
      p: "Sapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.",
    },
    {
      src: <SiBoost />,
      h3: "Business Audit",
      p: "Sapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.",
    },
    {
      src: <GiPayMoney />,
      h3: "Optimal prices and quality",
      p: "Sapien odio wisi nibh tristique risus. Iaculis viverra, pulvinar faucibus mauris tortor bibendum eget.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[1100px] mx-auto  p-6 md:px-0">
        <div className="flex flex-wrap justify-center md:justify-normal  items-center gap-2 md:gap-10">
          {card.map((s, index) => (
            <div
              key={index}
              className="border-[2px] hover:border-[#ff2a68] w-[30%] p-4 flex flex-col items-center"
            >
              {s.src}
              <h3 className="text-[18px] font-bold leading-8">{s.h3}</h3>
              <p className="text-[14px] text-[#797979]">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
