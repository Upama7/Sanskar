"use client";

import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

// read page faq
function RFaq() {
  const faq = [
    {
      h3: "Magna commondo eligendi, elit orci various quisque vel dapibus ligula diam vehicula?",
      p: "Nulla quisque mauris nibh ultrices, tortor ut ullamcorper, purus volutpat imperdiet quam et nec nullam, fringilla vitae parturient aptent, lorem maecenas vivamus vehicula. In sed aenean nec consequat tortor ullamcorper, lobortis orci mi, dictum ultrices nam sed, ut netus maecenas sit nec integer, dictum tellus sapien dolor mi gravida vestibulum. Morbi accumsan vel.",
    },
    {
      h3: "Et adiiscing id, duis leo luctus, iaculis eu urna congue ante amet proin?",
      p: "Non lacinia eros tincidunt minus diam fermentum, donec ut, sit sed eget. Senectus mi velit non id duis arcu. Cras luctus nec wisi, at mi dui, volutpat quisque vulputate a. Et adipiscing id, duis leo luctus, iaculis eu. Urna congue ante amet proin a. Habitasse vitae ut vestibulum ante eleifend, tellus nunc non magna. Massa imperdiet turpis, nascetur posuere sit sem quam diam sed. Lorem lorem id vivamus, in ornare diam velit lacus at aenean, nulla laoreet laoreet metus turpis nibh. Suspendisse commodo elit auctor, mauris cursus sit urna vel. A lobortis praesent, sit aliquet neque donec, leo nunc nisl maecenas, id curabitur consequat metus, id sapien blandit.",
    },
    {
      h3: "Massa imperdiet turpis, nascetur posuere sit sem quam diam sed?",
      p: "Nibh mauris libero wisi integer sit potenti. Aliquam in tempus suscipit dolor ut, vitae quas, mauris erat a arcu quisque turpis. Etiam et suspendisse sed perspiciatis vestibulum. Condimentum nunc, volutpat libero, non ullamcorper penatibus blandit consectetuer pellentesque, aliquet accumsan wisi a nibh at cras, eu ac morbi quis urna. Metus diam est nec, et eget nullam libero quam.",
    },
  ];

  const [drop, setDrop] = useState(0);

  return (
    <div className="bg-[#f1efef] rounded-md overflow-hidden">
      {faq.map((s, index) => (
        <div key={index} onClick={() => setDrop(index)}>
          <div
            className={`flex items-center gap-2 cursor-pointer px-6 py-2  ${
              drop === index
                ? "bg-[#ff2a68] text-white"
                : "border-[1px] hover:bg-gray-300"
            }`}
          >
            {drop === index ? (
              <div>
                <HiMinus />
              </div>
            ) : (
              <div>
                <HiPlus />
              </div>
            )}

            <h3 className="text-[14px] font-bold md:leading-8">{s.h3}</h3>
          </div>
          {index === drop && (
            <p className="text-[14px] text-[#797979] leading-6 p-6">{s.p}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default RFaq;
