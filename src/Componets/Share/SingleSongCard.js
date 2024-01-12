import React,{useContext} from "react";
import songContext from "../../Context/SongContext";
const SingleSongCard = ({ info, playSound }) => {
  const {currentSong,setCurrentSong} =useContext(songContext)
  return (
    <>
      <div
        className="flex p-2 mb-2 hover:bg-gray-400 hover:bg-opacity-20 rounded-md "
        onClick={() => {
          setCurrentSong(info)
        }}
      >
        <div
          className="w-41 h-41 bg-cover bg-center rounded-sm"
          style={{ backgroundImage: `url(${info.thumbnail})` }}
        ></div>
        <div className="flex w-full">
          <div className="text-white flex justify-center flex-col pl-4 w-5/6">
            <div className="cursor-pointer hover:underline">{info.name}</div>
            <div className="cursor-pointer hover:underline text-gray-400 text-sx">
              {info.artist.firstName + " " + info.artist.lastName}
            </div>
          </div>
          <div className="w-3/4 flex items-center justify-end text-gray-400">
            3:32
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleSongCard;
