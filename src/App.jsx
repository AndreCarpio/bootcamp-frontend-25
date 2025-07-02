import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Title } from "./components/atoms/Title";
import { Button } from "./components/atoms/Button";

export function App() {
  const [timer, setTimer] = useState(0);
  const idInterval = useRef(null);

  useEffect(() => {}, []);

  function start() {
    if (idInterval.current != null) {
      return;
    }
    let newIdInterval = setInterval(() => {
      setTimer((prev) => {
        return prev + 100;
      });
    }, 100);
    idInterval.current = newIdInterval;
  }

  function stop() {
    if (idInterval.current != null) {
      clearInterval(idInterval.current);
      idInterval.current = null;
    }
  }

  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");
    return `${paddedMinutes}:${paddedSeconds}`;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Title>Timer</Title>
      <p>{formatTime(timer)}</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button onClick={start}>Start</Button>
        <Button onClick={stop}>Stop</Button>
        <Button>Reset</Button>
      </div>
    </div>
  );
}
