import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authStore/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
