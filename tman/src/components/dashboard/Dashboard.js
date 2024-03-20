import React from "react";
import "../../styles/Dashboard.css";
import ControlPanel from "./ControlPanel";
import DashTable from "./DashTable";

export default function Dashboard(props) {
  return (
    <>
      <div className="dashContainer">
        <ControlPanel type = {props.data.type}/>
        <DashTable data = {props.data}/>
      </div>
    </>
  );
}
