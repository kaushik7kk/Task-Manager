import React from "react";
import "../../styles/Dashboard.css";
import ControlPanel from "./ControlPanel";
import DashTable from "./DashTable";
import { useSelector } from "react-redux";

export default function Dashboard(props) {
  const loggedIn = useSelector((state) => state.loggedIn);
  return (
    <>
      <div className="dashContainer">
        {props.data.type === "groups" && !loggedIn ? (
          <DashTable data={props.data} />
        ) : (
          <>
            <ControlPanel type={props.data.type} />
            <DashTable data={props.data} />
          </>
        )}
      </div>
    </>
  );
}
