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
              Hi there! I'm Fartassi Yassine, a passionate full-stack developer
              with expertise in the MERN stack (MongoDB, Express.js, React.js,
              Node.js). I have a strong foundation in building robust web
              applications and APIs, and I thrive in dynamic environments where
              I can leverage my problem-solving skills to create innovative
              solutions.
            </p>
            <p className="text-base lg:text-lg">
              Throughout my career, I've worked on a variety of projects,
              including:
            </p>
            <p className="text-base lg:text-lg">Find out in projects section</p>
            <p className="text-base lg:text-lg">
              I'm constantly seeking new challenges and opportunities to expand
              my skills and contribute to impactful projects. Whether it's
              crafting elegant user interfaces or optimizing backend
              performance, I'm dedicated to delivering high-quality solutions
              that exceed expectations.
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
