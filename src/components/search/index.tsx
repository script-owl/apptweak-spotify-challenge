import React, { FC, ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchField from "./SearchField";
import SearchResults from "./SearchResults";

import { tracksSelectors } from "../../containers/tracks/selectors";
import { getTracks } from "../../containers/tracks/slice";
import { RootState } from "../../store/store";

const Search: FC = (): ReactElement => {
  const [search, setSearch] = useState("");

  const {list, status, error} = useSelector((state: RootState) => state.tracks)

  const dispatch = useDispatch();

  function handleSearchChange(e: React.SetStateAction<string>) {
    setSearch(e);
  }
  
  function handleSearchButton() {
    console.log("pressed");
    dispatch(getTracks())
    console.log(list)
    list?.tracks?.forEach((item) => {console.log(item)})
  }

  return (
    <div className="max-w-md mx-auto">
      <SearchField changeHandler={handleSearchChange} buttonHandler={handleSearchButton}/>
      <SearchResults query={search}/>
    </div>
  );
}

export default Search;
