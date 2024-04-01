import React, { FC, ReactElement, useState } from "react";
import { useDispatch } from "react-redux";

import SearchField from "./SearchField";
import SearchResults from "./SearchResults";

import { getTracks } from "../../containers/tracks/slice";

const Search: FC = (): ReactElement => {
  const [search, setSearch] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();

  function handleSearchChange(e: React.SetStateAction<string>) {
    setSearch(e);
  }

  function handleSearchButton() {
    dispatch(getTracks(search));
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
        <SearchResults/>
      </div>
    </div>
  );
};

export default Search;
