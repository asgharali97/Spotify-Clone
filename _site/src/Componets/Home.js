import React from "react";
import { ViewPlaylist } from "./Share/Card";
import LoggedInContanier from "./Contanier/LoggedInContanier";

const focusCardData = [
  {
    title: "Arjit Singh sad  songs",
    description: "Arjit Singh top hits",
    imgUrl: "https://i.scdn.co/image/ab67706c0000da84b8ebec0762ac9c76adb09347",
  },
  {
    title: "World Of Walker",
    description: "Alan Walker top hits",
    imgUrl: "https://i.scdn.co/image/ab67616d00001e02c4d00cac55ae1b4598c9bc90",
  },
  {
    title: "Alone faded",
    description: "Alone in faded",
    imgUrl: "https://i.scdn.co/image/ab67616d00001e02df9a35baaa98675256b35177",
  },
  {
    title: "Mix faded",
    description: "Best of alan walker!",
    imgUrl:
      "https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4YRxDV8wJFPHPTeXepOstw/en-GB",
  },
  {
    title: "On My Way",
    description: "Way is going on lets come",
    imgUrl: "https://i.scdn.co/image/ab67706f000000023ec51dd9c17a9add42c2e249",
  },
];

const SpotifyCardData = [
  {
    title: " Singh   songs",
    description: " Singh top hits",
    imgUrl: "https://i.scdn.co/image/ab67706c0000da84b8ebec0762ac9c76adb09347",
  },
  {
    title: "Walker",
    description: " Walker top hits",
    imgUrl: "https://i.scdn.co/image/ab67616d00001e02c4d00cac55ae1b4598c9bc90",
  },
  {
    title: "Alone faded",
    description: " faded",
    imgUrl: "https://i.scdn.co/image/ab67616d00001e02df9a35baaa98675256b35177",
  },
  {
    title: "Mix ",
    description: "Best of alan !",
    imgUrl:
      "https://seeded-session-images.scdn.co/v2/img/122/secondary/artist/4YRxDV8wJFPHPTeXepOstw/en-GB",
  },
  {
    title: " My Way",
    description: "Way is going on ",
    imgUrl: "https://i.scdn.co/image/ab67706f000000023ec51dd9c17a9add42c2e249",
  },
];

const Home =()=>{
  return(
    <LoggedInContanier screenActive="home">
       <ViewPlaylist textTitle={"Focus"} cardData={focusCardData} />
            <ViewPlaylist
                textTitle={"Spotify Playlist"}
                cardData={SpotifyCardData}
              />
    </LoggedInContanier>
  )
}

export default Home;
