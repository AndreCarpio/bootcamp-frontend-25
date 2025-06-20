import React from "react";

export const taskReducer = (tasks, action) => {
  if (action.type == "add") {
    if (!action.text) {
      alert("Introduce a task name");
      return;
    }
    return [
      ...tasks,
      {
        id: crypto.randomUUID(),
        name: action.text,
        completed: false,
      },
    ];
  } else if (action.type == "checkTask") {
    return tasks.map((task) => {
      if (task.id == action.id) {
        task.completed = action.completed;
      }
      return task;
    });
  } else if (action.type == "deleteTask") {
    return tasks.filter((task) => task.id != action.id);
  } else if (action.type == "editTask") {
    return tasks.map((task) => {
      if (task.id == action.id) {
        task.name = action.newName;
      }
      return task;
    });
  } else {
    throw new Error("Reducer no encontrado");
  }
};
