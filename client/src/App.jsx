import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";

//components
// import NavBar from "./components/NavBar/navbar";
import Layout from "./layout/layout"
import Note from "./components/Note/note";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<Home />} />
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
