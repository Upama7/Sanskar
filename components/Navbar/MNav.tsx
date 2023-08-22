import React, { useState } from "react";
import Link from "next/link";

import {
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BsFilterRight } from "react-icons/bs";

// mobile navbar

function MNav() {
  const [value, setValue] = useState(false);

  const handleClick = () => setValue(!value);

  return (
    <div className="md:hidden">
      <div
        className="md:hidden  text-[#737373] text-3xl cursor-pointer"
        onClick={handleClick}
      >
        <BsFilterRight />
      </div>
      {value && (
        <div className="fixed z-10  left-0 top-20 bg-white w-full h-[40vh] flex flex-col gap-4 px-6 md:px-0 ">
          <Link
            href="/"
            className="text-[18px] text-[#737373] font-semibold	leading-6 hover:text-[#2591b2] flex items-center"
          >
            Home
          </Link>

          {/* about-us  */}
          <div className="group">
            {/* navbar  */}
            <div className="text-[18px] text-[#737373] font-semibold	leading-6 hover:text-[#2591b2] flex items-center">
              About-Us
              <MdOutlineKeyboardArrowDown
                className="pr-2 group-hover:pr-2"
                size="25px"
              />
            </div>

            {/* sub navbar */}
            <div className="hidden group-hover:block">
              <div className="absolute z-10 mt-0 bg-white rounded-md shadow-lg md:w-[200px]">
                <div className="p-4 ">
                  <ul className="flex flex-col gap-2 text-[14px]">
                    <Link href="/about-us" className="border-b-[1px]">
                      Company Profile
                    </Link>
                    <Link href="/about-us" className="border-b-[1px]">
                      Message from Chairman
                    </Link>
                    <Link href="/about-us" className="border-b-[1px]">
                      Message from Managing Director
                    </Link>
                    <Link href="/about-us" className="border-b-[1px]">
                      Message from Business Development Director
                    </Link>
                    <Link href="/about-us" className="border-b-[1px]">
                      Message from Executive Director
                    </Link>
                    <Link href="/about-us">License & Certificate</Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* service navbar  */}
          <div className="group">
            <div className="text-[18px] text-[#737373] font-semibold	leading-6 hover:text-[#2591b2] flex items-center">
              Service
              <MdOutlineKeyboardArrowDown
                className="pr-2 group-hover:pr-2"
                size="25px"
              />
            </div>
            <div className="hidden group-hover:block">
              <div className="absolute z-10 mt-0 bg-white rounded-md shadow-lg md:w-[200px]">
                <div className="p-4 ">
                  <ul className="flex flex-col gap-2 text-[14px]">
                    <Link href="/read" className="border-b-[1px]">
                      Overseas Recruitment
                    </Link>
                    <Link href="/read" className="border-b-[1px]">
                      Training & Orientation
                    </Link>
                    <Link href="/read" className="border-b-[1px]">
                      Travel Management
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/news"
            className="text-[18px] text-[#737373] font-semibold	leading-6 hover:text-[#2591b2] flex items-center"
          >
            News
          </Link>
          <Link
            href="/contact-us"
            className="text-[18px] text-[#737373] font-semibold	leading-6 hover:text-[#2591b2] flex items-center"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

export default MNav;
