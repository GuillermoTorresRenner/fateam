import { configureStore } from "@reduxjs/toolkit";

import CharacterReducer from "../features/CharacterSlice";
import CampaignReducer from "../features/CampaignSlice";
import { characterApi } from "../services/characterServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import UserReducer from "../features/UserSlice";
import { authApi } from "../services/authService";
const store = configureStore({
  reducer: {
    character: CharacterReducer,
    campaign: CampaignReducer,
    user: UserReducer,
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
