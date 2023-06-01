import React from "react";

const MenuItems = ({ bgImg, title, size }) => {
  return (
    <div
      className={`flex items-center justify-center relative overflow-hidden self-stretch bg-center bg-cover mt-2 h-60 last:ml-2 ${
        size ? "w-[49.5%] h-80" : "w-[33%]"
      }`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div
        className="absolute w-full top-0 right-0 bottom-0 left-0 hover:scale-110 duration-1000 ease-in-out z-10 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className="bg-slate-100 opacity-90 flex flex-col items-center justify-center h-24 p-6 z-50 cursor-pointer">
        <h1 className="text-gray-600 font-semibold md:font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
          {title}
        </h1>
        <p className="text-slate-500 font-light md:font-medium text-sm sm:text-base md:text-lg lg:text-xl">
          SHOP NOW
        </p>
      </div>
    </div>
  );
};

export default MenuItems;
