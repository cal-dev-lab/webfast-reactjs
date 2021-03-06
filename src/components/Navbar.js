import React from "react";
import "../index.css";

const Navbar = ({ handleLogout }) => {
  function mobileClick() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  }

  return (
  <>
    <nav className="bg-white sticky top-0 z-30">
      {/* START: Main Navbar */}
      <div className="max-w-6xl px-8 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div className="">
              <a
                href="/#"
                className="flex items-center py-5 px-2 text-gray-700"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 text-xl transition duration-300">
                  webfast
                </span>
              </a>
            </div>
            {/* Main nav */}
            <div className="hidden md:flex items-center space-x-1 pl-10">
              <a
                href="/#"
                className="uppercase tracking-wide text-xs tracking-widest py-5 px-3 hover:underline hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 transition duration-500"
              >
                Pricing
              </a>
              <a
                href="/#"
                className="uppercase tracking-wide text-xs tracking-widest py-5 px-3 hover:underline hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 transition duration-500"
              >
                Why us?
              </a>
              <a
                href="/#"
                className="uppercase tracking-wide text-xs tracking-widest py-5 px-3 hover:underline hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 transition duration-500"
              >
                About
              </a>
            </div>
          </div>
          {/* Secondary nav */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              type="button"
              onClick={handleLogout}
              className="text-xs hover:text-white py-2 px-4 border-2 border-pink-500 text-gray-700 rounded transition duration-300 bg-gradient-to-r  hover:from-red-500 hover:to-pink-500"
            >
              LOG OUT
            </button>
          </div>
          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={mobileClick} className="mobile-menu-button">
              <svg
                class="w-6 h-6 text-black hover:text-pink-500 transition duration-300"
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
      {/* END: Main Navbar */}
      {/* START: Mobile menu */}
      <div className="mobile-menu hidden md:hidden">
        <a
          href="/#"
          className="block uppercase tracking-wide py-6 px-24 text-sm tracking-widest bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-white hover:to-white hover:text-black transition duration-500"
        >
          Pricing
        </a>
        <a
          href="/#"
          className="block uppercase tracking-wide py-6 px-24 text-sm tracking-widest bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-white hover:to-white  hover:text-black transition duration-500"
        >
          Why us?
        </a>
        <a
          href="/#"
          className="block uppercase tracking-wide py-6 px-24 text-sm tracking-widest bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-white hover:to-white hover:text-black transition duration-500"
        >
          About
        </a>
        <a
          onClick={handleLogout}
          className="block uppercase tracking-wide py-6 px-24 text-sm tracking-widest bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-white hover:to-white rounded-b-xl shadow-xl hover:text-black transition duration-500"
        >
          Log out
        </a>
      </div>
      {/* END: Mobile Menu */}
    </nav>
  </>
  );
};

export default Navbar;
