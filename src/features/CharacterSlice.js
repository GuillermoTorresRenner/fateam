import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    character: {},
  },
  reducers: {
    setCharacter: (state, { payload }) => {
      state.character = payload;
    },
  },
});
export const { setCharacter } = characterSlice.actions;
export default characterSlice.reducer;
