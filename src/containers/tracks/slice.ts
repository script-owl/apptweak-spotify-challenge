import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { ErrorPayload, RequestStatus } from "../../types/requests";

export const getTracks = createAction<string>("tracks/getTracks");
export const getTracksSuccess = createAction<TrackList>(
  "tracks/getTracksSuccess"
);
export const getTracksFailed = createAction<ErrorPayload>(
  "tracks/getTracksFailed"
);

export interface Track {
  name: string;
  id: string;
}

export interface TrackList {
  tracks: Array<Track>;
}

export interface TracksState {
  list?: TrackList;
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
        state.list = action.payload;
      })
      .addCase(
        getTracksFailed,
        (state, action: PayloadAction<ErrorPayload>) => {
          state.status = RequestStatus.ERROR;
          state.error = action.payload.message;
        }
      );
  },
});

export const {} = tracksSlice.actions;

export default tracksSlice.reducer;
