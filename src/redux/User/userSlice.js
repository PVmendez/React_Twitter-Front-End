import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
}

export const userSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.token = action.payload;
    }
  }
})

export const { addUser } = userSlice.actions;