import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartDropdown } from "../redux store/cartStore/cartSlice";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  return (
    <div className="absolute w-60 h-96 flex flex-col p-5 border-[1px] border-black bg-white top-20 right-[5%] z-[100]">
      <div className="h-60 flex flex-col overflow-scroll">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <p className="font-normal md:font-medium text-xs sm:text-base md:text-lg text-center uppercase">
            Your cart is empty
          </p>
        )}
      </div>
      <button
        className="mt-auto font-normal md:font-medium text-xs sm:text-base md:text-lg text-white bg-black hover:bg-white hover:text-black"
        onClick={() => {
          dispatch(toggleCartDropdown());
          navigate("/checkout");
        }}
      >
        GO TO CHECKOUT
      </button>
    </div>
  );
};

export default CartDropdown;
