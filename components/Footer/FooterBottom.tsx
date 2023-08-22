import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";

function FooterBottom() {
  const social = [
    {
      name: <RiFacebookBoxFill />,
      color: "#335BF5",
    },
    {
      name: <FiInstagram />,
      color: "#E51F5A",
    },
    {
      name: <AiOutlineTwitter />,
      color: "#21A6DF",
    },
    {
      name: <GrYoutube />,
      color: "#E42F08",
    },
  ];

  return (
    <div className="max-w-[1100px] mx-auto  flex flex-col md:flex-row justify-start md:justify-between   py-6 gap-4 md:gap-0 p-16 md:px-0">
      <h6 className="text-[14px] text-[#737373] font-semibold leading-6">
        Made With Love By Figmaland <br className="md:hidden" /> All Right
        Reserved
      </h6>
      <div className="flex items-center justify-start gap-4">
        {/* {social.map((s, index) => (
          <div key={index} className={`text-[1rem] text-[${s.color}]`}>
            {s.name}
          </div>
        ))} */}
        <div className="text-[#335BF5]">
          <RiFacebookBoxFill color="" size="1rem" />
        </div>
        <FiInstagram color="#E51F5A" size="1rem" />
        <AiOutlineTwitter color="#21A6DF" size="1rem" />
        <GrYoutube color="#E42F08" size="1rem" />
      </div>
    </div>
  );
}

export default FooterBottom;
