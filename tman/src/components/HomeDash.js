import React from "react";
import "../styles/HomeDash.css";
import HomeStack from "./HomeStack";
import { useSelector } from "react-redux";

let dummyData = {
  groups: ["Group 1", "Group 2", "Group 3"],
};

export default function HomeDash() {
  const loggedIn = useSelector((state) => state.loggedIn);
  const tasks = useSelector((state) => state.tasks);
  const categories = useSelector(state => state.categories);

  return (
    <>
      <div className="homeDashContainer">
        <HomeStack title="Tasks" data={tasks.data} />
        <HomeStack title="Categories" data={categories.data} />  
        <HomeStack
          title="Groups"
          data={!loggedIn ? loggedIn : dummyData.groups}
        />
      </div>
    </>
  );
}
