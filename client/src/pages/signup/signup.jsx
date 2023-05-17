import React from "react";
import "./signup.scss"
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="signup-section">
      <div className="signup-box">
        <h1 className="signup-header">Sign Up</h1>

        <div className="form-box">
          <form className="form-container">
            <ul>
              <li>
                <label>
                  First Name:
                  <input type="text" name="text" placeholder="First Name" />
                </label>
              </li>

              <li>
                <label>
                  Last Name:
                  <input type="text" name="text" placeholder="Last Name" />
                </label>
              </li>
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
        <p>
          Already have an account? <Link to="/login"> Login in here!</Link>
        </p>
      </div>
    </div>
  );
}
