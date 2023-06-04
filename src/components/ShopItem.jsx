import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux store/cartStore/cartSlice";

const ShopItem = ({ item, preview }) => {
  const dispatch = useDispatch();
  return (
    <div
      key={item.id}
      className="relative flex flex-col self-stretch w-full sm:w-[49%] md:w-[32%] h-96 overflow-hidden bgImg"
    >
      <div
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        className="w-full h-[90%] mb-1 bg-cover bg-center bg-no-repeat"
      />

      {!preview && (
        <button
          onClick={() => dispatch(addToCart(item))}
          className="hover:bg-white hover:text-black text-white bg-black hover:border-0 border-[1px] w-[80%] flex self-center uppercase justify-center absolute bottom-[20%] font-medium md:font-semibold text-sm sm:text-base md:text-lg lg:text-xl duration-1000 ease-in-out"
        >
          Add to cart
        </button>
      )}
      <div className="flex flex-row justify-between items-start w-full h-[10%] mb-4">
        <p className="w-[80%]  font-light md:font-normal text-sm sm:text-base md:text-lg lg:text-xl overflow-hidden">
          {item.name}
        </p>
        <span className="w-[15%] text-end font-light md:font-normal text-sm sm:text-base md:text-lg lg:text-xl ">
          ${item.price}
        </span>
      </div>
    </div>
  );
};

export default ShopItem;
