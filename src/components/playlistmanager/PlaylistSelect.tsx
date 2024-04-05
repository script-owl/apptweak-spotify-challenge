import { FC, ReactElement } from "react";
import PlaylistView from "./PlaylistView";
import { Playlist, PlaylistList } from "../../containers/playlists/slice";

interface Props {
  playlists: PlaylistList;
  handler: (playlist: Playlist) => void;
}

const PlaylistSelect: FC<Props> = ({
  playlists,
  handler,
}: Props): ReactElement => {
  return (
    <div className="flex flex-col"> {/* Container with flex column direction */}
      {playlists.items.map((playlist) => (
        <div key={playlist.id} className="mb-1 ml-auto"> {/* Wrapped in a div with margin bottom */}
          <PlaylistView
            playlist={playlist}
            handler={handler}
          />
        </div>
      ))}
    </div>
  );
};

export default PlaylistSelect;
