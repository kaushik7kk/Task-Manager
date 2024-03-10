import React from "react";
import "../styles/Topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <>
      {/* Container to hold all navbar content. */}
      <div className="navContainer">
        <Link to="/" className="navItem">
          Task Manager
        </Link>
        {/* Container for login and signup buttons. */}
        <div className="logLinks">
          <a href="" className="navItem">
            Login
          </a>
          <a href="" className="navItem">
            Signup
          </a>
        </div>
      </div>
    </>
  );
}
