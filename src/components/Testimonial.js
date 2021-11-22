import React from "react";
import TestimonialCardOne from "./TestimonialCardOne";
import TestimonialCardTwo from "./TestimonialCardTwo";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
<script>
  AOS.init();
</script>
	return (
    <div className="flex flex-col justify-center min-h-screen mb-12 md:mb-0">
      <div data-aos="fade-up" className="text-5xl font-thin text-black text-center mx-auto mb-12 mt-12 md:mt-0">
        Testimonials
      </div>
      <div data-aos="fade-up" className="flex grid grid-cols-1 md:grid-cols-2 mx-auto px-10 space-x-4 space-y-4">
        <TestimonialCardOne />
        <TestimonialCardTwo />
      </div>
    </div>
  );
};

export default Testimonial;
