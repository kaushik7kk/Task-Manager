import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "forms",
  initialState: {
    visibility: false,
    type: "new",
    id: null,
  },
  reducers: {
    // Reducer to toggle form window.
    toggleWindow: (state, action) => {
      state = {
        ...state,
        visibility: !state.visibility,
        type: action.payload.type,
        id: action.payload.id,
      };
      return state;
    },
  },
});

export const { toggleWindow } = formSlice.actions;

export default formSlice.reducer;
