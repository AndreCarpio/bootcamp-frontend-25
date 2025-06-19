import { useRef, useState } from "react";
import { InputText } from "../atoms/InputText";
import { Title } from "../atoms/Title";
import "./ToDoApp.css";
import { Button } from "../atoms/Button";
import { Task } from "../molecules/Task";

export const ToDoApp = () => {
  const input = useRef(null);
  const [tasks, setTasks] = useState([
    {
      id: "s21321",
      name: "Estudiar javascript",
      completed: true,
    },
  ]);
  return (
    <>
      <div className="toDoApp">
        <Title>ToDo List App</Title>
        <InputText ref={input} placeholder={"Task name"}></InputText>
        <Button
          onClick={() => {
            console.log(input.current.value);
          }}
        >
          Add
        </Button>

        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              name={task.name}
              completed={task.completed}
            ></Task>
          );
        })}
      </div>
    </>
  );
};
