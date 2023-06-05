import React from "react";
import { Icon } from "@iconify/react";
import {
  addToCart,
  reduceFromCart,
  removeFromCart,
} from "../redux store/cartStore/cartSlice";
import { useDispatch } from "react-redux";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, quantity, price, id } = item;
  const dispatch = useDispatch();
  return (
    <div className="flex min-h-[100px] border-b-[1px] border-slate-500 py-4 px-0 items-center ">
      <div className="w-[23%] pr-3">
        <img src={imageUrl} alt={name} className="w-full h-full" />
      </div>
      <div className="capitalize w-[23%] text-center">
        <span className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
          {name}
        </span>
      </div>
      <div className="capitalize w-[20%] text-center flex justify-between items-center px-2">
        <span
          onClick={() => dispatch(reduceFromCart(item))}
          className="font-medium text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer"
        >
          <Icon icon="teenyicons:left-solid" />
        </span>
        <span className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
          {quantity}
        </span>
        <span
          onClick={() => dispatch(addToCart(item))}
          className="font-medium text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer"
        >
          <Icon icon="teenyicons:right-solid" />
        </span>
      </div>
      <div className="capitalize w-[20%] text-center">
        <span className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
          {price}
        </span>
      </div>
      <div className="capitalize w-[15%] justify-center flex items-center cursor-pointer">
        <span
          onClick={() => dispatch(removeFromCart(item))}
          className="font-medium text-sm sm:text-base md:text-lg lg:text-xl"
        >
          <Icon icon="fa6-solid:x" />
        </span>
      </div>
    </div>
  );
};

export default CheckoutItem;
