import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { AiFillPrinter } from "react-icons/ai";
import { SiGooglestreetview } from "react-icons/si";

function Contact() {
  const contact = [
    {
      name: "Telephone",
      src: <IoMdCall size="40px" />,
      p: "+977-1-4112456",
      color: "#ffa62b",
    },
    {
      name: "Fax",
      src: <AiFillPrinter size="40px" />,
      p: "+977-1-4112457",
      color: "#36b5cf",
    },
    {
      name: "Email",
      src: <IoMail size="40px" />,
      p: "info@mahadmanpower.com.np",
      color: "#36b5cf",
    },
    {
      name: "Address",
      src: <SiGooglestreetview size="40px" />,
      p: "Tinkune, Kathmandu, Nepal",
      color: "#ffa62b",
    },
  ];

  return (
    <div className="flex-1">
      <h3 className="text-[24px] font-bold leading-8">Contact Us</h3>
      <div className="flex flex-wrap justify-center md:justify-normal gap-10">
        {contact.map((s, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h4>{s.name}</h4>
            <div
              className="border-[1px] flex flex-col items-center gap-2 w-[240px] py-4"
              style={{ backgroundColor: s.color }}
            >
              {s.src}
              <p className="text-[14px]">{s.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
