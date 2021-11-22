import React from "react";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";

const CardGallery = () => {
  return (
    <div>
      <div className="w-full h-full p-10">
        {/* Heading */}
        <div className="text-2xl lg:text-4xl font-bold text-gray-700 text-center items-center justify-center mb-6">
          Hosting Plans
        </div>
        <div className="text-md text-gray-500 text-center items-center justify-center px-12">
          We offer the fastest Linux servers fully equipped with your own
          dedicated memory and storage.
        </div>
      </div>
      {/* Three cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 mt-6">
        <CardOne />
        <CardTwo />
        <CardThree />
      </div>
    </div>
  );
};

export default CardGallery;
