import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    type: "categories",
    data:
      sessionStorage.getItem("categories") != null
        ? JSON.parse(sessionStorage.getItem("categories"))
        : [],
    count:
      sessionStorage.getItem("categories") != null
        ? JSON.parse(sessionStorage.getItem("categories")).length
        : 0,
    currCat:
      sessionStorage.getItem("currCat") != null
        ? sessionStorage.getItem("currCat")
        : null,
  },
  reducers: {
    addCategory: (state, action) => {
      const { title, schedType } = action.payload;

      let category = {
        title,
        schedType,
        numOfTasks: 0,
        id: state.count + 1,
      };
      state.count++;
      state.data.push(category);
      sessionStorage.setItem("categories", JSON.stringify(state.data));
    },
  },
});

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;
