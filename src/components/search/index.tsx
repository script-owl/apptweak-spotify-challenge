import { useState } from "react";
import SearchField from "./SearchField";
import SearchResults from "./SearchResults";

export default function Search() {
  const [search, setSearch] = useState("");

  function handleSearchChange(e: React.SetStateAction<string>) {
    setSearch(e);
    console.log(search);
  }

  return (
    <div className="max-w-md mx-auto">
      <SearchField handler={handleSearchChange} />
      <SearchResults query={search}/>
    </div>
  );
}
