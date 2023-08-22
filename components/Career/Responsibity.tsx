import React from "react";
import { BsFillCircleFill } from "react-icons/bs";

const Respponsibity = () => {
  const text = [
    "Manage and oversee the overall operations of the branch, ensuring smooth functioning and achieving performance targets.",
    "Develop and implement strategies to drive sales growth, customer satisfaction, and profitability.",
    "Lead and supervise a team of branch staff, providing guidance, support, and training as necessary.",
    "Monitor and analyze sales figures, market trends, and competition to identify opportunities and recommend appropriate actions.",
    "Maintain effective inventory management, ensuring optimal stock levels, proper merchandising, and efficient replenishment processes.",
    "Build and maintain strong relationships with customers, addressing their concerns and providing exceptional service.",
    "Ensure compliance with company policies, procedures, and regulatory requirements.",
    "Prepare and present regular reports on branch performance, including sales, expenses, and key metrics.",
    "Identify areas for improvement and implement initiatives to enhance operational efficiency and customer experience.",
    "Collaborate with other departments and senior management to align branch objectives with overall company goals.",
  ];
  return (
    <div className="p-6 md:px-10">
      <h3 className="text-[14px] font-bold pb-4">Job Responsibities:</h3>
      <ul className="text-[12px]">
        {text.map((t, index) => (
          <div key={index} className="flex items-center gap-2">
            <BsFillCircleFill size="4px" />
            <li>{t} </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Respponsibity;
