import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import sql from "../assets/sql.png";
import mongodb from "../assets/mongodb.png";
import django from "../assets/django.png";

const Techstack = () => {
  return (
    <div className="bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center">
      <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
        My <br /> tech <br /> stack
      </h2>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={html} alt="HTML" />
        <p className="mt-2">HTML</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={css} alt="CSS" />
        <p className="mt-2">CSS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={tailwind} alt="Tailwind CSS" />
        <p className="mt-2">Tailwind CSS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={js} alt="JavaScript" />
        <p className="mt-2">JavaScript</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={react} alt="React" />
        <p className="mt-2">React</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={nodejs} alt="Node.js" />
        <p className="mt-2">Node.js</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={django} alt="Django" />
        <p className="mt-2">Django</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={sql} alt="SQL" />
        <p className="mt-2">SQL</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={mongodb} alt="MongoDB" />
        <p className="mt-2">MongoDB</p>
      </div>
    </div>
  );
};

export default Techstack;
