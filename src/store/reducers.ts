import { combineReducers } from "redux";

import authentication from "../containers/auth/slice";
import tracks from "../containers/tracks/slice";

const rootReducer = combineReducers({
  authentication: authentication, tracks: tracks
});

export default rootReducer;
