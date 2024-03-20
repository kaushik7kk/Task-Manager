import React from "react";
import "../../styles/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export default function ControlPanel(props) {
  

  let pageType = props.type.toUpperCase()
  return (
    <>
      <div className="controlContainer">
        <button>
          <FontAwesomeIcon icon={faSquarePlus} />
          <span>{`ADD NEW ${pageType}`}</span>
        </button>
        <form action="">
          <input type="text" />
        </form>
      </div>
    </>
  );
}
