import React from "react";
import Topbar from "../../../components/Topbar";
import Dashboard from "../../../components/dashboard/Dashboard";

export default function CategoryPage() {
  // Dummy data for Category Page.
  let data = {
    type: "categories",
    payload: [
      { title: "Category 1", numOfTasks: 5, schedType: "Individual" },
      { title: "Category 2", numOfTasks: 2, schedType: "Combined" },
      { title: "Category 3", numOfTasks: 0, schedType: "Combined" },
    ],
  };

  return (
    <>
      <Topbar />
      <Dashboard data={data} />
    </>
  );
}
