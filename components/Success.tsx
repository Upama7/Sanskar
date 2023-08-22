import React from "react";
import { TbSignature } from "react-icons/tb";

function Success() {
  return (
    <div className="max-w-[1100px] mx-auto  py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-16">
        {/* video  */}
        {/* web video  */}
        <div className="relative flex-1">
          <img
            className="hidden md:block"
            src="../Assets/media bg-cover.png"
            alt="bg-cover"
          />

          {/* mob video  */}
          <img
            className="md:hidden"
            src="../Assets/media bg-cover (1).png"
            alt="bg-cover"
          />

          {/* play button  */}

          {/* button which increase and disappear  */}
          <img
            className="absolute top-[40%] left-[40%] buttonup"
            src="../Assets/button.button.btn.primary-color.btn-circle.btn-lg.png"
            alt="play button"
          />

          {/* static button  */}
          <img
            className="absolute top-[40%] left-[40%] z-10"
            src="../Assets/button.button.btn.primary-color.btn-circle.btn-lg.png"
            alt="play button"
          />
        </div>

        {/*  side div  */}
        {/* text div  */}
        <div className="flex flex-col gap-4 flex-1 px-6 md:px-0">
          <h3 className="text-[24px] font-bold leading-8">
            We work with the most successful companies.
          </h3>

          <div className="bg-[#00A0C1]  w-[40px] h-[5px]"></div>

          <h5 className="text-[16px] font-semibold leading-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut autem
            eaque eius recusandae odio ipsum perferendis repudiandae architecto.
          </h5>
          <p className="text-[14px] text-[#737373] font-medium leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            facilis laboriosam, debitis delectus molestiae nam, provident
            quisquam aliquam accusamus, iure temporibus adipisci fuga omnis cum.
            Quis accusamus rem ex sed!
          </p>
          <TbSignature size="50px" />
        </div>
      </div>
    </div>
  );
}

export default Success;
