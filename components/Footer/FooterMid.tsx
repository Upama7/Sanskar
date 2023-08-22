import React from "react";
import Link from "next/link";
import { BiPhone, BiMap } from "react-icons/bi";
import { FiSend } from "react-icons/fi";

const footer = [
  {
    h1: "Company Info",
    f: "About Us",
    s: "Carrier",
    t: "We are hiring",
    l: "Blog",
  },
  {
    h1: "Legal",
    f: "About Us",
    s: "Carrier",
    t: "We are hiring",
    l: "Blog",
  },
  {
    h1: "Features",
    f: "Business Marketing",
    s: "User Analytic",
    t: "Live Chat",
    l: "Unlimited Support",
  },
  {
    h1: "Resources",
    f: "IOS & Android",
    s: "Watch a Demo",
    t: "Customers",
    l: "API",
  },
];

function FooterMid() {
  return (
    <div className="bg-[#16697A] text-white  p-16  md:px-0">
      {/* company legal features resources div  */}
      <div className="max-w-[1100px] mx-auto  flex flex-col md:flex-row md:justify-between leading-6 gap-8">
        {footer.map(({ h1, f, s, t, l }, index) => (
          <div key={index} className="flex flex-col items-start gap-3 md:gap-5">
            <h5 className="text-[16px] font-bold leading-6">{h1}</h5>
            <Link className="text-[14px] font-semibold " href="">
              {f}
            </Link>
            <Link className="text-[14px] font-semibold " href="">
              {s}
            </Link>
            <Link className="text-[14px] font-semibold " href="">
              {t}
            </Link>
            <Link className="text-[14px] font-semibold " href="">
              {l}
            </Link>
          </div>
        ))}

        {/* get in touch  */}
        <div className="flex flex-col gap-3 md:gap-5">
          <h5 className="text-[16px] font-bold leading-6">Get In Touch</h5>
          <div className="flex items-center gap-2">
            <BiPhone color="#8EC2F2" size="1.5rem" />
            <h6 className="text-[14px] font-semibold  ">(480) 555-0103</h6>
          </div>
          <div className="flex items-center gap-2">
            <BiMap color="#8EC2F2" size="1.5rem" />
            <h6 className="text-[14px] font-semibold  ">457 Washington Ave.</h6>
          </div>
          <div className="flex items-center gap-2">
            <FiSend color="#8EC2F2" size="1.5rem" />
            <h6 className="text-[14px] font-semibold  ">
              debra.holt@example.com
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterMid;
