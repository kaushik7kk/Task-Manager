import React from "react";
import "../styles/Topbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Topbar() {

  // Visibility state for pulling down topbar in priority.
  const formVisibility = useSelector(state => state.forms);

  return (
    <>
      {/* Container to hold all navbar content. */}
      <div className={`navContainer ${formVisibility.visibility ? 'pulldown' : ''}`}>
        <Link to="/home" className="navItem">
          Task Manager
        </Link>
        {/* Container for login and signup buttons. */}
        <div className="logLinks">
          <Link to="/login" className="navItem">
            Login
          </Link>
          <Link to="/signup" className="navItem">
            Signup
          </Link>
        </div>
      </div>
    </>
  );
}
