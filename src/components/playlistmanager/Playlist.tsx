import { FC, ReactElement } from "react";
import { Playlist as PlaylistType } from "../../containers/playlists/slice";

interface Props {
  playlist: PlaylistType;
  handler: (playlist: PlaylistType) => void;
}

const Playlist: FC<Props> = ({ playlist, handler }: Props): ReactElement => {
  return (
    <div className="flex justify-between border rounded border-slate-800 bg-indigo-200 px-1 mb-1">
      <div>{playlist.name}</div>
      <button onClick={() => handler(playlist)}> SELECT </button>
    </div>
  );
};

export default Playlist;
