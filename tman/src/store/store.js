import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import taskReducer from "./taskSlice";
import formReducer from "./formSlice";
import categoryReducer from "./categorySlice";

export default configureStore({
  reducer: {
    loggedIn: loginReducer,
    tasks: taskReducer,
    forms: formReducer,
    categories: categoryReducer,
  },
});
