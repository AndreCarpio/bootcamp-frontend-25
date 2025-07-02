import { useState } from "react";
import "./App.css";
import { Title } from "./components/atoms/Title";

export function App() {
  const [timer, setTimer] = useState(0);

  return (
    <>
      <Title>Timer</Title>
    </>
  );
}
