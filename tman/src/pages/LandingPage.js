import React from "react";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="landingContainer">
        <div className="content">
          <h1 className="brand">TASK MANAGER</h1>
          <p className="summary">
            Welcome to Task Manager!<br/>
            Manage and delve into your work in a more organized way...
          </p>
          <Link className="start" to="/home">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
