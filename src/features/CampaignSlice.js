import { createSlice } from "@reduxjs/toolkit";

export const campaignSlice = createSlice({
  name: "campaign",
  initialState: {
    campaign: {},
  },
  reducers: {
    setCampaign: (state, action) => {
      state.campaign = action.payload;
    },
  },
});
export const { setCampaign } = campaignSlice.actions;
export default campaignSlice.reducer;
