import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";

//components
import NavBar from "./components/NavBar/navbar";
import Note from "./components/Note/note";

function App() {
  return (
    // <div className="App">
    //   <h1>HELLO!</h1>
    // </div>
    <>
      <BrowserRouter>
        <NavBar />
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
