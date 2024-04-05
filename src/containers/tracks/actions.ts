import { createAction } from "@reduxjs/toolkit";
import { TrackList } from "./slice";
import { ErrorPayload } from "../../types/requests";

export const getTracks = createAction<string>("tracks/getTracks");
export const getTracksSuccess = createAction<TrackList>(
  "tracks/getTracksSuccess"
);
export const getTracksFailed = createAction<ErrorPayload>(
  "tracks/getTracksFailed"
);

export const getTracksFromPlaylist = createAction<string>(
  "tracks/getTracksFromPlaylist"
);
export const getTracksFromPlaylistSuccess = createAction<TrackList>(
  "tracks/getTracksFromPlaylistSuccess"
);
export const getTracksFromPlaylistFailed = createAction<ErrorPayload>(
  "tracks/getTracksFromPlaylistFailed"
);
