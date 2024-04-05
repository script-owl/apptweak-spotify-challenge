import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ErrorPayload, RequestStatus } from "../../types/requests";
import {
  getPlaylists,
  getPlaylistsSuccess,
  getPlaylistsFailed,
  createPlaylist,
  createPlaylistSuccess,
  createPlaylistFailed,
  addToSelectedPlaylist,
  addToSelectedPlaylistSuccess,
  addToSelectedPlaylistFailed,
  removeFromSelectedPlaylist,
  removeFromSelectedPlaylistSuccess,
  removeFromSelectedPlaylistFailed,
} from "./actions";

export interface NewPlaylist {
  name: string;
  description: string;
  collaborative: boolean;
  public: boolean;
}

export interface Playlist {
  id: string;
  name: string;
  tracks: { href: string; total: number };
}

export interface PlaylistList {
  items: Array<Playlist>;
}

export interface PlaylistsState {
  currentPlaylist?: Playlist;
  list?: PlaylistList;
  status: RequestStatus;
  error?: string;
  creationStatus: RequestStatus;
  creationError?: string;
  addStatus: RequestStatus;
  addError?: string;
  removeStatus: RequestStatus;
  removeError?: string;
}

const initialState: PlaylistsState = {
  status: RequestStatus.IDLE,
  creationStatus: RequestStatus.IDLE,
  addStatus: RequestStatus.IDLE,
  removeStatus: RequestStatus.IDLE,
};

const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    setCurrentPlaylist(state, action: PayloadAction<Playlist>) {
      state.currentPlaylist = action.payload;
    },
  },
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
      )
      .addCase(createPlaylist, (state) => {
        state.creationStatus = RequestStatus.PENDING;
      })
      .addCase(createPlaylistSuccess, (state) => {
        state.creationStatus = RequestStatus.SUCCESS;
      })
      .addCase(
        createPlaylistFailed,
        (state, action: PayloadAction<ErrorPayload>) => {
          state.creationStatus = RequestStatus.ERROR;
          state.creationError = action.payload.message;
        }
      )
      .addCase(addToSelectedPlaylist, (state) => {
        state.addStatus = RequestStatus.PENDING;
      })
      .addCase(addToSelectedPlaylistSuccess, (state) => {
        state.addStatus = RequestStatus.SUCCESS;
      })
      .addCase(
        addToSelectedPlaylistFailed,
        (state, action: PayloadAction<ErrorPayload>) => {
          state.addStatus = RequestStatus.ERROR;
          state.addError = action.payload.message;
        }
      )
      .addCase(removeFromSelectedPlaylist, (state) => {
        state.removeStatus = RequestStatus.PENDING;
      })
      .addCase(removeFromSelectedPlaylistSuccess, (state) => {
        state.removeStatus = RequestStatus.SUCCESS;
      })
      .addCase(
        removeFromSelectedPlaylistFailed,
        (state, action: PayloadAction<ErrorPayload>) => {
          state.removeStatus = RequestStatus.ERROR;
          state.removeError = action.payload.message;
        }
      );
  },
});

export const { setCurrentPlaylist } = playlistsSlice.actions;

export default playlistsSlice.reducer;
