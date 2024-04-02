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
    <div>
      {playlists.items.map((playlist) => (
        <PlaylistView
          key={playlist.id}
          playlist={playlist}
          handler={handler}
        ></PlaylistView>
      ))}
    </div>
  );
};

export default PlaylistSelect;
