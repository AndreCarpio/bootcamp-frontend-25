import React from "react";
import { Button } from "../atoms/Button";
import "./Task.css";

export const Task = ({
  id,
  name,
  completed = false,
  deleteTask = () => {},
  checkTask = () => {},
  editTask = () => {},
}) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          checkTask(e.target.checked, id);
        }}
      />
      <p className={`taskName ${completed && "taskCompleted"}`}>{name}</p>
      <Button
        onClick={() => {
          let newName = prompt("Introduce a new task name", name);
          if (newName) {
            editTask(id, newName);
          }
        }}
      >
        Edit
      </Button>
      <Button
        onClick={() => {
          deleteTask(id);
        }}
      >
        Delete
      </Button>
    </div>
  );
};
