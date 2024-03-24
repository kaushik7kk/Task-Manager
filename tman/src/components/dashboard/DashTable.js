import React from "react";
import "../../styles/DashTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrash,
  faClock,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

import { useSelector } from 'react-redux';

export default function DashTable(props) {
  
  const loggedIn = useSelector((state) => state.loggedIn);

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
          {props.data.payload.map((obj) => {
            return (
              <tr>
                <td>{obj.title}</td>
                <td className="actions">
                  <FontAwesomeIcon icon={faSquareCheck} className="icon"/>
                  <FontAwesomeIcon icon={faPencil} className="icon"/>
                  <FontAwesomeIcon icon={faTrash} className="icon"/>
                  <FontAwesomeIcon icon={faClock} className="icon"/>
                </td>
                <td>{obj.time}</td>
              </tr>
            );
          })}
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
          {props.data.payload.map((obj) => {
            return (
              <tr>
                <td>{obj.title}</td>
                <td>{obj.numOfTasks}</td>
                <td>{obj.schedType}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );

  // Output to render for groups.

  let groupTable = (
    <>
      <table className="dashTable">
        <thead>
          <tr>
            <th>Group Name</th>
            <th>No. of Members</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          {props.data.payload.map((obj) => {
            return (
              <tr>
                <td>{obj.title}</td>
                <td>{obj.numOfMembers}</td>
                <td>{obj.createdBy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );

  switch (props.data.type) {
    case "tasks":
      return taskTable;
    case "categories":
      return categoryTable;
    case "groups":
      if (loggedIn) {
        return groupTable;
      } else {
        return (
          <>
            <p>Please login to access groups!!</p>
          </>
        )
      }
    default:
      break;
  }
}
