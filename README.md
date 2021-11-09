# AOS-JS for React

## Links:

AOSJS

---

NPM:
https://www.npmjs.com/package/aos

- Find the different animations here:
  https://michalsnik.github.io/aos/

## To use in React include these on your component pages:

`
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
`

## You must init the aos by using this script underneath where the function is declared:

For example on '/components/Services.js':

function Services() {


useEffect(() => {
Aos.init({ duration: 2000 });
}, []);

return (

<div
      id="#pricing"
      data-aos="fade-up"
      className="flex items-center mt-24  rounded-lg shadow-2xl max-w-7xl mx-auto mb-10"
    >
Your div here
</div>



## Firebase

NPM:
https://www.npmjs.com/package/firebase

- https://firebase.google.com


