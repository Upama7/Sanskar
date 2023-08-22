import React from "react";

function Get() {
  const get = ["Name", "Email", "Address", "Message"];

  return (
    <div className="flex-1">
      <form action="" className=" flex flex-col gap-8">
        <h3 className="text-[24px] font-bold leading-8">Get In Touch</h3>
        <div className="flex flex-col items-start gap-8">
          {get.map((s, index) => (
            <input
              type="text"
              placeholder={s}
              className="border-[1px] rounded-md p-2 w-full outline-none"
            />
          ))}
        </div>
      </form>
    </div>
  );
}

export default Get;
