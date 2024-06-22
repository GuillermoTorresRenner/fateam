import {createSlice} from "@reduxjs/toolkit";
export const sslice = createSlice({
  name: "sslice",
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
export const {increment, decrement} = sslice.actions;
export default sslice.reducer;