import React from "react";
import { NavLink } from "react-router-dom";

const PreviewCollections = ({ title, routeName, items }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-medium md:font-semibold text-base sm:text-lg md:text-2xl text-black">
        <NavLink to={`/${routeName}`}>{title.toUpperCase()}</NavLink>
      </h3>
      <div className="flex flex-wrap lg:flex-row lg:flex-nowrap justify-between gap-2 w-full overflow-scroll">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col self-stretch w-full sm:w-[49%] md:w-[32%] h-80 overflow-hidden"
            >
              <div
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                className="w-full h-[90%] mb-1 bg-cover bg-center bg-no-repeat"
              />
              <div className="flex flex-row justify-between items-start w-full h-[10%] mb-4">
                <p className="w-[80%]  font-light md:font-normal text-sm sm:text-base md:text-lg lg:text-xl overflow-hidden">
                  {item.name}
                </p>
                <span className="w-[15%] text-end font-light md:font-normal text-sm sm:text-base md:text-lg lg:text-xl ">
                  ${item.price}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollections;
