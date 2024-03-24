import React from "react";
import "../styles/FormWindow.css";

export default function FormWindow() {
  return (
    <>
      <div className="window"></div>
      <div className="formContainer">
        <form action="" className="taskForm">
          <div className="inputs">
            <label htmlFor="title">Enter task title</label>
            <input type="text" name="title" placeholder="Task title" />
            <label htmlFor="time">Enter time to be assigned</label>
            <div className="time-inputs">
              <label htmlFor="hrs">Hrs:</label>
              <input type="number" name="hrs" id="hrs" max="24" min="0" />
              <label htmlFor="min">Min:</label>
              <input type="number" name="mins" id="min" max={59} min={0} />
              <label htmlFor="sec">Sec:</label>
              <input type="number" name="secs" id="sec" max={59} min={0} />
            </div>
          </div>
          <div className="buttons">
            <button>Close</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
