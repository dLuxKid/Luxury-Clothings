import React from "react";

const CartItem = ({ item: { imageUrl, name, quantity, price } }) => {
  return (
    <div className="w-full flex mb-4 h-20 text-black">
      <img src={imageUrl} alt={name} className="w-[30%]" />
      <div className="w-[70%] flex flex-col items-start justify-center py-2 px-3">
        <span className="font-light md:font-normal text-xs sm:text-sm md:text-base">
          {name}
        </span>
        <span className="font-light md:font-normal text-xs sm:text-sm md:text-base">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
