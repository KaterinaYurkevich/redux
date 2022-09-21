import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/postSlice";

export default configureStore({
  reducer: {
    posts: postSlice
  }
})