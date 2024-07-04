import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    character: {},
  },
  reducers: {
    addCharacter: (state, action) => {
      state.character = action.payload;
    },
  },
});
export const { addCharacter } = characterSlice.actions;
export default characterSlice.reducer;
