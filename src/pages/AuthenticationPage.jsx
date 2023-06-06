// REACT
import React, { useState, useEffect } from "react";
// COMPONENT
import Login from "../components/Login";
import Signup from "../components/Signup";

const AuthenticationPage = () => {
  document.title = "register";

  useEffect(() => {
    document.body.style.zoom = "100%";
    window.scrollTo(0, 0);
  });

  const [mode, setMode] = useState("login");

  return (
    <section>
      <div className="flex justify-center items-center gap-8 w-full p-2 mb-6">
        <h3
          onClick={() => setMode("login")}
          className={`font-light p-[2px] md:font-medium text-sm sm:text-base md:text-lg lg:text-xl ${
            mode == "login" && "border-b-[1px] border-black"
          } duration-200 ease-in-out cursor-pointer`}
        >
          Log in
        </h3>
        <h3
          onClick={() => setMode("signup")}
          className={`font-light p-[2px] md:font-medium text-sm sm:text-base md:text-lg lg:text-xl ${
            mode == "signup" && "border-b-[1px] border-black"
          } duration-200 ease-in-out cursor-pointer`}
        >
          Sign up
        </h3>
      </div>
      <div className="flex justify-center items-center p-4">
        {mode == "login" ? <Login /> : <Signup />}
      </div>
    </section>
  );
};

export default AuthenticationPage;
