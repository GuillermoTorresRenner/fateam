import { configureStore } from "@reduxjs/toolkit";

import CharacterReducer from "../features/CharacterSlice";
import CampaignReducer from "../features/CampaignSlice";
import { characterApi } from "../services/characterServices";
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
  reducer: {
    character: CharacterReducer,
    campaign: CampaignReducer,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterApi.middleware),
});
setupListeners(store.dispatch);
export default store;
