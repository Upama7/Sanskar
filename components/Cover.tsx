"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRightShort } from "react-icons/bs";

function Cover() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set the autoplay speed (time between slides)
  };
  return (
    <div className="bg-[#00A0C1] px-6 md:px-0">
      <div className="max-w-[1100px] mx-auto flex flex-col items-center  md:flex-row ">
        <div className="w-[80%] md:w-[50%] flex flex-col gap-4 items-start justify-center order-2 md:order-none p-2 md:p-0">
          <h1 className="text-white text-[24px] md:text-[32px] lg:text-[48px] font-bold leading-tight ">
            Generating Evidence, Improving Lives
          </h1>
          <button className="flex items-center gap-2 bg-orange-400 p-4 rounded-full group hover:text-white hover:shadow-lg">
            <BsArrowRightShort className="group-hover:text-white " />
            See our work
          </button>
        </div>

        <Slider {...settings} className="w-full h-full md:w-[50%] ">
          <div className=" h-full">
            <img className="object-cover" src="/Assets/slider.jpg" alt="" />
          </div>
          <div className=" h-full">
            <img className="object-cover" src="/Assets/slider.jpg" alt="" />
          </div>
          <div className=" h-full">
            <img className="object-cover" src="/Assets/slider.jpg" alt="" />
          </div>
          <div className=" h-full">
            <img className="object-cover" src="/Assets/slider.jpg" alt="" />
          </div>
          <div className=" h-full">
            <img className="object-cover" src="/Assets/slider.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Cover;
