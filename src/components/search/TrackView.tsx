import { FC, ReactElement } from "react";
import { Track } from "../../containers/tracks/slice";

interface Props {
  track: Track;
}

const TrackView: FC<Props> = ({ track }: Props): ReactElement => {
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
    </div>
  );
};

export default TrackView;
