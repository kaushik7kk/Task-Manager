import React from "react";
import "../styles/Topbar.css";

export default function Topbar() {
  return (
    <>
      {/* Container to hold all navbar content. */}
      <div className="navContainer">
        <a href="" className="navItem">
          Task Manager
        </a>
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
