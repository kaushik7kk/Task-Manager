import React from "react";
import "../styles/Sidebar.css";
import SideItem from "./SideItem";

export default function Sidebar() {
  return (
    <>
      <div className="sideContainer">
        <div className="sideSection">
          <div className="sectionHeading">Pending Tasks</div>
          <div className="secList">
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
          </div>
        </div>
        <div className="sideSection">
          <div className="sectionHeading">My Categories</div>
          <div className="secList">
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
          </div>
        </div>
        <div className="sideSection">
          <div className="sectionHeading">My Groups</div>
          <div className="secList">
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
            <SideItem />
          </div>
        </div>
      </div>
    </>
  );
}
