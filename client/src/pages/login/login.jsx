import React from "react";
import { useState } from "react";
import "./login.scss";
import { Link } from 'react-router-dom';



export default function Login() {
  return (
    <div className="login-section">
      <div className="login-box">
        <h1 className="login-header">Login</h1>

        <div className="form-box">
          <form className="form-container">
            <ul>
              <li>
                <label>
                  Email:
                  <input type="text" name="email" placeholder="Email" />
                </label>
              </li>

              <li>
                <label>
                  Password:
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </label>
              </li>

              <li>
                <input className="button" type="submit" value="Submit" />
              </li>
            </ul>
          </form>
        </div>
      </div>

      <div className="text-zone">
        <p>Already have an account? Login and continue staying organized with Noted.</p>
          <p>If you are new, click <Link to="/signup"> here to Sign Up!</Link></p>
      </div>

    </div>
  );
}
