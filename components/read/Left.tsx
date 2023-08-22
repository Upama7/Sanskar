import React from "react";
import Card from "../read/Card";
import RFaq from "./RFaq";
import { LuQuote } from "react-icons/lu";

// read page left part
function Left() {
  return (
    <div className="basis-3/4">
      <div className="flex flex-col gap-6">
        <img
          className=""
          src="https://nelva.true-emotions.studio/wp-content/uploads/2018/06/s8.jpg"
          alt=""
        />
        <h3 className="text-[16px] font-bold leading-8">
          Already 15 years ago we have been providing comprehensive services
        </h3>

        <p className="text-[14px] text-[#797979]">
          Purus libero, nec ut enim suscipit vel sem tellus, mauris nec pulvinar
          nonummy nisl. Curabitur ac pede odio. Quisque leo. Ut tincidunt nunc
          aliquam, suspendisse aenean in volutpat. Sit rhoncus vestibulum, velit
          reprehenderit rutrum posuere felis libero eleifend, in phasellus
          dapibus in enim placerat, ipsum viverra cubilia posuere lectus duis
          ultricies, pede nunc vel per.
        </p>

        {/* notice  */}
        <div className="relative ">
          <p className="border-[2px] border-[#ff2a68] p-4 md:p-10 text-center text-[14px] ">
            Cididunt ut labordet dolore magna aliqua. Ut enim ad minim veniam
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irue dolor in reprehenderit in
            voluptate velit cillum dolore fugiat nulla pariatur.
          </p>
          <div className="bg-[#fafafa] w-[40px]  absolute top-[-20px] right-[50%]  ">
            <LuQuote size="40px" color="#ff2a68" className=" p-1" />
          </div>
        </div>

        <p className="text-[14px] text-[#797979]">
          Placerat, ipsum viverra cubilia posuere lectus duis ultricies, pede
          nunc vel per. Lobortis condimentum wisi est, leo rutrum id, posuere
          sit urna sollicitudin ac eleifend, a in amet nibh in volutpat quisque,
          eu lectus lacus.
        </p>

        <h3 className="text-[16px] font-bold leading-8">
          Finibus Bonorum et Malorum, written by Cicero
        </h3>

        <p className="text-[14px] text-[#797979]">
          Velit imperdiet in, aut vestibulum hendrerit tristique, felis sit
          velit quam vivamus viverra ut, sit arcu ac eu sollicitudin. Vestibulum
          eleifend conubia at sit, nullam ac gravida. Turpis dolor turpis. Justo
          neque aliquet autem congue vulputate luctus, risus vitae ligula sit
          nec facilisi orci, tincidunt erat suscipit. Nulla auctor vero, pede
          sed ridiculus et vitae.
        </p>

        <Card />

        <h3 className="text-[16px] font-bold leading-8">
          FAQ accumsan, porta ac integer donec orci risus
        </h3>

        <RFaq />
      </div>
    </div>
  );
}

export default Left;
