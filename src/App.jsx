
import { useState } from "react";

export const App = ({ rows, numSeats }) => {

  const createSeats = () => {
    const newSeats = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < numSeats; j++) {
        row.push(0);
      }
      newSeats.push(row);
    }
    console.log(newSeats);
    return newSeats;
  };

  const [seats, setSeats] = useState(createSeats());

  return (
    <>

    </>
  );
};
