import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import CharacterReducer from "../features/CharacterSlice";
import ImageReducer from "../features/ImageSlice";
import { characterApi } from "../services/characterServices";
import UserReducer from "../features/UserSlice";
import { authApi } from "../services/authService";
const store = configureStore({
  reducer: {
    //config de slices
    character: CharacterReducer,
    user: UserReducer,
    image: ImageReducer,
    //Config de Apis
    [characterApi.reducerPath]: characterApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(characterApi.middleware)
      .concat(authApi.middleware),
});
setupListeners(store.dispatch);
export default store;
