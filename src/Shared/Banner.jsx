import React from "react";
import banner2 from "/banner-images/banner2.jpg";
import { HiArrowNarrowDown } from "react-icons/hi";

const Banner = () => {
  return (
    <div
      className="h-[calc(100vh-94px)] bg-cover bg-no-repeat bg-fixed bg-center relative"
      style={{ backgroundImage: `url(${banner2})` }}
    >
      <div className="bg-[#000000af] absolute inset-0 flex justify-center items-center">
        <div>
          <h1 className="font-pacifico text-center text-yellow-300 text-4xl md:text-6xl lg:text-7xl pb-7">
            Welcome To <br /> Savory Selections
          </h1>
          <h3 className="font-montserrat my-10 text-3xl md:text-4xl px-3 text-white text-center capitalize">
            Taste Your best Food From your <br /> Favorite chef
          </h3>
          <div className="flex justify-center pt-4">
            <a href="#all_Chef">
              <HiArrowNarrowDown className="text-2xl md:text-3xl lg:text-4xl rounded-full animate-bounce border p-1 border-yellow-300 text-yellow-300"></HiArrowNarrowDown>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
