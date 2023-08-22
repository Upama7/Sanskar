import Link from "next/link";
import React from "react";

const page = () => {
  const news = [
    {
      src: "https://www.chaudharygroup.com/storage/NewsPost/7T5O7BXJqMzFKsAuZImEPvGUDkjiRyQh1VjH8giL.webp",
      h3: "    WKND Conversation: Meet Binod Chaudary, Nepal's first and only billionaire",
      alt: "news",
    },
    {
      src: "https://www.chaudharygroup.com/storage/NewsPost/RoNPI1WETJM3qJG9Y18w6nazjKn1JRHqxcPEjATc.webp",
      h3: "CG Communications Launches Internet Service In Kathmandu",
      alt: "news",
    },
    {
      src: "https://www.chaudharygroup.com/storage/NewsPost/LSalVQqc1ufc8rIfKMctZLtPRLiK9A2tB4xPDOHs.webp",
      h3: "Chaudary Foundation's Vice-chair  Nirvana Chaudary Hands Over 18 year bed  ICU Ward To Bir Hospital",
      alt: "news",
    },
    {
      src: "https://www.chaudharygroup.com/storage/NewsPost/PrJDT9uWgF6QsE4VPO20kuVdS6cTtuk1diJMYJXx.png",
      h3: "Chaudary Foundation and Unnati Cultural Village Shape Nepal As The 'Soft Power', Says Surabhi K Chaudary At KLF Chava Samvad",
      alt: "news",
    },
    {
      src: "https://www.chaudharygroup.com/storage/NewsPost/TlUgaZ9QovsnQk3VZUotZPaZtVZIh0FevljPI0nt.webp",
      h3: "Nepali billionaire says the country underestimates its second Covid wave",
      alt: "news",
    },
    {
      src: "https://www.chaudharygroup.com/storage/NewsPost/VQwJXq2Imx8SjMZVC2kw62J6ghoDflHa0b9Tyqk4.webp",
      h3: "WAI WAI noodles Echoes the habit of hand hygiene through its packaging ",
      alt: "news",
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[1100px] mx-auto py-10 flex flex-wrap gap-8 justify-center">
        {news.map((s, index) => (
          <Link
            href="/news/newsdetail"
            key={index}
            className="flex flex-col w-[340px] h-[300px] border-[1px]  shadow-md"
          >
            <img className="h-[70%]" src={s.src} alt={s.alt} />

            <h3 className=" text-[14px] p-2 ">{s.h3}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
