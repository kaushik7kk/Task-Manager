import React from "react";
import "../../styles/DashTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faTrash,
  faClock,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function DashTable() {
  return (
    <>
      <table className="dashTable">
        <thead>
          <tr>
            <th>Description</th>
            <th>Actions</th>
            <th>Time left</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Task</td>
            <td className="actions">
              <FontAwesomeIcon icon={faSquareCheck} />
              <FontAwesomeIcon icon={faPencil} />
              <FontAwesomeIcon icon={faTrash} />
              <FontAwesomeIcon icon={faClock} />
            </td>
            <td>3h 35min</td>
          </tr>
          <tr>
            <td>Task</td>
            <td className="actions">
              <FontAwesomeIcon icon={faSquareCheck} />
              <FontAwesomeIcon icon={faPencil} />
              <FontAwesomeIcon icon={faTrash} />
              <FontAwesomeIcon icon={faClock} />
            </td>
            <td>3h 35min</td>
          </tr>
          <tr>
            <td>Task</td>
            <td className="actions">
              <FontAwesomeIcon icon={faSquareCheck} />
              <FontAwesomeIcon icon={faPencil} />
              <FontAwesomeIcon icon={faTrash} />
              <FontAwesomeIcon icon={faClock} />
            </td>
            <td>3h 35min</td>
          </tr>
          <tr>
            <td>Task</td>
            <td className="actions">
              <FontAwesomeIcon icon={faSquareCheck} />
              <FontAwesomeIcon icon={faPencil} />
              <FontAwesomeIcon icon={faTrash} />
              <FontAwesomeIcon icon={faClock} />
            </td>
            <td>3h 35min</td>
          </tr>
          <tr>
            <td>Task</td>
            <td className="actions">
              <FontAwesomeIcon icon={faSquareCheck} />
              <FontAwesomeIcon icon={faPencil} />
              <FontAwesomeIcon icon={faTrash} />
              <FontAwesomeIcon icon={faClock} />
            </td>
            <td>3h 35min</td>
          </tr>
          <tr>
            <td>Task</td>
            <td className="actions">
              <FontAwesomeIcon icon={faSquareCheck} />
              <FontAwesomeIcon icon={faPencil} />
              <FontAwesomeIcon icon={faTrash} />
              <FontAwesomeIcon icon={faClock} />
            </td>
            <td>3h 35min</td>
          </tr>
          <tr>
            <td>Task</td>
            <td className="actions">
              <FontAwesomeIcon icon={faSquareCheck} />
              <FontAwesomeIcon icon={faPencil} />
              <FontAwesomeIcon icon={faTrash} />
              <FontAwesomeIcon icon={faClock} />
            </td>
            <td>3h 35min</td>
          </tr>
          <tr>
            <td>Task</td>
            <td className="actions">
              <FontAwesomeIcon icon={faSquareCheck} />
              <FontAwesomeIcon icon={faPencil} />
              <FontAwesomeIcon icon={faTrash} />
              <FontAwesomeIcon icon={faClock} />
            </td>
            <td>3h 35min</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
