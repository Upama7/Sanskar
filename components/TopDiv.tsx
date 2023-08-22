import React from "react";
import Navbar from "./Navbar/Navbar";
import Offer from "./Offer";

// top div of the page
function TopDiv() {
  return (
    <div className="container mx-auto  ">
      <div className=" flex flex-col gap-12  top-0 md:top-0 px-6 md:px-0">
        {/* navbar export from child component  */}
        <Navbar />
        <div className="flex flex-col gap-10 mt-24">
          <h1 className="text-[40px] leading-[57ppx] font-bold md:text-[58px] md:leading-[80px] md:font-extrabold text-center md:text-left">
            EMPOWER <br /> YOUR BUSINESS
          </h1>
          <h4 className="text-[20px] font-medium leading-[30px] text-[#737373] text-center md:text-left">
            We know how large objects will act,
            <br className="hidden md:flex" /> but things on a small scale.
          </h4>

          {/* button  */}
          <div className="flex flex-col items-center md:flex-row gap-5 text-[14px] font-bold leading-7">
            <button className="bg-[#FFA62B] text-white rounded-full  w-[185px] h-[48px]">
              Get Quote Now
            </button>
            <button className="text-[#00A0C1] border-[1px] border-[#00A0C1] rounded-full  w-[154px] h-[48px]">
              Learn More
            </button>
          </div>
        </div>
        <Offer />
      </div>
    </div>
  );
}

export default TopDiv;
