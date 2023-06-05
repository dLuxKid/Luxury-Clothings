import React from "react";
import ShopItem from "./shopItem";
import { NavLink } from "react-router-dom";

const PreviewCollections = ({ title, routeName, items, preview }) => {
  if (preview) {
    items = items.filter((item, index) => index < 4);
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between items-center md:pr-4">
        <h3 className="font-medium md:font-semibold text-base sm:text-lg md:text-2xl text-black">
          {title}
        </h3>
        {preview && (
          <p className="font-medium md:font-semibold text-base sm:text-lg md:text-2xl text-black uppercase">
            <NavLink to={`/shop/${routeName}`}>See all</NavLink>
          </p>
        )}
      </div>
      <div className="flex flex-wrap lg:flex-row items-stretch gap-2 w-full overflow-scroll">
        {items.map((item, index) => (
          <ShopItem key={index} item={item} preview={preview} />
        ))}
      </div>
    </div>
  );
};

export default PreviewCollections;
