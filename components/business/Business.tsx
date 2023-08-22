import React from "react";

// we are providing best business service
function Business() {
  return (
    <div className=" bg-white ">
      <div className="container mx-auto flex flex-col  gap-20 py-20 p-6 md:px-0">
        {/* header and paragraph */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[40px] text-center font-bold leading-[57px]">
            We are providing best <br className="hidden md:flex" /> business
            service.
          </h2>
          <p className="text-center text-[14px] font-medium leading-5 text-[#737373] px-8">
            Problems trying to resolve the conflict between the two major realms
            <br className="hidden md:flex" /> of Classical physics: Mewtonian
            mechanics
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-16">
          {/* video  */}
          {/* web video  */}
          <div className="relative ">
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
          <div className="flex flex-col gap-16 justify-end">
            <div className="flex flex-col gap-4">
              <h2 className="text-[40px] font-bold leading-[57px]">
                Most trusted in <br /> our field
              </h2>
              <p className="text-[14px] text-[#737373] font-medium leading-5">
                Most calendars are designed for teams. Slate <br /> is designed
                for freelancers who want a <br /> simple way to plan their
                schedule.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* side image and text  */}
              <div className="flex  items-start gap-6">
                <img src="../Assets/Vector.png" alt="vector" />
                <div>
                  <h5 className="text-[16px] font-bold leading-6">
                    the quick fox jumps over the lazy <br /> dog
                  </h5>
                  <h6 className="text-[14px] text-[#737373] font-semibold leading-6">
                    Things on a very small scale ...
                  </h6>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <img src="../Assets/Vector (1).png" alt="vector" />
                <div>
                  <h5 className="text-[16px]  font-bold leading-6">
                    the quick fox jumps over the lazy <br /> dog
                  </h5>
                  <h6 className="text-[14px] text-[#737373] font-semibold leading-6">
                    Things on a very small scale ...
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
