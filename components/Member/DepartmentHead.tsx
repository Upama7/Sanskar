import React from "react";

const DepartmentHead = () => {
  const member = [
    {
      src: "member",
      name: "Mr Sudeep Khadka",
      position: "Head-Finance",
    },
    {
      src: "member",
      name: "Mr Dayal Giri ",
      position: "Head Operation & Sales",
    },
    {
      src: "member",
      name: "Mr Mohan K.Basnet",
      position: "Head-Procurement",
    },
    {
      src: "member",
      name: "Mr Pramod Thapa",
      position: "Province Manager-Pokhare Region",
    },
    {
      src: "member",
      name: "Mr Gyan B. Ghale ",
      position: "Head-Adminstration & Logistic",
    },
    {
      src: "member",
      name: "Mr Bharat Adhikari",
      position: "Deputy Head-Operation & Sales",
    },
    {
      src: "member",
      name: "Mr Umesh Shreshtha ",
      position: "Head-IT & REP",
    },
    {
      src: "member",
      name: "Mr Maitri Tuladhar ",
      position: "Head-Inventory",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center gap-4 text-center ">
      {member.map(({ src, name, position }) => (
        <div key={name} className="w-[230px] h-[330px] ">
          <img
            className="border-[1px] rounded-md "
            src={`../Assets/${src}.jpg`}
            alt="member"
          />

          <h5 className="text-[14px] text-[#192638]">{name}</h5>
          <p className="text-[12px] text-[#717985]">{position}</p>
        </div>
      ))}
    </div>
  );
};

export default DepartmentHead;
