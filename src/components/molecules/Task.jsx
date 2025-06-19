import React from "react";
import { Button } from "../atoms/Button";
import "./Task.css";

export const Task = ({
  id,
  name,
  completed = false,
  deleteTask = () => {},
  checkTask = () => {},
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
      <p className="taskName">{name}</p>
      <Button>Edit</Button>
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
