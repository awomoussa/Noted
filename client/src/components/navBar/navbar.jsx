import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

import { useContext, useState, useEffect } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate;

  const logout = () => {
    navigate("/logout");
  };

  return (
    <div className="navbar">
      <div className="navarFront">
        <div className="left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="logo">
              <img src={require("../..//assets/logo.png")} alt="Noted" />
              <h4>Noted</h4>
            </div>
          </Link>
          {darkMode?(
          <FontAwesomeIcon 
          icon={faSun}
          onClick={toggle}
          className="faIcon"
          size="lg"
          fixedWidth
          />
          ) : (
            <FontAwesomeIcon 
            icon={faMoon}
          onClick={toggle}
          className="faIcon"
          size="lg"
          fixedWidth
          />
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;