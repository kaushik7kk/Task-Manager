import React from "react";
import "../../styles/DashTable.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleFinish } from "../../store/taskSlice";
import { toggleWindow } from "../../store/formSlice";
import { Link } from "react-router-dom";

export default function DashTable(props) {
  const dispatch = useDispatch();

  const taskHandlers = {
    // Event handler for check icon.
    finishClickHandler: (e) => {
      let row = e.target.parentElement.parentElement;
      dispatch(toggleFinish({ rowId: row.id }));
    },
    // Event handler for pencil icon.
    editClickHandler: (e) => {
      let row = e.target.parentElement.parentElement;
      dispatch(toggleWindow({ type: "edittasks", id: row.id }));
    },
    // Event handler for trash icon.
    deleteClickHandler: (e) => {
      let row = e.target.parentElement.parentElement;
      dispatch(deleteTask({ id: row.id }));
    },
  };

  // Output to render for tasks.
  let taskTable = (
    <>
      <table className="dashTable">
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Actions</th>
            <th>Time left</th>
          </tr>
        </thead>
        <tbody>
          {props.data.length
            ? props.data.map((obj) => {
                return (
                  <tr key={obj.id} id={obj.id}>
                    <td className={obj.finished ? "finished" : ""}>
                      {obj.title}
                    </td>
                    <td className="actions">
                      <button
                        className="action"
                        onClick={taskHandlers.finishClickHandler}
                      >
                        Finish
                      </button>
                      <button
                        className="action"
                        onClick={taskHandlers.editClickHandler}
                      >
                        Edit
                      </button>
                      <button
                        className="action"
                        onClick={taskHandlers.deleteClickHandler}
                      >
                        Delete
                      </button>
                      <button className="action">Schedule</button>
                    </td>
                    <td className={obj.finished ? "finished" : ""}>
                      {obj.time}
                    </td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </>
  );

  //Output to render for categories.

  let categoryTable = (
    <>
      <table className="dashTable">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>No. of Tasks</th>
            <th>Scheduling</th>
          </tr>
        </thead>
        <tbody>
          {props.data.length
            ? props.data.map((obj) => {
                return (
                  <Link to="/category" className="catLink">
                    <tr key={obj.id} id={obj.id} className="categoryRow">
                      <td className="catTitle">{obj.title}</td>
                      <td>{obj.numOfTasks}</td>
                      <td>{obj.schedType}</td>
                    </tr>
                  </Link>
                );
              })
            : ""}
        </tbody>
      </table>
    </>
  );

  // Output to render for groups.

  // let groupTable = (
  //   <>
  //     <table className="dashTable">
  //       <thead>
  //         <tr>
  //           <th>Group Name</th>
  //           <th>No. of Members</th>
  //           <th>Created By</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {props.data.payload.map((obj) => {
  //           return (
  //             <tr>
  //               <td>{obj.title}</td>
  //               <td>{obj.numOfMembers}</td>
  //               <td>{obj.createdBy}</td>
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //   </>
  // );

  switch (props.type) {
    case "tasks":
      return taskTable;
    case "categories":
      return categoryTable;
    // case "groups":
    //   if (loggedIn) {
    //     return groupTable;
    //   } else {
    //     return (
    //       <>
    //         <p>Please login to access groups!!</p>
    //       </>
    //     );
    //   }
    default:
      break;
  }
}
