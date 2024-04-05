import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Playlist } from "../../containers/playlists/slice";
import TrackView from "../search/TrackView";
import { Track } from "../../containers/tracks/slice";

interface Props {
  playlist: Playlist | undefined;
  handler: (track: Track) => void;
}

const PlaylistTracks: FC<Props> = ({ playlist, handler }: Props): ReactElement => {
  const { selectedPlaylistTrackList, status } = useSelector(
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

      <div className="overflow-auto h-96">
        {status === "error" ? (
          <div>Error loading tracks.</div>
        ) : status === "pending" ? (
          <div>Loading tracks ...</div>
        ) : selectedPlaylistTrackList ? (
          selectedPlaylistTrackList.tracks.map((item) =>
            item.track ? (
              <TrackView
                key={item.track.name}
                track={item.track}
                buttonInfo={{
                  handler: handler,
                  text: "Remove from playlist",
                }}
              ></TrackView>
            ) : (
              <div>N/A</div>
            )
          )
        ) : (
          <div>Could not load playlist items</div>
        )}
      </div>
    </div>
  );
};

export default PlaylistTracks;
