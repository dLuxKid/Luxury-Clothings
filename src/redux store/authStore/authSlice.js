import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  authChecked: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    signup: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    checkAuth: (state, action) => {
      state.authChecked = true;
      state.user = action.payload;
    },
  },
});

export const { login, signup, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;
