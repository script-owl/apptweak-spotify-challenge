import { all } from "@redux-saga/core/effects";

import authSaga from "../containers/auth/authSagas";
import tracksSaga from "../containers/tracks/tracksSagas";
import playlistsSaga from "../containers/playlists/playlistsSagas";

export default function* rootSaga() {
  yield all([authSaga(), tracksSaga(), playlistsSaga()]);
}
