import React from "react";
import Image from "./Image";
import Subscribe from "./Subscribe";

// company subscribe banner
function Company() {
  return (
    <div className=" flex flex-col gap-20 relative">
      <Image />
      <Subscribe />
    </div>
  );
}

export default Company;
