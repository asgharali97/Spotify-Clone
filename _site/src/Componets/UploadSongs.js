import React, { useState } from "react";
import IconText from "./Share/IconText";
import HoverText from "./Share/HoverText";
import { Link,useNavigate } from "react-router-dom";
import InputText from "./Share/InputText";
import CloudinaryUpload from "./Share/CloudinaryUpload";
import {AutenticatedPostRequest} from '../Utils/ServerHelper'
const UploadSongs = () => {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [track, setTrack] = useState("");
  const [uploadedSongName, setUploadedSongName] = useState("");
  const navigate = useNavigate();

  const songSubmit =async()=>{
     const data = {name,thumbnail,track:playlistUrl}
     const response = await AutenticatedPostRequest("/api/song/create",data)
    //  console.log(response)
     alert("Song Uploaded")
     navigate("/MyMusic")
  }


  return (
    <>
      <div style={{ height: "100vh" }} className="h-full w-full flex bg-black">
        {/* This is left side  */}
        <div className="h-full w-1/5">
          <div>
            <div className="Logo&icons h-46 bg-gray-950 rounded-8 mt-2 mb-2 ml-2">
              <div className="text-icon py-5 cursor-pointer">
                <IconText
                  iconName={"majesticons:home"}
                  displayText={"Home"}
                  active
                  className="mt-2 mb-2"
                />
                <IconText iconName={"iconoir:search"} displayText={"Search"} />
              </div>
            </div>
            <div className="py-3 ml-2 bg-gray-950 h-96 rounded-md cursor-pointer">
              <IconText
                iconName={"fluent:library-32-regular"}
                displayText={"Your Library"}
              />
              <IconText
                iconName={"material-symbols:add-box"}
                displayText={"Create Playlist"}
              />
              <IconText
                iconName={"clarity:heart-solid"}
                displayText={"Liked Songs"}
              />
              <IconText iconName={"entypo:music"} displayText={"My Music"} />
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
                <Link to="/">
                  <HoverText displayText={"Upload Song"} active={true}/>
                </Link>
                <div className="bg-white h-48 w-11 flex items-center justify-center rounded-full font-semibold cursor-pointer hover:scale-110">
                  <Link to="">FS</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white p-5 font-bold text-2xl">
            Upload Your Music
          </div>
          <div className="ml-5 mt-2 text-white w-2/3 space-x-8 flex items-center justify-center">
            <InputText
              label={"Add Name"}
              placeholder={"Song Name"}
              value={name}
              setValue={setName}
            />
            <InputText
              label={"Add Thumbnail"}
              placeholder={"Thumbnail"}
              value={thumbnail}
              setValue={setThumbnail}
            />
          </div>
          <div className="py-2 px-5">
            {uploadedSongName ? (
              <div className="bg-white text-black rounded-full p-3 font-semibold w-1/3">
                {uploadedSongName.substring(0, 33)}...
              </div>
            ) : (
              <CloudinaryUpload
                setUrl={setPlaylistUrl}
                setName={setUploadedSongName}
              />
            )}
            <div
              className="bg-white text-black rounded-full mt-4 p-3 font-semibold cursor-pointer w-12 flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault(e);
                songSubmit();
              }}
            >
              Submit Song
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadSongs;
