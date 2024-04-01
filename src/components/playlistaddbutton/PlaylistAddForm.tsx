import { FC, ReactElement, useState } from "react";

// Define props interface
interface PlaylistAddFormProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlaylistAddForm: FC<PlaylistAddFormProps> = ({
  setShow,
}): ReactElement => {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [isCollaborative, setIsCollaborative] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can handle the form submission logic, for example, sending the data to a backend server
    console.log("Playlist Name:", playlistName);
    console.log("Description:", description);
    console.log("Public:", isPublic);
    console.log("Collaborative:", isCollaborative);
    // Reset form fields after submission
    setPlaylistName("");
    setDescription("");
    setIsPublic(true);
    setIsCollaborative(false);
    setShow(false); // Assuming you want to hide the form after submission
  };

  return (
    <div className="absolute w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Playlist name"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-500 font-bold">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              checked={isPublic}
              onChange={() => setIsPublic(!isPublic)}
            />
            <span className="text-sm">Public</span>
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-500 font-bold">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              checked={isCollaborative}
              onChange={() => setIsCollaborative(!isCollaborative)}
            />
            <span className="text-sm">Collaborative</span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaylistAddForm;
