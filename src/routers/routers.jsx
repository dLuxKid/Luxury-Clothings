// REACT
import React from "react";
import { Routes, Route } from "react-router-dom";
// PAGES
import Homepage from "../pages/Homepage";
import Shoppage from "../pages/Shoppage";
import AuthenticationPage from "../pages/AuthenticationPage";
import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/shop" element={<Shoppage />} />
      <Route path="/authentication" element={<AuthenticationPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
