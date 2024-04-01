import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { ErrorPayload, RequestStatus } from "../../types/requests";
import { TrackList } from "../tracks/slice";

export const getPlaylists = createAction("tracks/getPlaylists");
export const getPlaylistsSuccess = createAction<PlaylistList>(
  "tracks/getPlaylistsSuccess"
);
export const getPlaylistsFailed = createAction<ErrorPayload>(
  "tracks/getPlaylistsFailed"
);

export interface Playlist {
  id: string;
  name: string;
  items: TrackList;
}

export interface PlaylistList {
  items: Array<Playlist>;
}

export interface PlaylistsState {
  list?: PlaylistList;
  status: RequestStatus;
  error?: string;
}

const initialState: PlaylistsState = {
  status: RequestStatus.IDLE,
};

const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylists, (state) => {
        state.status = RequestStatus.PENDING;
      })
      .addCase(
        getPlaylistsSuccess,
        (state, action: PayloadAction<PlaylistList>) => {
          state.status = RequestStatus.SUCCESS;
          state.list = action.payload;
        }
      )
      .addCase(
        getPlaylistsFailed,
        (state, action: PayloadAction<ErrorPayload>) => {
          state.status = RequestStatus.ERROR;
          state.error = action.payload.message;
        }
      );
  },
});

export const {} = playlistsSlice.actions;

export default playlistsSlice.reducer;
