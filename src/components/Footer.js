import React from "react";

function Footer() {
return (
// Body of footer
<>
  <div className="flex items-center border-t-2 border-pink-500 bg-gray-900 text-white">
    <div className="flex-1 max-w-6xl mx-auto p-10 items-center">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 px-2 md:gap-8">
        {/* Socials list */}
        <li className="items-center rounded-lg md:h-full h-full px-10">
          <div className="pt-9 text-2xl font-bold  mb-2">Socials</div>
          <a href="/#">
            <p className="text-justify hover:text-pink-500 items-center text-gray-300 text-sm mb-2">
              Facebook{" "}
            </p>
          </a>
          <a href="/#">
            <p className="text-justify hover:text-pink-500 items-center text-gray-300 text-sm mb-2">
              Twitter{" "}
            </p>
          </a>
          <a href="/#">
            <p className="text-justify hover:text-pink-500 items-center text-gray-300 text-sm mb-2">
              Instagram{" "}
            </p>
          </a>
        </li>
        {/* FAQ List */}
        <li className="items-center rounded-lg md:h-full h-full px-10">
          <div className="pt-9 text-2xl font-bold  mb-2">FAQ</div>
          <a href="/#">
            <p className="text-justify hover:text-pink-500 items-center text-gray-300 text-sm mb-2">
              How do I reset my password?
            </p>
          </a>
          <a href="/#">
            <p className="text-justify hover:text-pink-500 items-center text-gray-300 text-sm mb-2">
              Where do I login?
            </p>
          </a>
          <a href="/#">
            <p className="text-justify hover:text-pink-500 items-center text-gray-300 text-sm mb-2">
              Can't find your solution? Click here
            </p>
          </a>
        </li>
        {/* Find us list */}
        <li className="items-center rounded-lg md:h-full h-full px-10">
          <div className="pt-9 text-2xl font-bold  mb-2">Find us</div>
          <p className="text-justify hover:text-pink-500 items-center text-gray-300 text-sm mb-2">
            1 Meadow Hall, Coventry CV2 3DS
          </p>
          <p className="text-justify items-center text-gray-300 font-bold text-sm mb-2">
            024 2834 0923
          </p>
          <p className="text-justify items-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 text-sm mb-2">
            support@webfast.com
          </p>
        </li>
      </ul>
    </div>
  </div>
  <div class="flex p-2 pb-6 justify-center items-center bg-gray-900">
    <div class="text-center">
      <p className="text-white font-thin">Made with 🤍</p>
    </div>
  </div>
</>
);
}

export default Footer;