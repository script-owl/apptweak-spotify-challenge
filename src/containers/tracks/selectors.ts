import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store/store";

const selectSelf = (state: RootState) => state.tracks;

export const tracksSelectors = {
  getTracks: createSelector(selectSelf, (tracks) => tracks.list),
};
