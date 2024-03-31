import { FC, ReactElement } from "react";

import Search from "./components/search";
import PlaylistAddButton from "./components/playlistaddbutton";

const App: FC = (): ReactElement => {
  return (
    <div className="flex justify-center space-x-4">
      <div>
        <Search />
      </div>

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
