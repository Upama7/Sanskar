import React from "react";
import Navbar from "./Navbar/Navbar";

function ImageDiv() {
  return (
    <div
      className="h-[358px] "
      style={{
        backgroundImage: `  url("https://nelva.true-emotions.studio/wp-content/uploads/2018/06/E3MKMD.jpg")`,
        backgroundSize: "cover",
        //ensures the image cover all space
        backgroundPosition: "center",
        //centers the background image horizontally and vertically with the div
        opacity: 0.5,
      }}
    >
      <Navbar />
      <h1>Finance Analytics </h1>
      <p>Home Analytics, Business, Research</p>
    </div>
  );
}

export default ImageDiv;
