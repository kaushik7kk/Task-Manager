import React from "react";
import "../styles/HomeStack.css";
import { Link } from "react-router-dom";

export default function HomeStack(props) {
  if (!props.data) {
    return (
      <>
        <div className="stackContainer">
          <Link to={`/${props.title.toLowerCase()}`} className="headLinks">
            <div className="stackHeading">{props.title}</div>
          </Link>
          <div className="stackList">
            <p>Please login to access groups!!</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="stackContainer">
          <Link to={`/${props.title.toLowerCase()}`} className="headLinks">
            <div className="stackHeading">{props.title}</div>
          </Link>
          <div className="stackList">
            {!props.data.length ? (
              <p>No data found!!!</p>
            ) : (
              <ul>
                {props.data.map((item) => (
                  <li key={item.id} className={item.finished ? 'finished' : ''}>{item.title}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </>
    );
  }
}
