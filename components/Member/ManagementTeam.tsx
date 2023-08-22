import React from "react";

const ManagementTeam = () => {
  const member = [
    {
      src: "member",
      name: "Mr.Shushil Man Pradhananga ",
      position: "CEO",
    },
    {
      src: "member",
      name: "Mrs. Srijana Shrestha ",
      position: "Director",
    },
    {
      src: "member",
      name: "Mr Deepak Shrestha ",
      position: "Managment Consultant",
    },
    {
      src: "member",
      name: "Mr Sunil Shankar Shrestha ",
      position: "General Manager",
    },
    {
      src: "member",
      name: "Mr Chet Narayan Poudyal ",
      position: "Advisor-Operation & Inventory Management ",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center gap-4 text-center">
      {member.map(({ src, name, position }, index) => (
        <div key={index} className="w-[230px] h-[330px] ">
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

export default ManagementTeam;
