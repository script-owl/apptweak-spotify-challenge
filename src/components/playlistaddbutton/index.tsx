import { FC, ReactElement, useState } from "react";
import PlaylistAddForm from "./PlaylistAddForm";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const PlaylistAddButton: FC = (): ReactElement => {
  const [show, setShow] = useState(false);

  const { creationStatus, creationError } = useSelector(
    (state: RootState) => state.playlists
  );

  return (
    <div>
      <div className="flex">
        <div className="flex items-center focus-within:shadow-lg overflow-hidden">
          <button
            onClick={() => setShow(!show)}
            className="rounded-lg border border-slate-700 bg-blue-500 hover:bg-blue-700 text-white font-bold p-3"
          >
            New Playlist
          </button>
        </div>

        <div className="flex items-center focus-within:shadow-lg overflow-hidden mx-4">
          {creationStatus === "success" ? (
            <div>Successfully Created!</div>
          ) : creationStatus === "error" ? (
            <div>{creationError}</div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      {show && (
        <div className="absolute w-full max-w-xs">
          <PlaylistAddForm />
        </div>
      )}
    </div>
  );
};

export default PlaylistAddButton;
