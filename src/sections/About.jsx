import React from "react";
import aboutImage from "../assets/about.jpeg";

const About = () => {
  return (
    <section className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="grid md:grid-cols-2 py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col justify-start py-6 md:py-0">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat id beatae. Consequuntur officia sit at quae similique
              tenetur perspiciatis, sequi quidem nobis eaque vero facere
              expedita omnis consectetur enim!
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImage}
          width={300}
          height={300}
          alt="A person working on a computer"
        />
      </div>
    </section>
  );
};

export default About;
