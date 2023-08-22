"use client";

import React, { useState } from "react";
import BoardofDirectors from "./BoardofDirectors";
import ManagementTeam from "./ManagementTeam";
import DepartmentHead from "./DepartmentHead";
import { RiShieldFlashLine } from "react-icons/ri";

const Member = () => {
  const [activeTab, setActiveTab] = useState("boardOfDirectors");

  const handleTabChange = (tabName: any) => {
    setActiveTab(tabName);
  };

  return (
    <div className="max-w-[1100px] mx-auto ">
      <div className="flex flex-col justify-center items-center gap-4 py-4">
        <RiShieldFlashLine color="#0e9e49" size="50px" />
        <h3 className="text-[24px] font-bold leading-8">Our Team</h3>
      </div>

      <div
        className={` text-[14px] text-[#46b473] flex flex-wrap justify-center md:justify-start items-center gap-4 py-4 `}
      >
        <div
          onClick={() => handleTabChange("boardOfDirectors")}
          className={` ${
            activeTab === "boardOfDirectors"
              ? "text-black border-[1px] border-gray-200"
              : ""
          } cursor-pointer border-[1px] border-transparent hover:border-[1px] hover:border-gray-200 p-2`}
        >
          Board Of Directors
        </div>
        <div
          onClick={() => handleTabChange("managementTeam")}
          className={` ${
            activeTab === "managementTeam"
              ? "text-black border-[1px] border-gray-200"
              : ""
          } cursor-pointer border-[1px] border-transparent hover:border-[1px] hover:border-gray-200 p-2`}
        >
          Management Team
        </div>
        <div
          onClick={() => handleTabChange("departmentHeads")}
          className={` ${
            activeTab === "departmentHeads"
              ? "text-black border-[1px] border-gray-200"
              : ""
          } cursor-pointer border-[1px] border-transparent hover:border-[1px] hover:border-gray-200 p-2`}
        >
          Department Heads
        </div>
      </div>

      {activeTab === "boardOfDirectors" && <BoardofDirectors />}
      {activeTab === "managementTeam" && <ManagementTeam />}
      {activeTab === "departmentHeads" && <DepartmentHead />}
    </div>
  );
};

export default Member;
