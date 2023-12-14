import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Componets/Login";
import Signup from "./Componets/Signup";
import Home from   "./Componets/Home"

function App() {
  return (
    <Router>
    <div className="w-full h-full font-poppins">
      <Routes>
       <Route path="/" element ={<Home/>}></Route>
       <Route path="/Login" element ={<Login/>}></Route>
       <Route path="/Signup" element ={<Signup/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
