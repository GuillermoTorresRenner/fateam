import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    character: {},
  },
  reducers: {
    setCharacter: (state, action) => {
      state.character = action.payload;
    },
  },
});
export const { setCharacter } = characterSlice.actions;
export default characterSlice.reducer;
