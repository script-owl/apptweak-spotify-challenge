import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { ErrorPayload, RequestStatus } from "../../types/requests";
import {
  getTracks,
  getTracksSuccess,
  getTracksFailed,
  getTracksFromPlaylist,
  getTracksFromPlaylistSuccess,
  getTracksFromPlaylistFailed,
} from "./actions";

export interface Artist {
  id: string;
  name: string;
}

export interface Track {
  name: string;
  id: string;
  track: Track | undefined;
  artists: Array<Artist>;
  uri: string;
}

export interface TrackList {
  tracks: Array<Track>;
}

export interface TracksState {
  searchTrackList?: TrackList;
  selectedPlaylistTrackList?: TrackList;
  status: RequestStatus;
  error?: string;
}

const initialState: TracksState = {
  status: RequestStatus.IDLE,
};

const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTracks, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(getTracksSuccess, (state, action: PayloadAction<TrackList>) => {
        state.status = RequestStatus.SUCCESS;
        state.searchTrackList = action.payload;
      })
      .addCase(
        getTracksFailed,
        (state, action: PayloadAction<ErrorPayload>) => {
          state.status = RequestStatus.ERROR;
          state.error = action.payload.message;
        }
      )
      .addCase(getTracksFromPlaylist, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(
        getTracksFromPlaylistSuccess,
        (state, action: PayloadAction<TrackList>) => {
          state.status = RequestStatus.SUCCESS;
          state.selectedPlaylistTrackList = action.payload;
        }
      )
      .addCase(
        getTracksFromPlaylistFailed,
        (state, action: PayloadAction<ErrorPayload>) => {
          state.status = RequestStatus.ERROR;
          state.error = action.payload.message;
        }
      );
  },
});

export const {} = tracksSlice.actions;

export default tracksSlice.reducer;
