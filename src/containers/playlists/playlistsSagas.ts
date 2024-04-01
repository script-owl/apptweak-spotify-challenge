import axios from "axios";

import { call, put, select, takeEvery } from "redux-saga/effects";
import { getPlaylists, getPlaylistsSuccess } from "./slice";
import { authSelectors } from "../auth/selectors";
import { getTracksFailed } from "../tracks/slice";

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
    yield put(getTracksFailed({ message: error.message }));
  }
}

export default function* playlistsSaga() {
  yield takeEvery(getPlaylists.type, getPlaylistsFromCurrentUser);
}
