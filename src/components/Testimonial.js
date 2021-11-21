import React from "react";
import TestimonialCardOne from "./TestimonialCardOne";
import TestimonialCardTwo from "./TestimonialCardTwo";

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen mb-12 md:mb-0">
      <div className="text-5xl font-thin text-black text-center mx-auto mb-12 mt-12 md:mt-0">
        Testimonials
      </div>
      <div className="flex grid grid-cols-1 md:grid-cols-2 mx-auto px-10 space-x-4 space-y-4">
        {/* insert testimonials cards here */}
        <TestimonialCardOne />
        <TestimonialCardTwo />
      </div>
    </div>
  );
};

export default Testimonial;
