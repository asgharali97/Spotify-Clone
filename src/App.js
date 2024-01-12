import { BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";
import "./App.css";
import {useState} from "react"
import Login from "./Componets/Login";
import Signup from "./Componets/Signup";
import Home from "./Componets/Home";
import { useCookies } from "react-cookie";
import LogedHome from "./Componets/LogedHome";
import UploadSongs from "./Componets/UploadSongs";
import MyMusic from "./Componets/MyMusic";
import songContext from "./Context/SongContext";
import Search from "./Componets/Search";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  const [currentSong,setCurrentSong] = useState (null)
  const [soundPlayed ,setSoundPlayed] =useState(null)
  const [isPaused ,setIsPaused] = useState(true)
  return (
      <div className="w-full h-full font-poppins">
    <Router>
         {cookie.token ?(
            <songContext.Provider value={{currentSong,setCurrentSong,soundPlayed,setSoundPlayed,isPaused,setIsPaused}}>
           <Routes>
          <Route path="/Home" element={<LogedHome />}></Route>
          <Route path="/UploadSongs" element={<UploadSongs />}></Route>
          <Route path="/MyMusic" element={<MyMusic/>}></Route>
          <Route path="/Search" element={<Search/>}></Route>
          <Route path="*" element={<Navigate to="/Home" />}></Route>
        </Routes>
          </songContext.Provider>
      ):(
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="*" element={<Navigate to="/Login" />}></Route>
        </Routes>
      )}
      </Router>
      </div>
  )
}

export default App;
