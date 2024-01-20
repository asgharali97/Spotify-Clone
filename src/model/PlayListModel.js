import React,{useState} from 'react'
import InputText from "../Componets/Share/InputText"
import {AutenticatedPostRequest} from "../Utils/ServerHelper"
const PlayListModel = ({closeModal}) => {
    const [playlistName, setPlaylistName] = useState("");
    const [playlistThumbnail, setPlaylistThumbnail] = useState("");

    const createPlaylist = async () => {
        const response = await AutenticatedPostRequest(
            "/api/playlist/create",
            {name: playlistName, thumbnail: playlistThumbnail, song: []}
        );
        // console.log(response)
        if (response._id) {
            closeModal();
        }
    };
  return (
    <>
      <div
            className="absolute bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center"
            onClick={closeModal}
        >
            <div
                className="bg-gray-30 w-1/3 rounded-md p-8"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="text-white mb-5 font-semibold text-lg">
                    Create Playlist
                </div>
                <div className="text-white space-y-4 flex flex-col justify-center items-center">
                    <InputText
                        label="Name"
                        labelClassName={"text-white"}
                        placeholder="Playlist Name"
                        value={playlistName}
                        setValue={setPlaylistName}
                    />
                    <InputText
                        label="Thumbnail"
                        labelClassName={"text-white"}
                        placeholder="Thumbnail"
                        value={playlistThumbnail}
                        setValue={setPlaylistThumbnail}
                    />
                    <div
                        className="text-gray-950 bg-green-400  w-1/3 rounded-full flex font-semibold justify-center items-center py-3 mt-4 cursor-pointer"
                        onClick={createPlaylist}
                    >
                        Create
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PlayListModel

