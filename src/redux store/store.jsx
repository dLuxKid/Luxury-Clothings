// REDUX
import { configureStore, combineReducers } from "@reduxjs/toolkit";
// REDUX PERSIST AND STORAGE
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // this tells us that we want to make use of the browser local storage
// REDUCERS
import authReducer from "./authStore/authSlice";
import cartReducer from "./cartStore/cartSlice";

// redux persist configuration
const persistConfig = {
  key: "root", // we want to start storing from the root in the reducer object
  storage, // passing the storage key as storage
  whitelist: ["cart"], // this tells redux that we only want to persist the cart since firebase handles the authentication there is no need to save it in storage
};

// Combine the reducers into a root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
});

// Create the persisted store
export const persistor = persistStore(store);
