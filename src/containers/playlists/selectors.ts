import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store/store";

const selectSelf = (state: RootState) => state.playlists;

export const tracksSelectors = {
  getTracks: createSelector(selectSelf, (playlists) => playlists.list),
};
