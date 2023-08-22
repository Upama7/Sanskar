"use client";

import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// frequently asked question
function FAQ() {
  const faq = [
    {
      name: "Do You Need A Business Service?",
      p: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ad animi obcaecati non nesciunt magni aliquid quasi dolor autem facereut, porro illum? Ad illum deserunt ducimus quae accusantium ut?",
    },
    {
      name: "Business Service A Scam?",
      p: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ad animi obcaecati non nesciunt magni aliquid quasi dolor autem facereut, porro illum? Ad illum deserunt ducimus quae accusantium ut?",
    },
    {
      name: "Most Out Of Your Business Service?",
      p: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ad animi obcaecati non nesciunt magni aliquid quasi dolor autem facereut, porro illum? Ad illum deserunt ducimus quae accusantium ut?",
    },
    {
      name: "The Sound Of Business Service?",
      p: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ad animi obcaecati non nesciunt magni aliquid quasi dolor autem facereut, porro illum? Ad illum deserunt ducimus quae accusantium ut?",
    },
    {
      name: "Business Service A Plan?",
      p: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ad animi obcaecati non nesciunt magni aliquid quasi dolor autem facereut, porro illum? Ad illum deserunt ducimus quae accusantium ut?",
    },
  ];

  const [show, setShow] = useState(0);

  return (
    <div className=" bg-[#F3F3F3] ">
      <div className="max-w-[1100px] mx-auto  flex flex-col gap-20 pb-20 px-6 md:px-0 ">
        {/* header and paragraph  */}
        <div className="text-center">
          <h2 className="md:text-[40px] text-[21px] font-semibold leading-[57px]">
            Frequently Asked Questions
          </h2>

          <p className="text-[#737373] text-[14px] font-medium  leading-5 md:px-20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, ad
            animi obcaecati non nesciunt magni aliquid quasi dolor autem facere
            ut, porro illum? Ad illum deserunt ducimus quae accusantium ut?
          </p>
        </div>

        {/* toogle div about faq  */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 ">
            <img src="../Assets/faq.jpg" alt="" />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            {faq.map(({ name, p }, index) => (
              <div
                key={index}
                onClick={() => setShow(index)}
                className="cursor-pointer bg-white shadow-md "
              >
                <div
                  className={`${
                    show === index ? "bg-[#14b1bb] text-white " : "  "
                  } flex  justify-between items-center hover:bg-[#14b1bb] hover:text-white`}
                >
                  <h3 className="p-4 text-[15px] md:text-[18px] font-bold leading-8">
                    {name}
                  </h3>
                  <div className="pr-2 hidden md:block">
                    {show === index ? (
                      <MdKeyboardArrowUp className="" />
                    ) : (
                      <MdOutlineKeyboardArrowDown className="" />
                    )}
                  </div>
                </div>

                <div
                  className={`duration-500 ${
                    show === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-10"
                  }`}
                >
                  {show === index && (
                    <p className="text-[#737373] text-[16px] font-medium leading-6 p-4 ">
                      {p}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
