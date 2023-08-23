"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsDot } from "react-icons/bs";
import Slider from "react-slick";

// feature work slider
function SDiv() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed (time between slides)
  };
  const feature = [
    {
      src: "feature1.jpg",
      name: "Nutrition",
      h1: "Embedding Sustainable Pollination into Nepalese Agricultural Systems",
      h5: "",
      p: " Introduction Our project is based in Karnali Province, much of which comprises the threatened Western Himalayan Alpine Shrub and Meadows ecoregion. Karnali is the … ",
    },
    {
      src: "feature2.jpg",
      name: "Health System",
      p: "ReBUILD for Resilience (R4R) is a six-year Research Programme Consortium (RPC) funded by&nbsp;Foreign, Commonwealth & Development Office (FCDO) with multiple … ",
      h5: "Implementaiton Research",
      h1: "R4R(Rebuild For Resilence",
    },
    {
      src: "feature3.jpg",
      name: "Health System",
      p: " The growing numbers of urban poor around the world face several health challenges, including the double burden of diseases, exposure to environmental and human-made … ",
      h5: "Implementaiton Research",
      h1: "Community led Responsive",
    },
    {
      src: "feature4.png",
      name: "Antimicrobial Resistance (AMR)",
      p: " Antimicrobial resistance (AMR) is a major threat to global health, food sustainability and security, and socio-economic development. It is estimated that AMR infections … ",
      h5: "Community Engagement",
      h1: "Community Solution",
    },
    {
      src: "feature5.jpg",
      name: "Heal system,  MAternal And Child Health",
      p: " Anaemia is prevalent in pregnant and non-pregnant women in Nepal. The prevalence of anaemia is highest in the Terai as compared to other ecological regions. Mostly this … ",
      h5: "Randomized Controlled Trail",
      h1: "Virtual Antinental",
    },
  ];

  return (
    <div className="max-w-[1100px] mx-auto flex flex-col gap-4  p-6 md:px-0 ">
      <h2 className="text-[24px] lg:text-[40px] font-bold  uppercase text-[#0275c8]">
        Featured Work
      </h2>

      {/* slider  */}

      <Slider {...settings} className="flex ">
        {feature.map((f, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col md:flex-row  ">
                {/* img div  */}
                <div className="overflow-hidden w-full h-[335px]  md:w-[50%]">
                  <img
                    src={`Assets/${f.src}`}
                    alt={f.src}
                    className="w-full  h-full hover:scale-125 transition:scale duration-500 "
                  />
                </div>

                {/* paragaraph section   */}
                <div className="md:w-[50%] bg-[#e6f3fe] p-4 md:p-10 flex flex-col gap-4 transition:hover duration-500 ">
                  <div>
                    <section className="flex items-center gap-4 font-semibold cursor-pointer ">
                      <h6 className="text-[14px] text-[#f2864a] uppercase ">
                        {f.name}
                      </h6>
                      <span className="flex items-center text-[12px]  text-[#0275c8] px-2 py-1 border-[1px] border-[#0275c8] rounded-full">
                        <BsDot /> ongoing
                      </span>
                    </section>
                    <h1 className="text-[18px] md:text-[32px] md:leading-10 hover:text-[#0275c8]">
                      {f.h1}
                    </h1>
                  </div>
                  <div className="flex flex-col gap-2 text-[14px]">
                    <h5 className="font-semibold text-[#0275c8]">{f.h5}</h5>
                    <p className="">{f.p}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SDiv;
