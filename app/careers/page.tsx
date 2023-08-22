import CareerCard from "@/components/Career/CareerCard";

import React from "react";

const page = () => {
  return (
    <div className="bg-white p-4 py-16 md:px-0">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-14">
        <div>
          <h1 className="text-[32px] font-bold">Open Roles</h1>
        </div>
        <div className=" flex items-start">
          <div className=" flex flex-col md:flex-row md:items-center gap-4 md:gap-14 p-10 border-[1px] rounded-md shadow-md text-[12px]">
            <div className="flex flex-col gap-4 ">
              <h5 className="text-[16px]">Branch Incharge </h5>
              <h6 className="text-[#16697a]">Kathmandu, Nepal</h6>
            </div>

            <CareerCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
