import React from "react";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";

const CardGallery = () => {
  return (
    <div>
      <div className="w-full h-full p-10 font-light">
        {/* Heading */}
        <div className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 text-center items-center justify-center mb-6">
          Hosting Plans
        </div>
        <div className="text-sm md:text-lg text-gray-700 text-center items-center justify-center">
          We offer the fastest Linux servers fully equipped with your own
          dedicated memory and storage.
        </div>
      </div>
      {/* Three cards */}
      <div className="max-w-7xl p-10 gap-20 mx-auto grid grid-cols-1 xl:grid-cols-3">
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>
    </div>
  );
};

export default CardGallery;
