import React from "react";

const Contact = () => {
  return (
    <div className="w-full relative">
      <div className="w-full h-full top-0 left-0 absolute"></div>
      <div className="w-full h-full flex flex-col-reverse absolute top-0 left-0 justify-center mx-auto items-center">
        <a href="/#">
          <button className="text-xs md:text-md py-2 px-3 rounded-md font-bold tracking-widest text-white uppercase mt-10 hover:text-pink-500 hover:bg-white transition duration-300">
            Contact us &rarr;
          </button>
        </a>
        <div className="text-7xl md:text-9xl font-thin text-white">Get in touch!</div>
      </div>
      <video loop autoPlay muted className="h-96 w-full object-cover">
        <source src={require('../media/technology-contact.mp4')} type="video/mp4" />
      </video>
    </div>
  );
}

export default Contact;