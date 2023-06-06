// REACT
import React from "react";
import { NavLink } from "react-router-dom";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { toggleCartDropdown } from "../redux store/cartStore/cartSlice";
// HOOK
import useAuth from "../hooks/useAuth";
// COMPONENT
import CartDropdown from "./CartDropdown";
// ICON
import { Icon } from "@iconify/react";

const Navbar = () => {
  const navMenu =
    "font-light p-[2px] md:font-medium text-sm sm:text-base md:text-lg lg:text-xl hover:border-b-2 hover:border-black duration-200 ease-in-out cursor-pointer";

  const user = useSelector((state) => state.auth.user);
  const showCart = useSelector((state) => state.cart.showCart);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const { Logout } = useAuth();

  return (
    <nav className="w-full">
      <div className="w-full px-[5%] py-[2.5%] flex flex-col justify-center items-center md:justify-between md:flex-row relative">
        <h1 className="font-bold md:font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <NavLink to="/">LUXCLOTH</NavLink>
        </h1>
        <ul className="flex flex-row gap-6 items-center justify-center mt-3 md:mt-0">
          <li className={navMenu}>
            <NavLink to="/shop">SHOP</NavLink>
          </li>
          <li className={navMenu}>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          {user?.uid ? (
            <li className={navMenu} onClick={() => Logout()}>
              SIGN OUT
            </li>
          ) : (
            <li className={navMenu}>
              <NavLink to="/authentication">SIGN IN</NavLink>
            </li>
          )}

          <li
            onClick={() => dispatch(toggleCartDropdown())}
            className={`font-bold md:font-extrabold text-2xl md:text-3xl lg:text-4xl relative cursor-pointer`}
          >
            <Icon icon="ph:bag-light" />
            <span className="absolute top-0 right-0 left-0 bottom-0  text-[10px] md:text-xs flex items-center justify-center text-center">
              {totalQuantity}
            </span>
          </li>
        </ul>
        {showCart && <CartDropdown />}
      </div>
    </nav>
  );
};

export default Navbar;
