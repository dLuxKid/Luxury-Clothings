// REACT
import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
// HOOK
import useAuth from "../hooks/useAuth";

// STATE
const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// REDUCER
const reducer = (state, action) => {
  return { ...state, [action.name]: action.value };
};

const Signup = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  const { Signup, pending, error, setError, success } = useAuth();

  const handleChange = (e) => {
    dispatch({
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password !== state.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (state.username && state.email && state.password) {
      Signup(state.email, state.password, state.username);
    } else {
      setError("No value in input fields");
      return;
    }
  };

  useEffect(() => {
    if (success) {
      dispatch({ username: "", email: "", password: "", confirmPassword: "" });
      navigate("/");
    }
  }, [success]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full sm:w-[80%] md:w-[60%] ease-in duration-200"
    >
      <label>
        <p className="font-medium text-base sm:text-lg md:text-xl">Username</p>
        <input
          name="username"
          type="text"
          value={state.username}
          placeholder="username"
          onChange={handleChange}
          className={`placeholder:text-gray-600 placeholder:text-base ${
            error ? "border-red-500" : "border-black"
          } border-[1px] leading-4  w-full h-10 p-2 flex items-center outline-none rounded-none focus:rounded-none active:rounded-none`}
        />
      </label>
      <label>
        <p className="font-medium text-base sm:text-lg md:text-xl">Email</p>
        <input
          name="email"
          type="email"
          value={state.email}
          placeholder="email"
          onChange={handleChange}
          className={`placeholder:text-gray-600 placeholder:text-base ${
            error ? "border-red-500" : "border-black"
          } border-[1px] leading-4  w-full h-10 p-2 flex items-center outline-none rounded-none focus:rounded-none active:rounded-none`}
        />
      </label>
      <label>
        <p className="font-medium text-base sm:text-lg md:text-xl">Password</p>
        <input
          name="password"
          type="password"
          value={state.password}
          placeholder="password"
          onChange={handleChange}
          className={`placeholder:text-gray-600 placeholder:text-base ${
            error ? "border-red-500" : "border-black"
          } border-[1px] leading-4  w-full h-10 p-2 flex items-center outline-none rounded-none focus:rounded-none active:rounded-none`}
        />
      </label>
      <label>
        <p className="font-medium text-base sm:text-lg md:text-xl">
          Confirm Password
        </p>
        <input
          name="confirmPassword"
          type="password"
          value={state.confirmPassword}
          placeholder="confirm password"
          onChange={handleChange}
          className={`placeholder:text-gray-600 placeholder:text-base ${
            error ? "border-red-500" : "border-black"
          } border-[1px] leading-4  w-full h-10 p-2 flex items-center outline-none rounded-none focus:rounded-none active:rounded-none`}
        />
      </label>
      <div>
        {!pending && (
          <button
            onClick={handleSubmit}
            className="bg-black text-white hover:bg-white hover:text-black hover:border-[1px] hover:border-black duration-300 ease-in-out py-2 px-6 w-56 font-normal md:font-medium text-xs sm:text-base md:text-lg mt-2"
          >
            Sign In
          </button>
        )}
        {pending && (
          <button
            disabled
            className="bg-black text-white  py-2 px-6 w-56 font-normal md:font-medium text-xs sm:text-base md:text-lg mt-2"
          >
            Loading...
          </button>
        )}

        {error && (
          <p className="font-normal md:font-medium text-sm sm:text-base md:text-lg text-red-500">
            {error}
          </p>
        )}
      </div>
    </form>
  );
};

export default Signup;
