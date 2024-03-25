import React from "react";
import Topbar from "../../../components/Topbar";
import Dashboard from "../../../components/dashboard/Dashboard";
import FormWindow from "../../../components/FormWindow";
import { useSelector } from "react-redux";

export default function TaskPage() {
  // Dummy data for Task Page.
  let data = {
    type: "tasks",
    payload: [
      { title: "Task 1", time: "2h 35min" },
      { title: "Task 2", time: "2h 35min" },
      { title: "Task 3", time: "2h 30min" },
    ],
  };

  // Visibility state for displaying form.
  const formVisibility = useSelector((state) => state.forms);

  return (
    <>
      {formVisibility.visibility ? (
        <>
          <FormWindow type={data.type} />
          <Topbar />
          <Dashboard data={data} />
        </>
      ) : (
        <>
          <Topbar />
          <Dashboard data={data} />
        </>
      )}
    </>
  );
}
