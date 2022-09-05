import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: ""
}

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state, action) => {
      state.token = "";
    }
  }
})

export const { addToken, logout } = tokenSlice.actions;