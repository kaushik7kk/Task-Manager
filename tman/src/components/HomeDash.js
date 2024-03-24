import React from "react";
import "../styles/HomeDash.css";
import HomeStack from "./HomeStack";
import { useSelector } from "react-redux";

let dummyData = {
  tasks: [
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5",
    "Task 6",
    "Task 7",
    "Task 8",
    "Task 9",
  ],
  categories: [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6",
    "Category 7",
    "Category 8",
    "Category 9",
  ],
  groups: [
    "Group 1",
    "Group 2",
    "Group 3",
    "Group 4",
    "Group 5",
    "Group 6",
    "Group 7",
    "Group 8",
    "Group 9",
  ],
};

export default function HomeDash() {

  const loggedIn = useSelector(state => state.loggedIn);

  return (
    <>
      <div className="homeDashContainer">
        <HomeStack title="Tasks" data={dummyData.tasks}/>
        <HomeStack title="Categories" data={dummyData.categories}/>
        <HomeStack title="Groups" data={!loggedIn ? loggedIn :dummyData.groups}/>
      </div>
    </>
  );
}
