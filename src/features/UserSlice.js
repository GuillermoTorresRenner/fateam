import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      user: null,
      token: null,
      userId: null,
    },
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.value.user = payload.email;
      state.value.token = payload.token;
      state.value.userId = payload.userId;
    },
    clearUser: (state) => {
      state.value.user = null;
      state.value.token = null;
      state.value.userId = null;
    },
  },
});
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
