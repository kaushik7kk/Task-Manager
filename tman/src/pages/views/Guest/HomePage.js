import React from "react";
import Topbar from "../../../components/Topbar";
import HomeDash from "../../../components/HomeDash";

export default function HomePage() {
  return (
    <>
      <div className="homeContainer">
        <Topbar />
        <HomeDash />
      </div>
    </>
  );
}
