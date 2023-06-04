import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authStore/authSlice";
import cartReducer from "./cartStore/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
