import React from "react";
import TestimonialCardOne from "./TestimonialCardOne";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  <script>AOS.init();</script>;
  return (
    <div className="flex flex-col justify-center my-20">
      <div
        data-aos="fade-up"
        className="text-4xl text-transparent font-light bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 text-center mx-auto mb-12 mt-12 md:mt-0"
      >
        Testimonials
      </div>
      <div
        data-aos="fade-up"
        className="flex grid grid-cols-1 mx-auto px-10 space-x-4 space-y-4"
      >
        <TestimonialCardOne />
      </div>
    </div>
  );
};

export default Testimonial;
