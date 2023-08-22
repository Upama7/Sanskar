import React from "react";
import FooterTop from "./FooterTop";
import FooterMid from "./FooterMid";
import FooterBottom from "./FooterBottom";

// footer which include all component of footer childern
function Footer() {
  return (
    <div className="">
      <FooterTop />
      <FooterMid />
      <FooterBottom />
    </div>
  );
}

export default Footer;
