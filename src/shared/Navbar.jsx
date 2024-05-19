import React, { useState } from "react";
import logo from "../assets/logo.svg";

import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-white/80 shadow-md fixed top-0 left-0 w-full z-40 ease-in  duration-300 backdrop-blur-sm">
      <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <img src={logo} className="h-14 cursor-pointer" />

          <div className="lg:flex hidden gap-8 items-center">
            <a
              href=""
              className="text-[#191919] text-lg font-medium hover:text-red-500 duration-300"
            >
              Today Special
            </a>
            <a
              href=""
              className="text-[#191919] text-lg font-medium hover:text-red-500 duration-300"
            >
              Why FoodMak
            </a>
            <a
              href=""
              className="text-[#191919] text-lg font-medium hover:text-red-500 duration-300"
            >
              Our menu
            </a>
            <a
              href=""
              className="text-[#191919] text-lg font-medium hover:text-red-500 duration-300"
            >
              Add Food
            </a>
            <a
              href=""
              className="text-[#191919] text-lg font-medium hover:text-red-500 duration-300"
            >
              Popular food
            </a>

            <button className="bg-[#F54748] active:scale-90 transition duration-100 transform hover: shadow-xl rounded-xl py-2 px-5 text-white">
              Login
            </button>
          </div>

          <div className="block lg:hidden z-40" onClick={handelNav}>
            {nav ? (
              <IoClose size={25} className="text-[#F45748] cursor-pointer" />
            ) : (
              <FiMenu size={25} className="text-[#191919] cursor-pointer" />
            )}
          </div>

          <div
            className={`lg:hidden absolute w-1/2 sm:h-1/5 h-[2vh] px-4 py-2 text-lg font-medium ease-in shadow-sm backdrop-blur-md  top-0 duration-500 ${
              nav ? "right-0" : "right-[-100%]"
            } pt-24`}>
          
            <div className="flex flex-col gap-8 items-center  ">
              <a
                href=""
                className="text-[#191919] text-lg font-medium hover:text-red-500 duration-300"
              >
                Today Special
              </a>
              <a
                href=""
                className="text-[#191919] text-lg font-medium hover:text-red-500 duration-300"
              >
                Why FoodMak
              </a>
              <a
                href=""
                className="text-[#191919] text-lg font-medium hover:text-red-500 duration-300"
              >
                Our menu
              </a>
              <a
                href=""
                className="text-[#191919] text-lg font-medium hover:text-red-500 duration-300"
              >
                Add Food
              </a>
              <a
                href=""
                className="text-[#191919] text-lg font-medium hover:text-red-500 duration-300"
              >
                Popular food
              </a>

              <button className="bg-[#F54748] active:scale-90 transition duration-100 transform hover: shadow-xl rounded-xl py-2 px-5 text-white">
                Login
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
