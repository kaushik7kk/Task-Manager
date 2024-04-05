import React from "react";
import Topbar from "../../../components/Topbar";
import Dashboard from "../../../components/dashboard/Dashboard";
import FormWindow from "../../../components/FormWindow";
import { useSelector } from "react-redux";

export default function TaskPage() {

  // Visibility state for displaying form.
  const formVisibility = useSelector((state) => state.forms);
  // Tasks state for type and data loading.
  const tasks = useSelector(state => state.tasks);

  return (
    <>
      {formVisibility.visibility ? (
        <>
          <FormWindow type={tasks.type} />
          <Topbar />
          <Dashboard page={tasks} />
        </>
      ) : (
        <>
          <Topbar />
          <Dashboard page={tasks} />
        </>
      )}
    </>
  );
}
