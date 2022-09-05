import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  User: {
    
  }
}

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.User = action.payload;
    }
  }
})

export const { addUser } = userSlice.actions;