import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { FC, ReactElement } from "react";
import Track from "./Track";

const SearchResults: FC = (): ReactElement => {
  const { list, status, error } = useSelector(
    (state: RootState) => state.tracks
  );

  return (
    <div>
      <div className="absolute bg-white border border-gray-300 rounded shadow-lg border rounded border-slate-800 bg-gray-100 p-1">
        {status == "error" ? (
          <div className="border rounded bg-red-300 p-1 px-2">
            Invalid search
          </div>
        ) : list ? (
          list.tracks.map((item) => <Track key={item.id} track={item}></Track>)
        ) : (
          <div className="border rounded bg-blue-300 p-1 px-2">
            No current search
          </div>
        )}
      </div>
    </div>
  );
};

// absolute left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg

export default SearchResults;
