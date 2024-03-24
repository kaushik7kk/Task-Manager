import { createSlice } from "@reduxjs/toolkit";

// let tasks = JSON.parse(sessionStorage.getItem('tasks'));

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const { title, time } = action.payload;
      const task = {
        title,
        time,
      };
      state.push(task);
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
