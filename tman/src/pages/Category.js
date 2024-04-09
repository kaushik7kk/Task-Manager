import React from "react";
import Topbar from "../components/Topbar";
import "../styles/Category.css";
import { useSelector, useDispatch } from "react-redux";
import FormWindow from "../components/FormWindow";
import { toggleWindow } from "../store/formSlice";
import { delCatTask, delCategory } from "../store/categorySlice";
import { Link } from "react-router-dom";
import { toggleFinish } from "../store/taskSlice";

export default function Category() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const forms = useSelector((state) => state.forms);
  const tasks = useSelector((state) => state.tasks);

  // Category chosen for data display.
  let currentCategory = categories.data.filter(
    (category) => Number(category.id) === Number(categories.currCat)
  );

  // Event handlers.
  const addClickHandler = (e) => {
    dispatch(toggleWindow({ type: "taskList", id: null }));
  };

  const delClickHandler = (e) => {
    dispatch(delCategory());
  };

  const editClickHandler = (e) => {
    dispatch(toggleWindow({ type: "editcategories", id: null }));
  };

  const finishClickHandler = (e) => {
    let row = e.target.parentElement.parentElement;
    dispatch(
      toggleFinish({
        rowId: row.id,
      })
    );
  };

  const removeClickHandler = (e) => {
    let row = e.target.parentElement.parentElement;
    dispatch(delCatTask({ rowId: row.id }));
  };

  // Output to render for individual category page.
  let category = (
    <div className={`categoryContainer ${forms.visibility ? "pulldown" : ""}`}>
      <div className="categoryHead">{currentCategory[0].title}</div>
      <div className="categoryControls">
        <span onClick={addClickHandler}>Add Task</span>
        <span onClick={delClickHandler}>
          <Link to="/categories">Delete Category</Link>
        </span>
        <span onClick={editClickHandler}>Edit Category</span>
        {currentCategory.schedType === "Combined" ? (
          <span>Schedule Category</span>
        ) : (
          ""
        )}
      </div>
      <table className="categoryTable">
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Actions</th>
            <th>Time left</th>
          </tr>
        </thead>
        <tbody>
          {tasks.data.map((task) => {
            if (currentCategory[0].taskIds.includes(task.id)) {
              return (
                <tr key={task.id} id={task.id}>
                  <td className={task.finished ? 'finished' : ''}>{task.title}</td>
                  <td className="catActions">
                    <button onClick={finishClickHandler}>Finish</button>
                    <button onClick={removeClickHandler}>Remove</button>
                  </td>
                  <td className={task.finished ? 'finished' : ''}>{task.time}</td>
                </tr>
              );
            } else {
              return <></>;
            }
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      {forms.visibility ? (
        <>
          <FormWindow type="taskList" />
          <Topbar />
          {category}
        </>
      ) : (
        <>
          <Topbar />
          {category}
        </>
      )}
    </>
  );
}
