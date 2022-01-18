import React from "react";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";

const CardGallery = () => {
  return (
    <div>
      <div className="w-full h-full p-10 font-light">
        {/* Heading */}
        <h2 class="text-5xl sm:text-6xl text-left sm:text-center font-extrabold tracking-tight text-gray-900 mb-4">
          Hosting Plans
        </h2>
        <div className="text-sm md:text-lg text-gray-700 sm:text-center items-center justify-center">
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
