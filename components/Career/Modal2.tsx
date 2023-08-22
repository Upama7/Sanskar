"use client";

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import AddedBenefits from "./AddedBenefits";
import Respponsibity from "./Responsibity";
import Qualifications from "./Qualifications";
import FullJobDescription from "./FullJobDescription";

const branch = [
  "Added Benefits",
  "Responsibility",
  "Qualifications",
  "Full Job Description",
];

const Modal2 = ({ isVisible, onClose }: any) => {
  if (!isVisible) return null;

  // to prevent the modal to be closed within the modal
  const handleClose = (e: any) => {
    if (e.target.id === "wrapper") onClose();
  };

  // show respective div information
  const [activeTab, setActiveTab] = useState("Added Benefits");

  return (
    <div
      className="fixed top-16 bg-black bg-opacity-0  flex justify-center items-center border-[1px]"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[90%] md:w-[600px] mx-auto">
        <div className="bg-[#eff7f0] rounded overflow-hidden">
          {/* above section  */}
          <div className="flex justify-between items-center p-6 md:p-10">
            <div>
              <h1 className="text-[18px] font-bold">Branch Incharge</h1>
              <h2 className="text-[12px]">Full-Time</h2>
            </div>
            <RxCross2
              size={16}
              className="text-[#8C8C8C] cursor-pointer"
              onClick={() => onClose()}
            />
          </div>

          {/* slider  */}
          <div className="bg-white">
            <div className="px-6 md:px-10 pt-6 md:pt-10">
              <div className="flex flex-wrap gap-4">
                {branch.map((b, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveTab(b)}
                    className={`text-[12px] cursor-pointer ${
                      activeTab === b ? "font-bold" : ""
                    }`}
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Render the content of the active tab */}
            <div>
              {activeTab === "Added Benefits" && <AddedBenefits />}
              {activeTab === "Responsibility" && <Respponsibity />}
              {activeTab === "Qualifications" && <Qualifications />}
              {activeTab === "Full Job Description" && <FullJobDescription />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
