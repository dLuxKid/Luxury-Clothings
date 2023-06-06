import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../components/CheckoutItem";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const calcTotalPrice = useCallback(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <section className="px-[5%] py-[2.5%]  w-full md:w-[60%] flex min-h-[90vh] flex-col items-center mx-auto">
      <div className="w-full h-10 flex justify-between items-center border-b-[1px] border-slate-500">
        <div className="capitalize w-[23%] text-start">
          <span className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Product
          </span>
        </div>
        <div className="capitalize w-[23%] text-center">
          <span className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Descripton
          </span>
        </div>
        <div className="capitalize w-[20%] text-center">
          <span className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Quantity
          </span>
        </div>
        <div className="capitalize w-[20%] text-center">
          <span className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Price
          </span>
        </div>
        <div className="capitalize w-[15%] text-center">
          <span className="font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            Remove
          </span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="my-8 ml-auto text-lg sm:text-xl md:text-2xl lg:text-4xl">
        TOTAL: <span>${calcTotalPrice()}</span>
      </div>
    </section>
  );
};

export default CheckoutPage;
