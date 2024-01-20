import React,{useState,useEffect} from 'react';
import LoggedInContanier from './Contanier/LoggedInContanier';
import { useNavigate } from 'react-router-dom';
import {AuthenticatedGetRequest} from "../Utils/ServerHelper";
const Library = () => {
    const [myPlaylists, setMyPlaylists] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await AuthenticatedGetRequest(
                "/api/playlist/get/me"
            );
            setMyPlaylists(response.data);
            // console.log(response.data)
        };
        getData();
    }, []);
  return (
    <>
    <LoggedInContanier screenActive="library">
    <div className="text-white text-xl pt-8 font-semibold">
                My Playlists
            </div>
            <div className="py-5 grid gap-5 grid-cols-5">
                {myPlaylists.map((item) => {
                    return (
                        <PlaylistCard
                            key={JSON.stringify(item)}
                            title={item.name}
                            description=""
                            imgUrl={item.thumbnail}
                            className="w-full "
                            playlistId={item._id}
                        />
                    );
                })}
            </div>
    </LoggedInContanier>
    </>
  )
}

export default Library

const PlaylistCard = ({ title, description, imgUrl,playlistId }) => {
  const navigate = useNavigate();
    return (
      <>
        <div className= "w-full  p-4 bg-gray-10 bg-opacity-100 rounded-lg"  onClick={() => {
                navigate("/playlist/" + playlistId);
            }}>
          <div className="mb-4">
            <img
              className="w-full rounded-md"
              alt="Song thumbnail"
              src={imgUrl}
            />
          </div>
          <div className="Title text-white font-semibold py-2">{title}</div>
          <div className="description text-gray-500">{description}</div>
        </div>
        {/* 180 261 */}
      </>
    );
  };
