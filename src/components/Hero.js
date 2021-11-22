import React, { useEffect } from "react";
import modelMan from "../media/sapiens(1).png";
import Aos from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="flex mx-auto max-w-5xl md:mt-24">
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 px-10 md:gap-8">
        {/* Practical */}
        <li className="md:text-center items-center rounded-lg md:h-full h-full px-3">
          <img src={modelMan} alt="Man" />
        </li>
        {/* Reliable */}
        <li className="justify-center align-items mt-10 items-center h-full">
          <p className="pt-9 text-left uppercase tracking-widest text-sm font-light">
            A whole new world
          </p>
          <h1 className="text-indigo-500 text-6xl mb-4 text-left font-bold">webfast</h1>
            <a href="/#" className="font-semibold">
              Welcome to the{" "}
              <a href="/#" className="text-indigo-500">
                webfast
              </a>{" "}
              Family!
            </a>
	  <p className="text-sm mt-4 font-light mb-4 md:mb-0">
            The top-rated Hosting Solution for personal and small business
            websites in four consecutive years by the HostAdvice Community!{" "}
            <br />
            <br />
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Hero;
