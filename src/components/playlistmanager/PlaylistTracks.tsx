import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Playlist } from "../../containers/playlists/slice";
import TrackView from "../search/TrackView";

interface Props {
  playlist: Playlist | undefined;
}

const PlaylistTracks: FC<Props> = ({ playlist }: Props): ReactElement => {
  const { selectedPlaylistTrackList, status, error } = useSelector(
    (state: RootState) => state.tracks
  );

  return (
    <div>
      <div>
        {playlist ? (
          <div>{playlist.name}</div>
        ) : (
          <div>No playlist selected</div>
        )}
      </div>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      {status == "error" ? (
        <div>Error loading tracks.</div>
      ) : status == "pending" ? (
        <div>Loading tracks ...</div>
      ) : selectedPlaylistTrackList ? (
        selectedPlaylistTrackList.tracks.map((item) =>
          item.track ? (
            <TrackView key={item.track.name} track={item.track}></TrackView>
          ) : (
            <div>N/A</div>
          )
        )
      ) : (
        <div>Could not load playlist items</div>
      )}
    </div>
  );
};

export default PlaylistTracks;
