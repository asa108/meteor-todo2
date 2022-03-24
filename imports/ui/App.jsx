import React from "react";
import Tasks from "./Tasks.jsx";
import { useTracker } from "meteor/react-meteor-data";
import { TasksCollection } from "../api/TasksCollection.js";

// const tasks = [
//   { _id: 1, text: "1 tasks" },
//   { _id: 2, text: "2 tasks" },
//   { _id: 3, text: "3 tasks" },
// ];

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch());

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <ul>
        {tasks.map((task) => (
          <Tasks key={task._id} task={task} />
        ))}
      </ul>
    </div>
  );
};
