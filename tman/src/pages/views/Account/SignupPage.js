import React from "react";
import "../../../styles/Login.css";
import Topbar from "../../../components/Topbar";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <>
      <Topbar />
      <div className="loginFormContainer">
        <h1>Register a New User</h1>
        <form action={`${window.location.protocol}//localhost:8000/api/signup`} method="POST" className="loginForm">
            <div className="inputs">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter new username"/>
            </div>
            <div className="inputs">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Enter e-mail id"/>
            </div>
            <div className="inputs">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter new password"/>
            </div>
            <button>Submit</button>
        </form>
        <p>Already a registered user? <Link to='/login'>Login</Link></p>
      </div>
    </>
  );
}
