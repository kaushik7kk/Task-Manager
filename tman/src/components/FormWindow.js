import React from "react";
import "../styles/FormWindow.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleWindow } from "../store/formSlice";
import { addTask, editTask } from "../store/taskSlice";
import { addCategory } from "../store/categorySlice";

export default function FormWindow(props) {
  // States
  const forms = useSelector((state) => state.forms);
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  // Event Handlers.
  const closeClickHandler = (e) => {
    e.preventDefault();
    dispatch(toggleWindow({ type: "new", id: null }));
  };

  const taskSubmitHandler = (e) => {
    e.preventDefault();
    let title = document.querySelector("#taskTitle").value;
    let hrs = document.querySelector("#hrs").value;
    let min = document.querySelector("#min").value;
    let sec = document.querySelector("#sec").value;

    // New task creation.
    if (forms.type === "newTask") {
      dispatch(
        addTask({
          title,
          time:
            hrs === "" && min === "" && sec === ""
              ? "None"
              : `${hrs !== 0 && hrs !== "" ? `${hrs}hrs` : ""} ${
                  min !== 0 && min !== "" ? `${min}min` : ""
                } ${sec !== 0 && sec !== "" ? `${sec}sec` : ""}`,
        })
      );
    }
    // Editing existing task.
    else if (forms.type === "editTask") {
      dispatch(
        editTask({
          title,
          time:
            hrs === "" && min === "" && sec === ""
              ? "None"
              : `${hrs !== 0 && hrs !== "" ? `${hrs}hrs` : ""} ${
                  min !== 0 && min !== "" ? `${min}min` : ""
                } ${sec !== 0 && sec !== "" ? `${sec}sec` : ""}`,
          id: forms.id,
        })
      );
    }
    dispatch(toggleWindow({ type: "new", id: null }));
  };

  const categorySubmitHandler = (e) => {
    e.preventDefault();

    let title = document.querySelector("#catTitle").value;
    let schedType = document.querySelector("#schedType").value;
    dispatch(
      addCategory({
        title,
        schedType,
      })
    );
    dispatch(toggleWindow({type: 'new', id: null}))
  };

  const taskForm = (
    <div className="taskFormContainer">
      <form action="" className="taskForm" onSubmit={taskSubmitHandler}>
        <div className="inputs">
          <label htmlFor="taskTitle">Enter task title</label>
          <input
            type="text"
            name="taskTitle"
            id="taskTitle"
            placeholder="Task title"
            // Default value for edit form.
            defaultValue={
              forms.type === "edit"
                ? tasks.data.filter((task) => task.id === Number(forms.id))[0]
                    .title
                : ""
            }
          />
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
      <form action="" className="categoryForm" onSubmit={categorySubmitHandler}>
        <label htmlFor="catTitle">Enter category title</label>
        <input type="text" placeholder="Category title" id="catTitle" />
        <label htmlFor="schedType">Select scheduling type</label>
        <select name="" id="schedType">
          <option value="Individual">
            Individual - Separate for each task
          </option>
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
