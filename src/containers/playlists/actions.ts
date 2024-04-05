import { createAction } from "@reduxjs/toolkit";
import { NewPlaylist, Playlist, PlaylistList } from "./slice";
import { ErrorPayload } from "../../types/requests";
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

export const removeFromSelectedPlaylist = createAction<{
  track: Track;
  playlist: Playlist;
}>("playlists/removeFromSelectedPlaylist");
export const removeFromSelectedPlaylistSuccess = createAction(
  "playlists/removeFromSelectedPlaylistSuccess"
);
export const removeFromSelectedPlaylistFailed = createAction<ErrorPayload>(
  "playlists/removeFromSelectedPlaylistFailed"
);
