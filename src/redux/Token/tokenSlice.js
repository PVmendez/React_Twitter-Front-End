import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: ""
}

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    add: (state, action) => {
      state.token = action.payload;
    }
  }
})

export const { add } = tokenSlice.actions;