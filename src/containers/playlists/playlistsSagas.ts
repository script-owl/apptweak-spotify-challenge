import axios from "axios";

import { call, put, select, takeEvery } from "redux-saga/effects";
import {
  getPlaylists,
  getPlaylistsSuccess,
  getPlaylistsFailed,
  createPlaylist,
  createPlaylistFailed,
  createPlaylistSuccess,
  addToSelectedPlaylist,
  Playlist,
} from "./slice";
import { authSelectors } from "../auth/selectors";
import { User } from "../auth/slice";
import { Track } from "../tracks/slice";

function* getPlaylistsFromCurrentUser() {
  try {
    const accessToken: string = yield select(authSelectors.getAccessToken);

    const request = () =>
      axios.get<any>("https://api.spotify.com/v1/me/playlists", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    const { data } = yield call(request);

    yield put(
      getPlaylistsSuccess({
        items: data.items,
      })
    );
  } catch (error: any) {
    yield put(getPlaylistsFailed({ message: error.message }));
  }
}

function* createNewPlaylist(action: ReturnType<typeof createPlaylist>) {
  try {
    const accessToken: string = yield select(authSelectors.getAccessToken);
    const user: User = yield select(authSelectors.getUser);
    const newPlaylist = action.payload;

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    const request = () =>
      axios.post<any>(
        `https://api.spotify.com/v1/users/${user.userId}/playlists`,
        newPlaylist,
        { headers }
      );
    yield call(request);

    yield put(createPlaylistSuccess());
  } catch (error: any) {
    yield put(createPlaylistFailed({ message: error.message }));
  }
}

function* addToPlaylist(action: ReturnType<typeof addToSelectedPlaylist>) {
  try {
    const accessToken: string = yield select(authSelectors.getAccessToken);
    const track: Track = action.payload.track;
    const playlist: Playlist = action.payload.playlist;

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    const request = () =>
      axios.post<any>(
        `https://api.spotify.com/v1/playlists/${playlist.id}/tracks`,
        { uris: [track.uri] },
        { headers }
      );
    yield call(request);

    yield put(createPlaylistSuccess());
  } catch (error: any) {
    yield put(createPlaylistFailed({ message: error.message }));
  }
}

export default function* playlistsSaga() {
  yield takeEvery(getPlaylists.type, getPlaylistsFromCurrentUser);
  yield takeEvery(createPlaylist.type, createNewPlaylist);
  yield takeEvery(addToSelectedPlaylist.type, addToPlaylist);
}
