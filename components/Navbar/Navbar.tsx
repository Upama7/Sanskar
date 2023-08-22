"use client";

import React, { useState } from "react";

import { BsFilterRight } from "react-icons/bs";
import MNav from "./MNav";
import Link from "next/link";

function Navbar() {
  const nav = [
    { name: "Home", path: "/" },
    {
      name: "About-Us",
      path: "",
      sub: [
        { name: "Company Profile", path: "/about-us" },
        { name: "Message from Chariman", path: "/about-us" },
        { name: "Message from Managing Director", path: "/about-us" },
        {
          name: "Message from Business Department Director",
          path: "/about-us",
        },
        { name: "Message from Executive Director ", path: "/about-us" },
        { name: "License & Certificate", path: "/about-us" },
      ],
    },
    {
      name: "Service",
      path: "",
      sub: [
        { name: "Overseas Recruitment", path: "/read" },
        { name: "Training & Orientation", path: "/read" },
        { name: "Travel Management", path: "/read" },
      ],
    },
    { name: "Careers", path: "/careers" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <>
      <div className="max-w-[1100px] mx-auto flex justify-between items-center py-4  px-6 md:px-0  relative">
        {/* logo section  */}
        <Link href="/" className="flex-1">
          <img
            src="/Assets/logo.png"
            alt="image"
            className="w-[150px] h-[50px]"
          />
        </Link>

        {/* nav links  */}

        <div className="hidden flex-1 md:flex justify-between ">
          {nav.map((n, index) => (
            <div key={index} className="group">
              <Link href={n.path}>{n.name}</Link>

              {/* sub link if present  */}
              {n.sub && (
                <div className="hidden group-hover:block absolute z-10 top-12 bg-white w-[200px] py-4 rounded-md">
                  {n.sub.map((s, index) => (
                    <Link
                      href={s.path}
                      key={index}
                      className="block py-2 px-4  capitalize text-[14px]"
                    >
                      {s.name}
                      <hr />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <MNav />
      </div>
    </>
  );
}

export default Navbar;
