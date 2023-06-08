import React from "react";
import Activity from "./activity";

const ActivityList = () => {
  return (
      <ul className="w-full h-screen flex flex-col items-center">
        <li className="">
          <Activity />
          <Activity />
          <Activity />
          <Activity />
          <Activity />
          <Activity />
        </li>
      </ul>
  )
}

export default ActivityList;
