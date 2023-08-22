import React from "react";
import Right from "./Right";
import Left from "./Left";

// read page
function ReadMore() {
  return (
    <div className="max-w-[1100px] mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-16 px-6 md:px-0">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default ReadMore;
