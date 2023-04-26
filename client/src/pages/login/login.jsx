import React from "react";
import { useState } from "react";
import "./login.scss";

export default function Login() {
  return (
    <div className="login-section">
      <div className="login-header-box">
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
                <input type="submit" value="Submit" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}
