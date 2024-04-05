import React from "react";
import "../../styles/Dashboard.css";
import ControlPanel from "./ControlPanel";
import DashTable from "./DashTable";
import { useSelector } from "react-redux";

export default function Dashboard(props) {

  // Login state for enforcing group features.
  const loggedIn = useSelector((state) => state.loggedIn);
  // Visibility state for pulling down dashboard container.
  const formVisibility = useSelector(state => state.forms);

  return (
    <>
      <div className={`dashContainer ${formVisibility.visibility ? 'pulldown' : ''}`}>
        {props.page.type === "groups" && !loggedIn ? (
          <DashTable data={props.page.data} type={props.page.type} />
        ) : (
          <>
            <ControlPanel type={props.page.type} />
            <DashTable data={props.page.data} type={props.page.type} />
          </>
        )}
      </div>
    </>
  );
}
