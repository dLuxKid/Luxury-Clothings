// REACT
import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
// PAGES
import Homepage from "../pages/Homepage";
import Shoppage from "../pages/Shoppage";
import AuthenticationPage from "../pages/AuthenticationPage";
import Contact from "../pages/Contact";
import ShopItemPage from "../pages/ShopItemPage";
import CheckoutPage from "../pages/CheckoutPage";
// REDUX
import { useSelector } from "react-redux";

const Routers = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={user?.uid ? <Homepage /> : <AuthenticationPage />}
      />
      <Route
        path="/authentication"
        element={!user?.uid ? <AuthenticationPage /> : <Navigate to="/" />}
      />
      <Route
        element={user?.uid ? <Outlet /> : <Navigate to="/authentication" />}
      >
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/shop/:id" element={<ShopItemPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
