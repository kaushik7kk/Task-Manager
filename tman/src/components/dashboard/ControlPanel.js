import React from "react";
import "../../styles/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

export default function ControlPanel() {
  return (
    <>
      <div className="controlContainer">
        <button>
          <FontAwesomeIcon icon={faSquarePlus} />
          Add New Task
        </button>
        <form action="">
          <input type="text" />
        </form>
      </div>
    </>
  );
}
