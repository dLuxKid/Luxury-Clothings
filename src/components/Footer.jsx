// REACT
import React from "react";
// ICON
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-black w-full px-[5%] py-[5%] md:py-[2.5%]">
      <div className="flex flex-col items-center gap-4 md:gap-6 xl:gap-8  w-full">
        <div className="flex flex-col gap-1 items-center justify-center w-full">
          <h3 className="font-medium md:font-semibold text-base sm:text-lg md:text-xl">
            NEWSLETTER
          </h3>
          <label className="flex items-center justify-center gap-0 w-[100%] md:w-[50%] min-w-[250px] h-10 rounded-none border-2 border-black">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="placeholder:text-black placeholder:text-base leading-4 border-0 w-full h-full p-2 flex items-center outline-none rounded-none focus:rounded-none active:rounded-none"
            />
            <button className="bg-black text-white text-xl flex items-center justify-center h-full border-0 outline-none rounded-none -ml-[1px]">
              <Icon icon="prime:send" />
            </button>
          </label>
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-6 text-black">
          <a
            href="https://www.linkedin.com/in/marvellousadetunji/"
            target="_blank"
            className="font-bold md:font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl relative cursor-pointer text-black hover:scale-105 duration-300 ease-in-out"
          >
            <Icon icon="teenyicons:linkedin-outline" />
          </a>
          <a
            href="https://twitter.com/JustMarvellous_"
            target="_blank"
            className="font-bold md:font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl relative cursor-pointer text-black hover:scale-105 duration-300 ease-in-out"
          >
            <Icon icon="lucide:twitter" />
          </a>
          <a
            href="https://github.com/dLuxKid"
            target="_blank"
            className="font-bold md:font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl relative cursor-pointer text-black hover:scale-105 duration-300 ease-in-out"
          >
            <Icon icon="icon-park:github" />
          </a>
        </div>
        <div className="w-full flex">
          <ul className="flex flex-row flex-wrap items-center justify-center mx-auto w-[100%] md:w-[60%]">
            <li className="w-auto m-1 md:m-2 font-normal md:font-medium text-sm sm:text-base md:text-lg cursor-pointer">
              Terms and Conditions
            </li>
            <li className="w-auto m-1 md:m-2 font-normal md:font-medium text-sm sm:text-base md:text-lg cursor-pointer">
              Accessibility
            </li>
            <li className="w-auto m-1 md:m-2 font-normal md:font-medium text-sm sm:text-base md:text-lg cursor-pointer">
              Privacy
            </li>
            <li className="w-auto m-1 md:m-2 font-normal md:font-medium text-sm sm:text-base md:text-lg cursor-pointer">
              Cookies
            </li>
            <li className="w-auto m-1 md:m-2 font-normal md:font-medium text-xs sm:text-base md:text-lg cursor-pointer">
              &#169; {new Date().getFullYear()} adetunjimarvellous09@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
