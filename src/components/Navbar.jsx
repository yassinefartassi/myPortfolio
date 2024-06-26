import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="bg-black h-[100px] text-gray-400 mx-w-[1200px] px-10 mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold primary-color ml-4">
          <a href="#">Yassine Fartassi</a>
        </h1>
        <ul className="hidden md:flex">
          <li className="p-5">
            <a href="#about"> about</a>{" "}
          </li>
          <li className="p-5">
            <a href="#projects"> work</a>
          </li>
          <li className="p-5">
            <a href="#contact"> contact</a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden mr-6">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed h-full left-0 top-0 w-[60%] z-10 bg-[#202121] ease-in-out duration-500"
              : "fixed left-[-100%]" // Fixed the class name here
          }
        >
          <h1 className="text-3xl primary-color ml-4">Yassine Fartassi</h1>
          <ul className="p-8 text-2xl">
            <li className="p-2">
              <a href="#about" onClick={closeNav}>
                about
              </a>
            </li>
            <li className="p-2">
              <a href="#projects" onClick={closeNav}>
                work
              </a>
            </li>
            <li className="p-2">
              <a href="#contact" onClick={closeNav}>
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
