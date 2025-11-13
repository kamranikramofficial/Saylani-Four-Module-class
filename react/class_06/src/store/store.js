// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer, // must be inside `reducer`
  },
});

export default store;