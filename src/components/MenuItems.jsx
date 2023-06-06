import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MenuItems = ({ bgImg, title, size, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`border-[1px] border-black w-[100%] md:w-auto md:min-w-[30%] flex md:flex-auto items-center justify-center relative overflow-hidden self-stretch bg-center bg-cover h-60 ${
        size && "h-80"
      }`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div
        className="absolute w-full top-0 right-0 bottom-0 left-0 hover:scale-110 duration-1000 ease-in-out z-10 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div
        className="bg-white opacity-90 flex flex-col items-center justify-center h-24 p-6 z-50 cursor-pointer"
        onClick={() => navigate(`/shop/${linkUrl}`)}
      >
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
