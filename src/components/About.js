import React, { useEffect } from "react";
import {
  ChatAltIcon,
  FolderIcon,
  ShieldCheckIcon,
  StatusOfflineIcon,
} from "@heroicons/react/solid";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (

    <div
      id="#pricing"
      data-aos="fade-up"
      className="flex items-center mt-24 max-w-6xl mx-auto mb-10"
    >
      <div className="flex-1 mx-auto p-10 items-center">
        {/* Text */}
        <div className="text-center top-0 mb-10 items-center py-4">
          <div data-aos="fade-up" clasName="mb-4">
            <h2 class="text-5xl sm:text-6xl text-left sm:text-center font-extrabold tracking-tight text-gray-900">
              What we offer
            </h2>
          </div>
          
        </div>
        {/* Images */}
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 px-0 sm:px-10 items-center mx-auto justify-center">
          <li
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-left items-center p-4 flex space-x-4"
          >
            <ChatAltIcon className="w-8 h-8 flex-shrink-0 mb-2" />
            <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 md:text-left text-md mb-2">
              24/7 Live Chat Support
            </div>
          </li>
          <li
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-left items-center p-4 flex space-x-4"
          >
            <FolderIcon className="w-8 h-8 flex-shrink-0 mb-2" />
            <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 md:text-left text-md mb-2">
              Online File Manager
            </div>
          </li>
          <li
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-left items-center p-4 flex space-x-4"
          >
            <ShieldCheckIcon className="w-8 h-8 flex-shrink-0 mb-2" />
            <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 md:text-left text-md mb-2">
              Free SSL Certificate
            </div>
          </li>
          <li
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-left items-center p-4 flex space-x-4"
          >
            <StatusOfflineIcon className="w-8 h-8 flex-shrink-0 mb-2" />
            <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 md:text-left text-md mb-2">
              99.9% Server Uptime
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
