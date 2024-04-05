import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { FC, ReactElement } from "react";
import TrackView from "./TrackView";
import { Track } from "../../containers/tracks/slice";

interface Props {
  handler: (track: Track) => void;
}

const SearchResults: FC<Props> = ({ handler }: Props): ReactElement => {
  const {
    searchTrackList: list,
    status,
    error,
  } = useSelector((state: RootState) => state.tracks);

  return (
    <div className="absolute bg-white border border-gray-300 rounded shadow-lg border rounded border-slate-800 bg-gray-100 p-1 overflow-auto min-h-0 max-h-80">
      {status === "error" ? (
        <div className="border rounded bg-red-300 p-1 px-2">{error}</div>
      ) : status === "pending" ? (
        <div>Loading tracks...</div>
      ) : list ? (
        list.tracks.map((item) => (
          <TrackView
            key={item.id}
            track={item}
            buttonInfo={{ handler: handler, text: "Add to playlist" }}
          ></TrackView>
        ))
      ) : (
        <div className="border rounded bg-blue-300 p-1 px-2">
          No current search
        </div>
      )}
    </div>
  );
};

// absolute left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg

export default SearchResults;
