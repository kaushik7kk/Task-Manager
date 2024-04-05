import React from "react";
import "../styles/HomeDash.css";
import HomeStack from "./HomeStack";
import { useSelector } from "react-redux";

let dummyData = {
  categories: [],
  groups: ["Group 1", "Group 2", "Group 3"],
};

export default function HomeDash() {
  const loggedIn = useSelector((state) => state.loggedIn);
  const tasks = useSelector((state) => state.tasks);

  return (
    <>
      <div className="homeDashContainer">
        <HomeStack title="Tasks" data={tasks.data} />
        <HomeStack title="Categories" data={dummyData.categories} />  
        <HomeStack
          title="Groups"
          data={!loggedIn ? loggedIn : dummyData.groups}
        />
      </div>
    </>
  );
}
