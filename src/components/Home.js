import React from "react";
import Hero from "./Hero";
import About from "./About";
import CardGallery from "./CardGallery";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";
import CookieConsent, { Cookies } from "react-cookie-consent";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <CardGallery />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="I UNDERSTAND"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#3f51b5" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={1500000}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </>
  );
}

export default Home;
