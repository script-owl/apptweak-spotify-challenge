import { FC, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import PlaylistSelect from "./PlaylistSelect";
import { Playlist, setCurrentPlaylist } from "../../containers/playlists/slice";
import PlaylistTracks from "./PlaylistTracks";
import {
  getPlaylists,
  removeFromSelectedPlaylist,
} from "../../containers/playlists/actions";
import { getTracksFromPlaylist } from "../../containers/tracks/actions";
import { Track } from "../../containers/tracks/slice";
import LoadButton from "./LoadButton";

const PlaylistManager: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const { list, currentPlaylist } = useSelector(
    (state: RootState) => state.playlists
  );

  function handleSelectPlaylist(playlist: Playlist) {
    dispatch(setCurrentPlaylist(playlist));
    dispatch(getTracksFromPlaylist(playlist.id));
  }

  function handleLoadPlaylists() {
    dispatch(getPlaylists());
  }

  function handleLoadPlaylist() {
    if (currentPlaylist) dispatch(getTracksFromPlaylist(currentPlaylist.id));
  }

  function handleRemoveFromPlaylist(track: Track) {
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
    <div className="flex space-x-6">
      <div className="space-y-4">
        <div>
          <LoadButton handler={handleLoadPlaylists} text={"Load Playlists"} />
        </div>
        <div>
          {list ? (
            <PlaylistSelect playlists={list} handler={handleSelectPlaylist} />
          ) : (
            <div> No playlists loaded </div>
          )}
        </div>
      </div>
      <div className="border-l border-gray-400"></div>
      <div className="space-y-4">
        <LoadButton handler={handleLoadPlaylist} text={"Load Tracks"} />
        <PlaylistTracks
          playlist={currentPlaylist}
          handler={handleRemoveFromPlaylist}
        />
      </div>
    </div>
  );
};

export default PlaylistManager;
