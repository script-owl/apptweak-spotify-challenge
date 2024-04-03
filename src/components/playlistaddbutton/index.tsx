import { FC, ReactElement, useState } from "react";
import PlaylistAddForm from "./PlaylistAddForm";

const PlaylistAddButton: FC = (): ReactElement => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="flex items-center focus-within:shadow-lg overflow-hidden">
        <button
          onClick={() => setShow(!show)}
          className="rounded-lg border border-slate-700 bg-blue-500 hover:bg-blue-700 text-white font-bold p-3"
        >
          New Playlist
        </button>
      </div>

      {show && (
        <div className="absolute w-full max-w-xs">
          <PlaylistAddForm/>
        </div>
      )}
    </div>
  );
};

export default PlaylistAddButton;
