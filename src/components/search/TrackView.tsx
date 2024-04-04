import { FC, ReactElement } from "react";
import { Track } from "../../containers/tracks/slice";

interface Props {
  track: Track;
  handler?: (track: Track) => void | undefined;
}

const TrackView: FC<Props> = ({ track, handler }: Props): ReactElement => {
  return (
    <div className="flex justify-between border rounded border-slate-800 bg-indigo-200 px-1 mb-1">
      <div>{track.name}</div>
      <div>
        <h2>Artists</h2>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <ul className="list-disc">
          {track.artists.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center focus-within:shadow-lg overflow-hidden">
        {handler ? (
          <button
            onClick={() => handler(track)}
            className="rounded-lg border border-slate-700 bg-blue-500 hover:bg-blue-700 text-white font-bold p-3"
          >
            Add to current playlist
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TrackView;
