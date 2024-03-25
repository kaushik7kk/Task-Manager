import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import taskReducer from "./taskSlice";
import formReducer from "./formSlice";

export default configureStore({
  reducer: {
    loggedIn: loginReducer,
    tasks: taskReducer,
    forms: formReducer,
  },
});
