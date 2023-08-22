import React from "react";

// subscribe banner
function Subscribe() {
  return (
    <div className="">
      <div className="max-w-[1100px] mx-auto bg-[#16697A] flex flex-col md:flex-row items-center justify-between py-8 px-8 rounded-sm  ">
        <div className="flex-1">
          <h3 className=" text-white text-[24px] font-bold leading-8 text-center md:text-left">
            Subscribe For Latest <br /> Newsletter
          </h3>
        </div>
        <div className="flex-1 bg-white rounded-md">
          <div className="flex justify-between items-center ">
            <input
              className=" text-[14px] font-normal leading-7 text-[#737373] rounded-l-md p-5 outline-none"
              id="subscribe"
              type="text"
              defaultValue="Your Email"
            />
            <label
              className="bg-[#FFA62B] text-white rounded-r-md text-[14px] font-normal leading-7 p-5 border-[1px] border-white text-center w-[117px]"
              htmlFor="subscribe"
            >
              Subscribe
            </label>
          </div>
        </div>
      </div>
      <div className="h-[77px] bg-[#252B42] hidden md:block"></div>
    </div>
  );
}

export default Subscribe;
