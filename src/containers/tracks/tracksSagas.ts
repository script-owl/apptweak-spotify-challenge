import axios from "axios";

import { call, put, select, takeEvery } from "redux-saga/effects";

import { authSelectors } from "../auth/selectors";
import {
  getTracks,
  getTracksFailed,
  getTracksSuccess,
  getTracksFromPlaylist,
  getTracksFromPlaylistSuccess,
  getTracksFromPlaylistFailed,
} from "./slice";

function* getTracksByQuerySaga(action: ReturnType<typeof getTracks>) {
  try {
    const accessToken: string = yield select(authSelectors.getAccessToken);
    const query = action.payload;

    const request = () =>
      axios.get<any>("https://api.spotify.com/v1/search", {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: { q: query, type: "track" },
      });
    const { data } = yield call(request);

    yield put(getTracksSuccess({ tracks: data.tracks.items }));
  } catch (error: any) {
    yield put(getTracksFailed({ message: error.message }));
  }
}

function* getTracksByPlaylistUrl(
  action: ReturnType<typeof getTracksFromPlaylist>
) {
  try {
    const accessToken: string = yield select(authSelectors.getAccessToken);
    const id = action.payload;

    const request = () =>
      axios.get<any>("https://api.spotify.com/v1/playlists/" + id, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    const { data } = yield call(request);

    yield put(getTracksFromPlaylistSuccess({ tracks: data.tracks.items }));
  } catch (error: any) {
    yield put(getTracksFromPlaylistFailed({ message: error.message }));
  }
}

export default function* tracksSaga() {
  yield takeEvery(getTracks.type, getTracksByQuerySaga);
  yield takeEvery(getTracksFromPlaylist.type, getTracksByPlaylistUrl);
}
