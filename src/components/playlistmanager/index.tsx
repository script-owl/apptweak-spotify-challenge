import { FC, ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import PlaylistSelect from "./PlaylistSelect";
import { Playlist, setCurrentPlaylist } from "../../containers/playlists/slice";
import PlaylistTracks from "./PlaylistTracks";
import { getPlaylists } from "../../containers/playlists/actions";
import { getTracksFromPlaylist } from "../../containers/tracks/actions";

const PlaylistManager: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const { list, status, error, currentPlaylist } = useSelector(
    (state: RootState) => state.playlists
  );

  function selectPlaylistHandler(playlist: Playlist) {
    dispatch(setCurrentPlaylist(playlist));
    dispatch(getTracksFromPlaylist(playlist.id));
  }

  function click() {
    if (list) console.log(list.items);
    dispatch(getPlaylists());
  }

  return (
    <div className="flex space-x-6">
      <div className="space-y-4">
        <button
          className="rounded-lg border border-slate-700 bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 flex items-center" // Add flex and items-center classes to align icon and text
          onClick={() => click()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="white"
          >
            <path d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z" />
          </svg>
          Load Playlists
        </button>
        <div>
          {list ? (
            <PlaylistSelect playlists={list} handler={selectPlaylistHandler} />
          ) : (
            <div> No playlists loaded </div>
          )}
        </div>
      </div>
      <PlaylistTracks playlist={currentPlaylist} />
    </div>
  );
};

export default PlaylistManager;
