import React from "react";
import "../index.css";

const Navbar = ({ handleLogout }) => {
  function mobileClick() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  }

  return (
    <nav className="bg-white mb-2 sticky top-0 z-30">
      <div className="max-w-6xl px-8 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div className="">
              <a
                href="/#"
                className="flex items-center py-5 px-2 text-gray-700"
              >
                <span className="font-bold text-indigo-500 text-xl hover:text-indigo-600 transition duration-300">
                  webfast
                </span>
              </a>
            </div>
            {/* Main nav */}
            <div className="hidden md:flex items-center space-x-1 pl-10">
              <a
                href="/#"
                className="uppercase tracking-wide text-xs tracking-widest py-5 px-3 hover:text-indigo-500 transition duration-500"
              >
                Pricing
              </a>
              <a
                href="/#"
                className="uppercase tracking-wide text-xs tracking-widest py-5 px-3 hover:text-indigo-500 transition duration-500"
              >
                Why us?
              </a>
              <a
                href="/#"
                className="uppercase tracking-wide text-xs tracking-widest py-5 px-3 hover:text-indigo-600 transition duration-500"
              >
                About
              </a>
            </div>
          </div>
          {/* Secondary nav */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={handleLogout}
              className="text-xs hover:bg-indigo-600 hover:text-white py-2 px-4 border-2 border-indigo-500 text-gray-700 rounded transition duration-300"
            >
              LOG OUT
            </button>
          </div>
          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={mobileClick} className="mobile-menu-button">
              <svg
                class="w-6 h-6 text-black hover:text-blue-700 transition duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="mobile-menu hidden md:hidden">
        <a
          href="/#"
          className="block uppercase tracking-wide py-6 px-24 text-sm tracking-widest bg-indigo-500 text-white hover:bg-white hover:text-black transition duration-500"
        >
          Pricing
        </a>
        <a
          href="/#"
          className="block uppercase tracking-wide py-6 px-24 text-sm tracking-widest bg-indigo-500 text-white hover:bg-white hover:text-black transition duration-500"
        >
          Why us?
        </a>
        <a
          href="/#"
          className="block uppercase tracking-wide py-6 px-24 text-sm tracking-widest bg-indigo-500 text-white hover:bg-white hover:text-black transition duration-500"
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
