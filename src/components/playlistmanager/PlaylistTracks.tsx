import { FC, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Playlist } from "../../containers/playlists/slice";
import TrackView from "../search/TrackView";
import { Track } from "../../containers/tracks/slice";
import { removeFromSelectedPlaylist } from "../../containers/playlists/actions";

interface Props {
  playlist: Playlist | undefined;
}

const PlaylistTracks: FC<Props> = ({ playlist }: Props): ReactElement => {
  const { selectedPlaylistTrackList, status, error } = useSelector(
    (state: RootState) => state.tracks
  );
  const { currentPlaylist, removeStatus, removeError } = useSelector(
    (state: RootState) => state.playlists
  );

  const dispatch = useDispatch();
  function removeFromPlaylistHandler(track: Track) {
    currentPlaylist
      ? dispatch(
          removeFromSelectedPlaylist({
            track: track,
            playlist: currentPlaylist,
          })
        )
      : console.log("No currently selected playlist");
  }

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
            <TrackView
              key={item.track.name}
              track={item.track}
              buttonInfo={{
                handler: removeFromPlaylistHandler,
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
  );
};

export default PlaylistTracks;
