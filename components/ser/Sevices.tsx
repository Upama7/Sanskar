import React from "react";

function Sevices() {
  const service = [
    {
      name: "CASES DONE",
      number: "3K",
      src: "icn settings .icn-lg",
    },
    {
      name: "HAPPY CUSTOMERS",
      number: "45",
      src: "icn settings .icn-lg (1)",
    },
    {
      name: "AWARD WINNING",
      number: "12+",
      src: "icn settings .icn-lg (2)",
    },
    {
      name: "CASES DONE",
      number: "1.5K",
      src: "icn settings .icn-lg (3)",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-7">
        {service.map(({ name, number, src }, index) => (
          <div
            key={index}
            className="bg-white w-[230px] h-[209px] flex flex-col justify-center items-center gap-2"
          >
            <img className="" src={`../Assets/${src}.png`} alt="people" />
            <h2 className="text-[40px] font-bold leading-[57px]">{number}</h2>
            <h5 className="text-[16px] text-[#737373] font-bold leading-6">
              {name}
            </h5>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sevices;
