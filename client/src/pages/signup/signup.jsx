import React from 'react'

export default function Signup() {
  return (
    <div className="signup-section">
      <div className="signup-header-box">
        <h1 className="signup-header">signup</h1>

        <div className="form-box">
          <form className="form-container">
            <ul>
            <li>
                <label>
                  First name:
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
                <input type="submit" value="Submit" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}