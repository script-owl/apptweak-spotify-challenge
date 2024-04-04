import React, { FC, ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchField from "./SearchField";
import SearchResults from "./SearchResults";

import { Track, getTracks } from "../../containers/tracks/slice";
import {
  Playlist,
  addToSelectedPlaylist,
} from "../../containers/playlists/slice";
import { RootState } from "../../store/store";

const Search: FC = (): ReactElement => {
  const [search, setSearch] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();

  const { currentPlaylist } = useSelector(
    (state: RootState) => state.playlists
  );

  function handleSearchChange(e: React.SetStateAction<string>) {
    setSearch(e);
  }

  function handleSearchButton() {
    dispatch(getTracks(search));
  }

  function handleAddToPlaylist(track: Track) {
    currentPlaylist
      ? dispatch(
          addToSelectedPlaylist({ track: track, playlist: currentPlaylist })
        )
      : console.log("No selected playlist");
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SearchField
        changeHandler={handleSearchChange}
        buttonHandler={handleSearchButton}
      />
      <div style={{ display: isHovered ? "block" : "none" }}>
        <SearchResults handler={handleAddToPlaylist} />
      </div>
    </div>
  );
};

export default Search;
