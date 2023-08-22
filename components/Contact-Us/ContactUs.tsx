import React from "react";

import Get from "./Get";
import Contact from "./Contact";

function ContactUs() {
  return (
    <div className="max-w-[1100px] mx-auto px-10 md:px-0">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-4 py-10">
        <Contact />
        <Get />
      </div>
    </div>
  );
}

export default ContactUs;
