import { FC, ReactElement, useEffect } from "react";
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

const PlaylistManager: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const { list, currentPlaylist } = useSelector(
    (state: RootState) => state.playlists
  );

  function handleSelectPlaylist(playlist: Playlist) {
    dispatch(setCurrentPlaylist(playlist));
    dispatch(getTracksFromPlaylist(playlist.id));
  }

  useEffect(() => {
    dispatch(getPlaylists());
  }, []);

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
        <div className="font-bold p-3 text-right">
          <u>Playlists</u>
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
        <PlaylistTracks
          playlist={currentPlaylist}
          handler={handleRemoveFromPlaylist}
        />
      </div>
    </div>
  );
};

export default PlaylistManager;
