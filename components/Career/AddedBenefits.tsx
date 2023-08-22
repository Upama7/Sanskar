import React from "react";
import { BsFillCircleFill } from "react-icons/bs";

const text = [
  "Competitive salary package based on qualifications and experience.",
  "Performance-based bonuses and incentives.",
  "Health insurance coverage for employees. Retirement savings plan or provident fund.",
  "Paid time off and vacation leave.",
  "Employee discounts on company products or services. ",
  "Training and development opportunities for career growth.",
  "Employee recognition programs. ",
  "Opportunities for advancement within the company.",
];

const AddedBenefits = () => {
  return (
    <div className="p-6 md:px-10 ">
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

export default AddedBenefits;
