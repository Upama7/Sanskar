import React from "react";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

function card() {
  const card = [
    {
      src: <MdOutlinePermPhoneMsg size="50px" color="#ff2a68" />,
      name: "Conclusion of a treaty",
      p: "Quick start cooperation with us. After signing the contract we will immediately begin to work.",
    },
    {
      src: <HiOutlineCurrencyDollar size="50px" color="#ff2a68" />,
      name: "Increase Your Sales",
      p: "You can easily assess the effectiveness of your work, saw an increase in sales and our reports.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between gap-14">
      {card.map((s, index) => (
        <div className="group">
          <div
            key={index}
            className="border-[2px]   flex flex-col gap-6 px-10 py-10 group-hover:border-[#ff2a68]"
          >
            {s.src}
            <h3 className="text-[18px] font-bold leading-8">{s.name}</h3>
            <p className="text-[14px] text-[#797979]">{s.p}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default card;
