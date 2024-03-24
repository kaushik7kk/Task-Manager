import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import taskReducer from "./taskSlice";

export default configureStore({
  reducer: {
    loggedIn: loginReducer,
    tasks: taskReducer,
  },
});
