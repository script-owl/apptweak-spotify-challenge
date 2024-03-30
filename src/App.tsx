import React, { FC, ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authSelectors } from "./containers/auth/selectors";
import Search from "./components/search";
import { getTracks } from "./containers/tracks/slice";

const App: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);

  // TODO: You can access user data and now fetch user's playlists
  console.log(user);

  return (
    <div>
      <div>
        Header
        <Search />
        <div>NewPlaylistButton</div>
      </div>

      <div>
        Body
        
        <div>PlaylistSelect</div>
        <div>SelectedPlaylistDescription</div>

        <div>PlaylistTracks</div>
      </div>
    </div>
  );
};

export default App;
