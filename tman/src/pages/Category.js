import React from "react";
import Topbar from "../components/Topbar";
import "../styles/Category.css";

export default function Category() {
  return (
    <>
      <Topbar />
      <div className="categoryContainer">
        <div className="categoryHead">Category Head</div>
        {/* <div className="categoryContent"> */}
        <div className="categoryControls">
          <span>Add Task</span>
          <span>Delete Category</span>
          <span>Edit Category</span>
          <span>Schedule Category</span>
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
            <tr>
              <td>Yo</td>
              <td className="catActions">
                <button>Finish</button>
                <button>Remove</button>
              </td>
              <td>Yo</td>
            </tr>
          </tbody>
        </table>
        {/* </div> */}
      </div>
    </>
  );
}
