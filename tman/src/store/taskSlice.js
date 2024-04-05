import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    type: "tasks",
    data:
      sessionStorage.getItem("tasks") != null
        ? JSON.parse(sessionStorage.getItem("tasks"))
        : [],
    count:
      sessionStorage.getItem("tasks") != null
        ? JSON.parse(sessionStorage.getItem("tasks")).length
        : 0,
  },
  reducers: {
    // Reducer to add new task.
    addTask: (state, action) => {
      const { title, time } = action.payload;
      const task = {
        title,
        time,
        finished: false,
        id: state.count + 1,
      };
      state.count++;
      state.data.push(task);
      sessionStorage.setItem("tasks", JSON.stringify(state.data));
    },
    // Reducer to edit task.
    editTask: (state, action) => {
      const { title, time, id } = action.payload;
      let foundTask = state.data.find(task => toString(task.id) === toString(id))
      foundTask.title = title;
      foundTask.time = time;
      foundTask.finished = false;
      sessionStorage.setItem("tasks", JSON.stringify(state.data));
      return state;
    },
    // Reducer to toggle finished state for task.
    toggleFinish: (state, action) => {
      let foundTask = state.data.find(
        (ele) => toString(ele.id) === toString(action.payload.rowId)
      );
      foundTask.finished = !foundTask.finished;
      sessionStorage.setItem("tasks", JSON.stringify(state.data));
      return state;
    },
  },
});

export const { addTask, editTask, toggleFinish } = taskSlice.actions;

export default taskSlice.reducer;
