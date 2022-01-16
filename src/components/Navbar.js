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
      {/* START: Phone bar */}
      <div className="px-8 py-1 bg-gradient-to-tr from-red-500 to-pink-500 mx-auto sticky top-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                <p
                  className="text-white"
                >
                  <a href="tel:0121300003">
                    0121 300 003
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END: Phone bar */}
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
          className="block uppercase tracking-wide py-6 px-24 text-sm tracking-widest bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-white hover:to-white rounded-b-xl shadow-xl hover:text-black transition duration-500"
        >
          About
        </a>
      </div>
      {/* END: Mobile Menu */}
    </nav>
  </>
  );
};

export default Navbar;
