import { FC, ReactElement } from "react";
import { default as PlaylistComponent } from "./Playlist";
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
        <PlaylistComponent
          key={playlist.id}
          playlist={playlist}
          handler={handler}
        ></PlaylistComponent>
      ))}
    </div>
  );
};

export default PlaylistSelect;
