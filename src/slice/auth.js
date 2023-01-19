import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/storage";

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // LOGIN
    loginUserStart: (state) => {
      state.isLoading = true;
    },

    loginUserSuccess: (state, action) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.user = action.payload;
      setItem("token", action.payload.token);
    },

    loginUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // REGISTER
    registerUserStart: (state) => {
      state.isLoading = true;
    },

    registerUserSuccess: (state, action) => {
      state.loggedIn = true;
      state.isLoading = false;
      state.user = action.payload;
      setItem("token", action.payload.token);
    },

    registerUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginUserStart,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
  loginUserSuccess,
  loginUserFailure,
} = authSlice.actions;

export default authSlice.reducer;
