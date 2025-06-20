import { useReducer, useRef, useState } from "react";
import { InputText } from "../atoms/InputText";
import { Title } from "../atoms/Title";
import "./ToDoApp.css";
import { Button } from "../atoms/Button";
import { Task } from "../molecules/Task";
import { taskReducer } from "../../reducers/taskReducer";

export const ToDoApp = () => {
  const input = useRef(null);
  const [tasks, dispatch] = useReducer(taskReducer, [
    {
      id: "s21321",
      name: "Estudiar javascript",
      completed: false,
    },
  ]);

  const handleAdd = () => {
    dispatch({
      type: "add",
      text: input.current.value,
    });
  };

  const handleCheckTask = (completed, id) => {
    dispatch({
      type: "checkTask",
      completed,
      id,
    });
  };
  
  const handleDeleteTask = (id) => {
    dispatch({
      type: "deleteTask",
      id,
    });
  };

  const handleEditTask = (id, newName) => {
    dispatch({
      type: "editTask",
      id,
      newName,
    });
  };

  return (
    <>
      <div className="toDoApp">
        <Title>ToDo List App</Title>
        <InputText ref={input} placeholder={"Task name"}></InputText>
        <Button onClick={handleAdd}>Add</Button>

        <div className="listTask">
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                name={task.name}
                completed={task.completed}
                deleteTask={handleDeleteTask}
                checkTask={handleCheckTask}
                editTask={handleEditTask}
              ></Task>
            );
          })}
        </div>
      </div>
    </>
  );
};
