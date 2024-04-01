import { FC, ReactElement } from "react";

import Search from "./components/search";
import PlaylistAddButton from "./components/playlistaddbutton";
import PlaylistManager from "./components/playlistmanager";

const App: FC = (): ReactElement => {

  return (
    <div className="m-auto max-w-md py-2 space-y-20">
      <div className="flex justify-center space-x-4 ">
        <div>
          <Search />
        </div>
        <div>
          <PlaylistAddButton />
        </div>
      </div>

      <PlaylistManager />
    </div>
  );
};

export default App;
