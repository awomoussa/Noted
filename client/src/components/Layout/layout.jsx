import React from "react";
import "./layout.scss"
import navBar from "../NavBar/navbar";
import home from "../../pages/home/home";

import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="App">
      <navBar />
      <div className="page"> 
      <Outlet />
      </div>
    </div>
  )
}

export default Layout; 