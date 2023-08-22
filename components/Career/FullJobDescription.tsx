import React from "react";
import { BsFillCircleFill } from "react-icons/bs";

const FullJobDescription = () => {
  const text = [
    "Bachelor's degree in Business Administration, Retail Management, or a related field.",
    "Proven experience in a leadership role, preferably as a Branch Incharge or in a similar position within the retail industry.",
    "Strong business acumen and understanding of retail operations, including sales, inventory management, and customer service.",
    "Excellent leadership and interpersonal skills with the ability to effectively manage and motivate a team.",
    "Sound knowledge of market trends, consumer behavior, and competitive landscape in the retail sector.",
    "Exceptional communication and negotiation skills to build relationships with customers, suppliers, and internal stakeholders.",
    "Ensure compliance with company policies, procedures, and regulatory requirements.",
    "Analytical mindset with the ability to interpret data, identify trends, and make data-driven decisions.",
    "Results-oriented mindset with a focus on achieving targets and driving business growth.",
    "Strong problem-solving skills and the ability to handle challenging situations with tact and professionalism.",
    "Proficiency in computer applications and familiarity with retail software and systems.",
  ];

  return (
    <div className="p-6 md:px-10">
      <h3 className="text-[14px] font-bold pb-4">Job Requirements:</h3>
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

export default FullJobDescription;
