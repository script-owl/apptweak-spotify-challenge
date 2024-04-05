import { FC, ReactElement } from "react";
import Search from "./components/search";
import PlaylistAddButton from "./components/playlistaddbutton";
import PlaylistManager from "./components/playlistmanager";

const App: FC = (): ReactElement => {
  return (
    <div className="flex h-screen items-center flex-col"> {/* Added flex-col to make items stack vertically */}
      <div className="flex space-x-4 mb-4"> {/* Added mb-4 for margin bottom */}
        <div>
          <Search />
        </div>
        <div>
          <PlaylistAddButton />
        </div>
      </div>
      <div>
        <PlaylistManager />
      </div>
    </div>
  );
};

export default App;
