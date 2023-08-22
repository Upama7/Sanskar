"use client";

import React, { useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

const Modal1 = () => {
  const myDialog: any = useRef(null);

  useEffect(() => {
    if (myDialog) {
      myDialog?.current?.showModal();
    }
  }, []);

  return (
    <div>
      <dialog
        ref={myDialog}
        id="myDialog"
        className="outline-none shadow-lg bg-[white] md:px-[24px] px-[10px] py-[20px] rounded-[10px] "
      >
        <div className="flex md:justify-between items-center gap-[10px] ">
          <div className="flex gap-[10px]  items-center pl-[10px]">
            <h2 className="text-black font-medium md:text-[28px] text-[21px] leading-[20px]">
              Upama
            </h2>
          </div>

          <RxCross2
            size={16}
            className="text-[#8C8C8C] cursor-pointer "
            onClick={() => myDialog?.current.close()}
          />
        </div>
        <div className="w-full grid md:grid-cols-4 grid-cols-2 place-items-center">
          Upama Lama Mahendra Bhandari
        </div>
      </dialog>
    </div>
  );
};

export default Modal1;
