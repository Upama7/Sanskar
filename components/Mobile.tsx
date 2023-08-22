import React from "react";
import TopDiv from "./TopDiv";

function Mobile() {
  return (
    <div
      className="md:hidden"
      style={{ backgroundImage: "url(/cover.png)", backgroundSize: "cover" }}
    >
      <div className="flex  flex-col gap-10 ">
        <TopDiv />
      </div>
    </div>
  );
}

export default Mobile;
