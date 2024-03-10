import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";

export default function HomePage() {
  return (
    <>
      <div className="homeContainer">
        <Topbar />
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}
