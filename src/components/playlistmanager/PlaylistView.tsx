import { FC, ReactElement } from "react";
import { Playlist } from "../../containers/playlists/slice";

interface Props {
  playlist: Playlist;
  handler: (playlist: Playlist) => void;
}

const PlaylistView: FC<Props> = ({
  playlist,
  handler,
}: Props): ReactElement => {
  return (
    <button onClick={() => handler(playlist)} className="border rounded border-slate-800 bg-indigo-200 px-1 mb-1">
      <div>{playlist.name}</div>
    </button>
  );
};

export default PlaylistView;
