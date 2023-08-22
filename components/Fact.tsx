"use client";

import React, { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// why many people loves salesberyy
function Fact() {
  const [value, setValue] = useState(0);

  const fact = [
    {
      h3: "Affordable Prices",
      src: <BsFillCircleFill color="#00b051" size="50px" />,
      p: "Salesberry offers a vast selection of products across various categories, allowing shoppers to find almost everything they need in one place.",
    },
    {
      h3: "Convenience",
      src: <BsFillCircleFill color="#7b50ce" size="50px" />,
      p: "With numerous store locations and extended operating hours, Salesberry provides convenience and accessibility to customers.",
    },
    {
      h3: "Wide Product Selection ",
      src: <BsFillCircleFill color="#00b051" size="50px" />,
      p: "Salesberry offers a vast selection of products across various categories, allowing shoppers to find almost everything they need in one place.",
    },
    {
      h3: "Affordable Prices",
      src: <BsFillCircleFill color="#7b50ce" size="50px" />,
      p: "Salesberry offers a vast selection of products across various categories, allowing shoppers to find almost everything they need in one place.",
    },
    {
      h3: "Convenience",
      src: <BsFillCircleFill color="#00b051" size="50px" />,
      p: "With numerous store locations and extended operating hours, Salesberry provides convenience and accessibility to customers.",
    },
    {
      h3: "Wide Product Selection ",
      src: <BsFillCircleFill color="#7b50ce" size="50px" />,
      p: "Salesberry offers a vast selection of products across various categories, allowing shoppers to find almost everything they need in one place.",
    },
  ];

  // react slick
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" bg-[#f4f6fa] py-8">
      <div className="container mx-auto  p-6 md:p-0">
        <h6 className="text-[#a7b2c3] text-center md:text-left pb-2">Fact</h6>
        <div className=" flex flex-col md:flex-row md:justify-between">
          <div className="basis-[30%]">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h2 className="text-[25px] md:text-[40px]  font-bold leading-none text-center md:text-left">
                Why Many People ❤️️
                <span className="text-[#00b051]">Salesberry</span>
              </h2>
            </div>
          </div>

          <div className="max-w-[800px] ">
            <Slider {...settings}>
              {fact.map((s, index) => (
                <div key={index} className="flex-1">
                  <div className=" flex flex-col md:flex-row md:items-start  items-center  md:text-left">
                    <div className="basis-1/6 ">{s.src}</div>
                    <div className=" basis-3/4 text-center md:text-left">
                      <h3 className="text-[20 px] font-bold leading-8">
                        {s.h3}
                      </h3>
                      <p className="text-[14px] text-[#737373] font-medium leading-5">
                        {s.p}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fact;
