import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";

const page = () => {
  const social = [
    <FaFacebook />,
    <AiOutlineTwitter />,
    <BsYoutube />,
    <IoLogoLinkedin />,
  ];

  return (
    <div className="bg-white py-10">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row  justify-between gap-12">
          {/* left div  */}
          <div className="basis-[70%] ">
            <div className="w-full flex flex-col gap-8">
              <div className="overflow-hidden">
                <img
                  className=" hover:scale-125 transition-scale duration-500"
                  src="https://www.chaudharygroup.com/storage/NewsPost/7T5O7BXJqMzFKsAuZImEPvGUDkjiRyQh1VjH8giL.webp"
                  alt="image"
                />
              </div>

              <h2 className="text-[20px] md:text-[32px] font-bold md:w-[90%] text-center md:text-left">
                WKND Conversation: Meet Binod Chaudhary, Nepal's first and only
                billionaire
              </h2>
              <hr />
              <p className="text-[14px] text-[#666666] leading-7 ">
                Nepali entrepreneur Binod Chaudhary, on building an empire
                tapping on gastronomical cravings and why Taj JLT is a
                culmination of a life-long dream Dr Binod Chaudhary, 65, is
                Nepal biggest export to the world after Mount Everest.
                Chaudhary, whose net worth is estimated at $1.6 billion
                (Dh5.88b), is the picturesque yet impoverished Himalayan nation
                first and only billionaire and has accumulated his wealth over
                the past four decades. The affable and dapper Chaudhary, the
                head of CG Corp Global, is a proud third-generation Nepalese
                national of Indian descent. His grandfather, who belonged to
                Churi-Ajitgarh village from Rajasthan, had shifted his base to
                Nepal around 140 years ago to set up a textile business.
                Chaudhary, who is ethnically a Marwari, has business in his
                gene. He reminisces about bootstrapping his fanciful business
                concepts into a money-spinning reality. Wealth creation, he
                recalls, is his unbridled passion, as he's not born with the
                proverbial silver spoon
              </p>
            </div>
          </div>

          {/* right div */}
          <div className="basis-[30%]">
            <div className="flex flex-col gap-20">
              {/* recent post  */}
              <div className="flex flex-col gap-8">
                <h3 className="uppercase text-[24px] font-bold">RECENT POST</h3>

                {/* three small link div  */}
                <Link href="/news" className="flex  gap-4">
                  <img
                    className="w-[80px] h-[44px]"
                    src="https://www.chaudharygroup.com/storage/NewsPost/7T5O7BXJqMzFKsAuZImEPvGUDkjiRyQh1VjH8giL.webp"
                    alt=""
                  />
                  <h6 className="text-[12px] leading-4 hover:text-[#16697a]  transition-text duration-500">
                    WKND Conversation: Meet Binod Chaudary, Nepal's first and
                    only billionaire
                  </h6>
                </Link>
                <Link href="/news" className="flex  gap-4">
                  <img
                    className="w-[80px] h-[44px]"
                    src="https://www.chaudharygroup.com/storage/NewsPost/RoNPI1WETJM3qJG9Y18w6nazjKn1JRHqxcPEjATc.webp"
                    alt=""
                  />
                  <h6 className="text-[12px] hover:text-[#16697a]  transition-text duration-500">
                    CG Communications Launches Internet Service In Kathmandu
                  </h6>
                </Link>
                <Link href="/news" className="flex  gap-4">
                  <img
                    className="w-[80px] h-[44px]"
                    src="https://www.chaudharygroup.com/storage/NewsPost/LSalVQqc1ufc8rIfKMctZLtPRLiK9A2tB4xPDOHs.webp"
                    alt=""
                  />
                  <h6 className="text-[12px] hover:text-[#16697a]  transition-text duration-500">
                    Chaudary Foundation's Vice-chair Nirvana Chaudary Hands Over
                    18 year bed ICU Ward To Bir Hospitale
                  </h6>
                </Link>
              </div>

              {/* follow us div */}
              <div className="flex flex-col gap-6">
                <h3 className="uppercase text-[24px] font-bold">follow us</h3>
                <div className="flex  gap-2  items-center">
                  {social.map((s, index) => (
                    <div
                      key={index}
                      className="bg-[#1b3d78] hover:bg-[#16697a] duration-500 w-[40px] h-[40px] rounded-full overflow-hidden flex items-center justify-center"
                    >
                      <div className="text-white  text-xl">{s}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
