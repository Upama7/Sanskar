import React from "react";
import Sevices from "./Sevices";

function SDiv() {
  return (
    <>
      <div className="max-w-[1100px] mx-auto flex flex-col gap-10 p-12 pb-0 md:px-0">
        <div className="flex flex-col gap-2">
          <h2 className="text-[40px] font-bold text-center ">WHY CHOOSE US</h2>
          <p className="text-center text-[14px] font-medium leading-5 opacity-60 px-4">
            Problems trying to reslove the conflict between the two major realms
            <br className="hidden md:flex" /> of Classical physics: Newtonian
            mechanics
          </p>
        </div>
        <Sevices />
      </div>
    </>
  );
}

export default SDiv;
