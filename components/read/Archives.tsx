import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const recent = [
  {
    name: "June 2018",
  },
  {
    name: "January 2018",
  },
  {
    name: "December 2017",
  },
];

function Archives() {
  return (
    <div className="bg-white shadow-md flex flex-col gap-5 py-10">
      <div className="px-10">
        <h2 className="text-[20px] font-bold leading-10">Archives</h2>
        <div className="w-[30px] h-[4px] bg-[#ff2a68] "></div>
      </div>

      {recent.map((s, index) => (
        <div className="flex px-6">
          <div>
            <MdKeyboardArrowRight color="#ff2a68" size="18px" />
          </div>
          <Link
            href=""
            className="text-[14px] font-semibold hover:text-[#ff2a68]"
          >
            {s.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Archives;
