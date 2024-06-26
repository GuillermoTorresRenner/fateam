import { configureStore } from "@reduxjs/toolkit";
import CharacterSlice from "./CharacterSlice";

export default configureStore({
  reducer: {
    counter: CharacterSlice,
  },
});
