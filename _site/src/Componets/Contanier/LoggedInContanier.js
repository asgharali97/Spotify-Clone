import React, { useState, useContext, useLayoutEffect, useRef } from "react";
import IconText from "../Share/IconText";
import HoverText from "../Share/HoverText";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Howl, Howler } from "howler";
import songContext from "../../Context/SongContext";
import PlayListModel from "../../model/PlayListModel";
import AddSongPlaylist from "../../model/AddSongPlaylist";
import { AutenticatedPostRequest } from "../../Utils/ServerHelper";

const LoggedInContanier = ({ children, screenActive }) => {
  const [createPlaylistModalOpen, setCreatePlaylistModalOpen] = useState(false);
  const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);
  const {
    currentSong,
    setCurrentSong,
    soundPlayed,
    setSoundPlayed,
    isPaused,
    setIsPaused,
  } = useContext(songContext);
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (!currentSong) {
      return;
    }
    changeSong(currentSong.track);
  }, [currentSong]);

  const addSongToPlaylist = async (playlistId) => {
    const songId = currentSong._id;

    const payload = {playlistId, songId};
    const response = await AutenticatedPostRequest(
        "/api/playlist/add/song",
        payload
    );
    // console.log(response)
    if(response._id){
        setAddToPlaylistModalOpen(false)
    }
};

  const playSound = () => {
    if (!soundPlayed) {
      return;
    }
    soundPlayed.play();
  };

  const changeSong = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
    setIsPaused(false);
  };

  const pauseSound = () => {
    soundPlayed.pause();
  };

  const toggleSound = () => {
    if (isPaused) {
      playSound();
      setIsPaused(false);
    } else {
      pauseSound();
      setIsPaused(true);
    }
  };

  return (
    <>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        {addToPlaylistModalOpen && (
                <AddSongPlaylist
                    closeModal={() => {
                        setAddToPlaylistModalOpen(false);
                    }}
                    addSongToPlaylist={addSongToPlaylist}
                />
            )}
        {createPlaylistModalOpen && (
          <PlayListModel
            closeModal={() => {
              setCreatePlaylistModalOpen(false);
            }}
          />
        )}
        <div
          style={{ height: "100vh", flex: "1" }}
          className="h-full w-full flex bg-black "
        >
          {/* This is left side  */}
          <div className="h-full w-1/5">
            <div>
              <div className="Logo&icons h-46 bg-gray-950 rounded-8 mt-2 mb-2 ml-2">
                {/* Icon section  */}
                <div className="text-icon py-5 cursor-pointer">
                  <Link to={"/Home"}>
                    <IconText
                      iconName={"majesticons:home"}
                      displayText={"Home"}
                      className="mt-2 mb-2"
                      active={screenActive === "home"}
                    />
                  </Link>
                  <Link to={"/Search"}>
                    <IconText
                      iconName={"iconoir:search"}
                      displayText={"Search"}
                      active={screenActive === "search"}
                    />
                  </Link>
                </div>
              </div>
              <div className="py-3 ml-2 bg-gray-950 h-96 rounded-md cursor-pointer">
                <Link to="/Library">
                <IconText
                  iconName={"fluent:library-32-regular"}
                  displayText={"Your Library"}
                  active={screenActive === "library"}
                />
                </Link>
                <IconText
                  iconName={"material-symbols:add-box"}
                  displayText={"Create Playlist"}
                  onClick={()=>{setCreatePlaylistModalOpen(true)}}
                  active={screenActive==="createPlaylis"}
                />
                <IconText
                  iconName={"clarity:heart-solid"}
                  displayText={"Liked Songs"}
                />
                <Link to={"/MyMusic"}>
                  <IconText
                    iconName={"entypo:music"}
                    displayText={"My Music"}
                    active={screenActive === "Music"}
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* This is right side */}
          <div className="w-full h-36 bg-gray-950 mt-2 ml-2 mr-2 rounded-8 overflow-auto">
            <div className="w-full h-64 flex items-center justify-end bg-gray-20 bg-opacity-100 rounded-t-8">
              <div className="w-1/2 flex h-full">
                <div className="w-3/5 flex justify-around items-center">
                  <HoverText displayText={"Premium"} />
                  <HoverText displayText={"Support"} />
                  <HoverText displayText={"Download"} />
                  <div className="h-1/2 border-r  border-white"></div>
                </div>
                <div className="w-2/5 h-full items-center flex justify-around">
                  <Link to="/UploadSongs">
                    <HoverText displayText={"Upload Song"} />
                  </Link>
                  <div className="bg-white h-48 w-11 flex items-center justify-center rounded-full font-semibold cursor-pointer hover:scale-110">
                    <Link to="/Login">FS</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="px-6">{children}</div>
            </div>
          </div>
        </div>
        {/* Footer content */}
        {currentSong && (
          <div className="bg-black h-1/10 w-full py-1 text-white flex items-center">
            <div className="imgSide w-1/4 flex items-center">
              <img
                className="h-39 w-39 ml-3 mb-4 rounded"
                src={currentSong.thumbnail}
                alt="Song Thumbnail"
              />
              {/* Todo Design it response */}
              <div className="pl-4">
                <div className="text-sm hover:underline cursor-pointer">
                  {currentSong.name}
                </div>
                <div className="text-xs text-gray-500 hover:underline cursor-pointer">
                  {currentSong.artist.firstName +
                    " " +
                    currentSong.artist.lastName}
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
              <div className="w-1/3 flex justify-between items-center">
                {/* Controls */}
                <Icon
                  icon="radix-icons:shuffle"
                  fontSize={"20"}
                  className="cursor-pointer text-gray hover:text-white"
                />
                <Icon icon="fluent:previous-20-filled" fontSize={"20"} />
                <Icon
                  icon={
                    isPaused ? "icon-park-solid:play" : "zondicons:pause-solid"
                  }
                  fontSize={"40"}
                  className="cursor-pointer text-gray hover:text-white"
                  onClick={() => toggleSound()}
                />
                <Icon
                  icon="fluent:next-20-filled"
                  fontSize={"20"}
                  className="cursor-pointer text-gray hover:text-white"
                />
                <Icon
                  icon="fluent:arrow-repeat-all-24-filled"
                  fontSize={"20"}
                  className="cursor-pointer text-gray hover:text-white"
                />
              </div>
              <div className="mt-1 flex justify-center items-center">
                <input className="w-13 bg-gray-400" type="range" />
                {/* {currentSong.duration} */}
              </div>
            </div>
            <div className="w-1/4 flex justify-end pr-4 space-x-4 items-center">
                        <Icon
                            icon="ic:round-playlist-add"
                            fontSize={30}
                            className="cursor-pointer text-gray-500 hover:text-white"
                            onClick={() => {
                                setAddToPlaylistModalOpen(true);
                            }}
                        />
                        <Icon
                            icon="ph:heart-bold"
                            fontSize={25}
                            className="cursor-pointer text-gray-500 hover:text-white"
                        />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LoggedInContanier;
