import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loggedIn",
  initialState: false,
  reducers: {
    toggleLogin: (state, action) => {
      state = !state;
    },
  },
});

export const { toggleLogin } = loginSlice.actions;

export default loginSlice.reducer;
