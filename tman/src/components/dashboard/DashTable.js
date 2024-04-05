import React from "react";
import "../../styles/DashTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrash,
  faClock,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleFinish } from "../../store/taskSlice";
import { toggleWindow } from "../../store/formSlice";

export default function DashTable(props) {
  const dispatch = useDispatch();

  const taskHandlers = {
    // Event handler for check icon.
    finishClickHandler: (e) => {
      let row = e.target.parentElement.parentElement.parentElement;
      dispatch(toggleFinish({ rowId: row.id }));
    },
    editClickHandler: (e) => {
      let row = e.target.parentElement.parentElement.parentElement;
      dispatch(toggleWindow({ type: "edit" , id: row.id}));
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
                      <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="icon"
                        onClick={taskHandlers.finishClickHandler}
                      />
                      <FontAwesomeIcon
                        icon={faPencil}
                        className="icon"
                        onClick={taskHandlers.editClickHandler}
                      />
                      <FontAwesomeIcon icon={faTrash} className="icon" />
                      <FontAwesomeIcon icon={faClock} className="icon" />
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

  // let categoryTable = (
  //   <>
  //     <table className="dashTable">
  //       <thead>
  //         <tr>
  //           <th>Category Name</th>
  //           <th>No. of Tasks</th>
  //           <th>Scheduling</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {props.data.payload.map((obj) => {
  //           return (
  //             <tr>
  //               <td>{obj.title}</td>
  //               <td>{obj.numOfTasks}</td>
  //               <td>{obj.schedType}</td>
  //             </tr>
  //           );
  //         })}
  //       </tbody>
  //     </table>
  //   </>
  // );

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
    // case "categories":
    //   return categoryTable;
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
