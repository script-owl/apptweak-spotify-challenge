import { FC, ReactElement } from "react";

import Search from "./components/search";
import PlaylistAddButton from "./components/playlistaddbutton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { getPlaylists } from "./containers/playlists/slice";

const App: FC = (): ReactElement => {

  const dispatch = useDispatch();
  
  const { list, status, error } = useSelector(
    (state: RootState) => state.playlists
  );

  function click() {

    dispatch(getPlaylists())
  
    console.log(list)
  }


  return (
    <div className="flex justify-center space-x-4">
      <div>
        <Search />
      </div>

      <button onClick={() => click()}> CLICK</button>

      <div>
        <PlaylistAddButton />
        <div>PlaylistSelect</div>
        <div>SelectedPlaylistDescription</div>
        <div>PlaylistTracks</div>
      </div>
    </div>
  );
};

export default App;
