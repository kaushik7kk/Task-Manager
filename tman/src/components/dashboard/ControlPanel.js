import React from "react";
import "../../styles/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleWindow } from "../../store/formSlice";

export default function ControlPanel(props) {
  
  const dispatch = useDispatch()
  const addFormHandler = () => {
    dispatch(toggleWindow());
  }

  let pageType = props.type.toUpperCase()
  return (
    <>
      <div className="controlContainer">
        <button onClick={addFormHandler}>
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
