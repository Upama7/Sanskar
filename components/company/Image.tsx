"use client";

import React from "react";
import {
  FaHooli,
  FaLyft,
  FaPiedPiperHat,
  FaStripe,
  FaAws,
  FaRedditAlien,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// image for company sectionn
function Image() {
  const image = [
    <FaHooli />,
    <FaLyft />,
    <FaPiedPiperHat />,
    <FaStripe />,
    <FaAws />,
    <FaRedditAlien />,
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 10000,
          autoplaySpeed: 10000,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 10000,
          autoplaySpeed: 10000,
        },
      },
    ],
  };
  return (
    <div className="flex justify-center ">
      <div className="max-w-[500px] md:max-w-[1100px] mx-auto text-5xl text-[#737373] py-4 ">
        <Slider {...settings} className=" flex items-center">
          {image.map((i, index) => (
            <div key={index}>{i}</div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Image;
