import React from "react";
import "../styles/Topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <>
      {/* Container to hold all navbar content. */}
      <div className="navContainer">
        <Link to="/home" className="navItem">
          Task Manager
        </Link>
        {/* Container for login and signup buttons. */}
        <div className="logLinks">
          <Link to="" className="navItem">
            Login
          </Link>
          <Link to="" className="navItem">
            Signup
          </Link>
        </div>
      </div>
    </>
  );
}
