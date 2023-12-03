import "./App.css";
import { Routes, Route, BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Create from "./pages/Create"
import NoteDetails from "./pages/NoteDetails"



//components
import Layout from "./layout/layout";
// import { notesLoader } from "./pages/Dashboard";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}  />
          <Route path="/notes/:id" element={<NoteDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<Create />} />
        </Route>

  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
