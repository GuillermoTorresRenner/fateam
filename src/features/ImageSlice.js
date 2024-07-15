import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
  name: "image",
  initialState: {
    image: null,
  },
  reducers: {
    setImage: (state, { payload }) => {
      state.image = payload.image;
    },
    clearImage: (state) => {
      state.image = null;
    },
  },
});
export const { setImage, clearImage } = imageSlice.actions;
export default imageSlice.reducer;
