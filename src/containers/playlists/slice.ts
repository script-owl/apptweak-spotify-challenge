import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { ErrorPayload, RequestStatus } from "../../types/requests";
import { Track } from "../tracks/slice";

export const getPlaylists = createAction("playlists/getPlaylists");
export const getPlaylistsSuccess = createAction<PlaylistList>(
  "playlists/getPlaylistsSuccess"
);
export const getPlaylistsFailed = createAction<ErrorPayload>(
  "playlists/getPlaylistsFailed"
);

export const createPlaylist = createAction<NewPlaylist>(
  "playlists/createPlaylist"
);
export const createPlaylistSuccess = createAction(
  "playlists/createPlaylistSuccess"
);
export const createPlaylistFailed = createAction<ErrorPayload>(
  "playlists/createPlaylistFailed"
);

export const addToSelectedPlaylist = createAction<{
  track: Track;
  playlist: Playlist;
}>("playlists/addToSelectedPlaylist");
export const addToSelectedPlaylistSuccess = createAction(
  "playlists/addToSelectedPlaylistSuccess"
);
export const addToSelectedPlaylistFailed = createAction<ErrorPayload>(
  "playlists/addToSelectedPlaylistFailed"
);

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
  list?: PlaylistList;
  status: RequestStatus;
  error?: string;
  creationStatus: RequestStatus;
  creationError?: string;
  addStatus: RequestStatus;
  addError?: string;
  currentPlaylist?: Playlist;
}

const initialState: PlaylistsState = {
  status: RequestStatus.IDLE,
  creationStatus: RequestStatus.IDLE,
  addStatus: RequestStatus.IDLE,
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
      );
  },
});

export const { setCurrentPlaylist } = playlistsSlice.actions;

export default playlistsSlice.reducer;
