import React from "react";
import Topbar from "../../../components/Topbar";
import Dashboard from "../../../components/dashboard/Dashboard";

export default function GroupPage() {
  // Dummy data for Group Page.
  let data = {
    type: "groups",
    payload: [
      {
        title: "Group 1",
        numOfMembers: 6,
        createdBy: "ABC",
      },
      {
        title: "Group 2",
        numOfMembers: 2,
        createdBy: "DEF",
      },
      {
        title: "Group 3",
        numOfMembers: 5,
        createdBy: "VKKK",
      },
    ],
  };

  return (
    <>
      <Topbar />
      <Dashboard data={data} />
    </>
  );
}
