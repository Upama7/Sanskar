import React from "react";

// top div of the footer
function FooterTop() {
  return (
    <div className=" bg-[#fafafa]  px-16 md:px-0 py-8">
      <div className="max-w-[1100px] mx-auto  flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-[24px] font-bold leading-8">
            Consulting Agenct For Your Business
          </h3>
          <p className="text-[#737373] text-[14px] font-bold leading-5">
            the quick fox jumps over the lazy dog
          </p>
        </div>
        <button className="text-[14px] text-white font-medium leading-7	bg-[#FFA62B] py-4  rounded-md w-[160px]">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default FooterTop;
