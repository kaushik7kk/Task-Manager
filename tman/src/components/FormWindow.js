import React from "react";
import "../styles/FormWindow.css";
import { useDispatch } from "react-redux";
import { toggleWindow } from "../store/formSlice";

export default function FormWindow(props) {
  const dispatch = useDispatch();
  const closeClickHandler = (e) => {
    e.preventDefault();
    dispatch(toggleWindow());
  };

  const taskForm = (
    <div className="taskFormContainer">
      <form action="" className="taskForm">
        <div className="inputs">
          <label htmlFor="taskTitle">Enter task title</label>
          <input type="text" name="taskTitle" placeholder="Task title" />
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
          <button onClick={closeClickHandler}>Close</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );

  const categoryForm = (
    <div className="categoryFormContainer">
      <form action="" className="categoryForm">
        <label htmlFor="">Enter category title</label>
        <input type="text" placeholder="Category title" />
        <label htmlFor="">Select scheduling type</label>
        <select name="" id="schedType">
          <option value="Individual">Individual - Separate for each task</option>
          <option value="Combined">Combined - For the whole category</option>
        </select>
        <div className="buttons">
          <button onClick={closeClickHandler}>Close</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );

  switch (props.type) {
    case "tasks":
      return (
        <>
          <div className="window"></div>
          {taskForm}
        </>
      );
    case "categories":
      return (
        <>
          <div className="window"></div>
          {categoryForm}
        </>
      );
    default:
      break;
  }
}
