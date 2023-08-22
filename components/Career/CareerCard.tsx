"use client";

import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import Modal2 from "./Modal2";

const CareerCard = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div
        onClick={() => setShow(true)}
        className="flex  cursor-pointer items-center gap-1 "
      >
        <h6 className="text-[#16697a] ">View Job</h6>
        <BsArrowRight />
      </div>
      <Modal2 isVisible={show} onClose={() => setShow(false)} />
    </div>
  );
};

export default CareerCard;
