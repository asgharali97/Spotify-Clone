import { BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom";
import "./App.css";
import Login from "./Componets/Login";
import Signup from "./Componets/Signup";
import Home from "./Componets/Home";
import { useCookies } from "react-cookie";
import LogedHome from "./Componets/LogedHome";
import UploadSongs from "./Componets/UploadSongs";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  return (
      <div className="w-full h-full font-poppins">
    <Router>
         {cookie.token ?(
           <Routes>
          <Route path="/" element={<LogedHome />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
          <Route path="/UploadSongs" element={<UploadSongs />}></Route>
        </Routes>
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
  );
}

export default App;
