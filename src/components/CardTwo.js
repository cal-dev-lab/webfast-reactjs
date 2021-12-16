import React, { useEffect } from "react";
import { CheckIcon } from "@heroicons/react/solid";
import Aos from "aos";
import "aos/dist/aos.css";

function CardTwo() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="h-full flex justify-center items-center px-24 mb-24"
      data-aos="flip-left"
      data-aos-duration="2000"
    >
      <div className="bg-gradient-to-tr from-red-500 to-pink-500 border border-indigo-700 border-opacity-100 rounded-md shadow-xl curser-pointer">
        {/* Card Header */}
        <div className="px-6 py-12 border-b-2 border-gray-200">
          <p className="text-3xl font-semibold text-center mb-0 text-white">
            Gold
          </p>
          <div className="flex items-start text-center justify-center space-x-4 p-6 align-items">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-red-700 pt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="text-xl font-semibold text-white text-center mb-4">
              Most popular
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex items-start px-2 text-white">
              <p className="text-4xl font-medium">£</p>
              <p className="text-7xl font-bold text-">29.99</p>
            </div>
            <p className="text-xl text-gray-300">/ month</p>
          </div>
        </div>
        {/* Card Body */}
        <div className="p-12 md:p-24 w-full bg-white">
          <ul className="space-y-3">
            <li className="flex items-center space-x-4">
              <CheckIcon className="w-6 h-6 text-blue-700 flex-shrink-0" />
              <p className="text-lg text-gray-700">Technical support</p>
            </li>
            <li className="flex items-center space-x-4">
              <CheckIcon className="w-6 h-6 text-blue-700 flex-shrink-0" />
              <p className="text-lg text-gray-700">cPanel</p>
            </li>
            <li className="flex items-center space-x-4">
              <CheckIcon className="w-6 h-6 text-blue-700 flex-shrink-0" />
              <p className="text-lg text-gray-700">Web Application Installs</p>
            </li>
            <li className="flex items-center space-x-4">
              <CheckIcon className="w-6 h-6 text-blue-700 flex-shrink-0" />
              <p className="text-lg text-gray-700">100GB Storage</p>
            </li>
            <li className="flex items-center space-x-4">
              <CheckIcon className="w-6 h-6 text-blue-700 flex-shrink-0" />
              <p className="text-lg text-gray-700">10GB Bandwidth</p>
            </li>
          </ul>
          {/* Call to action */}
          <button className="mt-12 hover:bg-indigo-500 hover:text-white w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap bg-white text-blue-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-60 transition-all">
            Choose this plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardTwo;
