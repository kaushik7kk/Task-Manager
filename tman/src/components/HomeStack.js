import React from "react";
import "../styles/HomeStack.css";
import { Link } from "react-router-dom";

export default function HomeStack(props) {
  return (
    <>
      <div className="stackContainer">
        <Link to={`/${props.title.toLowerCase()}`} className="headLinks">
          <div className="stackHeading">{props.title}</div>
        </Link>
        <div className="stackList">
          <ul>
            {props.data.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
