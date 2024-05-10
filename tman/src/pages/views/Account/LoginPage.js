import React from "react";
import "../../../styles/Login.css";
import Topbar from "../../../components/Topbar";
import { Link } from "react-router-dom";

export default function LoginPage(props) {
  return (
    <>
      <Topbar />
      <div className="loginFormContainer">
        <h1>Sign In</h1>
        <form action={`${window.location.protocol}//localhost:8000/api/login`} method="POST" className="loginForm">
          <div className="inputs">
            <label htmlFor="username">Username/E-mail</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username or email-id"
            />
          </div>
          <div className="inputs">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              id="pass"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button>Submit</button>
        </form>
        <p>New to Task Manager? <Link to='/signup'>Signup</Link></p>
      </div>
    </>
  );
}
