import React from "react";
import heroimage2 from "../assets/heroimage.jpeg";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto bg-black text-gray-400">
      <div className="my-auto mx-auto">
        <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
          <img src={heroimage2} alt="Hero image" />
        </div>
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl  lg:text-8xl font-extrabold">
          <span className="primary-color">I'am a</span>
        </h1>
        <h5 className="text-white text-lg sm:text-2xl  lg:text-4xl font-medium">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Front end dev",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "backend dev",
              1000,
              "graphic designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h5>
        <p className="text-white sm:text-lg my-6 lg-text-xl">
          hello world! i'am yassine a MERN stack developper
        </p>
        <div className="my-8">
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Download CV
          </a>
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl  border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
