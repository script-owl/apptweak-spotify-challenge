import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { FC, ReactElement } from "react";
import Track from "./Track";

interface Props {
  query: string;
}

const SearchResults: FC<Props> = ({ query }: Props): ReactElement => {
  const { list, status, error } = useSelector(
    (state: RootState) => state.tracks
  );

  return (
    <div>
      <div className="border rounded border-slate-800 bg-gray-100 px-2 py-1">
        {status == "error" ? <div>{error}</div> : <div>{status}</div>}
      </div>
      <div>
        {list ? (
          list.tracks.map((item) => <Track key={item.id} track={item}></Track>)
        ) : (
          <div>No current search</div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
