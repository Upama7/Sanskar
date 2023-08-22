import React from "react";
import CardT from "./CardT";

// main get in touch div
function Touch() {
  return (
    <div className="bg-[#F3F3F3] py-16">
      <div className="max-w-[1100px] mx-auto  flex flex-col justify-center  items-center gap-16 text-center pb-20">
        <div className="flex flex-col gap-3 px-12">
          <h2 className="text-[40px]  font-semibold leading-[57px]">
            Get In Touch
          </h2>
          <p className="text-[#737373] text-[14px] font-medium  leading-5">
            Problems trying to resolve the conflict between
            <br className="hidden md:block" /> the two major realms of Classical
            physics: Newtonian mechanics
          </p>
        </div>
        <CardT />
      </div>
    </div>
  );
}

export default Touch;
