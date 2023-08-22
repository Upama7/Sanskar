"use client";

import React from "react";
import { TbHeartRateMonitor, TbHeadset } from "react-icons/tb";
import { FaPeopleCarry, FaNetworkWired } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import Link from "next/link";

// down our services
function Slider() {
  const slide = [
    {
      icon: <TbHeartRateMonitor />,
      text: "CLEAN DESIGN",
      p: "Lorem ipsum dolor sit amet, elit, a sed diam nonummy nibh tincidunt consectetuer adipiscing . ",
      src: "",
      path: "/read",
    },
    {
      icon: <HiOutlineUserGroup />,
      text: "CREATIVE IDEA",
      p: "Lorem ipsum dolor sit amet, elit, a sed diam nonummy nibh tincidunt consectetuer adipiscing . ",
      path: "/read",
    },
    {
      icon: <FaPeopleCarry />,
      text: "COMMUNICATION",
      p: "Lorem ipsum dolor sit amet, elit, a sed diam nonummy nibh tincidunt consectetuer adipiscing . ",
      src: "",
      path: "/read",
    },
    {
      icon: <AiOutlineVideoCameraAdd />,
      text: "PHOTOGRAPHY",
      p: "Lorem ipsum dolor sit amet, elit, a sed diam nonummy nibh tincidunt consectetuer adipiscing . ",
      path: "/read",
    },
    {
      icon: <FaNetworkWired />,
      text: "ONLINE MARKETING",
      p: "Lorem ipsum dolor sit amet, elit, a sed diam nonummy nibh tincidunt consectetuer adipiscing . ",
      src: "",
      path: "/read",
    },
    {
      icon: <TbHeadset />,
      text: "UNLIMITED SUPPORT",
      p: "Lorem ipsum dolor sit amet, elit, a sed diam nonummy nibh tincidunt consectetuer adipiscing . ",
      path: "/read",
    },
  ];

  return (
    <div className="max-w-[1100px] mx-auto px-6 md:px-0 md:py-20">
      <div className="flex flex-col gap-10 ">
        <h2 className="text-[21px] md:text-[40px]  font-semibold leading-[57px] text-center ">
          Our Services
        </h2>

        <div className="flex flex-wrap justify-center items-center  gap-4 ">
          {slide.map((s, index) => (
            <div key={index} className="relative group ">
              <div className="flex flex-col  justify-center gap-5 w-[350px] h-[380px] bg-white  px-6 shadow-sm   ">
                <div className="text-[3rem] text-[#14b1bb] group-hover:text-white z-10">
                  {s.icon}
                </div>
                <h5 className="text-[19px]  font-semibold leading-6 group-hover:text-white z-10">
                  {s.text}
                </h5>
                <p className="text-[#737373] group-hover:text-white z-10">
                  {s.p}
                </p>

                <Link
                  href={s.path}
                  className=" z-10 flex gap-1 items-center justify-center border-[1px] rounded-full h-[50px] w-[175px] text-[16px] bg-white text-black hover:bg-[#0f7a81]  hover:text-[#fff]"
                >
                  Read More <AiOutlineArrowRight />
                </Link>
              </div>
              <div className="absolute w-[5px] group-hover:w-full transition-width duration-500 ease-in-out top-0 h-[380px]  bg-[#14b1bb] z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
