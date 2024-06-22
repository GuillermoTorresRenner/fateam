import { configureStore } from "@reduxjs/toolkit";
import conterReducer from "./slice";

export default configureStore({
  reducer: {
    counter: conterReducer,
  },
});
