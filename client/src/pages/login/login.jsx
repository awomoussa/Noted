import React from "react";
import { useState } from "react";


export default function login() {

  // const [email, setEmail] = useState("")

  return (
    <div className="login-section">
      <div className="login-header-box">
        <h1 className="login-header">Login</h1>

        <div className="form-box">
          <form className="form-container">
            <label>
              Email:
              <input type="text" name="email" placeholder="Email" />
            </label>

            <label>
              Password:
              <input type="password" name="password" placeholder="Password" />
            </label>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
