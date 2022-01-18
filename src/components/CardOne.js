import React, { useEffect } from "react";
import { CheckIcon } from "@heroicons/react/solid";
import Aos from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";

function CardOne() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Tilt>
      <div
        className="h-full flex justify-center items-center px-6 mb-6"
        data-aos="flip-left"
        data-aos-duration="1000"
      >
        <div className="bg-gradient-to-tr from-red-500 to-pink-500 border border-indigo-700 border-opacity-10 rounded-md shadow-xl curser-pointer">
          {/* Card Header */}
          <div className="px-6 py-12 border-b-2 border-gray-200">
            <p className="text-3xl font-semibold text-center mb-4 text-white">
              Silver
            </p>
            <div className="flex justify-center items-center">
              <div className="flex items-start px-2 text-white">
                <p className="text-4xl font-medium">£</p>
                <p className="text-7xl font-bold mb-2">9.99</p>
              </div>
              <p className="text-xl text-gray-300">/ month</p>
            </div>
          </div>
          {/* Card Body */}
          <div className="p-12 md:p-24 w-full bg-white">
            <ul className="space-y-3">
              <li className="flex items-center space-x-4">
                <CheckIcon className="w-6 h-6 text-pink-500 flex-shrink-0" />
                <p className="text-lg text-gray-700">Technical Support</p>
              </li>
              <li className="flex items-center space-x-4">
                <CheckIcon className="w-6 h-6 text-pink-500 flex-shrink-0" />
                <p className="text-lg text-gray-700">cPanel</p>
              </li>
              <li className="flex items-center space-x-4">
                <CheckIcon className="w-6 h-6 text-pink-500 flex-shrink-0" />
                <p className="text-lg text-gray-700">50GB Storage</p>
              </li>
              <li className="flex items-center space-x-4">
                <CheckIcon className="w-6 h-6 text-pink-500 flex-shrink-0" />
                <p className="text-lg text-gray-700">2GB Bandwidth</p>
              </li>
            </ul>
            {/* Call to action */}
            <button className="mt-12 hover:bg-pink-500 hover:text-white w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap bg-white text-pink-500 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-60 transition-all">
              Choose this plan
            </button>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default CardOne;
