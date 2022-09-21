import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});

export default store;
