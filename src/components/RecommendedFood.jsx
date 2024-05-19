import React from "react";

import { FaHeart, FaStar } from "react-icons/fa";

const RecommendedFood = () => {
  return (
    <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
      <div className="container mx-auto py-[2vh]">
        <div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">
          Recommended<span className="text-[#f54748]">Food</span>
        </div>

        <div className="grid py-6  gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">

          <div className="food-card hover:bg-red-200/50 rounded-lg duration-500 flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img
                src="./src/assets/Food img/food1.png"
                className=" rounded-2xl"
              />
              <div className="absolute top-2 left-2">
                <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                  <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </button>
              </div>
              <div className="absolute  bottom-2 right-2 ">
                <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                  <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    $10
                  </div>
                </button>
              </div>
            </div>

            <div className="flex gap-10 items-center">
              <p className=" text-xl text-center font-bold text-[#f54748]">
                meat stew
              </p>

              <div className="flex text-sm space-x-2 cursor-pointer">
                <span className="font-normal text-[#fdc55e]">4.5</span>
                <FaStar size={16} className="text-[#fdc55e]" />
                <span className="font-medium">4</span>
              </div>
            </div>

            <button className="bg-[#f54748] active:scale-90 transition duration-500  transform hover:shadow-xl rounded-full px-8 py-2 text-xl font-medium text-white">
              order Now
            </button>
          </div>

          <div className="food-card hover:bg-red-200/50 rounded-lg duration-500 flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img
                src="./src/assets/Food img/food1.png"
                className=" rounded-2xl"
              />
              <div className="absolute top-2 left-2">
                <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                  <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </button>
              </div>
              <div className="absolute  bottom-2 right-2 ">
                <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                  <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    $10
                  </div>
                </button>
              </div>
            </div>

            <div className="flex gap-10 items-center">
              <p className=" text-xl text-center font-bold text-[#f54748]">
                meat stew
              </p>

              <div className="flex text-sm space-x-2 cursor-pointer">
                <span className="font-normal text-[#fdc55e]">4.5</span>
                <FaStar size={16} className="text-[#fdc55e]" />
                <span className="font-medium">4</span>
              </div>
            </div>

            <button className="bg-[#f54748] active:scale-90 transition duration-500  transform hover:shadow-xl rounded-full px-8 py-2 text-xl font-medium text-white">
              order Now
            </button>
          </div>

          <div className="food-card hover:bg-red-200/50 rounded-lg duration-500 flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img
                src="./src/assets/Food img/food1.png"
                className=" rounded-2xl"
              />
              <div className="absolute top-2 left-2">
                <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                  <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </button>
              </div>
              <div className="absolute  bottom-2 right-2 ">
                <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                  <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    $10
                  </div>
                </button>
              </div>
            </div>

            <div className="flex gap-10 items-center">
              <p className=" text-xl text-center font-bold text-[#f54748]">
                meat stew
              </p>

              <div className="flex text-sm space-x-2 cursor-pointer">
                <span className="font-normal text-[#fdc55e]">4.5</span>
                <FaStar size={16} className="text-[#fdc55e]" />
                <span className="font-medium">4</span>
              </div>
            </div>

            <button className="bg-[#f54748] active:scale-90 transition duration-500  transform hover:shadow-xl rounded-full px-8 py-2 text-xl font-medium text-white">
              order Now
            </button>
          </div>

          <div className="food-card hover:bg-red-200/50 rounded-lg duration-500 flex flex-col cursor-pointer items-center p-5">
            <div className="relative mb-3">
              <img
                src="./src/assets/Food img/food1.png"
                className=" rounded-2xl"
              />
              <div className="absolute top-2 left-2">
                <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative">
                  <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </button>
              </div>
              <div className="absolute  bottom-2 right-2 ">
                <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                  <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    $10
                  </div>
                </button>
              </div>
            </div>

            <div className="flex gap-10 items-center">
              <p className=" text-xl text-center font-bold text-[#f54748]">
                meat stew
              </p>

              <div className="flex text-sm space-x-2 cursor-pointer">
                <span className="font-normal text-[#fdc55e]">4.5</span>
                <FaStar size={16} className="text-[#fdc55e]" />
                <span className="font-medium">4</span>
              </div>
            </div>

            <button className="bg-[#f54748] active:scale-90 transition duration-500  transform hover:shadow-xl rounded-full px-8 py-2 text-xl font-medium text-white mt-3">
              order Now
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RecommendedFood;
