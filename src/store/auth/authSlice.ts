import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "../../types/auth";

export const initialState: Auth = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleLoginStatus(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { toggleLoginStatus } = authSlice.actions;

export default authSlice.reducer;
