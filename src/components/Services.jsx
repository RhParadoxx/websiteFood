import React from "react";

import femaleChef from "../assets/femaleChef.png";

const Services = () => {
  return (
    <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
      <div className="container mx-auto py-[2vh]">
        <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
          <img src={femaleChef} className="h-[32rem] mx-auto justify-end" />

          <div className=" w-full md:w-[32rem] flex flex-col space-y-6">
            <div className="text-2xl md:text-3xl font-bold text-[#2e2e2e] lg:text-4xl">
              We Are <span className="text-[#f54748]">More </span> Than{" "}
              <span className="text-[#fdc55e]">Multiple</span> Service
            </div>

            <div className=" lg:text-lg text-[#191919] md:text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum
            </div>
            <div className="flex gap-8 items-center">
              <button className="bg-[#f54748] active:scale-90 transition duration-150  transform hover:shadow-xl rounded-full px-8 py-2 font-medium text-white">
                About us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
