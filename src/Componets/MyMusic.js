import React, { useState, useEffect } from "react";
import SingleSongCard from "./Share/SingleSongCard";
import { AuthenticatedGetRequest } from "../Utils/ServerHelper";
import LoggedInContanier from "./Contanier/LoggedInContanier";

const MyMusic = () => {
  const [songData, setSongData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await AuthenticatedGetRequest("/api/song/get/mysongs");
      console.log(response.data);
      setSongData(response.data);
    };
    getData();
  }, []);
  return (
    <>
      <LoggedInContanier>
        {songData.map((item) => {
          return <SingleSongCard info={item} playSound={()=>{}} />;
        })}
      </LoggedInContanier>
    </>
  );
};

export default MyMusic;
