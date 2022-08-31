import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  login: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const { signIn, signUp, signOut } = authSlice.actions;

export default authSlice.reducer;
