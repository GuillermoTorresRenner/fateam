import { createSlice } from "@reduxjs/toolkit";
export const characterSlice = createSlice({
  name: "characterSlice",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
export const { increment, decrement } = characterSlice.actions;
export default characterSlice.reducer;
