import React, { FC, ReactElement, useState } from "react";
import { useDispatch } from "react-redux";

import SearchField from "./SearchField";
import SearchResults from "./SearchResults";

import { getTracks } from "../../containers/tracks/slice";

const Search: FC = (): ReactElement => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  function handleSearchChange(e: React.SetStateAction<string>) {
    setSearch(e);
  }

  function handleSearchButton() {
    dispatch(getTracks(search));
  }

  return (
    <div className="max-w-md mx-auto my-2 space-y-4">
      <SearchField
        changeHandler={handleSearchChange}
        buttonHandler={handleSearchButton}
      />
      <SearchResults query={search} />
    </div>
  );
};

export default Search;
