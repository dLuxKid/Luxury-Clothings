import React from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const navMenu =
    "font-light p-[2px] md:font-medium text-sm sm:text-base md:text-lg lg:text-xl hover:border-b-2 hover:border-black duration-200 ease-in-out cursor-pointer";

  return (
    <nav className="w-full">
      <div className="w-full px-[5%] py-[2.5%] flex flex-row justify-between">
        <h1 className="font-bold md:font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          LUXCLOTH
        </h1>
        <ul className="flex flex-row gap-6 items-center justify-center">
          <li className={navMenu}>SHOP</li>
          <li className={navMenu}>CONTACT</li>
          <li className={navMenu}>SIGN IN</li>
          <li
            className={`font-bold md:font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl relative cursor-pointer`}
          >
            <Icon icon="ph:bag-light" />
            <span className="bg-white rounded-full border-2 border-black w-4 h-4 absolute top-0 right-0 text-xs flex items-center justify-center text-center">
              0
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
