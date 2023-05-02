import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black px-2 py-14">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold font-pacifico text-yellow-300 ">
          Savory Selections
        </h2>
        <p className="text-white font-montserrat my-8">
          Savory Selection is the perfect place to find new and exciting meal
          ideas. Whether you're looking for a quick and easy weeknight dinner or
          a show-stopping dessert for a special occasion, we have thousands of
          recipes to choose from. With detailed instructions and high-quality
          photos, you'll be able to recreate your favorite restaurant dishes and
          impress your family and friends with your culinary skills
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <FaFacebookF className="text-white border border-white rounded-full w-8 h-8 p-2"></FaFacebookF>
          <BsTwitter className="text-white border border-white rounded-full w-8 h-8 p-2"></BsTwitter>
          <GrLinkedinOption className="text-white border border-white rounded-full w-8 h-8 p-2"></GrLinkedinOption>
          <AiFillYoutube className="text-white border border-white rounded-full w-8 h-8 p-2"></AiFillYoutube>
        </div>
      </div>
    </div>
  );
};

export default Footer;
