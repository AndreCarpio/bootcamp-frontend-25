import React from "react";
import { Button } from "../atoms/Button";
import "./Task.css";

export const Task = ({ id, name, completed }) => {
  return (
    <div className="task">
      <p className="taskName">{name}</p>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </div>
  );
};
