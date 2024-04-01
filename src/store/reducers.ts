import { combineReducers } from "redux";

import authentication from "../containers/auth/slice";
import tracks from "../containers/tracks/slice";
import playlists from "../containers/playlists/slice";

const rootReducer = combineReducers({
  authentication: authentication,
  tracks: tracks,
  playlists: playlists
});

export default rootReducer;
