import React from "react";
import Card from "./Card";

// practice advice
function TDiv() {
  return (
    <>
      <div className="max-w-[1100px] mx-auto text-center flex flex-col gap-10  p-16 md:px-0">
        <div className="flex flex-col gap-3">
          <h2 className="text-[40px] font-bold leading-[57px]">
            Practice Advice
          </h2>
          <p className="text-[14px] text-[#737373] font-medium leading-5 ">
            Problems trying to resolve the conflict between{" "}
            <br className="hidden md:flex" /> the two major realms of Classical
            physics: Newtonian mechanics
          </p>
        </div>
        <Card />
      </div>
    </>
  );
}

export default TDiv;
