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
      completed: false,
    },
  ]);

  const addTask = () => {
    if (input.current.value != "") {
      setTasks([
        ...tasks,
        {
          id: crypto.randomUUID(),
          name: input.current.value,
          completed: false,
        },
      ]);
    } else {
      alert("Introduce a task name");
    }
  };

  const checkTask = (completed, id) => {
    console.log(completed);
    setTasks((prev) => {
      return prev.map((task) => {
        if (task.id == id) {
          task.completed = completed;
        }
        return task;
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((prev) => {
      return prev.filter((task) => task.id != id);
    });
  };

  return (
    <>
      <div className="toDoApp">
        <Title>ToDo List App</Title>
        <InputText ref={input} placeholder={"Task name"}></InputText>
        <Button onClick={addTask}>Add</Button>

        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              name={task.name}
              completed={task.completed}
              deleteTask={deleteTask}
              checkTask={checkTask}
            ></Task>
          );
        })}
      </div>
    </>
  );
};
