import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Title } from "./components/atoms/Title";
import { Button } from "./components/atoms/Button";

export function App() {
  const [timer, setTimer] = useState(0);
  const ms = useRef(0);
  const idInterval = useRef(null);

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  function start() {
    if (idInterval.current != null) {
      return;
    }
    let newIdInterval = setInterval(() => {
      ms.current = ms.current + 100;
      if (ms.current > timer + 1000) {
        setTimer(ms.current);
      }
    }, 100);
    idInterval.current = newIdInterval;
  }

  function stop() {
    if (idInterval.current != null) {
      clearInterval(idInterval.current);
      idInterval.current = null;
    }
  }

  function reset() {
    setTimer(0);
    ms.current = 0;
    stop();
  }

  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return (
      `${minutes} ${minutes === 1 ? "minute" : "minutes"}, ` +
      `${seconds} ${seconds === 1 ? "second" : "seconds"}  `
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Title>Timer</Title>
      <p>{formatTime(timer)}</p>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button onClick={start}>Start</Button>
        <Button onClick={stop}>Stop</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
}
