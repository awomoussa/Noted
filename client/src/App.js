import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import { DarkModeContext } from "./context/darkModeContext";
//components
import Navbar from "./components/navBar/navbar"

import Note from "./components/Note/note";

function App() {

  const { DarkModeContext } = useContext(DarkModeContext);

  return (
    // <div className="App">
    //   <h1>HELLO!</h1>
    // </div>
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/note" element={<Note />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
