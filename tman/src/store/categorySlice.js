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
    // Reducer to add new category.
    addCategory: (state, action) => {
      const { title, schedType } = action.payload;

      let category = {
        title,
        schedType,
        numOfTasks: 0,
        id: state.count + 1,
        taskIds: [],
      };
      state.count++;
      state.data.push(category);
      sessionStorage.setItem("categories", JSON.stringify(state.data));
    },
    // Reducer to delete category.
    delCategory: (state, action) => {
      state.data = state.data.filter((category) => category.id !== Number(state.currCat));
      sessionStorage.setItem("categories", JSON.stringify(state.data));
      return state;
    },
    // Reducer to edit category.
    editCategory: (state, action) => {
      const { title, schedType } = action.payload;
      let foundCat = state.data.find((category) => category.id === Number(state.currCat));
      foundCat.title = title;
      foundCat.schedType = schedType;
      sessionStorage.setItem("categories", JSON.stringify(state.data));
      return state;
    },
    // Reducer to set current category for page.
    setCurrCat: (state, action) => {
      const { id } = action.payload;
      state.currCat = id;
      sessionStorage.setItem("currCat", id);
      return state;
    },
    // Reducer to add task to category.
    addCatTask: (state, action) => {
      let foundCat = state.data.find(
        (category) => Number(category.id) === Number(state.currCat)
      );
      const { taskId } = action.payload;
      if (foundCat.taskIds.includes(Number(taskId))) {
        foundCat.taskIds = foundCat.taskIds.filter(
          (id) => id !== Number(taskId)
        );
      } else {
        foundCat.taskIds.push(Number(taskId));
      }
      foundCat.numOfTasks = foundCat.taskIds.length;
      sessionStorage.setItem("categories", JSON.stringify(state.data));
      return state;
    },
    // Reducer to remove task from category.
    delCatTask: (state, action) => {
      const { rowId } = action.payload;
      let foundCat = state.data.find((category) => category.id === Number(state.currCat));
      foundCat.taskIds = foundCat.taskIds.filter(id => Number(id) !== Number(rowId));
      sessionStorage.setItem("categories", JSON.stringify(state.data));
      return state;
    }
  },
});

export const { addCategory, delCategory, editCategory, setCurrCat, addCatTask, delCatTask } = categorySlice.actions;

export default categorySlice.reducer;
