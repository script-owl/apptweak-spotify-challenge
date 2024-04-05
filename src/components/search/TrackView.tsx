import React, { FC, ReactElement } from "react";
import { Track } from "../../containers/tracks/slice";

interface Props {
  track: Track;
  buttonInfo?: {
    handler: (track: Track) => void;
    text: string;
  };
}

const TrackView: FC<Props> = ({ track, buttonInfo }: Props): ReactElement => {
  return (
    <div className="flex items-center border rounded border-gray-300 bg-indigo-100 px-4 py-2 mb-1">
      <div className="flex-grow">
        <div className="text-lg font-semibold">{track.name}</div>
        <div className="text-gray-600">
          <h2 className="font-semibold text-sm">Artists</h2>
          <ul className="list-disc pl-4">
            {track.artists.map((item) => (
              <li key={item.id} className="text-sm">{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
      {buttonInfo && (
        <div className="flex-shrink-0 ml-4 border-l border-gray-300 pl-4">
          <button
            onClick={() => buttonInfo.handler(track)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            {buttonInfo.text}
          </button>
        </div>
      )}
    </div>
  );
};

export default TrackView;
